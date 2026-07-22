'use client'

import { useCallback, useLayoutEffect, useRef } from 'react'
import Lenis from 'lenis'
import './ScrollStack.css'

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
)

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete = undefined,
}) => {
  const scrollerRef = useRef(null)
  const cardsRef = useRef([])
  const animationFrameRef = useRef(null)
  const lenisRef = useRef(null)
  const stackCompletedRef = useRef(false)
  const lastTransformsRef = useRef(new Map())
  const isUpdatingRef = useRef(false)

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0
    if (scrollTop > end) return 1
    return (scrollTop - start) / (end - start)
  }, [])

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight
    }
    return parseFloat(value)
  }, [])

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
      }
    }

    const scroller = scrollerRef.current
    return {
      scrollTop: scroller?.scrollTop || 0,
      containerHeight: scroller?.clientHeight || window.innerHeight,
    }
  }, [useWindowScroll])

  const getElementOffset = useCallback((element) => {
    // Use layout coordinates instead of getBoundingClientRect(). The latter
    // includes the transform we apply below and would feed the animation's
    // output back into its next measurement, causing stack jitter.
    let offset = 0
    let current = element
    while (current) {
      offset += current.offsetTop
      current = current.offsetParent
    }

    if (useWindowScroll) return offset
    return element.offsetTop
  }, [useWindowScroll])

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return
    isUpdatingRef.current = true

    const { scrollTop, containerHeight } = getScrollData()
    const stackPositionPx = parsePercentage(stackPosition, containerHeight)
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight)
    const endElement = useWindowScroll
      ? document.querySelector('.scroll-stack-end')
      : scrollerRef.current?.querySelector('.scroll-stack-end')
    const endElementTop = endElement ? getElementOffset(endElement) : 0
    const pinEnd = endElementTop - containerHeight / 2

    cardsRef.current.forEach((card, index) => {
      if (!card) return

      const cardTop = getElementOffset(card)
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * index
      const triggerEnd = cardTop - scaleEndPositionPx
      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd)
      const targetScale = baseScale + index * itemScale
      const scale = 1 - scaleProgress * (1 - targetScale)
      const rotation = rotationAmount ? index * rotationAmount * scaleProgress : 0
      const isPinned = scrollTop >= triggerStart && scrollTop <= pinEnd
      const translateY = isPinned
        ? scrollTop - cardTop + stackPositionPx + itemStackDistance * index
        : scrollTop > pinEnd
          ? pinEnd - cardTop + stackPositionPx + itemStackDistance * index
          : 0

      let blur = 0
      if (blurAmount) {
        const topCardIndex = cardsRef.current.reduce((topIndex, currentCard, currentIndex) => {
          const currentTop = getElementOffset(currentCard)
          const currentStart = currentTop - stackPositionPx - itemStackDistance * currentIndex
          return scrollTop >= currentStart ? currentIndex : topIndex
        }, 0)
        blur = index < topCardIndex ? (topCardIndex - index) * blurAmount : 0
      }

      const nextTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      }
      const previousTransform = lastTransformsRef.current.get(index)
      const changed = !previousTransform
        || Math.abs(previousTransform.translateY - nextTransform.translateY) > 0.1
        || Math.abs(previousTransform.scale - nextTransform.scale) > 0.001
        || Math.abs(previousTransform.rotation - nextTransform.rotation) > 0.1
        || Math.abs(previousTransform.blur - nextTransform.blur) > 0.1

      if (changed) {
        card.style.transform = `translate3d(0, ${nextTransform.translateY}px, 0) scale(${nextTransform.scale}) rotate(${nextTransform.rotation}deg)`
        card.style.filter = nextTransform.blur ? `blur(${nextTransform.blur}px)` : ''
        lastTransformsRef.current.set(index, nextTransform)
      }

      if (index === cardsRef.current.length - 1) {
        const isComplete = scrollTop >= triggerStart && scrollTop <= pinEnd
        if (isComplete && !stackCompletedRef.current) {
          stackCompletedRef.current = true
          onStackComplete?.()
        } else if (!isComplete) {
          stackCompletedRef.current = false
        }
      }
    })

    isUpdatingRef.current = false
  }, [baseScale, blurAmount, calculateProgress, getElementOffset, getScrollData, itemScale, itemStackDistance, onStackComplete, parsePercentage, rotationAmount, scaleEndPosition, stackPosition, useWindowScroll])

  const handleScroll = useCallback(() => updateCardTransforms(), [updateCardTransforms])

  useLayoutEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return undefined

    const cards = Array.from(scroller.querySelectorAll('.scroll-stack-card'))
    cardsRef.current = cards
    cards.forEach((card, index) => {
      if (index < cards.length - 1) card.style.marginBottom = `${itemDistance}px`
      card.style.willChange = 'transform, filter'
      card.style.transformOrigin = 'top center'
      card.style.backfaceVisibility = 'hidden'
      card.style.transform = 'translateZ(0)'
      card.style.perspective = '1000px'
    })

    const lenis = new Lenis(useWindowScroll ? {
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 1.5,
    } : {
      wrapper: scroller,
      content: scroller.querySelector('.scroll-stack-inner'),
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 1.5,
    })
    lenis.on('scroll', handleScroll)
    const raf = (time) => {
      lenis.raf(time)
      animationFrameRef.current = requestAnimationFrame(raf)
    }
    animationFrameRef.current = requestAnimationFrame(raf)
    lenisRef.current = lenis
    updateCardTransforms()

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      lenis.destroy()
      lenisRef.current = null
      cardsRef.current = []
      lastTransformsRef.current.clear()
      stackCompletedRef.current = false
    }
  }, [handleScroll, itemDistance, updateCardTransforms, useWindowScroll])

  return (
    <div className={`scroll-stack-scroller ${useWindowScroll ? 'scroll-stack-window' : ''} ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  )
}

export default ScrollStack

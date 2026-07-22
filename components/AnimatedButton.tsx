'use client'

import React, { useState } from "react"
import { motion } from "framer-motion"

interface AnimatedButtonProps {
  text: string
  icon?: React.ReactNode
  onClick?: (e: React.MouseEvent) => void
  href?: string
  target?: string
  className?: string
  delayMs?: number
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text,
  icon,
  onClick,
  href,
  target,
  className = "",
  delayMs = 600,
}) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    if (clicked) return
    e.preventDefault()
    setClicked(true)

    if (onClick) {
      onClick(e)
    }

    setTimeout(() => {
      if (href) {
        if (target === "_blank") {
          window.open(href, "_blank", "noopener,noreferrer")
        } else {
          window.location.href = href
        }
      }
      setClicked(false)
    }, delayMs)
  }

  // Default premium sliding check icon if no icon is passed
  const defaultIcon = icon || (
    <svg
      className="w-6 h-6 text-black"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  )

  return (
    <motion.button
      onClick={handleClick}
      className={`relative overflow-hidden flex items-center justify-center cursor-pointer ${className}`}
      whileTap={{ opacity: 0.82 }}
    >
      {/* Keep the label in normal flow so the button never changes size. */}
      <motion.span
        className="flex items-center justify-center gap-2 w-full h-full transition-opacity duration-200"
        animate={{ opacity: clicked ? 0 : 1 }}
      >
        {text}
      </motion.span>
      <motion.span
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{ opacity: clicked ? 1 : 0, scale: clicked ? 1 : 0.8 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {defaultIcon}
      </motion.span>
    </motion.button>
  )
}

export default AnimatedButton

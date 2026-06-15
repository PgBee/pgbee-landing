'use client'

import React, { useState, useEffect } from 'react'

const BeeSupport = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const message = encodeURIComponent(
    `Name: \nDepartment;\nPhone:\nHostel Name:`
  )
  const whatsappUrl = `https://wa.me/916235401737?text=${message}`

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault()
      
      if (!isExpanded) {
        setIsExpanded(true)
      } else {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
        setIsExpanded(false)
      }
    }
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMobile && isExpanded && !(e.target as HTMLElement).closest('.fixed-component')) {
        setIsExpanded(false)
      }
    }

    if (isExpanded) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isExpanded, isMobile])

  return (
    <>
      {!isMobile ? (
        <a 
          href={whatsappUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 group"
        >
          <div className="relative">
            <div className="flex items-center gap-3 px-6 py-5 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:shadow-green-500/50 hover:scale-105">
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-6 h-6 shrink-0">
              
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
              </svg>
              <span className="font-semibold text-sm hidden group-hover:inline-block whitespace-nowrap">BeeSupport</span>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-green-400 rounded-full animate-ping opacity-75"></div>
          </div>
        </a>
      ) : (
        <button 
          type="button"
          onClick={handleClick}
          className="border-none bg-none outline-none font-inherit cursor-pointer p-0 m-0 focus:outline-2 focus:outline-offset-2 focus:outline-green-500"
          aria-label={isExpanded ? 'Click to contact WhatsApp support or click outside to close' : 'Click to expand BeeSupport options'}
        >
          <div className={`fixed-component ${isExpanded ? 'mobile-expanded' : ''}`}>
            <div className="flex items-center justify-center gap-0 px-4 py-4 relative z-20 transition-all duration-300">
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="whatsapp-icon transition-transform duration-300 shrink-0"
                width="20" 
                height="20"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
              </svg>
              <span className="font-semibold text-sm max-w-0 overflow-hidden transition-all duration-300 opacity-0">BeeSupport</span>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-4 border-green-500 border-opacity-60 rounded-full animate-pulse-ring"></div>
          </div>
        </button>
      )}
    </>
  )
}

export default BeeSupport

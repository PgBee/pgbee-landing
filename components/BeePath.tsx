import React from 'react'

const BeePath = () => (
  <div className="pointer-events-none relative h-28 w-full overflow-hidden sm:h-32" aria-hidden="true">
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 96" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        id="bee-flight-path"
        className="bee-trail"
        d="M-30 70C180 8 325 92 520 42C720-10 826 88 1008 48C1170 12 1290 58 1470 24"
        stroke="#D6C119"
        strokeWidth="1.5"
        strokeDasharray="7 10"
      />
      <g className="bee-flight-marker">
        <animateMotion dur="9s" repeatCount="indefinite" rotate="auto" path="M-30 70C180 8 325 92 520 42C720-10 826 88 1008 48C1170 12 1290 58 1470 24" />
        <ellipse cx="0" cy="0" rx="8" ry="5.5" fill="#FFE536" stroke="#111827" strokeWidth="1.2" />
        <path d="M-3 -5V5M2 -5V5" stroke="#111827" strokeWidth="1.5" />
        <circle cx="6" cy="-1" r="1" fill="#111827" />
        <ellipse cx="-3" cy="-6" rx="4" ry="2.5" fill="#fff" fillOpacity="0.8" stroke="#111827" strokeOpacity="0.35" />
        <ellipse cx="3" cy="-6" rx="4" ry="2.5" fill="#fff" fillOpacity="0.8" stroke="#111827" strokeOpacity="0.35" />
      </g>
    </svg>

    <div className="checkpoint checkpoint-discover absolute left-[18%] top-[45%] flex -translate-x-1/2 flex-col items-center gap-2">
      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-900/20 bg-white text-[10px] font-bold text-gray-900">01</span>
      <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-gray-900/55 sm:text-[10px]">Discover</span>
    </div>

    <div className="checkpoint checkpoint-compare absolute left-1/2 top-[33%] flex -translate-x-1/2 flex-col items-center gap-2">
      <div className="flex h-10 w-10 rotate-[-8deg] items-center justify-center rounded-full border border-gray-900/15 bg-yellow-400 text-gray-900 shadow-sm">
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3a4 4 0 0 0-3.82 2.8A4.5 4.5 0 0 0 4 10.25c0 1.78 1.04 3.32 2.54 4.05A4.5 4.5 0 0 0 11 19h2a4.5 4.5 0 0 0 4.46-4.7A4.5 4.5 0 0 0 20 10.25a4.5 4.5 0 0 0-4.18-4.45A4 4 0 0 0 12 3Zm-2 5h4v2h-4V8Zm0 4h4v2h-4v-2Z" />
        </svg>
      </div>
      <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-gray-900/55 sm:text-[10px]">Compare</span>
    </div>

    <div className="checkpoint checkpoint-move-in absolute left-[82%] top-[28%] flex -translate-x-1/2 flex-col items-center gap-2">
      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-900/20 bg-white text-[10px] font-bold text-gray-900">03</span>
      <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-gray-900/55 sm:text-[10px]">Move in</span>
    </div>
  </div>
)

export default BeePath

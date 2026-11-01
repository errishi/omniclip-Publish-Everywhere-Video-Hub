"use client"

import React from "react"

export function HeroConvergence() {
  // SVG coordinates based on a 1440x540 viewBox.
  // Center capsule sits around X: 720, Y: 290, width: 560 (left edge ~440, right edge ~1000)
  
  const leftPaths = [
    { id: "lp1", d: "M 0 110 C 220 120, 340 250, 440 290", dur: "3.2s", begin: "0s", dotSize: 3.5 },
    { id: "lp2", d: "M 10 180 C 200 195, 330 270, 440 290", dur: "4.1s", begin: "1.2s", dotSize: 4 },
    { id: "lp3", d: "M 0 260 C 180 265, 310 285, 440 290", dur: "2.8s", begin: "0.5s", dotSize: 3 },
    { id: "lp4", d: "M 0 340 C 190 330, 320 300, 440 290", dur: "3.6s", begin: "1.8s", dotSize: 4 },
    { id: "lp5", d: "M 20 420 C 190 410, 310 330, 440 290", dur: "4.5s", begin: "0.9s", dotSize: 3 },
    { id: "lp6", d: "M 10 490 C 220 480, 330 350, 440 290", dur: "3.9s", begin: "2.2s", dotSize: 3.5 },
  ]

  const rightPaths = [
    { id: "rp1", d: "M 1440 110 C 1220 120, 1100 250, 1000 290", dur: "3.5s", begin: "0.4s", dotSize: 3.5 },
    { id: "rp2", d: "M 1430 180 C 1240 195, 1110 270, 1000 290", dur: "4.2s", begin: "1.5s", dotSize: 4 },
    { id: "rp3", d: "M 1440 260 C 1260 265, 1130 285, 1000 290", dur: "2.9s", begin: "0.8s", dotSize: 3 },
    { id: "rp4", d: "M 1440 340 C 1250 330, 1120 300, 1000 290", dur: "3.8s", begin: "2.0s", dotSize: 4 },
    { id: "rp5", d: "M 1420 420 C 1250 410, 1130 330, 1000 290", dur: "4.4s", begin: "1.1s", dotSize: 3 },
    { id: "rp6", d: "M 1430 490 C 1220 480, 1110 350, 1000 290", dur: "3.7s", begin: "2.5s", dotSize: 3.5 },
  ]

  const staticDots = [
    { cx: 160, cy: 135, r: 2 },
    { cx: 280, cy: 215, r: 2.5 },
    { cx: 140, cy: 205, r: 2 },
    { cx: 320, cy: 278, r: 2 },
    { cx: 210, cy: 350, r: 2.5 },
    { cx: 350, cy: 312, r: 2 },
    { cx: 170, cy: 435, r: 2 },
    { cx: 300, cy: 360, r: 2.5 },
    { cx: 1280, cy: 135, r: 2 },
    { cx: 1160, cy: 215, r: 2.5 },
    { cx: 1300, cy: 205, r: 2 },
    { cx: 1120, cy: 278, r: 2 },
    { cx: 1230, cy: 350, r: 2.5 },
    { cx: 1090, cy: 312, r: 2 },
    { cx: 1270, cy: 435, r: 2 },
    { cx: 1140, cy: 360, r: 2.5 },
  ]

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* Crisp solid backdrop glow behind capsule (NO gradients) */}
      <div 
        className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 w-[620px] h-[280px] rounded-full bg-[#d8572a]/20 dark:bg-[#d8572a]/25 blur-[90px] pointer-events-none"
      />

      <svg
        className="w-full h-full min-h-[500px]"
        viewBox="0 0 1440 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Static faint fiber curves - Solid stroke color with solid opacity */}
        {leftPaths.map((p) => (
          <path
            key={`base-${p.id}`}
            id={p.id}
            d={p.d}
            stroke="#d8572a"
            strokeOpacity="0.22"
            strokeWidth="1.2"
            fill="none"
          />
        ))}

        {/* Static faint fiber curves - Right */}
        {rightPaths.map((p) => (
          <path
            key={`base-${p.id}`}
            id={p.id}
            d={p.d}
            stroke="#d8572a"
            strokeOpacity="0.22"
            strokeWidth="1.2"
            fill="none"
          />
        ))}

        {/* Static nodes along curves */}
        {staticDots.map((dot, idx) => (
          <circle
            key={`dot-${idx}`}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill="#d8572a"
            opacity="0.35"
          />
        ))}

        {/* Animated Dash Pulses - Left (Solid #d8572a strokes, NO gradient) */}
        {leftPaths.map((p) => (
          <path
            key={`pulse-${p.id}`}
            d={p.d}
            stroke="#d8572a"
            strokeWidth="1.8"
            strokeDasharray="45 155"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="200"
              to="0"
              dur={p.dur}
              begin={p.begin}
              repeatCount="indefinite"
            />
          </path>
        ))}

        {/* Animated Dash Pulses - Right */}
        {rightPaths.map((p) => (
          <path
            key={`pulse-${p.id}`}
            d={p.d}
            stroke="#d8572a"
            strokeWidth="1.8"
            strokeDasharray="45 155"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="-200"
              to="0"
              dur={p.dur}
              begin={p.begin}
              repeatCount="indefinite"
            />
          </path>
        ))}

        {/* Animated Traveling Comet Particle along left curves - Solid fill */}
        {leftPaths.slice(0, 4).map((p) => (
          <g key={`particle-group-${p.id}`}>
            <circle r={p.dotSize} fill="#d8572a">
              <animateMotion
                dur={p.dur}
                begin={p.begin}
                repeatCount="indefinite"
                path={p.d}
                keyPoints="0;0.15;0.85;1"
                keyTimes="0;0.15;0.85;1"
              />
              <animate
                attributeName="opacity"
                values="0; 1; 1; 0.2"
                keyTimes="0; 0.2; 0.85; 1"
                dur={p.dur}
                begin={p.begin}
                repeatCount="indefinite"
              />
            </circle>
            <circle r={p.dotSize * 0.5} fill="#ffffff">
              <animateMotion
                dur={p.dur}
                begin={p.begin}
                repeatCount="indefinite"
                path={p.d}
                keyPoints="0;0.15;0.85;1"
                keyTimes="0;0.15;0.85;1"
              />
            </circle>
          </g>
        ))}

        {/* Animated Traveling Comet Particle along right curves - Solid fill */}
        {rightPaths.slice(0, 4).map((p) => (
          <g key={`particle-group-${p.id}`}>
            <circle r={p.dotSize} fill="#d8572a">
              <animateMotion
                dur={p.dur}
                begin={p.begin}
                repeatCount="indefinite"
                path={p.d}
                keyPoints="0;0.15;0.85;1"
                keyTimes="0;0.15;0.85;1"
              />
              <animate
                attributeName="opacity"
                values="0; 1; 1; 0.2"
                keyTimes="0; 0.2; 0.85; 1"
                dur={p.dur}
                begin={p.begin}
                repeatCount="indefinite"
              />
            </circle>
            <circle r={p.dotSize * 0.5} fill="#ffffff">
              <animateMotion
                dur={p.dur}
                begin={p.begin}
                repeatCount="indefinite"
                path={p.d}
                keyPoints="0;0.15;0.85;1"
                keyTimes="0;0.15;0.85;1"
              />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  )
}

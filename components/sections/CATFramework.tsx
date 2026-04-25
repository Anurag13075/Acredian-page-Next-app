"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Lightbulb, Settings, Cog } from 'lucide-react'

const ITEMS = [
  {
    icon: Lightbulb,
    title: "Concept",
    desc: "Foundational knowledge for deep subject understanding.",
  },
  {
    icon: Settings,
    title: "Application",
    desc: "Practical implementation through real-world scenarios.",
  },
  {
    icon: Cog,
    title: "Tools",
    desc: "Resources and techniques for effective skill mastery.",
  },
]

export default function CATFramework() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="cat" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[2.5rem] font-bold text-[#1a202c] mb-3"
        >
          The <span className="text-[#3182ce]">CAT Framework</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-[1.3rem] text-[#4a5568] font-medium mb-24"
        >
          Our Proven Approach to <span className="text-[#3182ce]">Learning Excellence</span>
        </motion.p>

        <div ref={ref} className="relative max-w-5xl mx-auto h-[350px] flex items-center justify-between">

          {/* Wavy SVG path — draws itself in */}
          <div className="absolute inset-0 top-1/2 -translate-y-1/2 z-0 w-full h-[300px]">
            <svg width="100%" height="100%" viewBox="0 0 1000 300" fill="none" preserveAspectRatio="none">
              <motion.path
                d="M 150 150 C 150 -50, 400 -50, 500 150 C 600 350, 850 350, 850 150 C 850 -50, 1100 -50, 1150 150"
                stroke="#3182ce"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Dot 1 */}
              <motion.circle
                cx="410" cy="225" r="8" fill="#3182ce"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ type: "spring", stiffness: 300, damping: 18, delay: 1.1 }}
              />

              {/* Dot 2 */}
              <motion.circle
                cx="680" cy="225" r="8" fill="#3182ce"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ type: "spring", stiffness: 300, damping: 18, delay: 1.3 }}
              />
            </svg>
          </div>

          {/* Cards */}
          {ITEMS.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.3 + idx * 0.18 }}
                whileHover={{ scale: 1.06, boxShadow: "0 0 40px rgba(49,130,206,0.25)" }}
                className="relative z-10 flex flex-col items-center bg-white rounded-full w-[300px] h-[300px] border-[6px] border-[#3182ce] justify-center px-8 shadow-[inset_0_0_20px_rgba(49,130,206,0.1)] cursor-default"
              >
                {/* Pulse ring on enter */}
                <motion.div
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={inView ? { scale: 1.25, opacity: 0 } : {}}
                  transition={{ duration: 1, delay: 0.6 + idx * 0.18, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full border-[4px] border-[#3182ce]"
                />

                {/* Icon spin-in */}
                <motion.div
                  initial={{ rotate: -30, opacity: 0 }}
                  animate={inView ? { rotate: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + idx * 0.18, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ rotate: 15 }}
                >
                  <Icon className="w-14 h-14 text-[#3182ce] mb-4" strokeWidth={1.5} />
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.65 + idx * 0.18 }}
                  className="text-3xl font-bold text-[#1a202c] mb-3"
                >
                  {item.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.75 + idx * 0.18 }}
                  className="text-[#4a5568] text-[15px] text-center leading-relaxed"
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

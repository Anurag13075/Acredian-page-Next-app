"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, animate } from "framer-motion"

const stats = [
  { value: 10, suffix: "K+", label: "Professionals Trained For Exceptional Career Success" },
  { value: 200, suffix: "+", label: "Sessions Delivered With Unmatched Learning Excellence" },
  { value: 5, suffix: "K+", label: "Active Learners Engaged In Dynamic Courses" },
]

function CountUp({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1], // expo out
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return controls.stop
  }, [inView, target])

  return <span>{display}{suffix}</span>
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="stats" className="py-24 relative overflow-hidden">
      {/* Ambient background orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.12 } : {}}
        transition={{ duration: 1.4 }}
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#3182ce] blur-[90px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.1 } : {}}
        transition={{ duration: 1.4, delay: 0.2 }}
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#63b3ed] blur-[80px] pointer-events-none"
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[2.5rem] font-bold text-[#1a202c] mb-3"
        >
          Our <span className="text-[#3182ce]">Track Record</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-[1.3rem] text-[#4a5568] mb-20 font-medium"
        >
          The Numbers Behind <span className="text-[#3182ce]">Our Success</span>
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col items-center px-8 pb-8 ${
                i < stats.length - 1 ? "md:border-r border-gray-200" : ""
              }`}
            >
              {/* Badge with pulse ring */}
              <div className="relative mb-8">
                {/* Pulse ring — fires once on enter */}
                <motion.div
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={inView ? { scale: 1.65, opacity: 0 } : {}}
                  transition={{ duration: 0.9, delay: 0.8 + i * 0.15, ease: "easeOut" }}
                  className="absolute inset-[-10px] rounded-full border-2 border-[#3182ce]"
                />

                {/* Badge */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group bg-[#ebf8ff] text-[#3182ce] text-[2rem] font-bold py-3 px-12 rounded-full 
                             cursor-default select-none min-w-[180px] text-center
                             transition-colors duration-300
                             hover:bg-[#3182ce] hover:text-white hover:shadow-[0_12px_32px_rgba(49,130,206,0.3)]"
                >
                  <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
                </motion.div>
              </div>

              {/* Shimmer underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: 60 } : {}}
                transition={{ duration: 0.8, delay: 0.9 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#3182ce] to-transparent mb-5"
              />

              <p className="text-[#2d3748] font-medium text-lg leading-snug max-w-[250px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

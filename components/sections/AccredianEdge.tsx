"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Lightbulb, UserCheck, Settings, Cpu, Expand, Target, Package } from 'lucide-react'

const EDGE_ITEMS = [
  { title: 'Tailored Solutions', desc: "Programs customized to your organization's goals and challenges.", icon: Lightbulb, position: 'top' },
  { title: 'Expert Guidance', desc: 'Learn from industry leaders with real-world success.', icon: UserCheck, position: 'bottom' },
  { title: 'Innovative Framework', desc: 'Proprietary methods for impactful, application-driven results.', icon: Settings, position: 'top' },
  { title: 'Advanced Technology', desc: 'State-of-the-art LMS for seamless learning experiences.', icon: Cpu, position: 'bottom' },
  { title: 'Diverse Offerings', desc: 'Courses across industries, skill levels, and emerging fields.', icon: Expand, position: 'top' },
  { title: 'Proven Impact', desc: 'Trusted by leading organizations for measurable ROI.', icon: Target, position: 'bottom' },
  { title: 'Flexible Delivery', desc: 'Online and offline options tailored to your needs.', icon: Package, position: 'top' },
]

export default function AccredianEdge() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="edge" className="py-24 overflow-hidden">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[2.5rem] font-bold text-[#1a202c] mb-3"
        >
          The <span className="text-[#3182ce]">Accredian Edge</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-[1.3rem] text-[#4a5568] font-medium"
        >
          Key Aspects of <span className="text-[#3182ce]">Our Strategic Training</span>
        </motion.p>
      </div>

      <div ref={ref} className="max-w-[1400px] mx-auto px-4 relative overflow-x-auto pb-10">
        <div className="min-w-[1000px]">

          {/* Animated horizontal dotted line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="absolute top-1/2 left-0 right-0 h-0 border-t-2 border-dotted border-gray-300 -translate-y-1/2 z-0 mx-10"
          />

          <div className="relative h-[450px] w-full flex justify-between">
            {EDGE_ITEMS.map((item, idx) => {
              const isTop = item.position === 'top'
              const Icon = item.icon

              return (
                <div key={idx} className="relative flex-1 h-full flex justify-center">

                  {/* Animated vertical connecting line */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={inView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    style={{ originY: isTop ? 0 : 1 }}
                    className={`absolute w-[2px] bg-[#3182ce] h-[100px] ${isTop ? 'top-[35%]' : 'bottom-[35%]'} z-0`}
                  />

                  {/* Text Block */}
                  <motion.div
                    initial={{ opacity: 0, y: isTop ? -20 : 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`absolute w-[180px] ${isTop ? 'top-[5%]' : 'bottom-[5%]'} left-1/2 -translate-x-[20%]`}
                  >
                    <div className="border-l-[3px] border-[#3182ce] pl-4">
                      <h4 className="font-bold text-[16px] text-gray-900 leading-tight mb-2">{item.title}</h4>
                      <p className="text-[14px] text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>

                  {/* Circle with Icon */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.3 + idx * 0.1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.15)]"
                  >
                    {/* Pulse ring — fires once on enter */}
                    <motion.div
                      initial={{ scale: 1, opacity: 0.7 }}
                      animate={inView ? { scale: 1.8, opacity: 0 } : {}}
                      transition={{ duration: 0.9, delay: 0.7 + idx * 0.1, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full border-2 border-[#3182ce]"
                    />

                    <motion.div
                      whileHover={{ scale: 1.12, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      className="w-20 h-20 bg-[#3182ce] rounded-full flex items-center justify-center cursor-pointer"
                    >
                      <Icon className="text-white w-10 h-10" strokeWidth={2} />
                    </motion.div>

                    {/* Arrow between circles */}
                    {idx < EDGE_ITEMS.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: -6 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                        className="absolute -right-8 top-1/2 -translate-y-1/2 text-gray-300 bg-white z-20 px-1"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                          <path d="m9 18 6-6-6-6"/>
                        </svg>
                      </motion.div>
                    )}
                  </motion.div>

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

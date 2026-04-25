"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"

const STEPS = [
  {
    num: '01',
    title: 'Needs Assessment',
    description: "We analyze your team's current capabilities and identify critical skill gaps to achieve business goals.",
  },
  {
    num: '02',
    title: 'Design & Customize',
    description: 'Curating the perfect learning path using modules from top universities, tailored to your context.',
  },
  {
    num: '03',
    title: 'Deploy & Learn',
    description: 'Seamless onboarding onto our platform with dedicated success managers ensuring high engagement.',
  },
  {
    num: '04',
    title: 'Track & Scale',
    description: 'Monitor ROI through our analytics dashboard and scale successful programs across departments.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3"
          >
            Process
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4"
          >
            How we partner with you
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-gray-600"
          >
            A proven methodology to ensure your learning initiatives drive tangible business outcomes.
          </motion.p>
        </div>

        <div ref={ref} className="relative">

          {/* Connecting line — fills left to right */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-100"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Number circle */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.35 + idx * 0.15 }}
                  whileHover={{ scale: 1.1, borderColor: "#3182ce" }}
                  className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center text-3xl font-display font-bold text-blue-600 shadow-sm mx-auto lg:mx-0 mb-6 relative cursor-default transition-colors duration-300"
                >
                  {/* Pulse ring on enter */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={inView ? { scale: 1.5, opacity: 0 } : {}}
                    transition={{ duration: 0.9, delay: 0.7 + idx * 0.15, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full border-2 border-blue-300"
                  />
                  {step.num}
                </motion.div>

                {/* Text content */}
                <div className="text-center lg:text-left">
                  <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + idx * 0.15 }}
                    className="text-xl font-bold text-gray-900 mb-3"
                  >
                    {step.title}
                  </motion.h4>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + idx * 0.15 }}
                    className="text-gray-600 leading-relaxed text-sm"
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Testimonials.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const CARDS = [
  {
    logo: <span className="text-4xl font-bold text-[#d0271d] font-serif tracking-tighter">ADP</span>,
    quote:
      '"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."',
  },
  {
    logo: (
      <div className="w-12 h-12 rounded-full border-[3px] border-[#00a3e0] flex items-center justify-center text-[#00a3e0] font-bold leading-none text-center text-[10px]">
        BAY<br />ER
      </div>
    ),
    quote:
      '"Accredian\'s commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[2.5rem] font-bold text-[#1a202c] mb-3"
        >
          Testimonials from <span className="text-[#3182ce]">Our Partners</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="text-[1.2rem] text-[#4a5568] mb-16 font-medium"
        >
          What <span className="text-[#3182ce]">Our Clients</span> Are Saying
        </motion.p>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mb-10">
          {CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(49,130,206,0.12)' }}
              className="flex-1 bg-white border border-gray-100 rounded-3xl p-10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] text-left cursor-default"
            >
              {/* Animated quote mark */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 0.08, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.15 }}
                className="absolute top-6 right-8 text-[120px] leading-none font-serif text-[#3182ce] select-none pointer-events-none"
              >
                "
              </motion.div>

              <div className="mb-6 h-12 flex items-center">
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + idx * 0.15 }}
                >
                  {card.logo}
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + idx * 0.15 }}
                className="text-[#4a5568] leading-relaxed font-medium text-[15px]"
              >
                {card.quote}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Carousel dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center gap-3"
        >
          {[true, false].map((active, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.4 }}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${active ? 'bg-[#3182ce]' : 'bg-gray-200'}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

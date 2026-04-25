'use client'

import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import { useModal } from '@/components/providers/ModalProvider'
import { motion } from 'motion/react'

const CHECKS = ['Tailored Solutions', 'Industry Insights', 'Expert Guidance']

export default function Hero() {
  const { openModal } = useModal()

  return (
    <section id="home" className="pt-28 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#f4faff] rounded-[2.5rem] relative flex flex-col md:flex-row items-stretch min-h-[520px] overflow-hidden shadow-sm">

        {/* Decorative background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#3182ce] opacity-[0.06] blur-[80px]" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#63b3ed] opacity-[0.08] blur-[60px]" />
          {/* Subtle grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3182ce" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Left content */}
        <div className="relative z-10 flex flex-col justify-center md:w-[55%] px-8 sm:px-12 py-14 md:py-16">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-1.5 mb-8 w-fit shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#38a169] animate-pulse" />
            <span className="text-sm font-semibold text-[#2d3748] tracking-wide">Trusted by 200+ Enterprises</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.8rem] sm:text-[3.2rem] lg:text-[3.6rem] font-bold text-[#1a202c] leading-[1.08] mb-6"
          >
            Next-Gen{' '}
            <span className="relative inline-block">
              <span className="text-[#3182ce]">Expertise</span>
              {/* Underline accent */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#3182ce] rounded-full opacity-30"
              />
            </span>
            <br />
            For Your{' '}
            <span className="relative inline-block">
              <span className="text-[#3182ce]">Enterprise</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#3182ce] rounded-full opacity-30"
              />
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="text-[1.2rem] sm:text-[1.3rem] text-[#4a5568] mb-8 font-medium leading-relaxed"
          >
            Cultivate high-performance teams<br className="hidden sm:block" /> through expert learning.
          </motion.p>

          {/* Checklist */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {CHECKS.map((label, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="text-[#38a169] w-5 h-5 shrink-0" strokeWidth={2.5} />
                <span className="text-[#2d3748] font-medium text-base sm:text-lg">{label}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.04, backgroundColor: '#2b6cb0' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              className="bg-[#3182ce] text-white px-9 py-3.5 rounded-xl font-semibold text-lg shadow-[0_4px_20px_rgba(49,130,206,0.35)] transition-colors"
            >
              Enquire Now
            </motion.button>
          </motion.div>
        </div>

        {/* Right image — fully responsive */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="
            relative z-10
            w-full md:w-[45%]
            h-64 sm:h-80 md:h-auto
            mt-0 md:mt-0
            flex-shrink-0
          "
        >
          {/* Blue corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#3182ce] opacity-10 rounded-bl-[2.5rem] rounded-tr-[2.5rem]" />

          <Image
            src="/assets/hero-professionals.png"
            alt="Enterprise professionals"
            fill
            className="object-cover object-center md:object-top rounded-b-[2.5rem] md:rounded-bl-none md:rounded-tr-[2.5rem] md:rounded-br-[2.5rem]"
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
          />

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-6 left-4 sm:left-6 bg-white rounded-2xl px-5 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 rounded-full bg-[#ebf8ff] flex items-center justify-center shrink-0">
              <span className="text-[#3182ce] text-lg font-bold">🎓</span>
            </div>
            <div>
              <p className="text-[#1a202c] font-bold text-sm leading-tight">10,000+ Trained</p>
              <p className="text-[#718096] text-xs font-medium">Professionals worldwide</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

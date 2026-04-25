// Footer.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const FOOTER_LINKS = {
  Solutions: ['Enterprise Learning', 'Custom Programs', 'Analytics Dashboard', 'HR Integrations', 'Certificates'],
  Programs: ['Data Science & AI', 'Product Management', 'Leadership', 'Business Analytics', 'Cloud Computing'],
  Company: ['About Us', 'Careers', 'Blog', 'Press', 'Contact'],
  Resources: ['Case Studies', 'Whitepapers', 'Webinars', 'L&D Playbook', 'API Docs'],
}

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-1"
          >
            <div className="font-display font-bold text-xl text-white mb-3">
              Accredian
              <span className="text-blue-400 text-sm font-medium ml-1">Enterprise</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              India's most trusted enterprise learning platform. Upskill your workforce with programs from IITs, IIMs, and global universities.
            </p>
            <div className="flex gap-3 mt-5">
              {['in', 'tw', 'yt'].map((s, idx) => (
                <motion.a
                  key={s}
                  href="#"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.3 + idx * 0.08 }}
                  whileHover={{ scale: 1.2, backgroundColor: '#2563eb' }}
                  whileTap={{ scale: 0.92 }}
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition-colors"
                >
                  {s}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links], colIdx) => (
            <motion.div
              key={heading}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + colIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h4 className="text-sm font-semibold text-white mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link, linkIdx) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.25 + colIdx * 0.08 + linkIdx * 0.04 }}
                  >
                    <motion.a
                      href="#"
                      whileHover={{ x: 4, color: '#60a5fa' }}
                      transition={{ duration: 0.2 }}
                      className="text-sm text-gray-500 hover:text-blue-400 transition-colors inline-block"
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-xs text-gray-600">
            © 2026 Accredian. All rights reserved. Accredian is a registered trademark.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ color: '#9ca3af' }}
                className="text-xs text-gray-600 transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  )
}

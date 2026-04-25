'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Stats', href: '#stats' },
  { name: 'Clients', href: '#clients' },
  { name: 'Accredian Edge', href: '#edge' },
  { name: 'CAT', href: '#cat' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Testimonials', href: '#testimonials' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Navbar border/shadow
      setIsScrolled(window.scrollY > 20)

      // Active section mapping
      const sections = NAV_LINKS.map(link => link.href.substring(1))
      let current = 'home'
      
      // We look at all sections and see which one is closest to the top
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // 150px is a good threshold below the navbar
          if (rect.top <= 150) {
            current = section
          }
        }
      }
      setActiveSection(current)
    }

    // Trigger handleScroll initially in case we're loaded scrolled down
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5 border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex flex-col justify-center">
            <span className="text-[#3182ce] font-bold text-3xl tracking-tight leading-none mb-1">accredian</span>
            <span className="text-gray-400 text-[10px] tracking-widest uppercase font-medium">credentials that matter</span>
          </div>
          
          <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[15px] font-bold transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-[#3182ce] border-b-[3px] border-[#3182ce] pb-1'
                    : 'text-[#1a202c] hover:text-[#3182ce]'
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.querySelector(link.href)
                  if (el) {
                    const offsetTop = el.getBoundingClientRect().top + window.scrollY - 100
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' })
                  }
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#1a202c] focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 text-base font-bold rounded-lg ${
                  activeSection === link.href.substring(1)
                    ? 'text-[#3182ce] bg-blue-50'
                    : 'text-[#1a202c] hover:bg-gray-50'
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.querySelector(link.href)
                  if (el) {
                    const offsetTop = el.getBoundingClientRect().top + window.scrollY - 100
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' })
                  }
                  setIsOpen(false)
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

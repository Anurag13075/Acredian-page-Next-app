'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useModal } from '@/components/providers/ModalProvider'

const TABS = ['About the Course', 'About the Delivery', 'Miscellaneous']

const FAQS: Record<string, { q: string; a: string }[]> = {
  'About the Course': [
    {
      q: 'What types of corporate training programs does Accredian offer?',
      a: 'We offer specialized programs across various domains tailored to your organizational needs.'
    },
    {
      q: 'What domain specializations are available?',
      a: 'We offer specializations in Data Science, AI, Product Management, and more.'
    }
  ],
  'About the Delivery': [
    {
      q: 'How are the sessions conducted?',
      a: 'Sessions are conducted online via live interactive classes.'
    }
  ],
  'Miscellaneous': [
    {
      q: 'Are certificates provided?',
      a: 'Yes, recognized certificates are provided upon successful completion.'
    }
  ]
}

export default function FAQ() {
  const { openModal } = useModal()
  const [activeTab, setActiveTab] = useState('About the Course')
  const [openQs, setOpenQs] = useState<number[]>([])

  const toggleQ = (idx: number) => {
    if (openQs.includes(idx)) {
      setOpenQs(openQs.filter(i => i !== idx))
    } else {
      setOpenQs([...openQs, idx])
    }
  }

  return (
    <section id="faqs" className="py-24 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 pl-4 md:pl-20">
          <h2 className="text-[2.5rem] font-bold text-[#1a202c]">
            Frequently Asked <span className="text-[#3182ce]">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16 max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="md:w-1/3 flex flex-col gap-4">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab)
                  setOpenQs([])
                }}
                className={`py-5 px-6 rounded-lg text-center font-bold text-lg transition-all ${
                  activeTab === tab
                    ? 'bg-white text-[#3182ce] shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-white'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="md:w-2/3 pt-4">
            <div className="flex flex-col gap-2">
              {FAQS[activeTab]?.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-5 mb-3">
                  <button
                    onClick={() => toggleQ(idx)}
                    className="w-full flex items-center justify-between py-2 text-left font-bold text-[1.1rem] text-[#1a202c] hover:text-[#3182ce] transition-colors"
                  >
                    <span>{faq.q}</span>
                    {openQs.includes(idx) ? (
                      <ChevronUp className="w-6 h-6 text-gray-400 shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 shrink-0 ml-4" />
                    )}
                  </button>
                  {openQs.includes(idx) && (
                    <div className="pt-3 text-gray-600 text-[15px] leading-relaxed font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <button 
            onClick={openModal}
            className="bg-[#3182ce] hover:bg-[#2b6cb0] text-white px-10 py-3 rounded-lg font-bold text-lg transition-colors shadow-md"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  )
}

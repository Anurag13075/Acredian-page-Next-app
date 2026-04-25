'use client'
import { Headset, ChevronRight } from 'lucide-react'
import { useModal } from '@/components/providers/ModalProvider'

export default function CTA() {
  const { openModal } = useModal()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1875f0] rounded-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-12 md:px-16 shadow-lg">
          
          {/* Background Concentric Circles */}
          <div className="absolute top-[50%] -translate-y-1/2 right-[5%] w-[400px] h-[400px] rounded-full border-[40px] border-[#2b83f1] opacity-60 z-0"></div>
          <div className="absolute top-[50%] -translate-y-1/2 right-[0%] w-[600px] h-[600px] rounded-full border-[40px] border-[#3e8ff2] opacity-40 z-0"></div>
          <div className="absolute top-[50%] -translate-y-1/2 -right-[5%] w-[800px] h-[800px] rounded-full border-[40px] border-[#529cf3] opacity-20 z-0"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 mb-8 md:mb-0">
            <div className="bg-white rounded-2xl w-24 h-24 flex items-center justify-center shadow-sm shrink-0">
              <Headset className="w-12 h-12 text-[#1875f0]" strokeWidth={1.5} />
            </div>
            <div className="text-white text-left">
              <h2 className="text-[2.2rem] font-bold leading-tight mb-2">
                Want to Learn More About Our Training<br className="hidden md:block" /> Solutions?
              </h2>
              <p className="text-lg text-blue-100 font-medium">
                Get Expert Guidance for Your Team's Success!
              </p>
            </div>
          </div>
          
          <div className="relative z-10 shrink-0">
            <button 
              onClick={openModal} 
              className="bg-white text-[#1875f0] hover:bg-gray-50 px-8 py-3.5 rounded-lg font-bold text-lg flex items-center gap-2 transition-colors shadow-sm"
            >
              Contact Us <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

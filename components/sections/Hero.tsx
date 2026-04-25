import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#f4faff] rounded-[2.5rem] relative flex flex-col md:flex-row items-center min-h-[500px] px-12 py-16 overflow-hidden shadow-sm">
        
        <div className="md:w-[60%] relative z-10">
          <h1 className="text-[3.5rem] font-bold text-[#1a202c] leading-[1.1] mb-6">
            Next-Gen <span className="text-[#3182ce]">Expertise</span><br/>
            For Your <span className="text-[#3182ce]">Enterprise</span>
          </h1>
          <p className="text-[1.35rem] text-[#2d3748] mb-8 font-medium">
            Cultivate high-performance<br/>
            teams through expert learning.
          </p>
          
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-[#38a169] w-6 h-6" strokeWidth={2.5} />
              <span className="text-[#2d3748] font-medium text-lg">Tailored Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-[#38a169] w-6 h-6" strokeWidth={2.5} />
              <span className="text-[#2d3748] font-medium text-lg">Industry Insights</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-[#38a169] w-6 h-6" strokeWidth={2.5} />
              <span className="text-[#2d3748] font-medium text-lg">Expert Guidance</span>
            </div>
          </div>
          
          <button className="bg-[#3182ce] hover:bg-[#2b6cb0] text-white px-8 py-3 rounded-lg font-semibold text-xl transition-colors shadow-md">
            Enquire Now
          </button>
        </div>

        <div className="md:w-[40%] relative mt-12 md:mt-0 flex justify-end items-end h-full absolute right-0 bottom-0 pointer-events-none">
          <div className="w-full h-[450px] relative rounded-tl-3xl rounded-br-[2.5rem] overflow-hidden">
            <Image 
              src="/assets/hero-professionals.png" 
              alt="Two Professionals"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

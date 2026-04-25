import { Lightbulb, Settings, Cog } from 'lucide-react'

export default function CATFramework() {
  return (
    <section id="cat" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[2.5rem] font-bold text-[#1a202c] mb-3">
          The <span className="text-[#3182ce]">CAT Framework</span>
        </h2>
        <p className="text-[1.3rem] text-[#4a5568] font-medium mb-24">
          Our Proven Approach to <span className="text-[#3182ce]">Learning Excellence</span>
        </p>

        <div className="relative max-w-5xl mx-auto h-[350px] flex items-center justify-between">
          
          {/* Continuous Wavy Line Path connecting the circles */}
          <div className="absolute inset-0 top-1/2 -translate-y-1/2 z-0 w-full h-[300px]">
            <svg width="100%" height="100%" viewBox="0 0 1000 300" fill="none" preserveAspectRatio="none">
              <path 
                d="M 150 150 C 150 -50, 400 -50, 500 150 C 600 350, 850 350, 850 150 C 850 -50, 1100 -50, 1150 150" 
                stroke="#3182ce" 
                strokeWidth="6" 
                fill="none" 
              />
              <circle cx="410" cy="225" r="8" fill="#3182ce" />
              <circle cx="680" cy="225" r="8" fill="#3182ce" />
            </svg>
          </div>
          
          {/* Item 1 */}
          <div className="relative z-10 flex flex-col items-center bg-white rounded-full w-[300px] h-[300px] border-[6px] border-[#3182ce] justify-center px-8 shadow-[inset_0_0_20px_rgba(49,130,206,0.1)]">
            <Lightbulb className="w-14 h-14 text-[#3182ce] mb-4" strokeWidth={1.5} />
            <h3 className="text-3xl font-bold text-[#1a202c] mb-3">Concept</h3>
            <p className="text-[#4a5568] text-[15px] text-center leading-relaxed">
              Foundational knowledge for deep subject understanding.
            </p>
          </div>

          {/* Item 2 */}
          <div className="relative z-10 flex flex-col items-center bg-white rounded-full w-[300px] h-[300px] border-[6px] border-[#3182ce] justify-center px-8 shadow-[inset_0_0_20px_rgba(49,130,206,0.1)]">
            <Settings className="w-14 h-14 text-[#3182ce] mb-4" strokeWidth={1.5} />
            <h3 className="text-3xl font-bold text-[#1a202c] mb-3">Application</h3>
            <p className="text-[#4a5568] text-[15px] text-center leading-relaxed">
              Practical implementation through real-world scenarios.
            </p>
          </div>

          {/* Item 3 */}
          <div className="relative z-10 flex flex-col items-center bg-white rounded-full w-[300px] h-[300px] border-[6px] border-[#3182ce] justify-center px-8 shadow-[inset_0_0_20px_rgba(49,130,206,0.1)]">
            <Cog className="w-14 h-14 text-[#3182ce] mb-4" strokeWidth={1.5} />
            <h3 className="text-3xl font-bold text-[#1a202c] mb-3">Tools</h3>
            <p className="text-[#4a5568] text-[15px] text-center leading-relaxed">
              Resources and techniques for effective skill mastery.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

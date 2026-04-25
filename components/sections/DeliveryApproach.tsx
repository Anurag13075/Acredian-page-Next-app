import { BarChart, MonitorPlay, Presentation } from 'lucide-react'

export default function DeliveryApproach() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[2.5rem] font-bold text-[#1a202c] mb-3">
          How We <span className="text-[#3182ce]">Deliver Results</span> That Matter?
        </h2>
        <p className="text-[1.3rem] text-[#4a5568] font-medium mb-20">
          A Structured Three-Step Approach to <span className="text-[#3182ce]">Skill Development</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="relative bg-[#f4faff] rounded-xl p-12 flex flex-col items-center justify-center border border-blue-50/50 shadow-sm">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] w-[6px] bg-[#3182ce] rounded-r-md"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] w-[6px] bg-[#3182ce] rounded-l-md"></div>
            
            <div className="absolute top-6 left-6 w-8 h-8 bg-white border border-blue-100 rounded-full flex items-center justify-center font-bold text-[#3182ce] shadow-sm text-sm">
              1
            </div>
            
            <div className="w-16 h-16 bg-[#3182ce] rounded-full flex items-center justify-center mb-8 shadow-[0_4px_15px_rgba(49,130,206,0.4)]">
              <BarChart className="text-white w-7 h-7" strokeWidth={2.5} />
            </div>
            <h3 className="text-[1.35rem] font-bold text-[#1a202c] mb-4">Skill Gap Analysis</h3>
            <p className="text-[#4a5568] text-[15px] leading-relaxed px-2 font-medium">
              Assess team skill gaps and developmental needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-[#f4faff] rounded-xl p-12 flex flex-col items-center justify-center border border-blue-50/50 shadow-sm">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] w-[6px] bg-[#3182ce] rounded-r-md"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] w-[6px] bg-[#3182ce] rounded-l-md"></div>
            
            <div className="absolute top-6 left-6 w-8 h-8 bg-white border border-blue-100 rounded-full flex items-center justify-center font-bold text-[#3182ce] shadow-sm text-sm">
              2
            </div>
            
            <div className="w-16 h-16 bg-[#3182ce] rounded-full flex items-center justify-center mb-8 shadow-[0_4px_15px_rgba(49,130,206,0.4)]">
              <Presentation className="text-white w-7 h-7" strokeWidth={2.5} />
            </div>
            <h3 className="text-[1.35rem] font-bold text-[#1a202c] mb-4">Customized Training Plan</h3>
            <p className="text-[#4a5568] text-[15px] leading-relaxed px-2 font-medium">
              Create a tailored roadmap addressing organizational goals.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-[#f4faff] rounded-xl p-12 flex flex-col items-center justify-center border border-blue-50/50 shadow-sm">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] w-[6px] bg-[#3182ce] rounded-r-md"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] w-[6px] bg-[#3182ce] rounded-l-md"></div>
            
            <div className="absolute top-6 left-6 w-8 h-8 bg-white border border-blue-100 rounded-full flex items-center justify-center font-bold text-[#3182ce] shadow-sm text-sm">
              3
            </div>
            
            <div className="w-16 h-16 bg-[#3182ce] rounded-full flex items-center justify-center mb-8 shadow-[0_4px_15px_rgba(49,130,206,0.4)]">
              <MonitorPlay className="text-white w-7 h-7" strokeWidth={2.5} />
            </div>
            <h3 className="text-[1.35rem] font-bold text-[#1a202c] mb-4">Flexible Program Delivery</h3>
            <p className="text-[#4a5568] text-[15px] leading-relaxed px-2 font-medium">
              Deliver adaptable programs aligned with industry and organizational needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

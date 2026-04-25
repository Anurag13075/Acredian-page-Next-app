import { Lightbulb, BrainCircuit, Users, BarChart3, Settings, Globe, CreditCard } from 'lucide-react'

const EXPERTISE = [
  { icon: Lightbulb, title: 'Product & Innovation Hub' },
  { icon: BrainCircuit, title: 'Gen-AI Mastery' },
  { icon: Users, title: 'Leadership Elevation' },
  { icon: BarChart3, title: 'Tech & Data Insights' },
  { icon: Settings, title: 'Operations Excellence' },
  { icon: Globe, title: 'Digital Enterprise' },
  { icon: CreditCard, title: 'Fintech Innovation Lab' },
]

export default function DomainExpertise() {
  return (
    <section id="domain-expertise" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] font-bold text-[#1a202c] mb-3">
            Our <span className="text-[#3182ce]">Domain Expertise</span>
          </h2>
          <p className="text-[1.3rem] text-[#4a5568] font-medium">
            <span className="text-[#3182ce]">Specialized Programs</span> Designed to Fuel Innovation
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {EXPERTISE.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-8 flex flex-col items-center justify-center w-[calc(33.333%-1.5rem)] min-w-[280px] hover:-translate-y-2 transition-transform duration-300 cursor-pointer border border-gray-50">
                <Icon className="w-14 h-14 text-[#3182ce] mb-5" strokeWidth={2.5} />
                <h4 className="font-bold text-[#1a202c] text-[1.1rem] text-center">{item.title}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

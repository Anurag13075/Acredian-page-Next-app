import { Monitor, MonitorOff, GraduationCap, Briefcase } from 'lucide-react'
import Image from 'next/image'

export default function WhoShouldJoin() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1875f0] rounded-2xl p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-5/12 relative z-10 text-white">
            <p className="text-xl mb-3 font-medium">Who Should Join?</p>
            <h2 className="text-4xl lg:text-5xl font-bold leading-[1.1] mb-8">
              Strategic Skill<br/>Enhancement
            </h2>
            
            <div className="relative w-full max-w-[400px] h-[300px] mt-10 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
              <Image 
                src="/assets/who-should-join.png" 
                alt="Professionals" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
          
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 relative z-10 pl-0 lg:pl-10">
            <div>
              <Monitor className="text-white w-12 h-12 mb-5" strokeWidth={2} />
              <h3 className="text-white text-2xl font-bold mb-3">Tech Professionals</h3>
              <p className="text-blue-100 text-[15px] leading-relaxed font-medium">
                Enhance expertise, embrace tech, drive innovation.
              </p>
            </div>
            <div>
              <MonitorOff className="text-white w-12 h-12 mb-5" strokeWidth={2} />
              <h3 className="text-white text-2xl font-bold mb-3">Non-Tech Professionals</h3>
              <p className="text-blue-100 text-[15px] leading-relaxed font-medium">
                Adapt digitally, collaborate in tech environments.
              </p>
            </div>
            <div>
              <GraduationCap className="text-white w-12 h-12 mb-5" strokeWidth={2} />
              <h3 className="text-white text-2xl font-bold mb-3">Emerging Professionals</h3>
              <p className="text-blue-100 text-[15px] leading-relaxed font-medium">
                Develop powerful skills for rapid career growth.
              </p>
            </div>
            <div>
              <Briefcase className="text-white w-12 h-12 mb-5" strokeWidth={2} />
              <h3 className="text-white text-2xl font-bold mb-3">Senior Professionals</h3>
              <p className="text-blue-100 text-[15px] leading-relaxed font-medium">
                Strengthen leadership, enhance strategic decisions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

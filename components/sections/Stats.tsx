export default function Stats() {
  return (
    <section id="stats" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[2.5rem] font-bold text-[#1a202c] mb-3">
          Our <span className="text-[#3182ce]">Track Record</span>
        </h2>
        <p className="text-[1.3rem] text-[#4a5568] mb-20 font-medium">
          The Numbers Behind <span className="text-[#3182ce]">Our Success</span>
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center border-r border-gray-200 last:border-0 px-8">
            <div className="bg-[#ebf8ff] text-[#3182ce] text-[2rem] font-bold py-3 px-12 rounded-full mb-8">
              10K+
            </div>
            <p className="text-[#2d3748] font-medium text-lg leading-snug max-w-[250px]">
              Professionals Trained For Exceptional Career Success
            </p>
          </div>
          <div className="flex flex-col items-center border-r border-gray-200 last:border-0 px-8">
            <div className="bg-[#ebf8ff] text-[#3182ce] text-[2rem] font-bold py-3 px-12 rounded-full mb-8">
              200+
            </div>
            <p className="text-[#2d3748] font-medium text-lg leading-snug max-w-[280px]">
              Sessions Delivered With Unmatched Learning Excellence
            </p>
          </div>
          <div className="flex flex-col items-center px-8">
            <div className="bg-[#ebf8ff] text-[#3182ce] text-[2rem] font-bold py-3 px-12 rounded-full mb-8">
              5K+
            </div>
            <p className="text-[#2d3748] font-medium text-lg leading-snug max-w-[250px]">
              Active Learners Engaged In Dynamic Courses
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'

export default function CourseSegmentation() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[2.5rem] font-bold text-[#1a202c] mb-3">
          Tailored <span className="text-[#3182ce]">Course Segmentation</span>
        </h2>
        <p className="text-[1.2rem] text-[#4a5568] mb-16 font-medium">
          Explore <span className="text-[#3182ce]">Custom-fit Courses</span> Designed to Address Every Professional Focus
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col h-full border border-gray-50 pb-8">
            <div className="h-[220px] relative mb-6">
              <Image src="/assets/course-program.png" alt="Program Specific" fill className="object-cover" />
            </div>
            <h3 className="text-[#3182ce] text-2xl font-bold mb-4 px-6 leading-tight">Program<br/>Specific</h3>
            <p className="text-[#4a5568] text-[15px] px-6 leading-relaxed font-medium">
              Certificate, Executive, Post Graduate Certificate
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col h-full border border-gray-50 pb-8">
            <div className="h-[220px] relative mb-6">
              <Image src="/assets/course-industry.png" alt="Industry Specific" fill className="object-cover" />
            </div>
            <h3 className="text-[#3182ce] text-2xl font-bold mb-4 px-6 leading-tight">Industry<br/>Specific</h3>
            <p className="text-[#4a5568] text-[15px] px-6 leading-relaxed font-medium">
              IT, Healthcare, Retail, Finance, Education, Manufacturing
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col h-full border border-gray-50 pb-8">
            <div className="h-[220px] relative mb-6">
              <Image src="/assets/course-topic.png" alt="Topic Specific" fill className="object-cover" />
            </div>
            <h3 className="text-[#3182ce] text-2xl font-bold mb-4 px-6 leading-tight mt-auto">Topic Specific</h3>
            <p className="text-[#4a5568] text-[15px] px-6 leading-relaxed font-medium">
              Machine Learning, Design, Analytics, Cybersecurity, Cloud
            </p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col h-full border border-gray-50 pb-8">
            <div className="h-[220px] relative mb-6">
              <Image src="/assets/course-level.png" alt="Level Specific" fill className="object-cover" />
            </div>
            <h3 className="text-[#3182ce] text-2xl font-bold mb-4 px-6 leading-tight mt-auto">Level Specific</h3>
            <p className="text-[#4a5568] text-[15px] px-6 leading-relaxed font-medium">
              Senior Leadership, Mid-Career Professionals, Freshers
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[2.5rem] font-bold text-[#1a202c] mb-3">
          Testimonials from <span className="text-[#3182ce]">Our Partners</span>
        </h2>
        <p className="text-[1.2rem] text-[#4a5568] mb-16 font-medium">
          What <span className="text-[#3182ce]">Our Clients</span> Are Saying
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mb-10">
          {/* Card 1 */}
          <div className="flex-1 bg-white border border-gray-100 rounded-3xl p-10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] text-left">
            <div className="mb-6 h-12 flex items-center">
              <span className="text-4xl font-bold text-[#d0271d] font-serif tracking-tighter">ADP</span>
            </div>
            <p className="text-[#4a5568] leading-relaxed font-medium text-[15px]">
              "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="flex-1 bg-white border border-gray-100 rounded-3xl p-10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] text-left">
            <div className="mb-6 h-12 flex items-center">
              <div className="w-12 h-12 rounded-full border-[3px] border-[#00a3e0] flex items-center justify-center text-[#00a3e0] font-bold leading-none text-center text-[10px]">BAY<br/>ER</div>
            </div>
            <p className="text-[#4a5568] leading-relaxed font-medium text-[15px]">
              "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."
            </p>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#3182ce] cursor-pointer"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200 cursor-pointer"></div>
        </div>
      </div>
    </section>
  )
}

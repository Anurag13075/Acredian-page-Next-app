export default function Clients() {
  const logos = [
    <span key="1" className="text-2xl font-serif font-bold text-gray-800 leading-tight">Reliance<br/><span className="text-sm font-sans font-normal">Industries Limited</span></span>,
    <span key="2" className="text-4xl font-extrabold text-[#005587] italic tracking-tight">HCL</span>,
    <span key="3" className="text-4xl font-bold text-[#0f62fe] border-y-4 border-[#0f62fe]">IBM</span>,
    <span key="4" className="text-4xl font-bold text-[#f26522] italic relative"><span className="absolute -left-6 top-1 text-2xl">⚡</span>CRIF</span>,
    <span key="5" className="text-4xl font-bold text-[#d0271d] font-serif tracking-tighter">ADP</span>,
    <span key="6" className="w-16 h-16 rounded-full border-[3px] border-[#00a3e0] flex items-center justify-center text-[#00a3e0] font-bold leading-none text-center text-sm">BAY<br/>ER</span>
  ]

  return (
    <section id="clients" className="py-20 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[2.5rem] font-bold text-[#1a202c] mb-3">
          Our Proven <span className="text-[#3182ce]">Partnerships</span>
        </h2>
        <p className="text-[1.3rem] text-[#4a5568] mb-16 font-medium">
          Successful Collaborations With the <span className="text-[#3182ce]">Industry's Best</span>
        </p>
        
        {/* Marquee Container */}
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden py-4">
          {/* Gradient Masks for smooth fading edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="animate-marquee flex gap-24 items-center justify-start opacity-90 pr-24 hover:[animation-play-state:paused]">
            {/* Render logos twice to create a seamless loop */}
            {logos}
            {logos}
          </div>
        </div>
      </div>
    </section>
  )
}

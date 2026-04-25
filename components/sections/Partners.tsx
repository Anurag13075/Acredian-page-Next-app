const PARTNERS = [
  { name: 'IIT Delhi', type: 'Academic' },
  { name: 'IIT Roorkee', type: 'Academic' },
  { name: 'IIM Lucknow', type: 'Academic' },
  { name: 'IIM Kozhikode', type: 'Academic' },
  { name: 'Google', type: 'Industry' },
  { name: 'Microsoft', type: 'Industry' },
  { name: 'IBM', type: 'Industry' },
  { name: 'AWS', type: 'Industry' },
]

export default function Partners() {
  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">Our Partners</h2>
        <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-12">
          Backed by the best in academia and industry
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
          {PARTNERS.map((p, i) => (
            <div key={i} className="flex items-center justify-center p-6 bg-gray-50 rounded-xl w-full hover:bg-gray-100 transition-colors">
              <span className="font-display font-bold text-xl text-gray-800">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

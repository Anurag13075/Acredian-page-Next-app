const STEPS = [
  {
    num: '01',
    title: 'Needs Assessment',
    description: 'We analyze your team\'s current capabilities and identify critical skill gaps to achieve business goals.',
  },
  {
    num: '02',
    title: 'Design & Customize',
    description: 'Curating the perfect learning path using modules from top universities, tailored to your context.',
  },
  {
    num: '03',
    title: 'Deploy & Learn',
    description: 'Seamless onboarding onto our platform with dedicated success managers ensuring high engagement.',
  },
  {
    num: '04',
    title: 'Track & Scale',
    description: 'Monitor ROI through our analytics dashboard and scale successful programs across departments.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">Process</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            How we partner with you
          </h3>
          <p className="text-lg text-gray-600">
            A proven methodology to ensure your learning initiatives drive tangible business outcomes.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-100"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center text-3xl font-display font-bold text-blue-600 shadow-sm mx-auto lg:mx-0 mb-6">
                  {step.num}
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

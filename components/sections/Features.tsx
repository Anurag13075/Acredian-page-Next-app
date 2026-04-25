import { BookOpen, LineChart, Users, Award, Briefcase, Clock, Target, ShieldCheck } from 'lucide-react'

const FEATURES = [
  {
    icon: BookOpen,
    title: 'World-Class Curriculum',
    description: 'Programs designed by faculty from top institutions like IITs and IIMs.',
  },
  {
    icon: LineChart,
    title: 'Interactive Dashboard',
    description: 'Track team progress, completion rates, and performance metrics in real-time.',
  },
  {
    icon: Users,
    title: 'Dedicated Mentors',
    description: '1-on-1 guidance from industry experts to ensure learning outcomes.',
  },
  {
    icon: Award,
    title: 'Capstone Projects',
    description: 'Hands-on projects relevant to your company\'s specific business challenges.',
  },
  {
    icon: Briefcase,
    title: 'Industry Experts',
    description: 'Guest lectures and insights from leaders at top tech companies.',
  },
  {
    icon: Clock,
    title: 'Flexible Learning',
    description: 'Self-paced modules combined with weekend live sessions for working professionals.',
  },
  {
    icon: Target,
    title: 'Customized Paths',
    description: 'Tailored learning journeys based on your organization\'s specific skill gaps.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Certification',
    description: 'Co-branded certificates from prestigious universities upon completion.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Everything you need to transform your workforce
          </h3>
          <p className="text-lg text-gray-600">
            A comprehensive learning ecosystem designed specifically for enterprise scale and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

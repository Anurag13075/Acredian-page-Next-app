const FOOTER_LINKS = {
  Solutions: [
    'Enterprise Learning',
    'Custom Programs',
    'Analytics Dashboard',
    'HR Integrations',
    'Certificates',
  ],
  Programs: [
    'Data Science & AI',
    'Product Management',
    'Leadership',
    'Business Analytics',
    'Cloud Computing',
  ],
  Company: ['About Us', 'Careers', 'Blog', 'Press', 'Contact'],
  Resources: ['Case Studies', 'Whitepapers', 'Webinars', 'L&D Playbook', 'API Docs'],
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display font-bold text-xl text-white mb-3">
              Accredian
              <span className="text-blue-400 text-sm font-medium ml-1">Enterprise</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              India&apos;s most trusted enterprise learning platform. Upskill your workforce with programs from IITs, IIMs, and global universities.
            </p>
            <div className="flex gap-3 mt-5">
              {['in', 'tw', 'yt'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-white mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © 2026 Accredian. All rights reserved. Accredian is a registered trademark.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
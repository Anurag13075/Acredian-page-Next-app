'use client'

import { useState } from 'react'
import { X, CheckCircle2, Loader2 } from 'lucide-react'

export function LeadFormModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (res.ok) {
        setStatus('success')
        setTimeout(() => {
          onClose()
          setStatus('idle')
        }, 3000)
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-md p-8 relative shadow-2xl scale-100 transition-transform">
        <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors">
          <X size={24} />
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">Our advisor will contact you shortly.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Information</h3>
            <p className="text-gray-600 mb-6 text-[15px]">Fill out the form below and we'll get back to you with program details.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                <input required name="name" type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#3182ce] focus:border-[#3182ce] outline-none transition-all font-medium" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                <input required name="email" type="email" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#3182ce] focus:border-[#3182ce] outline-none transition-all font-medium" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                <input required name="phone" type="tel" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#3182ce] focus:border-[#3182ce] outline-none transition-all font-medium" placeholder="+1 (555) 000-0000" />
              </div>
              <button 
                disabled={status === 'loading'}
                className="w-full bg-[#3182ce] hover:bg-[#2b6cb0] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center disabled:opacity-70 mt-4 shadow-md text-lg"
              >
                {status === 'loading' ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Submit Request'}
              </button>
              {status === 'error' && <p className="text-red-500 text-sm text-center mt-2 font-medium">Something went wrong. Please try again.</p>}
            </form>
          </>
        )}
      </div>
    </div>
  )
}

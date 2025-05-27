'use client'

import { useState } from 'react'
import Header from "@/app/components/Header"
import { submitBookingForm } from '@/app/actions/book-demo'

export default function BookDemo() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })
  const [phoneError, setPhoneError] = useState('')
  const [submitStatus, setSubmitStatus] = useState<{
    loading: boolean;
    error?: string;
    success?: boolean;
  }>({
    loading: false
  })

  // Format phone number as user types
  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const numbers = value.replace(/\D/g, '')
    
    // Ensure it starts with +1
    if (!numbers.startsWith('1')) {
      return '+1' + numbers
    }
    return '+' + numbers
  }

  // Validate phone number
  const validatePhone = (phone: string) => {
    // Must be exactly 12 characters (+1 plus 10 digits)
    if (phone.length !== 12) {
      return 'Phone number must be 10 digits'
    }
    
    // Must match format +1XXXXXXXXXX where X is a digit
    const phoneRegex = /^\+1\d{10}$/
    if (!phoneRegex.test(phone)) {
      return 'Please enter a valid US phone number'
    }

    return ''
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value)
    setFormData({ ...formData, phone: formattedNumber })
    setPhoneError(validatePhone(formattedNumber))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Final validation before submit
    const error = validatePhone(formData.phone)
    if (error) {
      setPhoneError(error)
      return
    }

    setSubmitStatus({ loading: true })

    try {
      const result = await submitBookingForm(formData)

      if (result.error) {
        throw new Error(result.error)
      }

      setSubmitStatus({ loading: false, success: true })
      setFormData({ name: '', phone: '' }) // Reset form
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to submit form. Please try again or call us directly.'
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header showBackToHome={true} />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                You're One Step Away from Letting Joy Handle Your Leads
              </h1>
              <p className="text-xl text-gray-600">
                This isn't a generic demo — it's the start of your setup. Joy will show you how she answers calls and help you book your onboarding with the LeadShield team.
              </p>
            </div>

            {/* Options Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center justify-center">
                <span className="mr-2">👇</span> Choose How to Start:
              </h2>

              {/* Option A */}
              <div className="bg-emerald-50 rounded-3xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">📞</span> Option A: Call Joy Now
                </h3>
                <p className="text-gray-600 mb-6">
                  Dial <span className="font-semibold">(914) 895-5336</span> to experience how Joy will talk to your leads — warm, clear, and professional. At the end of the call, she'll offer to book your onboarding appointment with the LeadShield team, where we'll begin setting up your personal voice assistant.
                </p>
              </div>

              {/* Option B */}
              <div className="bg-gray-50 rounded-3xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">📝</span> Option B: Have Joy Call You
                </h3>
                <p className="text-gray-600 mb-6">
                  Prefer Joy to initiate? Enter your info below. She'll call you and walk through a sample lead conversation. Just like with real calls, she'll invite you to book an onboarding appointment with LeadShield to get started.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number (US Only)
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          placeholder="+1"
                          className={`w-full px-4 py-3 rounded-lg border ${phoneError ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'}`}
                          required
                        />
                        {phoneError && (
                          <p className="mt-1 text-sm text-red-600">
                            {phoneError}
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors duration-200 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      disabled={!!phoneError || !formData.phone || !formData.name || submitStatus.loading}
                    >
                      {submitStatus.loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : 'Have Joy Call Me'}
                    </button>
                    {submitStatus.error && (
                      <p className="mt-3 text-sm text-red-600 text-center">
                        {submitStatus.error}
                      </p>
                    )}
                    {submitStatus.success && (
                      <div className="mt-3 text-sm text-emerald-600 text-center">
                        <p>Thanks! Joy will call you shortly.</p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Notice */}
            <div className="text-center mb-16">
              <p className="text-gray-600 italic">
                This is a real interaction. Joy speaks exactly as she will with your clients — and gets you booked for onboarding.
              </p>
            </div>

            {/* What Will Happen Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="mr-2">🤖</span> What Will Happen on the Call:
              </h2>
              <ul className="space-y-4">
                {[
                  "Joy will greet you like a lead and show how she qualifies and engages",
                  "She'll guide you to book your onboarding appointment with LeadShield",
                  "That appointment is where we set up your personal voice assistant",
                  "You won't be billed until Joy is live and handling real calls"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What Happens After Section */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="mr-2">✅</span> What Happens After:
              </h2>
              <ul className="space-y-4">
                {[
                  "You meet with us to customize Joy for your business",
                  "We handle calendar, call routing, and setup",
                  "You only pay once Joy is activated and working for you"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
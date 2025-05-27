'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Playfair_Display, Inter } from 'next/font/google'
import Image from 'next/image'
import Header from "@/app/components/Header"

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const loadTally = () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        script.onload = () => {
          // @ts-ignore
          if (window.Tally) {
            // @ts-ignore
            window.Tally.loadEmbeds();
          }
        };
        document.body.appendChild(script);
      }
    };

    loadTally();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header showBackToHome={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <Image
                  src="/app-icon.svg"
                  alt="LeadShield App Icon"
                  width={80}
                  height={80}
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <h1 className="text-5xl font-bold leading-tight mb-6 text-gray-900">
                Enjoy Your Time. Qualify Leads. Book More Appointments.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                LeadShield.xyz is your 24/7 AI assistant for real estate agents. It filters out cold leads, captures the real ones, and fills your calendar — so you can focus on what you enjoy most.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/demo"
                  className="bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors duration-200 text-lg flex items-center"
                >
                  👉 Listen to a Demo Now
                </Link>
                <Link
                  href="/book-demo"
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200 text-lg flex items-center"
                >
                  Get Started
                </Link>
              </div>
              <div className="mt-12 space-y-4">
                <div className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 mr-3 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI-Powered Lead Qualification</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 mr-3 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automated Follow-ups</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 mr-3 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Smart Calendar Integration</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="p-8">
                <Image
                  src="/images/leadshield-hero2.png"
                  alt="LeadShield Dashboard Preview"
                  width={800}
                  height={600}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Preview Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl shadow-2xl">
                <div className="relative bg-emerald-900 rounded-lg overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src="/images/leadshield-joy1.png"
                    alt="Joy AI Assistant"
                    fill
                    className="object-cover"
                    objectPosition="top"
                  />
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-200 rounded-full -z-10"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold leading-tight mb-6 text-gray-900">
                Meet Joy — Your Lead Shield in Action
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience how Joy qualifies, engages, and books real estate leads in English and Spanish. Hear her in action and see why top agents rely on her to protect their time and grow their business.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors duration-200 text-lg"
              >
                👉 Listen to a Demo Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Features Label */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <div className="w-5 h-5 bg-[#E8FAE5] rounded-md flex items-center justify-center">
                <svg className="w-3 h-3 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">Benefits</span>
            </div>
          </div>
          
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">
            Why Real Estate Agents Trust LeadShield
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Benefits List */}
            <div className="bg-white rounded-3xl p-10 shadow-sm">
              <div className="space-y-12">
                {[
                  "Filters cold leads automatically",
                  "Speaks Spanish and English fluently",
                  "Books real appointments into your calendar",
                  "Handles 24/7 follow-up with warmth and clarity",
                  "No tech headaches. Fully managed, quick setup with real human support",
                  "Optional upgrades for automations, texting, and lead management tools"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <span className="text-gray-400 text-lg font-medium">
                        {(index + 1).toString().padStart(2, '0')}.
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {benefit}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="relative w-[540px]">
              <div className="rounded-3xl overflow-hidden border-8 border-[#065f46] bg-[#E8FAE5]">
                <div className="relative aspect-square">

                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-emerald-700">
                      <Image
                        src="/images/leadshield-client2.png"
                        alt="LeadShield Dashboard Preview"
                        width={540}
                        height={540}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Get Started Without Paying a Dime Upfront
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We'll set up your AI assistant and help you start catching leads — with no upfront fees or long-term commitment. You only pay once Joy starts working for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Benefits */}
              <div className="bg-white rounded-3xl p-10 shadow-sm">
                <div className="space-y-6">
                  {[
                    "Zero setup cost to get started",
                    "Risk-free trial — pay only when Joy begins delivering results",
                    "No contracts or lock-ins",
                    "Your assistant is customized and integrated for you",
                    "Support for voice, calendar, CRM, and texting available",
                    "Flexible upgrades if and when you need them"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-lg text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Visual Element */}
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8 h-full">
                  {/* Price Tag Element */}
                  <div className="absolute -top-6 right-8 bg-white rounded-2xl px-6 py-4 shadow-lg transform rotate-3">
                    <div className="text-4xl font-bold text-emerald-700">$0</div>
                    <div className="text-sm text-gray-600">Upfront Cost</div>
                  </div>

                  {/* Success Path Illustration */}
                  <div className="relative h-full flex flex-col justify-center items-center">
                    {/* Path Steps */}
                    {[
                      { icon: "🎯", text: "Setup" },
                      { icon: "🤝", text: "Integration" },
                      { icon: "✨", text: "Results" },
                      { icon: "💰", text: "Pay" }
                    ].map((step, index) => (
                      <div key={index} className="flex items-center mb-8 last:mb-0 relative">
                        <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center text-2xl">
                          {step.icon}
                        </div>
                        <div className="ml-4 text-lg font-medium text-gray-800">{step.text}</div>
                        {index < 3 && (
                          <div className="absolute top-full left-8 w-0.5 h-8 bg-emerald-200"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-200 rounded-full -z-10"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-emerald-100 rounded-full -z-10"></div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center">
              <Link
                href="/demo"
                className="inline-flex items-center bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors duration-200 text-lg"
              >
                👉 Listen to a Demo Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <div className="w-5 h-5 bg-[#E8FAE5] rounded-md flex items-center justify-center">
                  <span className="text-emerald-700 text-sm">🤔</span>
                </div>
                <span className="text-sm font-medium text-gray-900">FAQ</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 text-center">
              Frequently Asked Questions
            </h2>

            {/* FAQ Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  q: "Can I use this with my current CRM?",
                  a: "Yes. We integrate with most platforms or provide a simple interface."
                },
                {
                  q: "Do I need special hardware?",
                  a: "Nope. Joy works with the phone number and tools you already use."
                },
                {
                  q: "What if I don't get results?",
                  a: "Then don't continue. No lock-ins. Pay only if it works."
                },
                {
                  q: "Can Joy respond to texts too?",
                  a: "Yes! We offer a texting upgrade for qualified users after the demo."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-700 font-medium">Q{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {faq.q}
                      </h3>
                      <p className="text-gray-600">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-6">Still have questions?</p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200 text-lg shadow-sm"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
'use client'

import Link from "next/link"
import Image from 'next/image'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="LeadShield Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div>
            <Link 
              href="/"
              className="bg-white text-gray-900 px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-lg mb-4">
              Last Updated: March 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600 mb-4">
                  At LeadShield.xyz, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered lead qualification and appointment booking service.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Account information (name, email, phone number)</li>
                  <li>Business information (company name, address)</li>
                  <li>Calendar and scheduling preferences</li>
                  <li>Communication with leads and prospects</li>
                  <li>Payment information</li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">
                  We use the collected information for:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Providing and improving our AI assistant services</li>
                  <li>Processing and managing lead interactions</li>
                  <li>Scheduling and managing appointments</li>
                  <li>Communicating with you about our services</li>
                  <li>Analyzing and optimizing service performance</li>
                </ul>
              </div>

              {/* Data Sharing */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing</h2>
                <p className="text-gray-600 mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Service providers who assist in our operations</li>
                  <li>Third-party integrations you enable (CRM, calendar)</li>
                  <li>Legal authorities when required by law</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  We never sell your personal information to third parties.
                </p>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>

              {/* Data Retention */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
                <p className="text-gray-600 mb-4">
                  We retain your information for as long as your account is active or as needed to provide services. You can request deletion of your data at any time, subject to legal requirements and legitimate business purposes.
                </p>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Privacy Rights</h2>
                <p className="text-gray-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your information</li>
                  <li>Export your data in a portable format</li>
                </ul>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies and Tracking</h2>
                <p className="text-gray-600 mb-4">
                  We use cookies and similar tracking technologies to improve your experience and analyze service usage. You can control cookie preferences through your browser settings.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-600 mb-4">
                  Our Service is not intended for individuals under 18 years of age. We do not knowingly collect or maintain information from children.
                </p>
              </div>

              {/* Changes to Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Privacy Policy</h2>
                <p className="text-gray-600 mb-4">
                  We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  For privacy-related questions or concerns, please contact us at:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600">Privacy Officer</p>
                  <p className="text-gray-600">SMOVER LLC</p>
                  <p className="text-gray-600">1234 Market Street, Suite 500</p>
                  <p className="text-gray-600">San Francisco, CA 94103</p>
                  <p className="text-gray-600">Email: privacy@leadshield.xyz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
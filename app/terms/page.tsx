'use client'

import Link from "next/link"
import Image from 'next/image'
import Header from "@/app/components/Header"

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header showBackToHome={true} />

      {/* Header Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Terms of Service
            </h1>
            <p className="text-gray-600 text-lg mb-4">
              Last Updated: March 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Agreement Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-600 mb-4">
                  By accessing or using LeadShield.xyz ("the Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you do not have permission to access the Service.
                </p>
              </div>

              {/* Services Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Services</h2>
                <p className="text-gray-600 mb-4">
                  LeadShield.xyz provides AI-powered lead qualification and appointment booking services for real estate agents. The Service includes automated communication, lead filtering, and calendar integration features.
                </p>
              </div>

              {/* Account Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
                <p className="text-gray-600 mb-4">
                  To access the Service, you must create an account. You agree to provide accurate information and maintain the security of your account credentials. You are responsible for all activities that occur under your account.
                </p>
              </div>

              {/* Payment Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
                <p className="text-gray-600 mb-4">
                  While there are no upfront costs, you agree to pay for the Service once it begins delivering results. Pricing will be clearly communicated before any charges are made. You authorize us to charge the payment method you provide.
                </p>
              </div>

              {/* Data Usage */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Usage and Privacy</h2>
                <p className="text-gray-600 mb-4">
                  We collect and use your data as described in our Privacy Policy. By using the Service, you agree to our data collection and usage practices. We implement reasonable security measures to protect your information.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
                <p className="text-gray-600 mb-4">
                  The Service and its original content, features, and functionality are owned by SMOVER LLC and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
                <p className="text-gray-600 mb-4">
                  We may terminate or suspend your account at any time for any reason. You may also terminate your account at any time. Upon termination, your right to use the Service will immediately cease.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  In no event shall SMOVER LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Service.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
                <p className="text-gray-600 mb-4">
                  We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page. Your continued use of the Service after such changes constitutes acceptance of the new Terms.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600">SMOVER LLC</p>
                  <p className="text-gray-600">1234 Market Street, Suite 500</p>
                  <p className="text-gray-600">San Francisco, CA 94103</p>
                  <p className="text-gray-600">Email: legal@leadshield.xyz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
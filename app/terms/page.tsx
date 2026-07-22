import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms & Conditions | PgBee',
  description: 'Terms and conditions for using PgBee services.',
  alternates: { canonical: '/terms' },
}

const sections = [
  ['1. About PgBee', 'PgBee is a technology platform that helps students discover PGs, hostels, and rooms and helps property owners publish and manage accommodation information. PgBee may provide access to third-party listings and services through the platform.'],
  ['2. Using the platform', 'You must provide accurate information when creating or using an account. You are responsible for maintaining the confidentiality of your account and for activity carried out through it. PgBee may restrict access where information is inaccurate, misleading, unlawful, or harmful to other users.'],
  ['3. Listings and availability', 'Property information, images, amenities, pricing, room types, and availability are provided by or on behalf of property owners and may change. Users should review the details shown at the time of enquiry or booking and contact PgBee if information appears incorrect.'],
  ['4. Bookings and payments', 'A booking is subject to the availability and terms shown for the selected property. Any booking fee, rent, deposit, or other charge will be shown during the relevant flow where applicable. Payment processing may be handled by third-party payment providers and may be subject to their terms.'],
  ['5. User responsibilities', 'You must use PgBee lawfully, respect property rules, provide truthful identity and contact details, and avoid misuse of listings, reviews, communication tools, or payment flows. You must not attempt to access another user’s account or interfere with the operation or security of the platform.'],
  ['6. Cancellations and refunds', 'Cancellations, booking-fee refunds, rent refunds, and other adjustments are governed by the applicable booking and refund terms. Please read the Refund Policy before making a payment.'],
  ['7. Privacy', 'Our collection and use of personal information is described in the Privacy Policy. By using the platform, you acknowledge that information may be processed as described there and as required to provide the requested services.'],
  ['8. Changes and availability', 'PgBee may update the platform, listings, features, or these terms from time to time. We may suspend or discontinue features when reasonably necessary for maintenance, security, legal compliance, or business operations.'],
  ['9. Contact', 'For questions about these terms, contact pgbee.company@gmail.com.'],
]

export default function TermsPage() {
  return (
    <div className="bg-[#f7f7f3]">
      <Navbar />
      <main className="py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10 lg:p-14">
          <p className="section-eyebrow mb-4">Legal</p>
          <h1 className="section-title mb-4">Terms &amp; Conditions</h1>
          <p className="mb-10 text-sm text-gray-500">Last updated: July 2026</p>
          <div className="space-y-8 text-sm leading-7 text-gray-600 sm:text-base">
            {sections.map(([title, content]) => (
              <section key={title}>
                <h2 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">{title}</h2>
                <p>{content}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  )
}

import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Refund Policy | PgBee',
  description: 'Refund and cancellation information for PgBee bookings and services.',
  alternates: { canonical: '/refund-policy' },
}

const sections = [
  ['Booking cancellations', 'Cancellation eligibility depends on the booking status, the property’s stated terms, and the charge involved. Review the cancellation information shown during booking and contact PgBee as soon as possible if you need help.'],
  ['Booking fees', 'Where a booking fee applies, the amount and applicable refund conditions will be shown before payment. A booking fee may be non-refundable after a booking is confirmed or after the service has been provided, subject to applicable law and the terms shown for that booking.'],
  ['Rent, deposits, and property charges', 'Rent, security deposits, utility charges, and other property-level amounts may be governed by the agreement between the student and the property owner. PgBee is not responsible for a refund that must be issued directly by a property owner unless PgBee has expressly processed that amount.'],
  ['Approved refunds', 'When a refund is approved, it is normally sent to the original payment method. The time taken for the amount to appear depends on the payment provider and the user’s bank.'],
  ['How to request help', 'Email pgbee.company@gmail.com from your registered email address with your booking details, the property name, and the reason for your request. Do not include card PINs, passwords, or complete payment-card numbers.'],
  ['Policy updates', 'PgBee may update this policy when its services, payment flows, or legal requirements change. The version published on this page applies to requests made after the update unless a different term was shown at the time of booking.'],
]

export default function RefundPolicyPage() {
  return (
    <div className="bg-[#f7f7f3]">
      <Navbar />
      <main className="py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10 lg:p-14">
          <p className="section-eyebrow mb-4">Legal</p>
          <h1 className="section-title mb-4">Refund Policy</h1>
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

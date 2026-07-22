'use client'

import About from '@/components/About'
import Home from '@/components/Home'
import Work from '@/components/Work'
import Testimonials from '@/components/Testimonials'
import PlayStore from '@/components/PlayStore'
import Contacts from '@/components/Contacts'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import FAQ from '@/components/FAQ'
import ConversionCTA from '@/components/ConversionCTA'
import BeePath from '@/components/BeePath'
// import BeeSupport from '@/components/BeeSupport'

const faqQuestions = [
  {
    question: 'What can I find on PgBee?',
    answer: 'You can browse PGs, hostels and rooms, compare pricing and amenities, and review available room or bed details before choosing a stay.',
  },
  {
    question: 'Are the properties verified?',
    answer: 'PgBee works with property owners and publishes listing details provided through the platform. Always review the listing and contact support if something looks inaccurate.',
  },
  {
    question: 'Can I choose a room or bed?',
    answer: 'When the property has room and bed inventory available, you can view the available options and select the one that suits you.',
  },
  {
    question: 'How do I get help?',
    answer: 'Email pgbee.company@gmail.com with your registered email address and a short description of your question. Our team will help you with the next steps.',
  },
]

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.pgbee.in/#organization',
      name: 'PgBee',
      url: 'https://www.pgbee.in/',
      logo: 'https://www.pgbee.in/PgBee.svg',
      email: 'pgbee.company@gmail.com',
      sameAs: [
        'https://www.instagram.com/pgbee.in',
        'https://www.linkedin.com/company/pgbee',
        'https://twitter.com/pgbee_in',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.pgbee.in/#website',
      name: 'PgBee',
      url: 'https://www.pgbee.in/',
      publisher: { '@id': 'https://www.pgbee.in/#organization' },
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://app.pgbee.in/#webapplication',
      name: 'PgBee Student Stay Search',
      description: 'Search and compare PGs, hostels and rooms near your college with PgBee.',
      url: 'https://app.pgbee.in/search',
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'Web browser',
      browserRequirements: 'Requires a modern web browser with JavaScript enabled.',
      featureList: [
        'Search student PGs and hostels',
        'Compare prices and amenities',
        'Review available rooms and beds',
      ],
      provider: { '@id': 'https://www.pgbee.in/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqQuestions.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
}

export default function Page() {
  return (
    <div className=''>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <div id='home'><Home /></div>
        <div id='about'><About /></div>
        <BeePath />
        <div id='work'><Work /></div>
        <div id='testimonials'><Testimonials /></div>
        <ConversionCTA />
        <div id='faq'><FAQ /></div>
        <PlayStore />
        <div id='contact'><Contacts /></div>
        <Footer />
    </div>
  )
}   

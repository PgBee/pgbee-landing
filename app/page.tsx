'use client'

import About from '@/components/About'
import Home from '@/components/Home'
import Work from '@/components/Work'
import Contacts from '@/components/Contacts'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import BeeSupport from '@/components/BeeSupport'

export default function Page() {
  return (
    <div className=''>
        <Navbar />
        <div id='home'><Home /></div>
        <div id='about'><About /></div>
        <div id='work'><Work /></div>
        <div id='contact'><Contacts /></div>
        <Footer />
        <BeeSupport />
    </div>
  )
}   

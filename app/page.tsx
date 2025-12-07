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
    <div className="App">
      <Navbar />
      <div className="Home">
        <Home />
      </div>
      <div className='About'>
        <About />
      </div>
      <div className='Work'>
        <Work />
      </div>
      <Contacts />
      <Footer />
      <BeeSupport />
    </div>
  )
}

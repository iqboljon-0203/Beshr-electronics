import React from 'react'
import About from '../About/About'
import Battery from '../Battery/Battery'
import Contact from '../Contact/Contact'
import Header from '../Header/Header'
import MobileNav from '../Header/MobileNav'
import MobilePartner from '../Partner/MobilePartner'
import Partners from '../Partner/Partner'
import MobileTab from '../Tab/MobileTab'
import PowerTabs from '../Tab/Tab'

function AppMobile() {
  return (
    <div className='mobile'>
      {/* <MobileNav /> */}
        <Header />
        {/* <PowerTabs /> */}
        <MobileTab />
        <Battery />
        <About />
        <MobilePartner />   
        <Contact />
    </div>
  )
}

export default AppMobile
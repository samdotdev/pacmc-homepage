import React from 'react'
import Header from './home/Header'
import Footer from './home/Footer'

const Layout = ({ children }: any) => {
  return (
    <div>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default Layout

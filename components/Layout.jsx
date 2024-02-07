import React from 'react'
import Head from 'next/head'
import  Navbar  from './Navbar.jsx'
import  Footer  from './Footer.jsx'
import  {useRouter} from 'next/router'

const Layout = ({children}) => {
  const router = useRouter();

  return (
    <div className="layout">
      <Head>
        <title>UrbanGrit Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout

import React from 'react'
import Header from './components/header/Header'
import Services from './components/services/services'
import About from './components/about us/about'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>  
        <Header/>
        <Services/>
        <About/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App
import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <Router>
      <Nav />
      <section id="home">
        <Home />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='testimonials'>
        <Testimonials />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <Footer/>
    </Router>
  )

}

export default App
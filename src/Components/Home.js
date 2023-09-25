import React from "react"
import Hero from './Hero'
import Highlights from './Highlights'
import Testimonials from './Testimonials'
import About from './About'
import Footer from './Footer'
import Form from './Form'

function Home(){
    return(
        <>
         <div className="Home-section">
             <Hero />
             <Highlights />
             <Testimonials />
             <About />
             <Footer />
             <Form />
          </div>
        </>
    )
}
export default Home;
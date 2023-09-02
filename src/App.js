import React from "react";
import Home from "./Components/Home";
import Hero from "./Components/Hero";
import Menu from "./Components/Menu";
import Highlights  from "./Components/Highlights";
import Testimonials from "./Components/Testimonials";
import About from "./Components/About";
import Reservations from "./Components/Reservations";
// import LogIn from "./Components/LogIn";
import Orderonline from "./Components/Orderonline";
import Sidebar from "./Components/Sidebar";
import Btmnav from "./Btmnav";
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';


 function App() {
   return(
    <div className="App">
      <nav>
       <Link to='/' className='nav-item'>Home</Link>{' '}{' '}
       <Link to ='/Aboutus' className='nav-item'>About</Link>{' '}{' '}
       <Link to ='/Menu' className='nav-item'>Menu</Link>{' '}{' '}
       <Link to='/Reservations' className='nav-item'>Reservations</Link>{' '}{' '}
       <Link to='/orderOnline' className='nav-item'>orderOnline</Link>{' '}{' '}
       {/* <Link to='/LogIn' className='nav-item'>LogIn</Link>{' '}{' '} */}
     </nav>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Aboutus" element={<About />}></Route>
          <Route path="/Menu" element={<Menu />}></Route>
         <Route path="/Reservations" element={<Reservations />}></Route>
          <Route path="/Orderonline" element={<Orderonline />}></Route>
          {/* <Route path="/LogIn" element={<LogIn />}></Route> */}
      </Routes>

     <Sidebar heading="Little Lemon"/>
     <Hero heading="Little Lemon" subHeading="Chicago"/>
     <Highlights heading="THIS WEEK SPECIAL" />
     <Testimonials heading="TESTIMONIALS"/>
     <About heading="Little Lemon" subHeading="Chicago"/>
     <Btmnav/>
    </div>
);
}
export default App;


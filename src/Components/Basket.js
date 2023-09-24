import React from "react";
import {Link, Route, Routes} from 'react-router-dom';
import About from './About';
import Menu from './Menu';
import Home from './Home';
import Reservations from './Reservations';
import Orderonline from './Orderonline';
import LogIn from './LogIn';
import basket from '../Images/Basket.svg';

function Basket(){
    return(
       <>
         <nav className="Nav">
              <ul>
                    <Link to='/' className='nav-item'>Home</Link>{' '}{' '}
                    <Link to ='/Aboutus' className='nav-item'>About</Link>{' '}{' '}
                    <Link to ='/Menu' className='nav-item'>Menu</Link>{' '}{' '}
                    <Link to='/Reservations' className='nav-item'>Reservations</Link>{' '}{' '}
                    <Link to='/orderOnline' className='nav-item'>orderOnline</Link>{' '}{' '}
                    <Link to='/LogIn' className='nav-item'>LogIn</Link>{' '}{' '}

                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/Aboutus" element={<About />}></Route>
                        <Route path="/Menu" element={<Menu />}></Route>
                        <Route path="/Reservations" element={<Reservations />}></Route>
                        <Route path="/Orderonline" element={<Orderonline />}></Route>
                        <Route path="/LogIn" element={<LogIn />}></Route>
                  </Routes>
             </ul>
         </nav>
         <h2> The cart is Empty!</h2>
      </>
    )
}
export default Basket



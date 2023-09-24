import React from "react"
import {Link, Route, Routes} from 'react-router-dom'
import About from './Components/About'
import Menu from './Components/Menu'
import Home from './Components/Home'
import Reservations from './Components/Reservations'
import Orderonline from './Components/Orderonline'
import LogIn from './Components/LogIn'
import basket from './Images/basket .svg'
import Logo from './Images/Logo .svg'

import './App.css'


function Nav(props){
    return(
        <nav className="main-nav">
            <ul>
                <Link to= '/' className="logoLittlelemon"><img src={Logo} alt="Littlelemon_logo"/></Link> {' '}{' '}{' '}{' '}
                <Link to='/' className='nav-item'>Home</Link>{' '}{' '}{' '}{' '}
                <Link to ='/Aboutus' className='nav-item'>About</Link>{' '}{' '}{' '}{' '}
                <Link to ='/Menu' className='nav-item'>Menu</Link>{' '}{' '}{' '}{' '}
                <Link to='/Reservations' className='nav-item'>Reservations</Link>{' '}{' '}{' '}{' '}
                <Link to='/orderOnline' className='nav-item'>Orderonline</Link>{' '}{' '}{' '}{' '}
                <Link to='/LogIn' className='nav-item'>LogIn</Link>{' '}{' '} {' '}{' '}
                <Link to='/basket' className="nav-itemBasket"><img src={basket} alt="basket"width={"30px"} height={"30px"}/></Link>

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
    
    );
}
export default Nav;
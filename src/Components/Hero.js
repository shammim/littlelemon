import React from "react";
import {Link} from 'react-router-dom';
import heroImage from "../Images/restauranfood.jpg";

const Hero = (props) =>{
    return(
       <hero className="hero">
         <section>
            <div className="heroSection">
             <h1 className="heroTitle">Little Lemon</h1>
             <h3 className="heroSubtitle"> Chicago</h3>
             <p className="heroPara">We are a family owned mediterrian restrauant focussed on traditional with a modern twist.</p>
             <Link to="/Form"><button aria-label="On Click">Reserve Table</button></Link>
         </div>
         <div className="heroImg">
             <img src={heroImage} aria-label="image" alt="heroImg"/>
         </div>
         </section>
    </hero>
    );
}
export default Hero;
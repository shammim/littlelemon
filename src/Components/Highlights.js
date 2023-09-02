import React from "react";
import './App.css';

function Highlights(props){
    return(
        <>
        <div className="Highlight-section">
            <h3 style={{color:"#F4CE14", fontSize:"34pt"}}>{props.heading}</h3>
            <button style={{borderRadius: "16px", backgroundColor:"#F4CE14", padding:"10px"}}>Order online</button>
        
        <section>
            <br/>
         <article>
             <img src="greeksalad.svg" alt="Greeksalad_image"/>
             <h4>Geek Salad</h4>
             <p style={{color:"#333"}}>The famous greek salad of crispy lettuce,peppers, olives and our chicago style feta, cheese,garnished with crunchy garlic and rosemary croutons.</p>
             <h4 style={{textDecorationStyle:"solid"}}> Order delivery</h4>
         </article>
         <br/>
         <article>
             <img src="bruchetta.svg" alt="Bruchetta_image"/>
             <h4>Bruchetta</h4>
             <p style={{color:"#333"}}>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
             <h4 style={{textDecorationStyle:"solid"}}> Order delivery</h4>
         </article>
        <article>
             <img src="lemondessert.svg" alt="Lemondessert_image"/>
             <h4>Lemon Dessert</h4>
             <p style={{color:"#333"}}>This comes straight from grandma's recipe book, every last ingredient has been sourced and is an authentic as can be imagined..</p>
             <h4 style={{textDecorationStyle:"solid"}}> Order delivery</h4>
         </article>
        </section>
  </div> 
  </>
   )
}
export default Highlights;
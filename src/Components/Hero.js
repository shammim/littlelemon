import React from "react";

function Hero(props){
    return(
       <div className="Hero-section">
         <section>
            <article>
             <h2 style={{ color:"#F4CE14", fontSize: "64px"}}>{props.heading}</h2>
             <h3 style={{color:"white", fontSize:"40pt", fontWeight:"regular"}}> {props.subHeading}</h3>
             <p style={{color:"white", fontSize:"16px", fontWeight:"regular",padding: "10px"}}>We are a family owned mediterrian restrauant focussed on traditional with a modern twist.</p>
             <button style={{borderRadius: "16px", backgroundColor:"#F4CE14", padding:"10px"}}>Reserve a Table</button>
            </article>
            <article>
             <img src="restaurantfood.jpg" alt="Hero_image"/> 
            </article>
         </section>
    </div>
    );
}
export default Hero;
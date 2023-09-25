import React from "react";
import Form from './Form';
import restaurant from '../Images/restaurant.jpg';
import chef from '../Images/restaurant chef B.jpg';
import food from '../Images/restauranfood.jpg';


export default function Reservations(props){

    return(
        <>
        <section className="ReservationSection">
         <article>
               <h1>Reservations</h1>
              <Form />
         </article>
       </section>
       <section>
            <article  className="formImages">
                <div>
                        <img src={restaurant} alt="table" className="formImages" height={"200px"} width={"200px"} />
                        <img src={chef} alt="chef" className="formImages"/>
                        <img src={food} alt="foodImage" className="formImages"/>
                </div>
         </article>
       </section>
        
        </>
        
    )
};
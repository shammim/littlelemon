import React from "react";

function Menu(){
    return(
        <>
         <div className="Menu-section">
            <section>
                <article>
                     <img  src="Logo.svg" alt="Littlelemon_logo"/>
                     <button> Order online</button>
                </article>
                <article>
                   <h2>Greek Salad</h2> 
                   <h3>The famous greek salad of crispy lettuce,peppers, olives and our chicago style feta, cheese, garnished with crunchy garlic and rosemary croutons</h3>
                   <p></p>
                    <h3>$12.90</h3>
                    <a href="Orderonline">Order delivery</a>
                </article>
            </section>
             
          </div>

        </>
    )
}
export default Menu;
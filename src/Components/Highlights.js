import React from "react";
import greekSalad from '../Images/greek salad.jpg'
import bruchetta from '../Images/bruchetta.svg'
import lemonDessert from '../Images/lemon dessert.jpg'
import deliveryIcon from '../Images/motorbike.png';
import Swal from "sweetalert2";

function Highlights(){
    const handleOrder = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#F4CE14',
            cancelButtonColor: '#495E57',
            confirmButtonText: 'Add to Cart'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Ordered!',
                'Your order is placed',
                'success'
              )
            }
          })
    }
    return(
        <>
        <div className="HighlightSection">
             <article className="highlightBlock">
                    <h2 className="highlightsHeading">The week specials!</h2>
                    <button className="highlightsButton">Online Menu</button>
             </article>
         <section>
             <article className="greekSalad">
                 <img className="img" src={greekSalad} alt="Greeksalad" width={"200px"} height={"200px"} align-items="center"/>
                 <div className="geekSaladDescription">
                      <div className="titleGeek">
                         <h3 className="titleGeekSalad">Geek Salad</h3> <p className="price">$12.99</p>
                       </div>
                      <p className="desc">The famous greek salad of crispy lettuce,peppers, olives and our chicago style feta, cheese,garnished with crunchy garlic and rosemary croutons.</p>
                     <button className="geeksaladLink" onClick={handleOrder}> Order now!</button><img className="deliveryIcon" src={deliveryIcon}alt="delivery_icon" width="20px" height="20px" />
                  </div>
             </article>
             <article className="Bruchetta">
                 <img className="img" src={bruchetta} alt="Bruchetta_image" width={"200px"} height={"200px"} aria-label="img"/>
                 <div className="bruchettaDescription">
                     <div className="titleBruc">
                          <h3 className="titleBruchetta">Bruchetta</h3> <p className="price">$5.99</p>
                     </div>
                     <p className="desc">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                     <button className="bruchettaLink" onClick={handleOrder}> Order Now</button><img className="deliveryIcon" src={deliveryIcon }alt="delivery_icon"  width="20px" height="20px" />
                 </div>
              </article>
              <article className="lemonDessert">
                 <img className="img" src={lemonDessert} alt="Lemondessert_image" width={"200px"} height={"200px"} aria-label="img"/>
                 <div className="lemonDessertDescription">
                     <div className="titleLemon">
                         <h3 className="titleLemonDessert">Lemon Dessert</h3> <p className="price">$5.00</p>
                     </div>
                     <p className="desc">This comes straight from grandma's recipe book, every last ingredient has been sourced and is an authentic as can be imagined.</p>
                     <button className="lemonLink" onClick={handleOrder}> Order Now </button>
                     <img className="deliveryIcon" src={deliveryIcon}alt="delivery_icon" width="20px" height="20px" aria-label="img"/>
                   </div>
             </article>
          </section>
     </div>
   </>
   )
}
export default Highlights;

import React from "react";
import Swal from "sweetalert2";
import greekSalad from '../Images/greek salad.jpg'
import bruchetta from '../Images/bruchetta.svg'
import lemonDessert from '../Images/lemon dessert.jpg'

export default function Orderonline(){
  const handleOrder = (id) => {
    console.log(id, 'id is clicked');
    Swal.fire({
        title: 'Are you sure?',
        text: "You want add item to the cart!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#F4CE14',
        cancelButtonColor: '#495E57',
        confirmButtonText: 'Yes, order it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Ordered!',
            'Your order has been processing.',
            'success'
          )
        }
      })
}
const Checkout = (id) => {
    console.log(id, 'id is clicked');
    Swal.fire({
        title: 'Checkout',
        text: "You want checkout!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#F4CE14',
        cancelButtonColor: '#495E57',
        confirmButtonText: 'Yes, order it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Checked out!',
            'Your order has been processing.',
            'success'
          )
        }
      })
}
  const [number, setNumber] = React.useState(1);
  function increment() {
    setNumber((prevNumber) => prevNumber + 1);
  }
  function decrement(){
    setNumber((prevNumber)=> prevNumber - 1);
  }
    return(
        <>
         <div className="OrderOnlineSection">
             <section className="greekSaladOrderonline">
                 <article className="greekOrder"> 
                     <img className="img" src={greekSalad} alt="Greeksalad" width={"200px"} height={"150px"} />
                     <h2 className="greekTitle">Greek Salad</h2> <p className="greekPrice">$12.90</p>
                     <p>The famous greek salad of crispy lettuce,peppers, olives and our chicago style feta, cheese, garnished with crunchy garlic and rosemary croutons</p>
                     <button type="submit" onClick={handleOrder}>Add to cart</button>
                      <div className="quantity">
                          <p data-test-id="currentNumber">{number}</p>
                         <button data-testid="add-one" onClick={increment}> + </button>
                         <button data-testid="minus-one" onClick={decrement}> - </button>
                     </div>
                 </article>
             </section>
             <section className="BruchettaOrderonline">
                 <article className="bruchettaOrder">
                     <img className="img" src={bruchetta} alt="Bruchetta_image" width={"200px"} height={"200px"} aria-label="img"/>
                     <h2 className="bruchettaTitle">Bruchetta</h2> <p className="BruchettaPrice">$7.90</p>
                     <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                     <button type="submit" onClick={handleOrder}>Add to cart</button>
                     <p data-test-id="currentNumber">{number} </p>
                     <button data-testid="add-one" onClick={increment}> + </button>
                     <button data-testid="minus-one" onClick={decrement}> - </button>
                  </article>
             </section>
             <section className="lemonDessertOrderonline">
                <article className="lemonDessertOrder">
                  <img className="img" src={lemonDessert} alt="Lemondessert_image" width={"200px"} height={"200px"} aria-label="img"/>
                    <h2 className="lemonDessertTitle">Lemon Dessert </h2><p className="lemonDessertPrice">$7.00</p>
                    <p> This comes straight from grandma's recipe book, every last ingredient has been sourced and is an authentic as can be imagined.</p>
                    <button type="submit" onClick={handleOrder}> Add to Cart</button>
                    <p data-test-id="currentNumber">{number} </p>
                    <button data-testid="add-one" onClick={increment}> + </button>
                    <button data-testid="minus-one" onClick={decrement}> - </button>
                </article>
             </section>
             <article>
                <button type="submit"  onClick={Checkout}>Checkout</button>
             </article>
          </div>
        </>
    )
}
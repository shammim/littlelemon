import React from "react"
import AndrewHill from '../Images/AndrewHill.jpg'
import RobinMathews from '../Images/Robin_Mathews.jpg'
import Sarah from '../Images/Sarah.jpg'

export default function Testimonials(props){
   return (
    <>
        <div >
          <div>
             <h2 className="testimonialTitle">{props.heading} </h2>
          </div>
          <section className="testimonialsBlock">
              <article className="andrewHill">
                <h4 className="reviewTitle"> Andrew Hill</h4>
                <div className="name">
                   <img src={AndrewHill} alt="AndrewHill_picture" height={"150px"} width={"150px"}/>
                   <h5 className="rating">⭐⭐⭐⭐⭐</h5>
                </div>
                <p className="reviewText">My family and I had a fantastic day at the Little Lemon Restaurant celebrating my birthday. The ambience of the restaurant created a warm and inviting setting that was ideal for the big occasion. The healthful and savoury meal options satisfied both my taste senses and my adherence to healthy eating.</p>
             </article>
             <article className="robinMathews">
                  <h4 className="reviewTitle"> Robin Mathews</h4>
                  <div className="name">
                     <img src={RobinMathews} alt="Robin_picture" height={"150px"} width={"150px"}/>
                     <h5 rating>⭐⭐⭐⭐</h5>
                 </div>
                  <p className="reviewText">Hosting my official meeting with a client at the Little Lemon Restaurant was a brilliant choice. The restaurant's sophisticated ambiance set the perfect tone for our discussions. The combination of professional atmosphere and delectable cuisine made for a successful and enjoyable business encounter..</p>
            </article>
            <article className="sarahMeghan">
             <h4 className="reviewTitle">Sarah Meghan</h4>
             <div className="name">
                <img src={Sarah} alt="Sarah_picture" height={"150px"} width={"150px"}/>
                <h5 rating>⭐⭐⭐⭐</h5>
             </div>
               <p className="reviewText">Arranging a get-together with friends at the Little Lemon Restaurant was a delightful experience. The restaurant's lively atmosphere set the perfect mood for our gathering. The menu offered a variety of delectable dishes that catered to everyone's preferences. The attentive staff and vibrant ambiance contributed to a memorable evening of laughter and camaraderie.</p>
            </article>

         </section>
    </div>
  </>
   )
};
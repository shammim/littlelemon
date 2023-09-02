import React from "react";
import './App.css';

export default function Testimonials(props){
   return (
    <>
        <div className="Testimonial-section">
          <div>
             <h2>{props.heading} </h2>
          </div>
          <section>
              <article>
                <img src="AndrewHill.jpg" alt="AndrewHill_picture"/>
                <h3> Andrew Hill</h3>
                <h4>⭐⭐⭐⭐⭐</h4>
                <p>My family and I had a fantastic day at the Little Lemon Restaurant celebrating my birthday. The ambience of the restaurant created a warm and inviting setting that was ideal for the big occasion. The healthful and savoury meal options satisfied both my taste senses and my adherence to healthy eating.</p>
             </article>
             <article>
                  <img src="Robin_Mathews.jpg" alt="Robin_picture"/>
                  <h3> Robin Mathews</h3>
                  <h4> ⭐⭐⭐⭐</h4>
                  <p>Hosting my official meeting with a client at the Little Lemon Restaurant was a brilliant choice. The restaurant's sophisticated ambiance set the perfect tone for our discussions. The combination of professional atmosphere and delectable cuisine made for a successful and enjoyable business encounter..</p>
            </article>
            <article>
               <img src="Roy_Turner.jpg" alt="RoyTurner_picture"/>
               <h3>Roy Turner</h3>
              <h4>⭐⭐⭐⭐⭐</h4>
              <p>Organizing an office lunch at the Little Lemon Restaurant was a fantastic decision. The restaurant's comfortable ambiance provided a relaxed backdrop for our team discussions. The diverse menu options catered to everyone's tastes, including my preference for healthy choices. The attentive service and seamless experience ensured our lunch meeting was both productive and enjoyable.</p>
            </article>
            <article>
             <img src="Sarah.jpg" alt="Sarah_picture"/>
             <h3>Sarah</h3>
             <h4>⭐⭐⭐⭐</h4>
             <p>Arranging a get-together with friends at the Little Lemon Restaurant was a delightful experience. The restaurant's lively atmosphere set the perfect mood for our gathering. The menu offered a variety of delectable dishes that catered to everyone's preferences. The attentive staff and vibrant ambiance contributed to a memorable evening of laughter and camaraderie.</p>
            </article>

         </section>
    </div>
  </>
        )
    };
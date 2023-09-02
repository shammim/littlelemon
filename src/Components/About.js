import React from "react";
import './App.css';

export default function About (props){
    return (
    <>
     <div className="About-section">
         <h2>{props.heading} </h2>
         <h2>{props.subHeading}</h2>
         
          <section>
              <article>
                  <p> Little lemon is owned by two Italian brothers, Mario and Adrian who moved to the United States to pursue their shared dream of owning a restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
             </article>
             <article>
                  <img src="Mario and Adrian A.jpg" alt="Owner_pictures"/>
                  <img src="Mario and Adrian B.jpg" alt="Owner_picture2"/>
             </article>
         </section>
     </div>
  </>
    )
};
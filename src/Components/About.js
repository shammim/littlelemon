import React from "react";
import MarioA from "../Images/Mario and Adrian A.jpg";
import MarioB from '../Images/Mario and Adrian b.jpg';
export default function About (){
    return (
    <>
     <div className="aboutSection">
         <h1 className="aboutusTitle">Little Lemon </h1>
         <h3 className="aboutusSubTitle">Chicago</h3>
          <section className="aboutusSection">
              <article className="aboutPara">
                   Little lemon is owned by two Italian brothers, Mario and Adrian who moved to the United States to pursue their shared dream of owning a restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
             </article>
             <article className="ownerImages">
                  <img className="ownerImage1" src={MarioA} alt="Owner_pictures" width={"300px"} height={"300px"}/>
                  <img className="ownerImage2" src={MarioB} alt="Owner_picture2"width={"300px"} height={"300px"}/>
             </article>
         </section>
     </div>
  </>
 )
};
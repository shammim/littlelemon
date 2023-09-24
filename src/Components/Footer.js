import React from "react";
import logo from '../Images/Logo .svg';
import Facebook from '../Images/facebook.png';
import Instagram from '../Images/instagram.png';
import Social from '../Images/social.png';

export default function Footer(){
    return(
        <>
          <Footer>
             <section className="btmSection">
                 <article>
                     <a href='/' className='logo'>
                      <img src={logo} alt="Logo" height={"150px"} width={"150px"}/>
                     </a>
                 </article>
                 <article>
                     <h3>Navigation items</h3>
                     <a href="/">Home</a>
                     <br/>
                     <a href="/About">About</a>
                     <br/>
                      <a href="/Highlights">Menu</a>
                 </article>
                 <article>
                        <h3>Social media Links</h3>
                        <a href='/'className='facebook' ><img src={Facebook} alt="facebookIcon" width={"30px"} height={"30px"}/></a>
                        <a href='/'className='Instagram' ><img src={Instagram} alt="instagramIcon" width={"30px"} height={"30px"}/></a>
                        <a href='/'className='Social' ><img src={Social} alt="SocialIcon" width={"30px"} height={"30px"}/></a>
                 </article>
                 <article>
                     <h3>About</h3>
                     <a href='#'>Address</a>
                     <br/>
                     <a href='#'>Phone</a>
                     <br/>
                     <a href='#'>Email</a>
                 </article>
             </section>
         </Footer>
      </>
    )
};

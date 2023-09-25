import React from "react";
import logo from '../Images/Logo .svg';
import Facebook from '../Images/facebook.png';
import Instagram from '../Images/instagram.png';
import Social from '../Images/social.png';

export default function Footer(){
    return(
        <>
          <Footer>
             <section className="footerSection">
                 <article>
                     <a href='/' className='logo'>
                      <img src={logo} alt="Logo" height={"150px"} width={"150px"}/>
                     </a>
                 </article>
                 <article className="navItems">
                     <h3>Navigation items</h3>
                     <a href="/">Home</a>
                     <br/>
                     <a href="/About">About</a>
                     <br/>
                      <a href="/Highlights">Menu</a>
                 </article>
                 <article className="SocialLinks">
                        <h3>Social media Links</h3>
                        <a href='/'className='facebook' ><img src={Facebook} alt="facebookIcon" width={"30px"} height={"30px"}/></a>
                        <a href='/'className='Instagram' ><img src={Instagram} alt="instagramIcon" width={"30px"} height={"30px"}/></a>
                        <a href='/'className='Social' ><img src={Social} alt="SocialIcon" width={"30px"} height={"30px"}/></a>
                 </article>
                 <article className="About">
                     <h3>About</h3>
                     <p>Address: EatStreet, Newyork, USA.</p>
                     <br/>
                     <p>Phone: +61-498-8484-667</p>
                     <br/>
                     <p>Email: littleelemon@gmail.com</p>
                 </article>
             </section>
         </Footer>
      </>
    )
};

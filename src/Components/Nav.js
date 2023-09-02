import React from "react";


function Nav(){
    return(
        <>
         <div className="main-nav" style={{backgroundColor:"lightgray", borderRadius:"16px", padding:"20px", textAlign:"center", }}>
             <img  src="Logo.svg" alt="Littlelemon_logo"/>
             <a href="/"> Home</a>
             <a href="/About">About</a>
             <a href="/Menu">Menu</a>
             <a href="/Reservations">Reservations</a>
             <a href="/OrderOnline">OrderOnline</a>
             <a href="/LogIn">LogIn</a>
          </div>
        </>
    )
}
export default Nav;
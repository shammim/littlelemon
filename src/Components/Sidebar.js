import React from "react";


function Sidebar(props){
    const asideStyle = {
        background: "azure",
        width: "calc(30%-10px)",
        marginLeft: "10px",
      }
    return (
        <aside
            style={asideStyle}
            className="sidebar-component">
            <ul>
                <li>Home </li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Orderonline</li>
                <li>LogIn</li>
            </ul>    
        </aside>
    )
}
export default Sidebar;
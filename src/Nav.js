import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false);
    useEffect(() =>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){ 
                handleShow(true);
            } else handleShow(false);
        });
        // return ()=>{
        //     window.removeEventListener("scroll");
        // };
    }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
        <img className="nav-logo" src="images/Netflix-logo.png" alt="Nav logo" />
        <img className="nav-avatar" src="images/Netflix-avatar.png" alt="Nav avatar" />
    </div>
  )
}

export default Nav
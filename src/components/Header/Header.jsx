import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css'
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header(){
    const [toggle, setToggle] = useState(false);
    let classname = "navbar " + (toggle ? "open" : "");
	
    
  return(
    <header>
		<a href="/" className="logo"><i className="ri-home-heart-fill"></i><span>Notes</span></a>

		<ul className={classname}>
			<li><NavLink to='/' >Home</NavLink></li>						
			<li><NavLink to='/contact' >Contact us</NavLink></li>						
			<li><NavLink to='/about' >About</NavLink></li>						
			<li><NavLink to='/announcement' >Announcement</NavLink></li>									
		</ul>

		<div className="main">
			<NavLink className="user" to='/login' >Sign In</NavLink>			
			<div className="bx bx-menu" onClick={() => {setToggle(!toggle)}} id="menu-icon">{!toggle ? <MenuIcon /> : <CloseIcon />}</div>
		</div>
	</header>
  )
}

export default Header;
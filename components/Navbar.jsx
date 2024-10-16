import React from 'react'

const Navbar = () => {
  return (
    <div>
    <header class="header">
		<div class="container">
			<a href="index.html" class="logo">Leroy</a>
			<input class="menu-btn" type="checkbox" id="menu-btn"/> 
			<label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
			<ul class="menu">
				<li><a href="index.html" class="active" className='hover:text-black-500'>Home</a></li>
				<li><a href="about-us.html">About </a></li>
				<li><a href="menu.html">Services</a></li>
				<li><a href="order-online.html">Contact</a></li>
        <li><a href="order-online.html">Portfolio</a></li>
			</ul>
		</div>
		
	</header>
    </div>
  )
}

export default Navbar

import React, { useState, useEffect } from 'react';
import { Button } from './Button.js';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []); 

	window.addEventListener('resize', showButton);

	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
						E-L-M-O
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times': 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active': 'nav-menu'}>
						<li className='nav-item'>
							<Link 
								to='/' 
								className='nav-links' 
								onClick={closeMobileMenu}
							>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link 
								to='/services' 
								className='nav-links' 
								onClick={closeMobileMenu}
							>
								YouTube
							</Link>
						</li>
						<li className='nav-item'>
							<Link 
								to='/products' 
								className='nav-links' 
								onClick={closeMobileMenu}
							>
								Twitter
							</Link>
						</li>
						<li className='nav-item'>
							<Link 
								to='/products' 
								className='nav-links' 
								onClick={closeMobileMenu}
							>
								Twitch
							</Link>
						</li>
						<li className='nav-item'>
							<Link 
								to='/sign-up' 
								className='nav-links-mobile' 
								onClick={closeMobileMenu}
							>
								My Description
							</Link>
						</li>
					</ul>
					{button && <Button ButtonStyle='btn--outline'>
						DESCRIPTION
					</Button>}
				</div>
			</nav>
		</>
	);
}

export default Navbar;
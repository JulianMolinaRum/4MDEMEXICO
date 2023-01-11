import React, { useEffect, useState } from 'react';
import Hamburger from 'hamburger-react';
import { updateLocalStorage } from '../../api/reduxActions/sampleActions';

import menuLogo from 'Assets/images/Shared/navigationLogo.png'

const BurgerMenu = ({ isOpen, setOpen, toggleLanguage, language }) => {

	const [offset, setOffset] = useState(0);
	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset);
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const changeLanguage = () => {
		const languageValue = updateLocalStorage();
		toggleLanguage(languageValue);
	}

	return (

		// Make header opaque ONLY on mobile and tablets
		<div className={(offset >= 50) ? 'header-container opaque' : 'header-container'}>
		{/* <div className='header-container'> */}
			<div className='header-logo-container'>
				<a href='/'>
					<img src={menuLogo}></img>
				</a>
			</div>
			<div className='hamburger-menu-wrapper'>
				<div className='switch-button'>
					<input className="switch-button-checkbox" type="checkbox" checked={language === 'spanish' ? false : true} onChange={changeLanguage}></input>
					<label className="switch-button-label" htmlFor=''>
						<span className="switch-button-label-span">ESP</span>
					</label>
				</div>

				<Hamburger color={"white"} toggled={isOpen} toggle={setOpen} size={42} />
			</div>
		</div>
	)
}

export default BurgerMenu;
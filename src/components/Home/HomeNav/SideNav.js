import React from 'react';

import { Link } from 'react-router-dom';

const writtenContent = { spanish: ['Proyectos', 'Servicios', 'Nosotros', 'Contacto'], english: ['Projects', 'Services', 'About Us', 'Contact Us'] };

const SideNav = ({ language }) => {
	const languageArray = writtenContent[language];

	return (
		<div className='sidenav-wrapper'>
			<Link to="/projects">{languageArray[0]}</Link>
			<Link to="/services">{languageArray[1]}</Link>
			<Link to="/about">{languageArray[2]}</Link>
			<Link to="/contact">{languageArray[3]}</Link>
		</div>
	)
}

export default SideNav;
import React, { useState, useEffect } from 'react';
import NotFound from './components/shared/NotFound';
import BurgerMenu from './components/shared/BurgerMenu';
import NavigationMenu from './components/shared/NavigationMenu';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects.js';
import Project from './pages/Project';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import {Helmet} from "react-helmet";

export default function App() {
	// Initial language set
	const lsLanguage = localStorage.getItem('language');
	const [isOpen, setOpen] = useState(false);
	const [currentLanguage, setLanguage] = useState('spanish');

	useEffect(() => {
		if (lsLanguage === null) {
			localStorage.setItem('language', 'spanish');
			setLanguage('spanish');
		}
	}, [])



	const updateLanguage = (lang) => {
		setLanguage(lang);
	}

	return (
		<div className='app-container'>
		<Helmet>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
		</Helmet>
			<Router>
				<BurgerMenu isOpen={isOpen} setOpen={setOpen} toggleLanguage={updateLanguage} language={currentLanguage} />
				<NavigationMenu isOpen={isOpen} setOpen={setOpen} language={currentLanguage} />
				<Routes>
					<Route exact path="/" element={<Home language={currentLanguage}/>} />
					<Route exact path="/projects" element={<Projects language={currentLanguage}/>} />
					<Route exact path="/project/:company" element={<Project language={currentLanguage}/>} />
					<Route exact path="/services" element={<Services language={currentLanguage}/>} />
					<Route exact path="/about" element={<AboutUs language={currentLanguage}/>} />
					<Route exact path="/contact" element={<Contact language={currentLanguage}/>} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	)
}

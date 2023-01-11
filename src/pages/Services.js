import React, { useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ServicesBackground from 'Assets/images/Shared/servicesBackground.png';
import CommonBackground from 'Assets/images/Shared/CommonBackground.png';

import TopArrow from '../components/shared/TopArrow';
import Footer from '../components/shared/Footer';

// Spanish Images
import CVLSpanish from 'Assets/images/Services/CVL.jpg';
import DWBSpanish from 'Assets/images/Services/DWB.jpg';
import MKTSpanish from 'Assets/images/Services/MKT.jpg';

// English Images
import CVLEnglish from 'Assets/images/Services/cvlEnglish.png';
import DWBEnglish from 'Assets/images/Services/webEnglish.png';
import MKTEnglish from 'Assets/images/Services/mktEnglish.png';

import DesignLogo from 'Assets/images/Services/DesignLogo.png';
import WebLogo from 'Assets/images/Services/WebLogo.png';


import { serviceInfo, landingInfo } from './translations/serviceInfoText';



const Services = ({ language }) => {
	let navigate = useNavigate();
	const top = useRef(null);
	const translatedInfo = landingInfo[language];
	const translatedServices = serviceInfo[language];

	useEffect(() => {
		if (language === 'spanish') {
			document.title = "4M - Servicios"
		} else {
			document.title = "4M - Services"
		}
	}, [language])

	const redirectToContact = () => {
		return navigate("/contact");
	}

	const renderServiceItems = (serviceArray) => {
		return serviceArray.map((item, num) => {
			if (num > 1) {
				return <li key={num}>{item}</li>
			}
		});
	}

	return (
		<div ref={top} className='services-container'>
			<TopArrow reference={top} />
			<div style={{ backgroundImage: `url(${ServicesBackground})` }} className='services-landing-container background-cover'>
				<div className='info-wrapper'>
					<h1>{translatedInfo[0]}</h1>
					<h2>{translatedInfo[1]}</h2>
					<p>{translatedInfo[2]}</p>
					<p>{translatedInfo[3]}<br />{translatedInfo[4]}</p>
					<h3>{translatedInfo[5].toUpperCase()}</h3>
				</div>
			</div>
			<div style={{ backgroundImage: `url(${CommonBackground})` }} className='services-wrapper background-cover'>
				<img src={language === 'spanish' ? CVLSpanish : CVLEnglish} className="service-image" />
				<div className='service-container'>
					<div className='service-header'>
						<h1>{translatedServices[0]}</h1>
						<img src={DesignLogo} />
					</div>
					<div className='service-wrapper'>
						<div className='card-container'>
							<h3>{translatedServices[1][0]}</h3>
							<p>{translatedServices[1][1]}</p>
							<div className='card-list-container'>
								<ul>
									{renderServiceItems(translatedServices[1])}
								</ul>
								<button className={language === 'spanish' ? 'learn-more-button-spanish' : ' learn-more-button-english'} onClick={redirectToContact}>{translatedServices[8]}</button>
							</div>
						</div>
						<div className='card-container'>
							<h3>{translatedServices[2][0]}</h3>
							<p>{translatedServices[2][1]}</p>
							<div className='card-list-container'>
								<ul >
									{renderServiceItems(translatedServices[2])}
								</ul>
								<button className={language === 'spanish' ? 'learn-more-button-spanish' : ' learn-more-button-english'} onClick={redirectToContact}>{translatedServices[8]}</button>
							</div>
						</div>
						<div className='card-container'>
							<h3>{translatedServices[3][0]}</h3>
							<p>{translatedServices[3][1]}</p>
							<div className='card-list-container'>
								<ul >
									{renderServiceItems(translatedServices[3])}
								</ul>
								<button className={language === 'spanish' ? 'learn-more-button-spanish' : ' learn-more-button-english'} onClick={redirectToContact}>{translatedServices[8]}</button>
							</div>
						</div>
					</div>
				</div>
				<img src={language === 'spanish' ? DWBSpanish : DWBEnglish} className="service-image" />
				<div>
					<div className='service-container'>
						<div className='service-header'>
							<h1>{translatedServices[4]}</h1>
							<img src={WebLogo} className="service-logo" />
						</div>
						<div className='service-wrapper'>
							<div className='card-container'>
								<h3>{translatedServices[5][0]}</h3>
								<p>{translatedServices[5][1]}</p>
								<div className='card-list-container'>
									<ul>
										{renderServiceItems(translatedServices[5])}
									</ul>
									<button className={language === 'spanish' ? 'learn-more-button-spanish' : ' learn-more-button-english'} onClick={redirectToContact}>{translatedServices[8]}</button>
								</div>
							</div>
							<div className='card-container'>
								<h3>{translatedServices[6][0]}</h3>
								<p>{translatedServices[6][1]}</p>
								<div className='card-list-container'>
									<ul>
										{renderServiceItems(translatedServices[6])}
									</ul>
									<button className={language === 'spanish' ? 'learn-more-button-spanish' : ' learn-more-button-english'} onClick={redirectToContact}>{translatedServices[8]}</button>
								</div>
							</div>
							<div className='card-container'>
								<h3>{translatedServices[7][0]}</h3>
								<p>{translatedServices[7][1]}</p>
								<div className='card-list-container'>
									<ul>
										{renderServiceItems(translatedServices[7])}
									</ul>
									<button className={language === 'spanish' ? 'learn-more-button-spanish' : ' learn-more-button-english'} onClick={redirectToContact}>{translatedServices[8]}</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img src={language === 'spanish' ? MKTSpanish : MKTEnglish} className="service-image" />
				<div className='services-footer-container'>
					<Footer language={language} />
				</div>
			</div>
		</div >
	)
}

export default Services;
import React, { useRef, useEffect } from 'react';
import Footer from '../components/shared/Footer';
import backgroundImage from 'Assets/images/Shared/aboutBackground.png';
import commonBackground from 'Assets/images/Shared/CommonBackground.png';
import TopArrow from '../components/shared/TopArrow';

import GeraImage from 'Assets/images/Shared/Gera.png';
import FirmaGera from 'Assets/images/Shared/FirmaGera.png';
import ParisImage from 'Assets/images/Shared/Paris.png';
import FirmaParis from 'Assets/images/Shared/FirmaParis.png';

import aboutUsTranslation from './translations/aboutUsText';


const AboutUs = ({ language }) => {
	const aboutUsTranslated = aboutUsTranslation[language];
	useEffect(() => {
		if (language === 'spanish') {
			document.title = "4M - Nosotros"
		} else {
			document.title = "4M - About Us"
		}
	}, [language]);

	const top = useRef(null);
	return (
		<div ref={top} style={{ minWidth: '300px' }}>
			<TopArrow reference={top} />
			<div style={{ backgroundImage: `url(${backgroundImage})` }} className='services-landing-container about-container background-cover'>
				<div className='about-intro'>
					<h1>{aboutUsTranslated[0]}</h1>
					<p style={{fontSize: '20px'}}>{aboutUsTranslated[1]}</p>
				</div>
			</div>
			<div style={{ backgroundImage: `url(${commonBackground})` }} className='founders-section-container background-cover'>
				<div className='founders-wrapper'>
					<div className='founder-info-section'>
						<div className='founder-info-wrapper'>
							<div className='divider'>
								<h1>{aboutUsTranslated[2]}</h1>
								<p>{aboutUsTranslated[3]}</p>
							</div>
							<div className='divider'>
								<h1>{aboutUsTranslated[4]}</h1>
								<p>{aboutUsTranslated[5]}</p>
							</div>
							<div className='divider last-info'>
								<h1>{aboutUsTranslated[6]}</h1>
								<p>{aboutUsTranslated[7]}</p>
							</div>
						</div>
						<div className='founder-image-section'>
							<div className='image-signature-container'>
								<div className='founder-wrapper'>
									<img className='profile' src={GeraImage} />
									<img className='signature' src={FirmaGera} />
								</div>
								<div className='founder-wrapper'>
									<img className='profile' src={ParisImage} />
									<img className='signature' src={FirmaParis} />
								</div>
							</div>
							<div className='about-founders'>
								<h1>{aboutUsTranslated[8]}</h1>
								<p>{aboutUsTranslated[9]}</p>
								<br/>
								{/* <p>{aboutUsTranslated[10]}</p> */}
							</div>
						</div>
					</div>
					<Footer language={language}/>
				</div>
			</div>
		</div>
	)
}

export default AboutUs;
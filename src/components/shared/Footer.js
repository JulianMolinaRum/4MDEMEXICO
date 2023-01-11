import React from 'react';
import spanishPDF from 'Assets/PDF/Privacy_spanish.pdf';
import englishPDF from 'Assets/PDF/Privacy_english.pdf';

const translation =
{
	spanish:
		[
			"Direcciónes",
			"Contacto",
			"Social",
			"Información Básica",
			"Aviso de Privacidad",
			"spanishPDF"

		],
	english:
		[
			"Get Directions",
			"Contact Us",
			"Follow Us",
			"Basic Information",
			"Privacy Policy",
			"englishPDF"
		]
}

const Footer = ({ language }) => {
	let currentPDF;
	if (language === 'spanish')
		currentPDF = spanishPDF;
	else
		currentPDF = englishPDF;

	const translations = translation[language];
	// const privacyPDF = 

	return (
		<div className='footer-container'>
			<div className='footer-wrapper'>
				<div className='footer-content-container'>
					<p>4M de México, El Jacal 11</p>
					<p>La Granja, 76180 Santiago de Querétaro</p>
					<p>Querétaro, México</p>
					<a href='https://www.google.com/maps/dir//El+Jacal+11,+La+Granja,+76180+Santiago+de+Quer%C3%A9taro,+Qro.,+Mexico/@20.5718409,-100.4074316,21z/data=!4m9!4m8!1m0!1m5!1m1!1s0x85d3453b3f6344c5:0xa48d07a55aa0533a!2m2!1d-100.4073115!2d20.5719003!3e0' target="_blank" className='footer-padding no-decoration footer-link'>{translations[0]} →</a>
				</div>
				<div className='footer-content-container'>
					<p>{translations[3]}</p>
					<a className='contact-tag' href="mailto:contacto@4mdemexico.com.mx">
						<p>contacto@4mdemexico.com.mx</p>
					</a>
					<a className='contact-tag' href="https://api.whatsapp.com/send?phone=5214423290703&text=Hola!%20%C2%BFC%C3%B3mo%20estas?%C2%BFEn%20que%20podemos%20ayudarte?" target="_blank">
						<p>+52 1 442 329 0703</p>
					</a>
					<a href="https://api.whatsapp.com/send?phone=5214423290703&text=Hola!%20%C2%BFC%C3%B3mo%20estas?%C2%BFEn%20que%20podemos%20ayudarte?" target="_blank" className='footer-padding no-decoration footer-link'>{translations[1]} →</a>
				</div>
				<div className='footer-content-container'>
					<p>{translations[2]}</p>
					<a className='footer-link' href='https://www.instagram.com/4m.demexico/?igshid=YmMyMTA2M2Y=' target="_blank">Instagram</a >
					<a className='footer-link' target="_blank"> </a>
					<a href='https://facebook.com/4MdeMexico/' target="_blank" className='footer-link'>Facebook</a>
					<a className='footer-link' href='https://linkedin.com/' target="_blank">LinkedIn</a>
				</div>
			</div>
			<div className='footer-divider'>
				<p>©2022 4M</p>
				<a href={currentPDF} target="_blank" className="footer-padding privacy-font">{translations[4]}</a>
			</div>
		</div>
	)
}

export default Footer;

import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

import TopArrow from '../components/shared/TopArrow';
import Footer from '../components/shared/Footer';
import { useForm } from '../components/shared/FormHook';
import BackgroundImage from 'Assets/images/Shared/ContactBackground.jpg';
import CommonBackground from 'Assets/images/Shared/CommonBackground.png';

import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


import contactUsTranslation from './translations/contactUsText.js';

const mapStyles = {
	width: '100%',
	height: '100%'
};

const translation = {
	spanish: "Abrir En Mapas", english: "Open In Maps"
}

const Contact = (props) => {
	const { language } = props;
	const contactTranslated = contactUsTranslation[language];
	const top = useRef(null);
	const [activeMarket, setActiveMarker] = useState({});
	const [showWindow, setShowWindow] = useState(true);

	useEffect(() => {
		document.title = "4M - Contact"
	}, [])

	const { formState, handleInputChange } = useForm(
		{
			name: "",
			email: "",
			reason: "",
			message: "",
		}
	)

	const { name, email, reason, message } = formState;

	const handleSubmit = (e) => {
		e.preventDefault();
		const finalFormData = {
			access_key: process.env.CONTACT_FORM_API_KEY,
			subject: "New contact form",

			name: name,
			email: email,
			reason: reason,
			message: message,
		}
		axios({
			method: 'post',
			url: 'https://api.web3forms.com/submit',
			data: finalFormData,
			headers: { 'Content-Type': 'multipart/form-data' }
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	}
	const onMarkerClick = (props, marker, e) => {
		setActiveMarker(marker);
		setShowWindow(true);
	}

	return (
		<div ref={top}>
			<TopArrow reference={top} />
			<div style={{ backgroundImage: `url(${BackgroundImage})` }} className='services-landing-container background-cover align-contact-section'>
				<div className='contact-intro'>
					<h1>{contactTranslated[0]}</h1>
					{/* <h2>{contactTranslated[1]}</h2> */}
					<p>{contactTranslated[2]}</p>
				</div>
			</div>
			<div style={{ backgroundImage: `url(${CommonBackground})` }} className='background-cover contact-container'>
				<h1 style={{ fontSize: '5rem', paddingTop: '150px' }}>{contactTranslated[8]}</h1>
				<h2 style={{ fontSize: '2rem' }}>{contactTranslated[9]}</h2>
				<div className='contact-content-container'>
					<form onSubmit={handleSubmit} className='contact-form-wrapper'>
						<div className='input-item-container'>
							<label htmlFor='name'>{contactTranslated[3]}</label>
							<input
								required
								id="name"
								type="text"
								name="name"
								value={name}
								onChange={handleInputChange}
							/>
						</div>
						<div className='input-item-container'>
							<label htmlFor='email'>{contactTranslated[4]}</label>
							<input
								required
								type="email"
								name="email"
								value={email}
								onChange={handleInputChange}
							/>
						</div>
						<div className='input-item-container'>
							<label htmlFor='reason'>{contactTranslated[5]}</label>
							<input
								required
								type="text"
								name="reason"
								value={reason}
								onChange={handleInputChange}
							/>
						</div>
						<div className='input-item-container'>
							<label htmlFor='message'>{contactTranslated[6]}</label>
							<textarea
								required
								type="text"
								name="message"
								value={message}
								onChange={handleInputChange}
							/>
						</div>
						<button type='submit'>{contactTranslated[7]}</button>
					</form>
					<div className='contact-map-container'>
						<Map
							google={props.google}
							zoom={14}
							style={mapStyles}
							initialCenter={
								{
									lat: 20.57190576503778, 
									lng: -100.40731507932479
								}
							}
						>
							<Marker
								onClick={onMarkerClick}
								name={'Our Headquarters'}
							/>
							<InfoWindow visible={showWindow} marker={activeMarket} onClose={() => { setShowWindow(false) }}>
								<div>
									<a className='map-action-button' href="https://www.google.com/maps/dir//El+Jacal+11,+La+Granja,+76180+Santiago+de+Quer%C3%A9taro,+Qro.,+Mexico/@20.5718409,-100.4074316,21z/data=!4m9!4m8!1m0!1m5!1m1!1s0x85d3453b3f6344c5:0xa48d07a55aa0533a!2m2!1d-100.4073115!2d20.5719003!3e0" target="_blank">{translation[language]}</a>
								</div>
							</InfoWindow>
						</Map>
					</div>
				</div>
				<div className='contact-footer-container'>
					<Footer language={language} />
				</div>
			</div>
		</div >
	)
}

export default GoogleApiWrapper({
	apiKey: process.env.GOOGLE_MAPS_API_KEY
})(Contact);
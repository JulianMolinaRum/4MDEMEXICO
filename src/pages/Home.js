import React, { useEffect, useState } from 'react';
import backgroundVideo from 'Assets/videos/home_page_video.mp4';

import SideNav from '../components/Home/HomeNav/SideNav';
import SocialNav from '../components/Home/SocialNav';
import PlayButton from '../components/Home/PlayButton';

import JobFairModal from '../components/Home/jobFairModal';


const Home = ({ language }) => {
	const jobFair = localStorage.getItem('job-fair');
	const [showModal, setShowModal] = useState(true);
	useEffect(() => {
		if (language === 'spanish') {
			document.title = "4M - Inicio"
		} else {
			document.title = "4M - Home"
		}
	}, [language]);

	return (
		<div className='home-container align-center'>
			{/* Background video */}
			{/* <video id="background-video" autoPlay muted> */}
			<PlayButton />
		{/*{!jobFair && showModal ? <JobFairModal callbackFunction={setShowModal} language={language} /> : null}*/}
			<video id="background-video" autoPlay="autoplay" muted loop playsinline="playsinline">
				<source src={backgroundVideo} type='video/mp4' />
			</video>
			<div className='homepage-nav-container'>
				<div id="desktop-nav" className='desktop-nav-wrapper'>
					<SideNav language={language} />
					<SocialNav />
				</div>
			</div>
		</div>
	)
}

export default Home;

import React, { useState, useRef, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '../components/shared/Footer';
import TopArrow from '../components/shared/TopArrow';
import { useNavigate } from 'react-router-dom';

import PariclinLogo from 'Assets/images/CompanyLogo/PariclinLogo.png';
import ParicoachLogo from 'Assets/images/CompanyLogo/ParicoachLogo.png';
import MC4ULogo from 'Assets/images/CompanyLogo/MasterCleanLogo.png';
import GreenFieldLogo from 'Assets/images/CompanyLogo/GreenFieldLogo.png';
import MMELogo from 'Assets/images/CompanyLogo/mmeLogo.png';
import MarkesitasLogo from 'Assets/images/CompanyLogo/MarkemanLogo.png';
import ArcadiaLogo from 'Assets/images/CompanyLogo/ArcadiaLogo.jpg';
import ScrollDownGif from 'Assets/images/Shared/scrollGif.gif';
import backgroundImageURL from 'Assets/images/Shared/CommonBackground.png';

const companies = [
	{ name: "MasterClean4U", spanish: "Servicios de Limpieza", english: "Powerwash & Janitorial" },
	{ name: "MME", spanish: "Corporativo de Empresas", english: "Corporate Companies" },
	{ name: "Pariclin", spanish: "Servicios de limpieza", english: "Janitorial Services" },
	{ name: "Paricoach", spanish: "Desarrollo Integral Personal y Empresarial.", english: "Comprehensive Personal and Business Development." },
	{ name: "GreenField", spanish: "Productos naturales orgánicos", english: "Organic Products" },
	{ name: "Markeman", spanish: "Y sus increíbles marquesitas.", english: "and their incredible Markesitas" },
	{ name: "Arcadia", spanish: "Servicios de paisajismo.", english: "Landscaping Services." }

];

const callToAction = { spanish: "Da click para más detalles.", english: "Click for more details" };

const landingInfo = {
	spanish: [
		"PROYECTOS",
		"NUESTROS CLIENTES",
		"Mira a quienes hemos apoyado a hacer sus ideas una realidad.",
		"Somos una empresa dedicada a brindar soluciones de publicidad, marketing, imagen corporativa y de marca, desarrollo web, administración de redes sociales y creación de campañas.",
		"Da click en ",
		"SERVICIOS",
		"para más detalles."
	],
	english: [
		"PROJECTS",
		"CUSTOMERS",
		"We specialize in Brand Creation and awareness. Below are some examples of what we've created for our clients and what we can do for you.",
		"Our company is dedicated to providing advertising solutions, corporate image, web page development, social media management, creation of advertising campaigns, among others.",
		"Visit our ",
		"Services",
		"page to view them all."
	]
}

const Projects = ({ language }) => {

	const navigate = useNavigate();
	const myRef = useRef(null);
	const top = useRef(null);

	useEffect(() => {
		if (language === 'spanish') {
			document.title = "4M - Proyectos"
		} else {
			document.title = "4M - Projects"
		}
	}, [language, companyIndex])


	const [companyIndex, setCompanyIndex] = useState(0);
	const translatedInfo = landingInfo[language];
	const currentCompany = companies[companyIndex];



	const onClickItem = (e) => {
		return navigate(`/project/${companies[e].name}`);
	}

	const onChange = (e) => {
		setCompanyIndex(e);
	}

	const scrollTo = () => myRef.current.scrollIntoView({ behavior: "smooth" });
	return (
		<div ref={top} className='project-page-container' >
			<TopArrow reference={top} />
			<div className='project-page-wrapper align-center'>
				<div style={{ backgroundImage: `url(${backgroundImageURL})` }} className='project-page-content'>
					<div className='info-section align-center'>
						<div className='info-page-intro align-center'>
							<h1>{translatedInfo[0]}</h1>
							<h2>{translatedInfo[1]}</h2>
							<span className='description-wrapper'>{translatedInfo[2]}</span>
							<img className='scroll-gif-projects' src={ScrollDownGif} onClick={scrollTo}></img>
						</div>
						<div ref={myRef} className='client-section-wrapper'>
							<div className='carousel-written-content'>
								<div>
									<p>{translatedInfo[3]}</p>
									<p className='project-call-to-action'>{translatedInfo[4]}<a href='/services'>{translatedInfo[5]}</a> {translatedInfo[6]}</p>
								</div>
								<div className='project-company-info'>
									<span className='company-name'>{currentCompany.name}</span>
									<hr className="solid"></hr>
									<span className='company-description'>{currentCompany[language]}</span>
								</div>
							</div>
							<div className='carousel-container'>
								<Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} infiniteLoop={true} autoPlay={true} interval={6000}>
									<div>
										<img src={MC4ULogo} />
										<p className="legend">{callToAction[language]}</p>
									</div>
									<div>
										<img src={MMELogo} />
										<p className="legend">{callToAction[language]}</p>
									</div>
									<div>
										<img src={PariclinLogo} />
										<p className="legend">{callToAction[language]}</p>
									</div>
									<div>
										<img src={ParicoachLogo} />
										<p className="legend">{callToAction[language]}</p>
									</div>
									<div>
										<img src={GreenFieldLogo} />
										<p className="legend">{callToAction[language]}</p>
									</div>
									<div>
										<img src={MarkesitasLogo} />
										<p className="legend">{callToAction[language]}</p>
									</div>
									<div>
										<img src={ArcadiaLogo} />
										<p className="legend">{callToAction[language]}</p>
									</div>
								</Carousel>
							</div>
							<div className='project-footer'>
								<Footer language={language} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div >
	)
}

export default Projects;
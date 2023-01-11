import React, { useRef, useEffect } from 'react';
import { useParams } from "react-router-dom";
import projectsList from '../components/Projects/projectList';
import RenderWebSection from '../components/Projects/renderWebSection';
import SlideShow from '../components/Projects/slideShow';
import NotFound from '../components/shared/NotFound';
import TopArrow from '../components/shared/TopArrow';
import Footer from '../components/shared/Footer';
import { useNavigate } from 'react-router-dom';

import backgroundImage from 'Assets/images/Shared/CommonBackground.png';

const headerLanguage = { spanish: ["PROYECTOS", "CLIENTES", "Diseño y programación de ", "pagina web."], english: ["PROJECTS", "CUSTOMERS", "Design and programming of ", "Website."] }


const Project = ({ language }) => {
	const { company } = useParams();
	const navigate = useNavigate();
	const top = useRef(null);
	const translatedHeader = headerLanguage[language];
	useEffect(() => {
		document.title = "4M - Project"
		// Scrolls into view
		top.current.scrollIntoView({ behavior: "smooth" });
	}, [company]);

	const companyDirectory = projectsList[language];
	const selectedCompany = companyDirectory[company];

	const renderAssetImages = () => {
		return selectedCompany.assets.map((item, key) => {
			return <img key={key} src={require(`Assets/images/companies/${company}/${item}`).default} className="asset-image" loading="lazy" />
		});
	}

	const navigateCompany = (value) => {
		return navigate(`/project/${selectedCompany[value]}`);
	}

	const CheckForPage = () => {
		if (selectedCompany !== undefined) {
			return (
				<div ref={top} style={{ backgroundImage: `url(${backgroundImage})` }} className='project-container'>
					<TopArrow reference={top} />
					<div className='project-wrapper'>
						<div className='project-header'>
							<h1>{translatedHeader[0]}</h1>
							<h2>{translatedHeader[1]}</h2>
						</div>
						<div className='project-description'>
							<img src={require(`Assets/images/CompanyLogo/${selectedCompany.logo}`).default} className='project-logo' loading="lazy" />
							<div className='project-info-container'>
								<span className='_name'>{selectedCompany.name}</span>
								<span className='_title'>{selectedCompany.title}</span>
								<span className='_description'>{selectedCompany.purpose}</span>
								<span className='_description'>{selectedCompany.service}</span>
							</div>
						</div>
						{selectedCompany.webInfo ? <RenderWebSection web={translatedHeader[3]} desc={translatedHeader[2]} name={company} info={selectedCompany.webInfo} /> : null}
						{selectedCompany.assets ?
							// <div className='asset-container'>
							<div className={selectedCompany.assets.length === 1 ? "asset-container single-asset" : "asset-container"}>
								<p className='asset-description'>{selectedCompany.assetDescription}</p>
								{renderAssetImages()}
								{selectedCompany.phoneView ?
									<div className='image-phone-view'>
										<img src={require(`Assets/images/companies/${company}/${selectedCompany.phoneView}`).default} className="_image" loading="lazy" />
									</div>
									: null
								}
								{selectedCompany.slideShow ? <SlideShow name={company} array={selectedCompany.slideShow} /> : null}
							</div>
							: null
						}
						{
							selectedCompany.prev && selectedCompany.next ?

								<div className='next-company'>
									<a onClick={() => navigateCompany("prev")}>{'\u2190'} {selectedCompany.prev}</a>
									<a onClick={() => navigateCompany("next")}>{selectedCompany.next} {'\u2192'}</a>
								</div> : null
						}
						<Footer language={language} />
					</div>
				</div>
			)
		} else {
			return <NotFound />
		}
	}

	return CheckForPage();
}

export default Project;
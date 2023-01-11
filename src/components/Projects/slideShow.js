import React from 'react';
import { Slide } from 'react-slideshow-image';

const SlideShow = ({ name, array }) => {

	const displaySlideShowImages = () => {
		return array.map((item, key) => {
			const tempImage = require(`Assets/images/companies/${name}/${item}`).default;
			return (
				<div className='each-slide' key={key}>
					<div style={{backgroundImage: `url(${tempImage})`}}>
					</div>
				</div>
			)
		})
	}
	return (
		<div className='slideshow-container'>
			<Slide easing="ease">
				{displaySlideShowImages()}
			</Slide>
		</div>
	)
}

export default SlideShow;
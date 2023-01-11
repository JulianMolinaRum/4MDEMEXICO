import React from 'react';

const RenderWebImages = ({ info, name, desc, web }) => {

	const renderImages = () => {
		return info.webImages.map((item, key) => {
			return <img src={require(`Assets/images/companies/${name}/${item}`).default} className="web-image" key={key} />
		});
	}
	return (
		<div>
			{!info.hideURL ?
				<p className='company-website-url'>{desc}
					<a href={info.url} target="_blank">{web}</a></p>
				: <div></div>}
			{renderImages()}
		</div>
	)
}

export default RenderWebImages;
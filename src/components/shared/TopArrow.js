import React, { useState, useEffect } from 'react';

const TopArrow = ({ reference }) => {
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset);
		// clean up code
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const callbackFunction = () => reference.current.scrollIntoView({ behavior: "smooth" });

	return (
		<div className={offset >= 100 ? 'top-arrow' : 'hidden'} onClick={callbackFunction}>
			<p>▲</p>
		</div>
	)
}

export default TopArrow;
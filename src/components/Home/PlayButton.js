import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'


const PlayButton = () => {
	const [isOpen, setOpen] = useState(false)
	return (
		<div className="play-button-container">
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="jACsJfvQPfo" onClose={() => setOpen(false)} />
			<a onClick={() => setOpen(true)} href="#" title="Play video" className="play"></a>
			{/* <button className="button play"></button> */}
		</div>
	)
}

export default PlayButton;
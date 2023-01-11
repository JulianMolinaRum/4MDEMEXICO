import React, { useState } from 'react';

import JobFair from 'Assets/images/Shared/JobFair.jpeg';

const translatedText = { spanish: ["Cerrar", "No volver a mostrar"], english: ["Close", "Don't show again"] };


const JobFairModal = ({ language, callbackFunction }) => {
	const [input, setInput] = useState(false);
	let translated = translatedText[language];

	const toggleLocalStorage = (e) => {
		e.preventDefault();
		if (input) localStorage.setItem('job-fair', true);
		callbackFunction(false);
	}

	return (
		<div className='job-fair-container'>
			<button className="close" onClick={toggleLocalStorage}>
				&times;
			</button>
			<img src={JobFair} className="image" />
			<div className='button-container'>
				<form onSubmit={toggleLocalStorage}>
					<div>
						<input type="checkbox" name="choice" onChange={(e) => { setInput(!input) }} value={input}></input>
						<label htmlFor="choice">{translated[1]}</label>
					</div>
					<button type='submit'>{translated[0]}</button>
				</form>
			</div>
		</div>
	)
};

export default JobFairModal;
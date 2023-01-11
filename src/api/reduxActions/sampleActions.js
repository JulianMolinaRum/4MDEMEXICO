/*You can achive this exact behavior within an onClick call. 
		However this will clean up the codebase if the project gets to big. */

export const updateLocalStorage = () => {
	const language = localStorage.getItem('language');

	if(language === 'spanish'){
		localStorage.setItem('language', 'english')
	}else{
		localStorage.setItem('language', 'spanish')
	}

	return localStorage.getItem('language');
}
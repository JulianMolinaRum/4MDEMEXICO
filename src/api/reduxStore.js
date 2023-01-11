import { configureStore } from '@reduxjs/toolkit';
import languageReducers from './reduxReducers/languageReducers.js';

const store = configureStore({
	reducer: {
		language: languageReducers
	}
});

export default store;
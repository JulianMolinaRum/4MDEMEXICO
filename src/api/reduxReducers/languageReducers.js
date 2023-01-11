import { createSlice } from '@reduxjs/toolkit'

const sampleSlice = createSlice({
	name: 'sample',
	initialState: { language: 'spanish'},
	reducers: {
		toggleLanguage(state) {
			if(state.language === 'spanish'){
				state.language = 'english'
			}else{
				state.language = 'spanish'
			}
		},
		
	}
})


export const { toggleLanguage } = sampleSlice.actions;
export default sampleSlice.reducer;
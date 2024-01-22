/***
 * Global common states should be added here. For redux reference: https://redux.js.org/introduction/getting-started
 */
import { createSlice } from '@reduxjs/toolkit';

interface CommonState {
	sidebarVisible: boolean;
}

const initialState: CommonState = {
	sidebarVisible: true,
}

const commonSlice = createSlice({
	name: 'common',
	initialState,
	reducers: {
		toggleSidebarVisibility(state) {
			state.sidebarVisible = !state.sidebarVisible;
		},
	}
})

export const { toggleSidebarVisibility } = commonSlice.actions;
export default commonSlice.reducer;

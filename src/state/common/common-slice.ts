/***
 * Global common states should be added here. For redux reference: https://redux.js.org/introduction/getting-started
 */
import { createSlice } from '@reduxjs/toolkit';

interface CommonState {
	sidebarMinified: boolean;
	sidebarVisible: boolean;
}

const initialState: CommonState = {
	sidebarMinified: false,
	sidebarVisible: true,
}

const commonSlice = createSlice({
	name: 'common',
	initialState,
	reducers: {
		toggleSidebarVisibility(state) {
			state.sidebarVisible = !state.sidebarVisible;
		},
		toggleSidebarMinified(state) {
			state.sidebarMinified = !state.sidebarMinified;
		}
	}
})

export const { toggleSidebarVisibility, toggleSidebarMinified } = commonSlice.actions;
export default commonSlice.reducer;

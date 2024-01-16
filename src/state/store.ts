/***
 * Redux store, plug state slices here to activate them
 */

import { configureStore } from '@reduxjs/toolkit';
import commonReducer from '@/state/common/common-slice'

export const store = configureStore({
	reducer: {
		common: commonReducer
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
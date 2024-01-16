'use client'

import { Provider } from 'react-redux';
import { NextUIProvider } from '@nextui-org/react';
import { store } from '@/state/store';

export default function AppProviders({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Provider store={store}>
			<NextUIProvider>
				{children}
			</NextUIProvider>
		</Provider>
	);
}

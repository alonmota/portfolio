import Link from 'next/link';
import { APP_NAME } from '@/constants/values';
import { HiMenu } from 'react-icons/hi';
import { useAppDispatch } from '@/app/(core)/hooks';
import { toggleSidebarVisibility } from '@/state/common/common-slice';
import Button from '@/components/button'


export default function Header() {
	const dispatch = useAppDispatch();

	function _toggleSidebarVisibility() {
		dispatch(toggleSidebarVisibility())
	}

	return (
		<header className="flex flex-row w-full py-1 bg-dark-1 text-light bg-opacity-90">
			<Button onClick={_toggleSidebarVisibility} className='hover:bg-neutral p-2 rounded-full h-10 text-large'><HiMenu /></Button>
			<Link
				title={'Home'}
				className="flex flex-grow justify-center font-sans text-lg font-semibold self-center transition click:scale-125"
				href={'/'}
			>
				<h1>
					{APP_NAME}
				</h1>
			</Link>
		</header>
	);
}
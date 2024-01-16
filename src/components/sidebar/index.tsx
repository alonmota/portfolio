import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement, useState } from 'react';
import { GoHome, GoBriefcase, GoChecklist, GoLog, GoGear, GoChevronRight, GoChevronLeft, GoBookmark  } from 'react-icons/go';
import Button from '@/components/button';

export default function Sidebar({visible}: { visible: boolean }) {
	const currentPath = usePathname()
	const [minified, setMinified] = useState(true)
	
	const routes: { path: string, name: string, icon: ReactElement }[] = [
		{ path: '/', name: 'Página inicial', icon: <GoBookmark /> },
		{ path: '/home', name: 'Home', icon: <GoHome /> },
		{ path: '/negocios', name: 'Negócios', icon: <GoBriefcase /> },
		{ path: '/tarefas', name: 'Tarefas', icon: <GoChecklist /> },
		{ path: '/relatorios', name: 'Relatorios', icon: <GoLog /> },
		{ path: '/configuracoes', name: 'Configurações', icon: <GoGear /> },
	]
	

	return (
		<>
			<div
				id="sidebar"
				className={`
					z-10 relative h-full bg- max-w-fit
					md:relative md:flex
					transition-all duration-800 ${visible ? 'w-[300px]' : 'w-0'} 
					ease-linear
				`}
			>
				<nav className='overflow-hidden mr-2'>
					<ul className="flex flex-col justify-start overflow-hidden">
						{
							routes.map(route => <li
								key={route.path}
							>
								<Button>
									<Link
										title={route.name}
										className={`${isPathActive(route.path)} flex flex-row whitespace-nowrap align-middle justify-start hover:underline hover:bg-neutral group rounded-full`}
										href={route.path}
									>
										<div className='flex flex-col justify-center p-2 text-large'>{route.icon}</div>
										<div className={`
												overflow-hidden max-w-fit
												transition-all duration-1000 ${minified ? 'w-0' : 'w-[120px]'}
											` }>
											<div className={`p-2`}>
												{route.name}
											</div>
										</div>
											
									</Link>
								</Button>
							</li>
							)
						}
					</ul>
				</nav>
				<>
					{
						visible && 
						<Button 
							className='absolute top-0 -right-[4px] bg-dark1  py-3 rounded-tr-2xl rounded-br-2xl text-[10px] bg-dark-1'
							title='Expand Sidebar' onClick={() => setMinified(!minified)}>
							{
								minified ? <GoChevronRight /> : <GoChevronLeft />
							}
						</Button>

					}
				</>
			</div>
		</>
	);

	function isPathActive(path: string): string {
		return `link ${currentPath === path ? 'font-bold' : ''}`
	}
}
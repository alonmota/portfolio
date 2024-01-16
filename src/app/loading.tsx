import {Skeleton} from '@nextui-org/react';

export default function Loading() {
	return <div className="flex w-full h-full items-center gap-3 bg-dark-gradient">
		<div>
			<Skeleton className="flex rounded-full w-12 h-12"/>
		</div>  
		<div className="w-full flex flex-col gap-2">
			<Skeleton className="h-3 w-3/5 rounded-lg"/>
			<Skeleton className="h-3 w-4/5 rounded-lg"/>
		</div>
	</div>
}
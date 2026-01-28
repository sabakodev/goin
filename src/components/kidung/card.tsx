import { PlayIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'


export default function KidungCard({ title, category, slug }: { title: string, category: string, slug: string }) {
	return (
		<Link href={`/kidung/${slug}`} className="bg-primary-light hover:bg-primary-lighter rounded-lg W-full sm:w-50 lg:w-58 h-42 shadow-sm hover:shadow-lg flex flex-col justify-between p-4 transition duration-300">
			<h2 className="font-medium text-xl">{title}</h2>
			<div className="flex justify-between items-center">
				<span className="text-neutral-500 text-sm">{category}</span>
				<div className="transition duration-300 border-2 border-transparent hover:border-primary-dark hover:bg-black/[.04] rounded-lg py-2 px-4">
					<PlayIcon className="size-6 text-primary-dark" />
				</div>
			</div>
		</Link>
	)
}
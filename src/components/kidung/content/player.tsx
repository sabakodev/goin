import { PlayIcon } from "@heroicons/react/24/solid"

export default function KidungPlayer({ embed }: { embed: string }) {
	return (
		<>
			{
				embed === '' ? null : <iframe className="mt-4 max-w-sm lg:max-w-7xl" width="560" height="315" src={embed} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
			}
			<div className="my-8 rounded-full bg-neutral-900 hover:bg-neutral-700 py-2 px-4 space-x-2 flex cursor-pointer shadow-sm hover:shadow-lg transition duration-300">
				<PlayIcon className="size-6 text-secondary" />
				<span className="text-primary font-semibold">Putar Contoh Nada</span>
			</div>
		</>
	)
}
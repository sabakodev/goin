import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import Link from "next/link"

export default function IntroductionCard() {
	const fact = [
		'Aliansi Bisnis dan Servis (ABS) dibentuk sebagai ruang komunikasi dan kolaborasi para pekerja dan pengusaha dalam GOI.',
		'Tempat berdiskusi produk, servis, atau pekerjaan professional; Sebagai tempat sharing, bertanya, dan jual & beli.',
		'ABS dibentuk atas blessings dari Romo Presbyter Yakobus (Js. Petrus & Paulus).',
		<div className="flex flex-col space-y-8">
			<div>Untuk sementara ABS di kelola oleh Administrator dalam Komunitas GOIN.</div>
			<Link href="/" className="underline flex">Tentang GOIN <ArrowUpRightIcon className="size-4" /></Link>
		</div>,
	]

	return (
		<div className="text-blue-lighter pt-8 pb-16">
			<div className="max-w-6xl mx-auto">
				<div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 justify-items-center font-medium text-md">
					{fact.map((content, index) => (
						<div key={index} className="cursor-crosshair bg-true-blue flex flex-col justify-between w-64 h-64 shadow-sm hover:shadow-lg transition duration-300 rounded-md p-6">
							<div className="border-2 border-blue-lighter rounded-full h-8 w-8 flex justify-center items-center">{index + 1}</div>
							<div>{content}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
import Image from "next/image"
import Link from "next/link"

export default function PoweredBy({ business = false }: { business?: boolean }) {
	return (
		<div className={`fixed top-0 right-0 ${business ? 'pt-72' : 'pt-4'} flex justify-center z-99`}>
			<div
				className={`${business ? "bg-blue-700" : "bg-secondary"} flex rounded-l-full p-1 space-x-2 transition duration-300 shadow-sm hover:shadow-xl/25`}
			>
				<Image
					src={`/logo/goin/hollow/goin-${business ? 'blue' : 'beige'}.svg`}
					alt="GOIN"
					className="block hover:rotate-35 transition ease-in-out duration-300"
					width={30}
					height={30}
					priority
				/>
				<Link
					className={`flex font-semibold items-center justify-center rounded-full border border-transparent border-solid px-2 transition-colors hover:border-white/[.145] uppercase text-sm ${business ? "hover:bg-blue-800 text-blue-100" : "hover:bg-red-800 text-primary"}`}
					href="/"
				>
					GOIN
				</Link>
			</div>
		</div>
	)
}
import Image from "next/image"
import Link from "next/link"

export default function Footer({ business = false }: { business?: boolean }) {
	return (
		<div className={`grid grid-cols-1 sm:grid-cols-3 w-full justify-between items-center px-16 py-8 text-sm ${business ? 'bg-blue-dark text-blue-lighter' : 'bg-secondary text-primary'}`}>
			<Link href="/" className="justify-self-center sm:justify-self-start mb-4 sm:mb-0">
				<Image
					src={`/logo/goin/hollow/goin-${business ? 'blue' : 'beige'}.svg`}
					alt="GOIN"
					className="block hover:rotate-35 transition ease-in-out duration-300"
					width={70}
					height={70}
					priority
				/>
			</Link>
			<span className="justify-self-center"><abbr title={`Established 2025 under "Gereja Orthodox Indonesia" supervision.`} className="cursor-help italic font-normal underline decoration-dotted">est. 2025</abbr> - <span className="font-semibold">Gereja Orthodox Indonesia</span> <abbr title="/ neo·phyte / - someone who has recently become involved in an activity and is still learning about it" className="cursor-help no-underline italic">Neophytes</abbr></span>
			<div className="justify-self-end flex items-center space-x-4">
				<div className="font-semibold">
					Designed by <Link href="https://mek.gallery/" className="underline">MEK.txt</Link> &times; <Link href="https://fabianoo.net/" className="underline">Fabiano</Link>
				</div>
				<Image
					src="/logo/goi.png"
					alt="GOIN"
					className="block"
					width={70}
					height={70}
					priority
				/>
			</div>
		</div>
	)
}

export function KidungFooter() {
	return (
		<div className="flex w-full justify-between items-center px-8 lg:px-16 py-8 text-neutral-700 text-sm">
			<div className="lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
				<div className="w-62">Pertanyaan dan pelatihan terkait Kidung dapat menghubungi:</div>
				<div>
					<div className="font-semibold">Rm. Prb. Martinos</div>
					<Link href="https://wa.me/628119147792" rel="noopener">+62 811-9147-792</Link>
				</div>
			</div>
			<div className="justify-self-end flex items-center space-x-4">
				{/* <div className="font-semibold">
					Designed by <Link href="https://mek.gallery/" className="underline">MEK.txt</Link> &times; <Link href="https://fabianoo.net/" className="underline">Fabiano</Link>
				</div> */}
				<Image
					src="/logo/goi.png"
					alt="GOIN"
					className="block"
					width={70}
					height={70}
					priority
				/>
			</div>
		</div>
	)
}
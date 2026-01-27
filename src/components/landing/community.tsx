import Image from "next/image"
import { ButtonLink } from "../global/button"

export default function Community() {
	return (
		<div className="grid grid-cols-1 xl:grid-cols-3 max-w-7xl mx-auto -mt-32 justify-items-center content-center">
			<div className="flex flex-col lg:flex-row xl:flex-col xl:items-start lg:items-center xl:items-start max-w-4xl xl:max-w-96 max-h-min pt-24 pb-12 xl:pb-0 pl-4">
				<Image
					src="/logo/goin/solid/goin-black.svg"
					alt="GOIN"
					className="block hover:animate-[spin_12s_linear_infinite] transition ease-in-out duration-300 mb-2"
					width={62}
					height={62}
				/>
				<h1 className="text-4xl lg:ml-4 xl:ml-0 xl:mb-4 font-semibold">GOIN WhatsApp Community</h1>
				<p className="max-w-96 text-lg">Secara umum, GOIN beroperasi di <span className="italic">WhatsApp Community</span> yang dikelola oleh para inisiator kegiatan/group chats.</p>
			</div>
			<Image
				src="/assets/landing/WAG-Community-Screnshot.webp"
				width={332.78}
				height={424}
				alt="Community Screenshot"
				className="rounded-t-2xl h-[500px] object-cover shadow-[20px_44px_24px_rgba(0,0,0,0.25)]"
			/>
			<div className="hidden xl:block max-w-96 space-y-4 max-h-min pt-24">
				<p className="text-secondary font-semibold text-lg">Keanggotaan GOIN bersifat ekslusif. Hanya umat yang telah dibaptis dan para katekumen yang disponsori oleh anggota lain untuk bisa bergabung.</p>
				<ButtonLink href="https://chat.whatsapp.com/G0fY08eCuio1JsCqE1IhhA">Join WAG GOIN</ButtonLink>
			</div>
		</div>
	)
}
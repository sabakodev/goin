import Image from "next/image"
import { ButtonLink } from "@/components/global/button"
import Card from "@/components/landing/divisions/card"
import { divisions } from "@/projects"

export default function Divisions() {

	return (
		<div className="bg-neutral-900">
			<div className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 px-4 xl:px-0 max-w-7xl mx-auto py-16 gap-2 sm:gap-8">
				<div className="text-primary space-y-4 lg:max-w-96">
					<Image src="/cross.svg" width={18} height={28} alt="☦" className="hover:animate-pulse cursor-grabbing" />
					<h1 className="text-2xl">Sebagian unit dan divisi yang ada dalam GOIN</h1>
					<ButtonLink href="/projects" theme="hollow_light">Lihat semua</ButtonLink>
				</div>
				<div className="text-primary lg:max-w-48 flex lg:hidden xl:flex flex-col justify-end col-start-2 row-start-5 xl:col-start-1 xl:row-start-2">
					<Image src="/logo/goi.png" width={40} height={40} alt="GOI" className="mb-4" />
					<p className="text-sm">Semua unit dan divisi berada di bawah pengarahan dan bimbingan Klerus GOI.</p>
				</div>
				{divisions.map((unit, index) => (
					<Card key={index} title={unit.title} logo={unit.logo} link={unit.link} href={unit.href} ambient={unit.ambient}>
						<span dangerouslySetInnerHTML={{ __html: unit.description }} />
					</Card>
				))}
			</div>
		</div>
	)
}
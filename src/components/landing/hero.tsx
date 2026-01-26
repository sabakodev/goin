import { ButtonLink } from "@/components/global/button"
import Image from "next/image"

export default function Hero({ fact }: { fact: string[] }) {
	return (
		<div className="w-full relative z-10 before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-primary before:from-10% before:via-20% before:via-primary before:to-transparent before:z-[-5] bg-cover bg-center bg-[url(/assets/overlay/hero-bg.webp)] min-h-[50vh] xl:min-h-screen">
			<div className="xl:flex items-end justify-end">
				<div className="max-w-2xl xl:max-w-3xl flex flex-col min-h-[75vh] lg:min-h-[50vh] xl:min-h-screen w-full items-center justify-end py-4 xl:py-16 px-16 sm:items-start space-y-8">
					<div className="flex flex-col gap-6 sm:items-start sm:text-left">
						<Image
							src="/logo/goi.png"
							alt="GOI"
							width={40}
							height={40}
						/>
						<p className="max-w-md text-2xl font-semibold leading-8">
							GOIN: Gereja Orthodox Indonesia Neophytes, adalah fasilitator pertemanan dan unit-unit kerja antar umat lintas region & paroki dalam Gereja Orthodox Indonesia (GOI).
						</p>
					</div>
				</div>
				<div className="text-md grid grid-cols-1 lg:grid-cols-4 text-secondary font-bold justify-end py-16 px-16 space-y-2 lg:space-y-4">
					{fact.map((text, index) => (
						<div key={index} className="space-y-2">
							<div className="opacity-40">{(`${index + 1}`).padStart(2, "0")}</div>
							<p className="lg:pr-4">{text}</p>
						</div>
					))}
				</div>
			</div>
			<div className="lg:ml-16 max-w-sm mx-auto">
				<div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
					<ButtonLink href="https://chat.whatsapp.com/G0fY08eCuio1JsCqE1IhhA" external={true}>
						{/* <Image
							src="/vercel.svg"
							alt="Vercel logomark"
							width={16}
							height={16}
						/> */}
						<span className="italic">Join</span> GOIN
					</ButtonLink>
					<ButtonLink href="https://gerejaorthodox.id/tentang/" theme="hollow" external={true}>Apa itu GOI?</ButtonLink>
				</div>
			</div>
		</div>
	)
}
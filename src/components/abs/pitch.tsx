import Image from "next/image"
import { ButtonLink } from "@/components/global/button"
import { ArrowRightIcon } from "@heroicons/react/16/solid"

export default function PitchSection() {
	return (
		<div className="max-w-4xl xl:max-w-7xl mx-auto text-blue-light flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 pt-4 pb-16">
			<Image src="/logo/goin/hollow/goin-blue-light.svg" width={80} height={80} alt="ABS" className="hover:animate-[spin_12s_linear_infinite]" />
			<p className="text-2xl font-medium max-w-sm lg:max-w-3xl text-center">GOIN: ABS hanya terdiri dari umat GOI yang sudah dibaptis dan juga katekumen yang sedang dalam proses menuju pembaptisan.</p>
			<Image src="/logo/goin/hollow/goin-blue-light.svg" width={80} height={80} alt="ABS" className="hidden lg:block hover:animate-[spin_12s_linear_infinite]" />
		</div>
	)
}

export function BottomPitchSection() {
	return (
		<div className="w-full bg-gradient-to-b from-blue-darkest from-10% via-20% via-blue-darkest to-blue-dark min-h-[50vh] xl:min-h-screen bg-no-repeat flex flex-col space-y-8 justify-center items-center">
			<p className="font-serif text-3xl lg:text-5xl max-w-sm lg:max-w-5xl text-center text-blue-lighter font-serif">Pendaftaran jasa, produk, ataupun bisnis dapat dilakukan dengan mendaftarkan <i>melalui form</i> di <i>link</i> berikut:</p>
			<ButtonLink href="https://docs.google.com/forms/d/e/1FAIpQLSdeh15C8GeAc8gtZpu0m4QFVJT9_10875R8UEtouFHho3FHzw/viewform" theme="business_solid">JOIN ABS <ArrowRightIcon className="size-4" /></ButtonLink>
		</div>
	)
}
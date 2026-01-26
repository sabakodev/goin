import type { Metadata } from "next"
import "../globals.css"
import PoweredBy from "@/components/global/power"
import { KidungFooter } from "@/components/global/footer"
import HeaderKidungan from "@/components/kidung/header"

export const metadata: Metadata = {
	title: "Standarisasi Kidung GOI",
	description: "Standarisasi Kidung Orthodox, dirangkum oleh Gereja Orthodox Indonesia Neophytes atas arahan Ym. Rm. Ep. Daniel Dwi Biyantoro dan bimbingan Rm. Prb. Martinos.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {


	return (
		<>
			<HeaderKidungan />
			<PoweredBy business={false} />
			{children}
			<KidungFooter />
		</>
	)
}

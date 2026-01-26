import type { Metadata } from "next"
import "../globals.css"
import PoweredBy from "@/components/global/power"
import Footer from "@/components/global/footer"

export const metadata: Metadata = {
	title: "Aliansi Bisnis GOIN",
	description: "Aliansi Bisnis Gereja Orthodox Indonesia Neophytes",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {


	return (
		<>
			<PoweredBy business={true} />
			{children}
			<Footer />
		</>
	)
}

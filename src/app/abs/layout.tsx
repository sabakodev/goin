import type { Metadata } from "next"
import PoweredBy from "@/components/global/power"
import Footer from "@/components/global/footer"
import HeaderBusiness from "@/components/abs/header"

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
		<div className="bg-blue-dark min-h-screen">
			<HeaderBusiness />
			<PoweredBy business={true} />
			{children}
			<Footer business={true} />
		</div>
	)
}

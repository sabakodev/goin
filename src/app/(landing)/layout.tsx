import type { Metadata } from "next"
import "../globals.css"
import Navigation from "@/components/global/nav"
import Footer from "@/components/global/footer"

export const metadata: Metadata = {
	title: "GOIN",
	description: "Gereja Orthodox Indonesia Neophytes",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {


	return (
		<>
			<Navigation />
			<main className="font-sans bg-primary">
				{children}
			</main>
			<Footer />
		</>
	)
}

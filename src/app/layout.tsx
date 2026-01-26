import type { Metadata } from "next"
import { Geist, Geist_Mono, Instrument_Serif, Inter } from "next/font/google"
import localFont from 'next/font/local'
import "./globals.css"

const instrumentSerif = Instrument_Serif({
	weight: "400",
	variable: "--font-instrument-serif",
	subsets: ['latin']
})

const dyslexicSans = localFont({
	src: [
		{
			path: "../../public/assets/fonts/OpenDyslexic-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/assets/fonts/OpenDyslexic-Italic.otf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../../public/assets/fonts/OpenDyslexic-Bold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/assets/fonts/OpenDyslexic-BoldItalic.otf",
			weight: "700",
			style: "italic",
		},
	],
	variable: "--font-dyslexic-sans",
	// subsets: ["latin"],
})

const interSans = Inter({
	variable: "--font-inter-sans",
	subsets: ["latin"],
})

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

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
		<html lang="id">
			<body
				className={`${interSans.variable} ${dyslexicSans.variable} ${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}

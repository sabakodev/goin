import Image from "next/image"
import Link from "next/link"

export default function HeaderKidungan() {
	return (
		<Link href="/kidung" className="mx-6 lg:mx-24 mt-4 font-serif text-3xl flex items-center space-x-4">
			<Image src="/logo/goi.png" width={80} height={80} alt="GOI" />
			<h1>Standarisasi Kidung GOI</h1>
		</Link>
	)
}
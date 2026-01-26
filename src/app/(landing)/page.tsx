import Community from "@/components/landing/community"
import Divisions from "@/components/landing/divisions"
import Hero from "@/components/landing/hero"
import Members from "@/components/landing/members"
import Pitch from "@/components/landing/pitch"

export default function Home() {
	const fact = [
		'GOIN dibentuk oleh umat GOI atas izin Romo Presbiter Yakobus dari Paroki Js. Petrus & Paulus.',
		'Untuk sementara, grup ini dikelola oleh Mikhael Alexander, jemaat dari Paroki Js. Petrus & Paulus.',
		'GOIN didanai oleh para inisiator dan anggotanya, difunding independen, lepas dari kas GOI.',
		'GOIN hanya untuk umat yang sudah dibaptis dan katekumen yang menjalani kelas.',
	]
	return (
		<>
			<Hero fact={fact} />
			<Members />
			<Community />
			<Divisions />
			<Pitch />
		</>
	)
}

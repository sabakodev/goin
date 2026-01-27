import Hero from "@/components/abs/hero"
import { BottomPitchSection } from "@/components/abs/pitch"
import { BusinessAffiliatesLists } from "@/components/abs/projects"

export default function BusinessAffiliatesPage() {
	return (
		<section className="bg-blue-darkest">
			<Hero>
				List aktif pekerja <i>professional</i>, penyedia jasa, pembuat produk, dan pemilik bisnis Paroki & Region GOI di seluruh Indonesia dan dunia.
			</Hero>
			<BusinessAffiliatesLists />
			<BottomPitchSection />
		</section>
	)
}
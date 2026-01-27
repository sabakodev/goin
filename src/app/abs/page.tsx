import IntroductionCard from "@/components/abs/card"
import Hero from "@/components/abs/hero"
import PitchSection, { BottomPitchSection } from "@/components/abs/pitch"
import BusinessAffiliates from "@/components/abs/projects"

export default function BusinessPage() {
	return (
		<>
			<section className="bg-blue-darkest">
				<Hero>
					Aliansi Bisnis dan Servis (ABS) adalah ruang para pekerja professional, penyedia jasa/produk, maupun pebisnis yang ada di dalam GOI seluruh region Indonesia & dunia.
				</Hero>
				<IntroductionCard />
				<PitchSection />
				<BusinessAffiliates />
				<BottomPitchSection />
			</section>
		</>
	)
}
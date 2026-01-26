import ContentArchive from "@/components/kidung/archive"
import BannerKidungan from "@/components/kidung/banner"
import KidungIntroduction from "@/components/kidung/introduction"

export default function KidungPage() {
	return (
		<>
			<BannerKidungan />
			<div className="border-y-2 border-solid border-primary-dark">
				<ContentArchive />
			</div>
			<KidungIntroduction />
		</>
	)
}
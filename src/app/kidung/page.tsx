import ContentArchive from "@/components/kidung/archive"
import { ArchiveQuery } from "@/components/kidung/query"
import BannerKidungan from "@/components/kidung/banner"
import KidungIntroduction from "@/components/kidung/introduction"
import { fetchGraphQL } from "@/utils/fetchGraphQL"
import { print } from "graphql/language/printer"
import { Kidung } from "@/gql/graphql"

export const revalidate = 60

export default async function KidungPage() {
	const { kidungan } = await fetchGraphQL<{
		kidungan: {
			nodes: Kidung[]
			pageInfo: { hasNextPage: boolean; endCursor: string }
		}
	}>(
		print(ArchiveQuery),
		{
			first: 20,
		},
	)

	return (
		<>
			<BannerKidungan />
			<div className="border-y-2 border-solid border-primary-dark">
				<ContentArchive initialData={kidungan.nodes} initialCursor={kidungan.pageInfo.endCursor} hasMore={kidungan.pageInfo.hasNextPage} />
			</div>
			<KidungIntroduction />
		</>
	)
}
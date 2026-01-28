import Hero from "@/components/abs/hero"
import { BottomPitchSection } from "@/components/abs/pitch"
import { BusinessAffiliatesLists } from "@/components/abs/projectsInfiniteScroll"
import { AffiliatesQuery } from "@/components/abs/query"
import { Business } from "@/gql/graphql"
import { fetchGraphQL } from "@/utils/fetchGraphQL"
import { print } from "graphql/language/printer"

export const revalidate = 60

export default async function BusinessAffiliatesPage() {
	const { businesses } = await fetchGraphQL<{
		businesses: {
			nodes: Business[]
			pageInfo: { hasNextPage: boolean; endCursor: string }
		}
	}>(
		print(AffiliatesQuery), {
		first: 10,
	},
	)

	return (
		<div className="bg-blue-dark pt-36 sm:pt-0">
			<section className="bg-blue-darkest">
				<Hero>
					List aktif pekerja <i>professional</i>, penyedia jasa, pembuat produk, dan pemilik bisnis Paroki & Region GOI di seluruh Indonesia dan dunia.
				</Hero>
				<BusinessAffiliatesLists initialData={businesses.nodes} initialCursor={businesses.pageInfo.endCursor} hasMore={businesses.pageInfo.hasNextPage} />
				<BottomPitchSection />
			</section>
		</div>
	)
}
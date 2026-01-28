import Image from "next/image"
import { ButtonLink } from "@/components/global/button"
import Link from "next/link"

import { print } from "graphql/language/printer"

import { Business } from "@/gql/graphql"
import { fetchGraphQL } from "@/utils/fetchGraphQL"
import { AffiliatesQuery } from "./query"
import { tagsTypeCleaner } from "./sanitize"

export async function fetchBusinesses(after = ""): Promise<{
	nodes: Business[]
	hasNextPage: boolean
	endCursor: string | null
}> {
	const { business } = await fetchGraphQL<{
		business: {
			nodes: Business[]
			pageInfo: {
				hasNextPage: boolean
				endCursor: string | null
			}
		}
	}>(
		print(AffiliatesQuery),
		{
			after,
			first: 10,
		},
	)

	return {
		nodes: business.nodes,
		hasNextPage: business.pageInfo.hasNextPage,
		endCursor: business.pageInfo.endCursor
	}

}

export default async function BusinessAffiliates() {
	const { businesses } = await fetchGraphQL<{
		businesses: {
			nodes: Business[]
		}
	}>(
		print(AffiliatesQuery), {
		after: ``,
	},
	)

	return (
		<div className="xl:flex space-y-8 xl:space-y-0 mx-6 lg:mx-12 xl:space-x-8 items-center">
			<div className="flex xl:flex-col xl:w-62 space-y-4 justify-between">
				<h2 className="text-blue-light text-2xl font-semibold">List Aktif ABS</h2>
				<p className="text-blue-lighter hidden lg:block w-62 pb-4">List aktif ABS diambil dari umat di semua Paroki & Region GOI di seluruh dunia.</p>
				<ButtonLink href="/abs/affiliates" theme="business_hollow" small={true}>Lihat Semua</ButtonLink>
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full">
				{
					businesses.nodes.map((node, i) => (
						<BusinessAffiliateCard
							key={node.databaseId}
							slug={`/abs/affiliates/${node.slug}`}
							thumbnail={node.featuredImage?.node.sourceUrl ?? ''}
							avatar="https://goin.works/_assets/v11/700232586a6d4c5f2a26efe0da272eff6ba4bf43.png"
							label={node.title ?? ''}
							description={tagsTypeCleaner(node)[0]}
							associate={{ name: node.aliansiBisnis?.associateName ?? '', jurisdiction: node.aliansiBisnis?.profilParoki ?? '' }}
						/>
					))
				}
			</div>
		</div>
	)
}

export async function BusinessAffiliatesShortLists({ id = '' }: { id?: string }) {
	const { businesses } = await fetchGraphQL<{
		businesses: {
			nodes: Business[]
		}
	}>(
		print(AffiliatesQuery), {
		after: ``,
		first: 4,
		notIn: id,
	},
	)

	return (
		<div className={`grid grid-cols-1 lg:grid-cols-4 justify-items-center gap-4 mx-auto px-6 w-fit mt-16`}>
			{
				businesses.nodes.map((node, i) => (
					<BusinessAffiliateCard
						key={node.databaseId}
						slug={`/abs/affiliates/${node.slug}`}
						thumbnail={node.featuredImage?.node.sourceUrl ?? ''}
						avatar={node.aliansiBisnis?.associatePhotoProfile?.node.sourceUrl ?? ''}
						label={node.title ?? ''}
						description={tagsTypeCleaner(node)[0]}
						associate={{ name: node.aliansiBisnis?.associateName ?? '', jurisdiction: node.aliansiBisnis?.profilParoki ?? '' }}
						detailed={true}
					/>
				))
			}
		</div>
	)
}

export function BusinessAffiliateCard({ slug, thumbnail, avatar, label, description, associate, detailed = false }: { slug: string, thumbnail: string, avatar: string, label: string, description: string, associate: { name: string, jurisdiction: string }, detailed?: boolean }) {
	const Profile = () => (
		<div className="flex space-x-2 items-center px-2 py-4">
			<Image src={avatar} alt="" width={400} height={600} className="aspect-square rounded-full object-cover size-6" />
			<div>
				<div className="text-sm transition duration-300 group-hover:opacity-70 truncate">{associate.name}</div>
				<div className="text-xs transition duration-300 group-hover:opacity-40 opacity-50 truncate">{associate.jurisdiction}</div>
			</div>
		</div>
	)

	const OverviewContent = () => (
		<div className="flex isolate flex-col justify-end relative bg-blue-dark rounded-md pt-40 px-4 pb-4 shadow-sm hover:shadow-lg">
			<Image src={thumbnail} alt="Thumbnail" width={400} height={600} className="rounded-md h-full absolute inset-0 -z-10 object-cover" />
			<div className="bg-linear-to-t absolute inset-0 -z-1 transition duration-300 from-black transition duration-300 group-hover:from-blue-950 to-transparent rounded-md"></div>
			<h2 className="font-medium text-xl truncate w-36">{label}</h2>
		</div>
	)

	const DetailedContent = () => (
		<div className="border border-transparent hover:border-blue-light/20 hover:shadow-xl hover:backdrop-blur-lg transition duration-200 p-2 rounded-md">
			<div className="flex isolate flex-col justify-end relative bg-blue-dark rounded-md h-52 w-72 shadow-sm hover:shadow-lg">
				<Image src={thumbnail} alt="Thumbnail" width={400} height={600} className="rounded-md h-52 w-72 absolute inset-0 -z-10 object-cover" />
				<div className="bg-linear-to-t absolute inset-0 -z-1 transition duration-300 from-black transition duration-300 group-hover:from-blue-950 to-transparent rounded-md"></div>
				<div className="w-52 px-4 py-4">
					<h2 className="font-medium transition duration-600 opacity-0 group-hover:opacity-100 text-xl truncate">{label}</h2>
					<h3 className="font-bold opacity-0 transition duration-600 group-hover:opacity-50 text-sm truncate">{description}</h3>
				</div>
			</div>
			<Profile />
		</div>
	)

	return (
		<Link href={slug} className="group cursor-pointer text-white">
			{detailed ? <DetailedContent /> : <OverviewContent />}
		</Link>
	)
}
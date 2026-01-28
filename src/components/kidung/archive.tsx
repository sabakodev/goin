import KidungCard from "./card"
import { print } from "graphql/language/printer"

import gql from "graphql-tag"
import { Kidung } from "@/gql/graphql"
import { fetchGraphQL } from "@/utils/fetchGraphQL"

export const revalidate = 60

export const ArchiveQuery = gql`
  query ArchiveQuery($after: String = "", $first: Int = 20, $notIn: [ID] = "") {
    kidungan(first: $first, after: $after, where: {notIn: $notIn}) {
      nodes {
        title
        categories {
          nodes {
            name
          }
        }
        contentTypeName
        databaseId
        slug
      }
    }
  }
`

export default async function ContentArchive() {
	const { kidungan } = await fetchGraphQL<{
		kidungan: {
			nodes: Kidung[]
		}
	}>(
		print(ArchiveQuery), {
		after: ``,
	},
	)

	return (
		<div className="mx-4 xl:mx-12 mt-10 mb-8">
			<h1 className="font-semibold text-secondary mb-4">Konten Kidung</h1>

			<div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
				{
					kidungan.nodes.map((content, index) => (
						<KidungCard key={index} title={content.title ?? ''} category={(content.categories?.nodes.map((node => node.name?.toString())).filter((item): item is string => item !== undefined) ?? [])[0]} slug={content.slug ?? ''} />
					))
				}
			</div>
		</div>
	)
}

export async function ContentArchiveNavigation({ id }: { id: string }) {
	const { kidungan } = await fetchGraphQL<{
		kidungan: {
			nodes: Kidung[]
		}
	}>(
		print(ArchiveQuery), {
		after: ``,
		first: 6,
		notIn: id,
	},
	)

	return (
		<div className="mx-4 xl:mx-12 mt-10 mb-8">
			<h1 className="font-semibold text-secondary mb-4">Kidungan Lainnya</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
				{
					kidungan.nodes.map((content, index) => (
						<KidungCard key={index} title={content.title ?? ''} category={(content.categories?.nodes.map((node => node.name?.toString())).filter((item): item is string => item !== undefined) ?? [])[0]} slug={content.slug ?? ''} />
					))
				}
			</div>
		</div>
	)
}
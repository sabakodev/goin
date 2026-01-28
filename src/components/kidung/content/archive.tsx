import { Kidung } from "@/gql/graphql"
import { fetchGraphQL } from "@/utils/fetchGraphQL"
import { print } from "graphql/language/printer"
import KidungCard from "@/components/kidung/card"
import gql from "graphql-tag"

export const NavigationQuery = gql`
  query NavigationQuery($beforeCursor: String, $afterCursor: String) {
    before: kidungan(
      last: 3
      before: $beforeCursor
    ) {
      nodes {
        id
        databaseId
        title
        slug
        categories {
          nodes {
            name
          }
        }
      }
    }
    after: kidungan(
      first: 3
      after: $afterCursor
    ) {
      nodes {
        id
        databaseId
        title
        slug
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`

export async function ContentArchiveNavigation({ cursor }: { cursor: string }) {
	const { before, after } = await fetchGraphQL<{
		before: { nodes: Kidung[] }
		after: { nodes: Kidung[] }
	}>(
		print(NavigationQuery),
		{
			beforeCursor: cursor,
			afterCursor: cursor,
		},
	)

	const kidungan = [...before.nodes.reverse(), ...after.nodes]

	if (kidungan.length === 0) {
		return null
	}

	// const { kidungan } = await fetchGraphQL<{
	// 	kidungan: {
	// 		nodes: Kidung[]
	// 	}
	// }>(
	// 	print(ArchiveQuery), {
	// 	after: ``,
	// 	first: 6,
	// 	notIn: id,
	// },
	// )

	return (
		<div className="mx-4 xl:mx-12 mt-10 mb-8">
			<h1 className="font-semibold text-secondary mb-4">Kidungan Lainnya</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
				{
					kidungan.map((content, index) => (
						<KidungCard key={index} title={content.title ?? ''} category={(content.categories?.nodes.map((node => node.name?.toString())).filter((item): item is string => item !== undefined) ?? [])[0]} slug={content.slug ?? ''} />
					))
				}
			</div>
		</div>
	)
}
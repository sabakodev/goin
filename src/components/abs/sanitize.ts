import { Business, Kidung } from "@/gql/graphql"

export const categoryTypeCleaner = (contentNode: Business | Kidung) => {
	const tags: string[] = (contentNode.categories?.nodes as Array<{ name?: string | null }> | undefined)
		?.map((node) => node.name)
		.filter((name): name is string => !!name) ?? []

	return tags
}

export const tagsTypeCleaner = (contentNode: Business | Kidung) => {
	const tags: string[] = (contentNode.tags?.nodes as Array<{ name?: string | null }> | undefined)
		?.map((node) => node.name)
		.filter((name): name is string => !!name) ?? []

	return tags
}
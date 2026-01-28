import gql from "graphql-tag"

export const ArchiveQuery = gql`
  query ArchiveQuery($after: String = "", $first: Int = 20, $notIn: [ID] = "") {
	kidungan(first: $first, after: $after, where: {notIn: $notIn}) {
	  nodes {
		id
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
	  pageInfo {
		hasNextPage
		endCursor
	  }
	}
  }
`
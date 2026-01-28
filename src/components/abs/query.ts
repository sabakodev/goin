import gql from "graphql-tag"

export const AffiliatesQuery = gql`
  query AffiliatesQuery($after: String = "", $first: Int = 20, $notIn: [ID] = "") {
	businesses(first: $first, after: $after, where: {notIn: $notIn}) {
	  nodes {
		title
		categories {
		  nodes {
			name
		  }
		}
		tags {
		  nodes {
			name
		  }
		}
		featuredImage {
		  node {
			sourceUrl
		  }
		}
		aliansiBisnis {
		  associateName
		  associatePhotoProfile {
			node {
			  sourceUrl
			}
		  }
		  profilParoki
		  externalHref
		}
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
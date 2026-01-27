import { BottomPitchSection } from "@/components/abs/pitch"
import { Business } from "@/gql/graphql"
import { fetchGraphQL } from "@/utils/fetchGraphQL"

import gql from "graphql-tag"
import Image from "next/image"

import { print } from "graphql/language/printer"
import type { Metadata, ResolvingMetadata } from 'next'
import { BusinessAffiliatesLists, categoryTypeCleaner, tagsTypeCleaner } from "@/components/abs/projects"


export const BusinessQuery = gql`
  query BusinessQuery($id: ID!) {
	business(id: $id, idType: URI) {
	  id
	  content
	  date
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
	}
  }
`

export const ShortBusinessQuery = gql`
  query BusinessQuery($id: ID!) {
	business(id: $id, idType: URI) {
	  id
	  date
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
      }
	}
  }
`

export async function generateMetadata(
	{ params }: {
		params: Promise<{ slug: string }>
	},
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const { slug } = await params

	const { business } = await fetchGraphQL<{ business: Business }>(print(ShortBusinessQuery), {
		id: `business/${slug}`,
	})

	if (!business) return {
		title: 'Not Found',
	}

	const previousImages = (await parent).openGraph?.images || []

	return {
		title: business.title,
		description: 'Aliansi Bisnis Gereja Orthodox Indonesia Neophytes',
		authors: [
			{ name: business.aliansiBisnis?.associateName, url: business.aliansiBisnis?.externalHref ?? '' }
		],
		keywords: [...tagsTypeCleaner(business), ...categoryTypeCleaner(business)],
		publisher: 'GOIN',
		openGraph: {
			images: [business.featuredImage?.node.sourceUrl ?? '', ...previousImages],
		},
	}
}

export default async function BusinessAffiliateDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params

	const ErrorPage = () => (
		<div className="text-center w-full flex flex-col justify-center items-center font-serif text-white pt-16">
			<Image width={720} height={900} alt="" src="/assets/orthodox-icon/js-eligius.webp" className="max-w-xs" />
			<h1 className="mt-8 text-4xl font-bold">Something went wrong</h1>
			<p className="text-xl pb-4 max-w-sm">Maybe we currently could not fix the issue, but St. Eligius might help us in this hard time. Let pray our whishes through Holy St. Eligius to resolve the issue. In the name of Father, Lord, and Holy Spirit, Amen.</p>
			<span className="text-xs font-sans">Courtesy of https://uncutmountainsupply.com/icons/of-saints/by-name/d-f/icon-of-st-elegius-20th-c-1el33/</span>
		</div>
	)

	const NotFoundPage = () => (
		<div className="text-center w-full flex flex-col justify-center items-center font-serif text-white pt-16">
			<Image width={720} height={900} alt="" src="/assets/orthodox-icon/js-anthony-of-padua.webp" className="max-w-xs" />
			<h1 className="mt-8 text-4xl font-bold">404 Not Found</h1>
			<p className="text-xl pb-4">Maybe we could not find what you looking for, but St. Anthony of Padua might help you.</p>
			<span className="text-xs font-sans">Courtesy of https://lawrence-klimecki.pixels.com/featured/saint-anthony-of-padua-lawrence-klimecki.html</span>
		</div>
	)

	try {
		const { business } = await fetchGraphQL<{ business: Business }>(print(BusinessQuery), {
			id: `business/${slug}`,
		})

		if (!business) return <NotFoundPage />


		const categories: string[] = business.categories?.nodes.map((node => node.name?.toString())).filter((item): item is string => item !== undefined) ?? []
		const tags: string[] = (business.tags?.nodes as Array<{ name?: string | null }> | undefined)
			?.map((node) => node.name)
			.filter((name): name is string => !!name) ?? []


		return (
			<section className="bg-blue-darkest">
				<div
					className="w-full bg-cover bg-center  min-h-[50vh]"
					style={{
						backgroundImage: `url(${business.featuredImage?.node.sourceUrl ?? ''})`,
					}}>
					<div className="bg-gradient-to-t from-blue-darkest from-10% via-20% via-blue-darkest to-blue-dark/50 min-h-[50vh] bg-no-repeat flex justify-center items-center text-white font-serif">
						<p className="text-3xl lg:text-5xl max-w-sm lg:max-w-5xl text-center">{business.title}</p>
					</div>
				</div>
				<div className="max-w-sm lg:max-w-3xl mx-auto mb-8 lg:flex justify-between space-y-4 lg:space-y-0 lg:space-x-2 text-xs">
					<div className="flex space-x-2 items-center px-2 text-white">
						<Image src={business.aliansiBisnis?.associatePhotoProfile?.node.sourceUrl ?? ''} alt={business.aliansiBisnis?.associateName ?? ''} width={400} height={600} className="aspect-square rounded-full object-cover size-6" />
						<div>
							<div className="text-sm truncate">{business.aliansiBisnis?.associateName ?? ''}</div>
							<div className="text-xs opacity-50 truncate">{business.aliansiBisnis?.profilParoki ?? ''}</div>
						</div>
					</div>
					<div className="flex space-x-2">
						{
							categories.map((category, index) => (
								<div key={index} className="bg-white hover:bg-white/90 hover:backdrop-blur-sm rounded-full px-4 py-2 flex items-center font-bold">{category}</div>
							))
						}
						{
							tags.map((tag, index) => (
								<div key={index} className="bg-blue-lighter hover:bg-blue-lighter/90 hover:backdrop-blur-sm rounded-full px-4 py-2 flex items-center font-bold">{tag}</div>
							))
						}
					</div>
				</div>
				<div className="max-w-sm lg:max-w-2xl mx-auto space-y-4 prose text-white" dangerouslySetInnerHTML={{ __html: business.content ?? '' }} />
				<BusinessAffiliatesLists short={true} id={business.id} />
				<BottomPitchSection />
			</section>
		)
	} catch (error) {
		console.debug(error)

		return <ErrorPage />
	}
}
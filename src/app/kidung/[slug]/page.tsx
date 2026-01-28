import { print } from "graphql/language/printer"

import Link from "next/link"
import Image from "next/image"

import type { Metadata, ResolvingMetadata } from 'next'

import KidungLyrics from "@/components/kidung/content/lyrics"
import KidungPlayer from "@/components/kidung/content/player"
import KidungContentTitle from "@/components/kidung/content/title"

import { ContentInfoQuery } from "@/queries/general/ContentInfoQuery"
import { fetchGraphQL } from "@/utils/fetchGraphQL"
import { ContentNode, Kidung } from "@/gql/graphql"

import gql from "graphql-tag"

import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { ContentArchiveNavigation } from "@/components/kidung/archive"
import { tagsTypeCleaner, categoryTypeCleaner } from "@/components/abs/projects"

export const PostQuery = gql`
  query PostQuery($id: ID!, $preview: Boolean = false) {
    kidung(id: $id, idType: DATABASE_ID, asPreview: $preview) {
	  id
      content
      date
      title
      categories {
        nodes {
          name
        }
      }
	  kidungFields {
        media {
          url
        }
      }
    }
  }
`

export const ShortPostQuery = gql`
  query PostQuery($id: ID!, $preview: Boolean = false) {
    kidung(id: $id, idType: URI, asPreview: $preview) {
	  id
	  featuredImage {
	    node {
          sourceUrl
        }
      }
      date
      title
      categories {
        nodes {
          name
        }
      }
	  kidungFields {
        media {
          url
        }
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
	const { slug } = await params

	const { kidung } = await fetchGraphQL<{ kidung: Kidung }>(print(ShortPostQuery), {
		id: `kidung/${slug}`,
	})

	if (!kidung) return {
		title: 'Not Found',
	}

	const previousImages = (await parent).openGraph?.images || []

	return {
		title: `Kidungan Orthodox - ${kidung.title} - Standarisasi GOI & GOIN`,
		description: 'Standarisasi Kidungan Orthodox yang dirangkum oleh Gereja Orthodox Indonesia Neophytes atas mandat Ym. Rm. Ep. Daniel Dwi Byantoro.',
		keywords: [...categoryTypeCleaner(kidung)],
		publisher: 'GOIN',
		openGraph: {
			images: [kidung.featuredImage?.node.sourceUrl ?? '', ...previousImages],
		},
	}
}

export default async function KidungContentPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params

	const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
		print(ContentInfoQuery),
		{
			slug: `kidung/${slug}`,
			idType: "URI",
		},
	)

	if (!contentNode || contentNode.contentTypeName !== 'kidung') return (
		<div className="text-center w-full flex flex-col justify-center items-center font-serif">
			<Image width={720} height={900} alt="" src="/assets/orthodox-icon/js-anthony-of-padua.webp" className="max-w-xs" />
			<h1 className="mt-8 text-4xl font-bold">404 Not Found</h1>
			<p className="text-xl pb-4">Maybe we could not find what you looking for, but St. Anthony of Padua might help you.</p>
			<span className="text-xs font-sans">Courtesy of https://lawrence-klimecki.pixels.com/featured/saint-anthony-of-padua-lawrence-klimecki.html</span>
		</div>
	)

	const { kidung } = await fetchGraphQL<{ kidung: Kidung }>(print(PostQuery), {
		id: contentNode.databaseId,
	})

	const categories: string[] = kidung.categories?.nodes.map((node => node.name?.toString())).filter((item): item is string => item !== undefined) ?? []

	return (
		<>
			<Link href="/kidung" className="mt-8 mb-4 ml-2 lg:ml-24 flex justify-between w-24 border-2 rounded-full px-4 py-2 font-medium"><ChevronLeftIcon className="size-6" /><span>Back</span></Link>
			<div className="text-center mt-8 min-h-screen flex flex-col items-center border-y-2 border-primary-dark">
				<KidungContentTitle category={categories}>
					{kidung.title}
				</KidungContentTitle>
				<KidungPlayer embed={kidung.kidungFields?.media?.url ?? ''} />
				<KidungLyrics post={kidung} />
				<ContentArchiveNavigation id={kidung.id} />
			</div>
		</>
	)
}
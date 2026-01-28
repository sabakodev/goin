'use client'

import KidungCard from "@/components/kidung/card"
import { print } from "graphql/language/printer"

import { Kidung } from "@/gql/graphql"
import { fetchGraphQL } from "@/utils/fetchGraphQL"
import { useEffect, useState } from "react"

import { useInView } from 'react-intersection-observer'
import { ArchiveQuery } from "@/components/kidung/query"

export async function fetchKidungan(after = ""): Promise<{
	nodes: Kidung[]
	hasNextPage: boolean
	endCursor: string | null
}> {
	const { kidungan } = await fetchGraphQL<{
		kidungan: {
			nodes: Kidung[]
			pageInfo: {
				hasNextPage: boolean
				endCursor: string | null
			}
		}
	}>(
		print(ArchiveQuery),
		{
			after,
			first: 20,
		},
	)

	return {
		nodes: kidungan.nodes,
		hasNextPage: kidungan.pageInfo.hasNextPage,
		endCursor: kidungan.pageInfo.endCursor
	}

}

interface Props {
	initialData: Kidung[]
	initialCursor: string
	hasMore: boolean
}

export default function ContentArchive({ initialData, initialCursor, hasMore: initialHasMore }: Props) {
	const [data, setData] = useState<Kidung[]>(initialData)
	const [endCursor, setEndCursor] = useState<string | null>(initialCursor)
	const [hasNextPage, setHasNextPage] = useState(initialHasMore)
	const [isLoading, setIsLoading] = useState(false)
	const { ref, inView } = useInView({
		threshold: 0,
		rootMargin: '100px',
	})

	useEffect(() => {
		const loadMore = async () => {
			if (!inView || isLoading || !hasNextPage) return

			setIsLoading(true)
			try {
				const result = await fetchKidungan(endCursor || "")
				setData((prev) => [...prev, ...result.nodes])
				setEndCursor(result.endCursor)
				setHasNextPage(result.hasNextPage)
			} catch (error) {
				console.error("Failed to load more:", error)
			} finally {
				setIsLoading(false)
			}
		}

		loadMore()
	}, [inView, hasNextPage])

	return (
		<div className="mx-4 xl:mx-12 mt-10 mb-8">
			<h1 className="font-semibold text-secondary mb-4">Konten Kidung</h1>
			<div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
				{
					data.map((content, index) => (
						<KidungCard
							key={content.id || index}
							title={content.title ?? ''}
							category={(content.categories?.nodes.map((node => node.name?.toString())).filter((item): item is string => item !== undefined) ?? [])[0]}
							slug={content.slug ?? ''}
						/>
					))
				}
			</div>

			{/* Loading indicator */}
			{hasNextPage && (
				<div ref={ref} className="text-center py-8">
					{isLoading ? (
						<div className="flex items-center justify-center gap-4">
							<div className="w-6 h-6 border-4 border-secondary border-t-transparent rounded-full animate-spin" />
							<span>Memuat kidungan mulia...</span>
						</div>
					) : (
						<span>Scroll untuk konten berikutnya</span>
					)}
				</div>
			)}

			{!hasNextPage && data.length > 0 && (
				<p className="text-center py-8 text-2xl font-serif">Anda telah mencapai ujung konten.</p>
			)}
		</div>
	)
}
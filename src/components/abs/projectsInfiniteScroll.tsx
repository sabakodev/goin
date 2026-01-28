'use client'

import { Business } from "@/gql/graphql"
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { fetchBusinesses, BusinessAffiliateCard } from "./projects"
import { tagsTypeCleaner } from "./sanitize"

interface Props {
	initialData: Business[]
	initialCursor: string
	hasMore: boolean
}

export function BusinessAffiliatesLists({ initialData, initialCursor, hasMore: initialHasMore }: Props) {
	const [data, setData] = useState<Business[]>(initialData)
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
				const result = await fetchBusinesses(endCursor || "")
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
		<>
			<div className={`grid grid-cols-1 lg:grid-cols-4 justify-items-center gap-4 mx-auto px-6 w-fit sm:-mt-32`}>
				{
					data.map((node, i) => (
						<BusinessAffiliateCard
							key={node.databaseId || i}
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

			{/* Loading indicator */}
			{hasNextPage && (
				<div ref={ref} className="text-center py-8">
					{isLoading ? (
						<div className="flex items-center justify-center gap-4">
							<div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
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
		</>
	)
}
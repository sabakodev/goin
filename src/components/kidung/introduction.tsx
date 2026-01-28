'use client'

import { Konten } from "@/gql/graphql"
import KidungIntroductionContent from "./content"
import { IntroductionArchiveQuery } from "./query"
import { fetchGraphQL } from "@/utils/fetchGraphQL"
import { print } from "graphql/language/printer"
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

export async function fetchContent(after = ""): Promise<{
	nodes: Konten[]
	hasNextPage: boolean
	endCursor: string | null
}> {
	const { kontenKidung } = await fetchGraphQL<{
		kontenKidung: {
			nodes: Konten[]
			pageInfo: {
				hasNextPage: boolean
				endCursor: string | null
			}
		}
	}>(
		print(IntroductionArchiveQuery),
		{
			after,
			first: 20,
		},
	)

	return {
		nodes: kontenKidung.nodes,
		hasNextPage: kontenKidung.pageInfo.hasNextPage,
		endCursor: kontenKidung.pageInfo.endCursor
	}

}

interface Props {
	initialData: Konten[]
	initialCursor: string
	hasMore: boolean
}

export default function KidungIntroduction({ initialData, initialCursor, hasMore: initialHasMore }: Props) {
	const [data, setData] = useState<Konten[]>(initialData)
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
				const result = await fetchContent(endCursor || "")
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

	const contents = [
		{
			label: "Video Introduksi Mengidung Oleh Romo Martinos (Under Construction)",
			href: "",
			remark: "YouTube • (12:01)",
		},
		{
			label: "Playlist Belajar Membaca Notasi Byzantine",
			href: "https://www.youtube.com/watch?v=F1i-7mWckCI&list=PLIE8AtU0tO8vdovtqAR5IaNhsML8IYHRa",
			remark: "Youtube Playlist • (24 video)",
		},
		{
			label: "Rekaman Latihan Bersama Online Bersama Romo Martinos",
			href: "https://www.youtube.com/@thetruthseeker6825",
			remark: "YouTube Channel • (Zoom recordings)",
		},
		{
			label: "Repo Video & Musik Rekaman oleh Anggota GOI (Under Construction)",
			href: "",
			remark: "Google Drive Folder",
		},
		{
			label: "Repo Video & Musik Rekaman oleh Anggota GOI (Under Construction)",
			href: "https://www.youtube.com/watch?v=i-3h9TQ312c&list=PL4R0RQw-MPauf_EjMeHTKu_ug_MZQ0uTO",
			remark: "YouTube Playlist",
		},
		{
			label: "Playlist Belajar Membaca Notasi Byzantine",
			href: "https://www.instagram.com/p/DTwS0b9kteO/",
			remark: "Instagram Post",
		},
	]

	return (
		<div className="mt-10 mb-8 mx-6 lg:mx-12">
			<h1 className="font-semibold text-secondary mb-4">Introduksi & Konten</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{
					data.map((content, index) => (
						<KidungIntroductionContent key={index} title={content.title ?? ''} remark={content.excerpt ?? ''} index={index + 1} href={content.kidungFields?.media?.url ?? ''} />
					))
				}
			</div>

			{/* Loading indicator */}
			{hasNextPage && (
				<div ref={ref} className="text-center py-8">
					{isLoading ? (
						<div className="flex items-center justify-center gap-4">
							<div className="w-6 h-6 border-4 border-secondary border-t-transparent rounded-full animate-spin" />
							<span>Memuat konten pembelajaran...</span>
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
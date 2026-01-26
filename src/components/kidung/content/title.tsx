import React from "react"

export default function KidungContentTitle({ children, category }: { children: React.ReactNode, category: string[] }) {
	return (
		<>
			<h1 className="font-serif text-4xl mt-8 mb-2">{children}</h1>
			<div className="flex space-x-2">
				<span className="font-medium text-neutral-500">Kategori</span>
				{
					category.map((label, index) => <span key={index} className="text-secondary font-semibold">{label}</span>)
				}
			</div>
		</>
	)
}
'use client'

import { useState } from "react"
import KidungLyricAccesibility from "./accesibility"
import { Kidung } from "@/gql/graphql"

export default function KidungLyrics({ post }: { post: Kidung }) {
	const [font, setFont] = useState<'font-sans' | 'font-serif' | 'font-mono' | 'font-dyslexic'>('font-sans')
	const [fontSize, setFontSize] = useState<number>(2)

	const fontChange = () => {
		switch (font) {
			case 'font-sans':
				setFont('font-dyslexic')
				break
			case 'font-dyslexic':
				setFont('font-serif')
				break
			case 'font-serif':
				setFont('font-mono')
				break
			case 'font-mono':
				setFont('font-sans')
				break
		}
	}

	const fontSizeSet = [
		'prose-sm',
		'prose-base',
		'prose-lg',
		'prose-xl',
		'prose-2xl',
	]

	const increaseSize = () => {
		if (fontSize < (fontSizeSet.length - 1)) {
			setFontSize(fontSize + 1)
		}
	}

	const decreaseSize = () => {
		if (fontSize > 0) {
			setFontSize(fontSize - 1)
		}
	}

	return (
		<>
			<KidungLyricAccesibility fontChange={fontChange} increaseSize={increaseSize} decreaseSize={decreaseSize} />
			<div className="font-semibold mb-16">
				<h3 className="text-sm text-neutral-600">Lirik</h3>
				<div className={`${font} ${fontSizeSet[fontSize]} prose space-y-5`} dangerouslySetInnerHTML={{ __html: post.content || "" }} />
			</div>
		</>
	)
}
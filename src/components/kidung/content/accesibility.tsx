import { AArrowDown, AArrowUp, Type } from "lucide-react"
import { MouseEventHandler } from "react"

export default function KidungLyricAccesibility({ fontChange, increaseSize, decreaseSize }: { fontChange: MouseEventHandler, increaseSize: MouseEventHandler, decreaseSize: MouseEventHandler }) {
	return (
		<>
			<div className="mb-8 space-x-2 flex text-secondary justify-between">
				<div onClick={fontChange} className="rounded-full cursor-pointer bg-neutral-900 hover:bg-neutral-700 py-2 px-4 shadow-sm hover:shadow-lg transition duration-300">
					<Type size={24} />
				</div>
				<div onClick={decreaseSize} className="rounded-full cursor-pointer bg-neutral-900 hover:bg-neutral-700 py-2 px-4 shadow-sm hover:shadow-lg transition duration-300">
					<AArrowDown size={24} />
				</div>
				<div onClick={increaseSize} className="rounded-full cursor-pointer bg-neutral-900 hover:bg-neutral-700 py-2 px-4 shadow-sm hover:shadow-lg transition duration-300">
					<AArrowUp size={24} />
				</div>
			</div>
		</>
	)
}
import Link from "next/link"

export default function KidungIntroductionContent({ index, title, remark, href }: { index: number, title: string, remark: string, href: string }) {
	const disabled = href === ''

	const Content = () => (
		<div className={`group border border-transparent hover:border-secondary transition duration-300 rounded-lg p-2 flex space-x-4 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
			<div className="relative">
				<div className={`h-5 w-5 text-xs flex justify-center items-center rounded-full border-2 font-semibold ${disabled ? 'border-neutral-500 text-neutral-500' : ''}`}>
					{index}
				</div>
			</div>
			<div className="space-y-2 flex flex-col justify-between">
				<h2 className={`${disabled ? 'text-neutral-500' : 'transition duratoin-300 group-hover:text-secondary'} font-semibold`}>{title}</h2>
				<span className={`${disabled ? 'text-neutral-400' : 'text-neutral-500'} font-medium`}>{remark}</span>
			</div>
		</div>
	)
	return disabled ? <Content /> : (
		<Link href={href}>
			<Content />
		</Link>
	)
}
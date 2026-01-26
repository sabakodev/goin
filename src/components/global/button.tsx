import Link from "next/link"

export interface ButtonProps {
	theme?: 'solid' | 'hollow' | 'hollow_light'
	disabled?: boolean
	small?: boolean
	children: React.ReactNode
}

export interface ButtonLinkProps extends ButtonProps {
	href: string
	external?: boolean
}

export default function Button({
	theme = 'solid',
	disabled = false,
	small = false,
	children,
}: Readonly<ButtonProps>) {

	const themeStyle = {
		solid: 'bg-foreground disabled:bg-foreground/20 active:bg-secondary disabled:hover:border-transparent hover:border-secondary text-primary disabled:text-primary/20 hover:bg-[#383838]',
		hollow: 'border-black/[.08] hover:border-secondary disabled:hover:border-transparent disabled:text-black/20 disabled:active:text-black/20 active:text-secondary hover:bg-black/[.04] text-black hover:text-neutral-900',
		hollow_light: 'border-secondary hover:border-primary disabled:border-primary/20 disabled:hover:border-transparent disabled:text-primary/20 disabled:active:text-primary/20 active:text-primary hover:bg-black/[.04] text-secondary',
	}

	return (
		<button disabled={disabled} className={`cursor-pointer disabled:cursor-not-allowed gap-2 flex w-full ${small ? 'h-10' : 'h-12 md:w-[158px] lg:w-[200px]'} items-center justify-center rounded-full px-5 transition-colors border border-solid border-2 ${themeStyle[theme]}`}>
			{children}
		</button>
	)
}

export function ButtonLink({
	href,
	external = false,
	disabled = false,
	small = false,
	theme = 'solid',
	children
}: Readonly<ButtonLinkProps>) {
	return (
		<Link
			href={href}
			target={external ? "_blank" : ""}
			rel={external ? "noopener" : ""}
		>
			<Button theme={theme} small={small} disabled={disabled}>{children}</Button>
		</Link>
	)
}
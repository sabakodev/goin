'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'

interface NavLinkProps {
	href: string
	children: React.ReactNode
}

export default function Navigation() {
	const pathname = usePathname()

	const nav = [
		{
			href: '/projects',
			label: 'Units',
			external: false,
		},
		{
			href: '/kidung',
			label: 'Kidung',
			external: false,
		},
		{
			href: '/abs',
			label: 'ABS',
			external: false,
		},
		{
			href: 'https://gerejaorthodox.id/paroikia/',
			label: 'Paroki GOI',
			external: true,
		},
	]

	return (
		<div className="fixed pt-4 w-full flex justify-center z-99">
			<nav
				className="bg-neutral-900 flex rounded-full p-2 space-x-2 shadow-xl/25"
			>
				<Link href="/">
					<Image
						src="/logo/goin/hollow/goin-red.svg"
						alt="GOIN"
						className="block hover:rotate-35 transition ease-in-out duration-300"
						width={40}
						height={40}
						priority
					/>
				</Link>
				{
					nav.map(nav => (
						<Link
							key={nav.href}
							className={`flex h-10 font-semibold items-center justify-center rounded-full border border-transparent border-solid px-2 lg:px-5 transition-colors hover:border-white/[.145] hover:bg-[#1a1a1a] uppercase text-sm ${pathname === nav.href ? '!text-secondary' : ''}`}
							href={nav.href}
							target={nav.external ? '_blank' : ''}
							rel={nav.external ? 'noopener' : ''}
						>
							{nav.label} {nav.external ? ' ↗' : ''}
						</Link>
					))
				}
			</nav>
		</div>
	)
}
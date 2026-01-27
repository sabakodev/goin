'use client'

import Image from "next/image"
import { ButtonLink } from "@/components/global/button"
import { ArrowRightIcon } from "@heroicons/react/16/solid"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HeaderBusiness() {
	const pathname = usePathname()

	const nav = [
		{
			href: '/abs',
			label: 'Home',
			button: false,
		},
		{
			href: '/abs/affiliates',
			label: 'Daftar Aliansi',
			button: false,
		},
		{
			href: 'https://docs.google.com/forms/d/e/1FAIpQLSdeh15C8GeAc8gtZpu0m4QFVJT9_10875R8UEtouFHho3FHzw/viewform',
			label: <>JOIN ABS <ArrowRightIcon className="size-4" /></>,
			button: true,
		},
	]

	const [scrolled, setScrolled] = useState<boolean>(false)

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 20) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		})
	})

	return (
		<div className={`fixed flex min-w-screen ${scrolled ? 'bg-blue-dark/35 backdrop-blur-3xl shadow-lg' : ''} transition duration-300 z-99`}>
			<div className="mx-6 text-xs lg:text-base lg:mx-24 my-6 w-full flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center justify-between text-white font-semibold">
				<Link href="/abs">
					<Image src="/logo/goin/department/business.svg" width={80} height={80} alt="ABS" className="hover:rotate-35 transition ease-in-out duration-300" />
				</Link>
				<div className="flex items-center space-x-8">
					{nav.map((link, id) =>
						link.button ? (
							<ButtonLink key={id} href={link.href} theme="business_solid" small={true}>{link.label}</ButtonLink>
						) : (
							<Link key={id} href={link.href} className={`${pathname === link.href ? 'text-blue-light' : 'text-blue-lighter hover:opacity-50'} transition uppercase`}>{link.label}</Link>
						)
					)}
				</div>
			</div>
		</div>
	)
}
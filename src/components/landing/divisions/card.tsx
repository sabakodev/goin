import Image from "next/image"
import Button, { ButtonLink } from "@/components/global/button"
import React from "react"

export default function Card({ title, children, logo, link, href = '', label = '', ambient = '' }: { title: string, children: React.ReactNode, logo: string, link: string, href?: string, label?: string, ambient?: string }) {
	const target = link === '' ? (href === '' ? '' : href) : link
	const couldCardJump = !(link !== '' && href !== '')

	const colorStart = "from-[" + ambient + "]"

	const JoinButton = () => {
		if (link === '') {
			return (<></>)
		} else {
			return couldCardJump ? <Button small={true}>Join</Button> : <ButtonLink small={true} href={link} external={true}>Join</ButtonLink>
		}
	}

	const LinkButton = () => {
		if (href === '') {
			return (<></>)
		} else {
			return couldCardJump ? <Button small={true} theme="hollow">{label === '' ? 'Web' : label}</Button> : <ButtonLink small={true} href={href} theme="hollow">{label === '' ? 'Web' : label}</ButtonLink>
		}
	}

	const Content = () => (
		<div
			className={`w-full h-full cursor-pointer flex flex-col justify-between transition duration-300 shadow-sm hover:shadow-lg bg-linear-to-b from-0% to-25% ${colorStart} to-primary rounded-xl relative z-10 before:content-[''] before:absolute before:inset-0 before:block before:z-[-5] before:bg-size-[100px] before:bg-no-repeat before:bg-top before:opacity-70 before:blur-3xl p-4 space-y-2`}
			style={{
				'--tw-gradient-from': ambient,
			} as React.CSSProperties & { '--tw-gradient-from': string }}>
			<div>
				<Image src={logo} width={80} height={80} alt={`Logo ${title}`} className="hover:rotate-35 transition ease-in-out duration-300" />
				<h2 className="text-xl font-semibold mt-4">{title}</h2>
			</div>
			<p>{children}</p>
			<div className="flex">
				<JoinButton />
				<LinkButton />
			</div>
		</div>
	)

	return (
		<>
			{
				(target !== '' && couldCardJump) ? <a className="relative" rel="noopener" href={target}><Content /></a> : <Content />
			}
		</>
	)
}
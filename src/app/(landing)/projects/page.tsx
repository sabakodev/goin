import type { Metadata } from "next"

import ProjectsHeader from "@/components/landing/divisions/header"
import Projects from "@/components/landing/divisions/projects"
import FooterPitch from "@/components/landing/divisions/footer"

export const metadata: Metadata = {
	title: "GOIN PROJECTS",
	description: "Gereja Orthodox Indonesia Neophytes",
}

export default function Home() {
	return (
		<div className="bg-primary-dark">
			<ProjectsHeader />
			<Projects />
			<FooterPitch />
		</div>
	)
}

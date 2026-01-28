import Card from "@/components/landing/divisions/card"
import { divisions, projects } from "@/projects"

export default function Projects() {
	const units = [...divisions, ...projects]
	return (
		<div className="mx-10 sm:mx-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 px-4 xl:px-0">
			{units.map((unit, index) => (
				<Card key={index} title={unit.title} logo={unit.logo} link={unit.link} href={unit.href} label={unit.label} ambient={unit.ambient}>
					<span dangerouslySetInnerHTML={{ __html: unit.description }} />
				</Card>
			))}
		</div>
	)
}
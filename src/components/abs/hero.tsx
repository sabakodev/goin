import React from "react"

export default function Hero({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full bg-gradient-to-t from-blue-darkest from-10% via-20% via-blue-darkest to-blue-dark min-h-[50vh] xl:min-h-screen">
			<div className="bg-contain bg-center bg-[url(/assets/overlay/indonesian-map-business.svg)] min-h-[50vh] xl:min-h-screen bg-no-repeat flex justify-center items-center text-white font-serif">
				<p className="text-3xl lg:text-5xl max-w-sm lg:max-w-5xl text-center">{children}</p>
			</div>
		</div>
	)
}
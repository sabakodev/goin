import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'goin.works',
				port: '',
				search: '',
			},
			{
				protocol: 'https',
				hostname: 'goin.sabako.id',
				port: '',
				search: '',
			},
		],
	},
}

export default nextConfig

/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*',
			},
			// TODO: Add further security by granular whitelisting
		],
	},
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/sg',
				destination: '/',
				permanent: true,
			},
		]
	},
}

module.exports = {
	nextConfig,
}

module.exports = {
	async redirects() {
		return [
			// Basic redirect
			{
				source: '/',
				destination: '/home',
				permanent: true,
			},
		]
	},
	images: {
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	compiler: {
		styledComponents: true,
	},
}

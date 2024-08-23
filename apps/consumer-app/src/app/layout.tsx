import type { PropsWithChildren } from 'react'

export default async function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" className="bg-black11 text-white">
			<head></head>
			<body>
				<div className="h-dvh">{children}</div>
			</body>
		</html>
	)
}

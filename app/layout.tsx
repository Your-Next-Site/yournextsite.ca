import type { Metadata } from 'next'
import { Geist_Mono, Raleway } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import Top from '../components/ui/top'

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

const raleway = Raleway({
	variable: '--font-raleway',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Your Next site ',
	description: 'Get a quote today!',
	icons: '/favicon.ico',
	keywords: [
		'your next website',
		'build a site',
		'make your site',
		'launch a web site',
		'your next site',
	],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			className="scrollbar-gutter-stable h-min-[100vh] w-full"
			lang="en"
		>
			<body
				className={`${raleway.variable} ${geistMono.variable} w-full font-[var(--font-raleway)] antialiased`}
			>
				<Top />
				{children}
				<Analytics />
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=AW-17279681348"
					strategy="afterInteractive"
				/>
				<Script
					id="google-ads-global-config"
					strategy="afterInteractive"
				>
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17279681348');
          `}
				</Script>
			</body>
		</html>
	)
}

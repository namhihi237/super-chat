import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Super chat',
	description: 'Chat with AI',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head>
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6466942854670630"
					crossOrigin="anonymous"
				></script>
			</Head>

			<body className={inter.className}>{children}</body>
		</html>
	);
}

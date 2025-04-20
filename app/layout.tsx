// contactsapp/app/[locale]/layout.tsx

import "./globals.css";
import { notFound } from "next/navigation";
import { ThemeProvider } from "../lib/config/providers/ThemeProvider";
import { ToastProvider } from "../lib/config/providers/ToastProvder";

export default async function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	return (
		<html lang={locale} suppressHydrationWarning>
			<body>
				<ToastProvider />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
						{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

// contactsapp/app/[locale]/layout.tsx

import { ToastProvider } from "@/lib/config/providers/ToastProvder";
import { ThemeProvider } from "@/lib/config/providers/ThemeProvider";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";


export default async function RootLayout(props: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const params = await props.params;

	const { locale } = params;

	const { children } = props;
	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();
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
					<NextIntlClientProvider messages={messages}>
						{children}
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}

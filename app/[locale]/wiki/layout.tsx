import { Footer } from "@/components/layout/footer";
import NavigationLinks from "@/components/layout/navbar";
import { ThemeSwitcher } from "@/components/themeSwitcher";
import { RouteConfig } from "@/lib/config/routeConfig";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import type React from "react";

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const t = await getTranslations("Layout")
	return (
		<div className="flex">
			<div className="flex flex-grow flex-col">
				<div className="sticky top-0 right-0 left-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 py-2">
					<div className="flex items-center gap-4">
						<div className="md:hidden">
							<NavigationLinks />
						</div>
						<Link href={RouteConfig.home} className="font-semibold">
							<span className="hidden md:inline">
								{t("logo_text")}
							</span>
							<span className="md:hidden">{t("logo_text")}</span>
						</Link>
						<div className="hidden md:block">
							<NavigationLinks />
						</div>
					</div>

					<div className="flex items-center gap-4">
						<ThemeSwitcher />
					</div>
				</div>

				<main className="min-h-[78vh] flex-grow overflow-auto">{children}</main>
				<Footer />
			</div>
		</div>
	);
}

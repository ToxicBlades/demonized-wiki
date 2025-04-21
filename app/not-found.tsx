import { Footer } from "@/components/layout/footer";
import NavigationLinks from "@/components/layout/navbar";
import { ThemeSwitcher } from "@/components/themeSwitcher";
import { RouteConfig } from "@/lib/config/routeConfig";
import Link from "next/link";

export default async function RootLayout() {
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
								Unofficial Demonized Wiki
							</span>
							<span className="md:hidden">Unofficial Demonized Wiki</span>
						</Link>
						<div className="hidden md:block">
							<NavigationLinks />
						</div>
					</div>

					<div className="flex items-center gap-4">
						<ThemeSwitcher />
					</div>
				</div>

				<main className="flex min-h-[70vh] flex-grow items-center justify-center overflow-auto">
					<div className="mx-auto max-w-md space-y-4 p-6 text-center">
						<h2 className="font-bold text-2xl">Page Under Development</h2>
						<p className="text-muted-foreground">
							This page is currently under development. We're working hard to
							bring you valuable content.
						</p>
						<p className="text-muted-foreground">
							Please help us in contributing and improving our wiki:
						</p>
						<Link
							href={RouteConfig.contribute}
							className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/90"
						>
							Contribute
						</Link>
					</div>
				</main>
				<Footer />
			</div>
		</div>
	);
}

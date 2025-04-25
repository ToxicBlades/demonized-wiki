"use client";
import { RouteConfig } from "@/lib/config/routeConfig";
import { Github } from "lucide-react";
import { useMessages } from "next-intl";
import Link from "next/link";

export function Footer() {
	const t = useMessages().Layout.Footer;

	return (
		<footer className="border-t py-8 md:py-10">
			<div className="container flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:gap-8 md:px-6">
				<div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
					<p className="text-center text-muted-foreground text-sm leading-loose md:text-left">
						{t.disclaimer_part1} <strong>{t.unofficial}</strong>{" "}
						{t.disclaimer_part2}
					</p>
				</div>
				<div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
					<nav className="flex flex-wrap justify-center gap-5 md:gap-6">
						<Link
							href="mailto:toxicblade.work@gmail.com"
							className="font-medium text-sm underline-offset-4 hover:underline"
						>
							{t.contact}
						</Link>
						<Link
							href={RouteConfig.policy}
							className="font-medium text-sm underline-offset-4 hover:underline"
						>
							{t.privacy}
						</Link>
						<Link
							href={RouteConfig.terms}
							className="font-medium text-sm underline-offset-4 hover:underline"
						>
							{t.terms}
						</Link>
						<Link
							href={RouteConfig.contribute}
							target="_blank"
							className="font-medium text-sm underline-offset-4 hover:underline"
						>
							{t.contribute}
						</Link>
						<Link
							href={RouteConfig.contributors}
							className="font-medium text-sm underline-offset-4 hover:underline"
						>
							{t.contributors}
						</Link>
						<Link
							href={RouteConfig.discord}
							target="_blank"
							className="font-medium text-sm underline-offset-4 hover:underline"
						>
							{t.discord}
						</Link>
					</nav>
					<div className="flex items-center gap-5 md:gap-6">
						<Link
							href={RouteConfig.contribute}
							target="_blank"
							rel="noreferrer"
							className="text-muted-foreground transition-colors hover:text-foreground"
						>
							<span className="sr-only">{t.github}</span>
							<Github className="h-5 w-5" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

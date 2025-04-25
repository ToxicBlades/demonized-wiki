import { TypographyH1, TypographyMuted } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { RouteConfig } from "@/lib/config/routeConfig";
import { getMessages } from "next-intl/server";
import Link from "next/link";

export default async function Home() {
	const t = (await getMessages()).Home;

	return (
		<div className="container px-4 py-6">
			<div className="mb-8 flex max-w-[980px] flex-col items-start gap-2 md:mb-12">
				<TypographyH1 className="text-3xl md:text-4xl lg:text-5xl">
					{t.welcome_title}
				</TypographyH1>
				<TypographyMuted className="max-w-[90%] text-base md:max-w-[80%] md:text-lg">
					{t.welcome_description}
				</TypographyMuted>
			</div>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
				<Card className="h-full">
					<CardHeader>
						<CardTitle className="text-xl md:text-2xl">
							{t.guides_title}
						</CardTitle>
						<CardDescription>{t.guides_subtitle}</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm md:text-base">{t.guides_description}</p>
					</CardContent>
					<CardFooter>
						<Button variant="outline" asChild className="w-full">
							<Link href={RouteConfig.guides.community_guides.base}>
								{t.guides_button}
							</Link>
						</Button>
					</CardFooter>
				</Card>

				<Card className="h-full">
					<CardHeader>
						<CardTitle className="text-xl md:text-2xl">
							{t.database_title}
						</CardTitle>
						<CardDescription>{t.database_subtitle}</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm md:text-base">{t.database_description}</p>
					</CardContent>
					<CardFooter>
						<Button variant="outline" asChild className="w-full">
							<Link href={RouteConfig.content.items}>{t.database_button}</Link>
						</Button>
					</CardFooter>
				</Card>

				<Card className="h-full sm:col-span-2 lg:col-span-1">
					<CardHeader>
						<CardTitle className="text-xl md:text-2xl">
							{t.community_title}
						</CardTitle>
						<CardDescription>{t.community_subtitle}</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm md:text-base">{t.community_description}</p>
					</CardContent>
					<CardFooter>
						<Button variant="outline" asChild className="w-full">
							<Link href={RouteConfig.discord}>{t.community_button}</Link>
						</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}

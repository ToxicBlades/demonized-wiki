import { Github, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RouteConfig } from "@/lib/config/routeConfig";
import { getMessages } from "next-intl/server";

export default async function ContactPage() {
	const t = (await getMessages()).Contact;

	return (
		<div className="container mx-auto px-4 py-10 md:px-6">
			<div className="mx-auto max-w-3xl">
				<div className="space-y-2">
					<h1 className="font-bold text-3xl tracking-tight">{t.page_title}</h1>
					<p className="text-muted-foreground">{t.page_description}</p>
				</div>

				<Separator className="my-6" />

				<div className="grid gap-6">
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Mail className="h-5 w-5" />
								<span>{t.email_title}</span>
							</CardTitle>
							<CardDescription>{t.email_description}</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="font-medium text-lg">
								<Link
									href="mailto:toxicblade.work@gmail.com"
									className="text-primary hover:underline"
								>
									toxicblade.work@gmail.com
								</Link>
							</p>
							<p className="mt-2 text-muted-foreground text-sm">
								{t.email_response_time}
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<MessageCircle className="h-5 w-5" />
								<span>{t.discord_title}</span>
							</CardTitle>
							<CardDescription>{t.discord_description}</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<p className="font-medium text-lg">
								{t.server_name}:{" "}
								<span className="text-primary">{t.server_value}</span>
							</p>
							<p className="text-muted-foreground text-sm">{t.discord_info}</p>
							<Button asChild className="w-full sm:w-auto">
								<Link
									href={RouteConfig.discord}
									target="_blank"
									rel="noopener noreferrer"
								>
									{t.join_discord_button}
								</Link>
							</Button>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Github className="h-5 w-5" />
								<span>{t.github_title}</span>
							</CardTitle>
							<CardDescription>{t.github_description}</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<p className="font-medium text-lg">
								{t.username}:{" "}
								<span className="text-primary">{t.username_value}</span>
							</p>
							<p className="text-muted-foreground text-sm">{t.github_info}</p>
							<Button variant="outline" asChild className="w-full sm:w-auto">
								<Link
									href={RouteConfig.contribute}
									target="_blank"
									rel="noopener noreferrer"
								>
									{t.view_github_button}
								</Link>
							</Button>
						</CardContent>
					</Card>
				</div>

				<div className="mt-10 text-center">
					<p className="text-muted-foreground text-sm">{t.footer_text}</p>
				</div>
			</div>
		</div>
	);
}

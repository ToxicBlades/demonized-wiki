"use client";

import { ArrowRight, BookOpen, PlusCircle, Users } from "lucide-react";
import { useMessages } from "next-intl";
import Link from "next/link";

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

export default function GuidesPage() {
	const t = useMessages().Guides;

	const exampleGuide = {
		title: "Example mdx Guide",
		description: "Look how mdx file renders content",
		path: RouteConfig.guides.community_guides.example,
		image: "/placeholder.jpeg",
		author: "Toxic Blade",
		date: "April 21, 2025",
	};

	//TODO: add prisma for handling guides there
	const otherGuides = [
		{
			title: "Placeholder",
			description: "Guidelines for participating in our community.",
			path: "#",
			image: "/diverse-group-meeting.png",
			author: "Moderation Team",
			date: "March 10, 2024",
		},
		{
			title: "Placeholder",
			description: "How to contribute your own guides and content.",
			path: "#",
			image: "/collaborative-growth.png",
			author: "Dev Team",
			date: "February 22, 2024",
		},
		{
			title: "Placeholder",
			description: "Frequently asked questions about our community.",
			path: "#",
			image: "/frequently-asked-questions.png",
			author: "Support Team",
			date: "January 5, 2024",
		},
	];

	return (
		<main className="container mx-auto px-4 py-12">
			<div className="mb-12 text-center">
				<h1 className="mb-4 font-bold text-4xl tracking-tight">
					{t.page_title}
				</h1>
				<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
					{t.page_description}
				</p>
				<Button className="mt-6">
					<PlusCircle className="h-4 w-4" />
					{t.add_guide_button}
				</Button>
			</div>

			{/* Featured Guide */}
			<section className="mb-16">
				<h2 className="mb-6 flex items-center gap-2 font-semibold text-2xl">
					<BookOpen className="h-6 w-6" />
					{t.example_guide_section}
				</h2>
				<Card className="overflow-hidden">
					<div className="grid gap-6 md:grid-cols-2">
						<div className="aspect-video overflow-hidden bg-muted">
							<img
								src={exampleGuide.image || "/placeholder.jpeg"}
								alt={exampleGuide.title}
								className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
							/>
						</div>
						<div className="flex flex-col justify-center p-6 md:p-0 md:pr-6">
							<CardHeader className="p-0">
								<CardTitle className="text-2xl">{exampleGuide.title}</CardTitle>
								<CardDescription className="text-sm">
									{t.by_author} {exampleGuide.author} {t.date_separator}{" "}
									{exampleGuide.date}
								</CardDescription>
							</CardHeader>
							<CardContent className="mt-4 p-0">
								<p>{exampleGuide.description}</p>
							</CardContent>
							<CardFooter className="mt-6 p-0">
								<Button asChild>
									<Link
										href={exampleGuide.path}
										className="flex items-center gap-2"
									>
										{t.read_guide_button}
										<ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
							</CardFooter>
						</div>
					</div>
				</Card>
			</section>

			{/* Other Guides */}
			<section>
				<h2 className="mb-6 flex items-center gap-2 font-semibold text-2xl">
					<Users className="h-6 w-6" />
					{t.more_guides_section}
				</h2>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{otherGuides.map((guide, index) => (
						<Card key={index} className="overflow-hidden">
							<div className="aspect-video overflow-hidden bg-muted">
								<img
									src={guide.image || "/placeholder.jpeg"}
									alt={guide.title}
									className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
								/>
							</div>
							<CardHeader>
								<CardTitle>{guide.title}</CardTitle>
								<CardDescription className="text-sm">
									{t.by_author} {guide.author} {t.date_separator} {guide.date}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p>{guide.description}</p>
							</CardContent>
							<CardFooter>
								<Button variant="outline" asChild className="w-full">
									<Link
										href={guide.path}
										className="flex items-center justify-center gap-2"
									>
										{t.view_guide_button}
										<ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</section>
		</main>
	);
}

"use client";

import { RouteConfig } from "@/lib/config/routeConfig";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

// Authorized navigation links and their dropdown options
const Navlinks = [
	{
		trigger: "User guides",
		contentItems: [
			{
				title: "Beginners guide",
				content: "Learn the basics of the game and how to progress",
				href: RouteConfig.guides.beginners_guide,
			},
			{
				title: "Community guides",
				content: "Community guides made by other players",
				href: RouteConfig.guides.community_guides.base,
			},
		],
	},
	{
		trigger: "Game tabs",
		contentItems: [
			{
				title: "Character",
				content: "Stats,promotion,helper and more...",
				href: RouteConfig.content.character,
			},
			{
				title: "Item",
				content: "Gear, materials crafting and more...",
				href: RouteConfig.content.items,
			},
			{
				title: "Skill",
				content: "Skill stones, skill shop and more...",
				href: RouteConfig.content.locations,
			},
			{
				title: "Minion",
				content: "Minions, monsters,phantoms and more...",
				href: RouteConfig.content.resources,
			},
			{
				title: "Shop",
				content: "Summon, shop and more...",
				href: RouteConfig.content.resources,
			},
			{
				title: "Menu",
				content: "Guild, Battlefield, Demon Village and more...",
				href: RouteConfig.content.resources,
			},
		],
	},
];

// Standard links without dropdowns
const StandardLinks = [
	{
		label: "Mine Grid",
		href: RouteConfig.mine_grid,
	},
];

export default function NavigationLinks() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	// Desktop Navigation
	const DesktopNavigation = (
		<NavigationMenu className="hidden md:flex">
			<NavigationMenuList>
				{Navlinks.map((navItem, index) => (
					<NavigationMenuItem key={index}>
						<NavigationMenuTrigger>{navItem.trigger}</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
								{navItem.contentItems.map((item, itemIndex) => (
									<li key={itemIndex}>
										<NavigationMenuLink asChild>
											<Link
												href={item.href}
												className={cn(
													"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
													"hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
													{
														"bg-accent/50 text-accent-foreground":
															pathname === item.href,
													},
												)}
											>
												<div className="font-medium text-sm leading-none">
													{item.title}
												</div>
												<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
													{item.content}
												</p>
											</Link>
										</NavigationMenuLink>
									</li>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				))}

				{/* Standard links without dropdowns */}
				{StandardLinks.map((link, index) => (
					<NavigationMenuItem key={`standard-${index}`}>
						<Link
							href={link.href}
							className={cn(
								"group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 font-medium text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
								{
									"bg-accent/50 text-accent-foreground": pathname === link.href,
								},
							)}
						>
							{link.label}
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);

	// Mobile Navigation
	const MobileNavigation = (
		<div className="md:hidden">
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<Button variant="ghost" size="icon" className="h-9 w-9">
						<Menu className="h-5 w-5" />
						<span className="sr-only">Toggle menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="w-[300px] sm:w-[350px]">
					<SheetHeader>
						<SheetTitle asChild>
							<Link
								href={RouteConfig.home}
								className="font-semibold text-lg"
								onClick={() => setIsOpen(false)}
							>
								Unofficial Demonized Wiki
							</Link>
						</SheetTitle>
					</SheetHeader>
					<div className="flex flex-col gap-6 py-4">
						<Accordion type="single" collapsible className="w-full">
							{Navlinks.map((navItem, index) => (
								<AccordionItem key={index} value={`item-${index}`}>
									<AccordionTrigger className="text-base">
										{navItem.trigger}
									</AccordionTrigger>
									<AccordionContent>
										<div className="flex flex-col space-y-2 pl-4">
											{navItem.contentItems.map((item, itemIndex) => (
												<Link
													key={itemIndex}
													href={item.href}
													className={cn("py-2 text-sm transition-colors", {
														"font-medium text-primary": pathname === item.href,
														"text-muted-foreground": pathname !== item.href,
													})}
													onClick={() => setIsOpen(false)}
												>
													{item.title}
												</Link>
											))}
										</div>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>

						{/* Standard links in mobile view */}
						<div className="flex flex-col space-y-4 px-1 pt-2">
							<h3 className="font-medium text-muted-foreground text-sm">
								Links
							</h3>
							<div className="flex flex-col space-y-2">
								{StandardLinks.map((link, index) => (
									<Link
										key={`mobile-standard-${index}`}
										href={link.href}
										className={cn("py-2 text-sm transition-colors", {
											"font-medium text-primary": pathname === link.href,
											"text-muted-foreground": pathname !== link.href,
										})}
										onClick={() => setIsOpen(false)}
									>
										{link.label}
									</Link>
								))}
							</div>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);

	return (
		<>
			{DesktopNavigation}
			{MobileNavigation}
		</>
	);
}

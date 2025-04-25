import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMediaQuery } from "@/hooks/use-mobile";
import { RouteConfig } from "@/lib/config/routeConfig";
import { ArrowUp, Crosshair, MoveHorizontal, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function UpgradeTab() {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	const attributes = [
		{
			name: "Max ATK",
			icon: <Zap className="h-4 w-4 text-primary" />,
			benefit: "+5 per upgrade",
			link: null,
		},
		{
			name: "ATK %",
			icon: <Zap className="h-4 w-4 text-primary" />,
			benefit: "+0.1% per upgrade",
			link: null,
		},
		{
			name: "Accuracy",
			icon: <Crosshair className="h-4 w-4 text-primary" />,
			benefit: "+1 per upgrade",
			link: null,
		},
		{
			name: "Evasion",
			icon: <Shield className="h-4 w-4 text-primary" />,
			benefit: "+1 per upgrade",
			link: null,
		},
		{
			name: "Attack Speed %",
			icon: <Zap className="h-4 w-4" />,
			benefit: "+0.1% per upgrade",
			link: RouteConfig.data_base.stats.aspd,
		},
		{
			name: "Move Speed %",
			icon: <MoveHorizontal className="h-4 w-4" />,
			benefit: "+0.1% per upgrade",
			link: RouteConfig.data_base.stats.mspd,
		},
	];

	return (
		<Card className="w-full shadow-md">
			<CardHeader>
				<CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
					<ArrowUp className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
					Character Upgrades
				</CardTitle>
				<CardDescription>
					Enhance your character by distributing Monster Meat for attribute
					upgrades
				</CardDescription>
			</CardHeader>
			<CardContent className="p-3 sm:p-6">
				<div className="space-y-4 sm:space-y-6">
					<div className="rounded-lg">
						<p className="text-slate-700 text-xs leading-relaxed sm:text-sm dark:text-slate-300">
							Players can use{" "}
							<Link
								href={RouteConfig.data_base.resources.monster_meat}
								className="font-medium text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
							>
								Monster Meat
							</Link>{" "}
							to upgrade various character attributes, providing permanent stat
							improvements.
						</p>
					</div>

					{isDesktop ? (
						<div className="overflow-x-auto">
							<Table className="w-full">
								<TableHeader>
									<TableRow>
										<TableHead className="w-[100px] sm:w-[150px]">
											Attribute
										</TableHead>
										<TableHead>Benefits per Upgrade</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{attributes.map((attr, index) => (
										<TableRow key={index}>
											<TableCell className="font-medium">
												{attr.link ? (
													<Link
														href={attr.link}
														className="flex items-center gap-2 text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
													>
														{attr.icon}
														{attr.name}
													</Link>
												) : (
													<div className="flex items-center gap-2">
														{attr.icon}
														{attr.name}
													</div>
												)}
											</TableCell>
											<TableCell>{attr.benefit}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					) : (
						<div className="grid gap-3">
							{attributes.map((attr, index) => (
								<Card key={index} className="overflow-hidden">
									<CardContent className="p-3">
										<div className="flex items-center justify-between">
											{attr.link ? (
												<Link
													href={attr.link}
													className="flex items-center gap-2 text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
												>
													{attr.icon}
													<span className="font-medium">{attr.name}</span>
												</Link>
											) : (
												<div className="flex items-center gap-2">
													{attr.icon}
													<span className="font-medium">{attr.name}</span>
												</div>
											)}
											<span className="text-xs">{attr.benefit}</span>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					)}

					<Tabs defaultValue="beginner" className="w-full">
						<h3 className="mb-3 font-semibold text-base sm:text-lg">
							Recommended Upgrade Strategies
						</h3>
						<TabsList className="grid w-full grid-cols-3">
							<TabsTrigger value="beginner">Beginner</TabsTrigger>
							<TabsTrigger value="midgame">Mid-Game</TabsTrigger>
							<TabsTrigger value="endgame">End-Game</TabsTrigger>
						</TabsList>
						<TabsContent value="beginner" className="mt-4 space-y-4">
							<Card>
								<CardHeader className="pb-2">
									<CardTitle className="text-base sm:text-lg">
										Beginner Strategy
									</CardTitle>
									<CardDescription>
										Best for new players starting the game
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										<div className="rounded-full bg-blue-100 px-2 py-1 font-medium text-blue-800 text-xs sm:px-3 sm:text-sm dark:bg-blue-900 dark:text-blue-200">
											Attack Speed: to lvl 500(max)
										</div>
										<div className="rounded-full bg-green-100 px-2 py-1 font-medium text-green-800 text-xs sm:px-3 sm:text-sm dark:bg-green-900 dark:text-green-200">
											Move Speed: to lvl 200(max)
										</div>
									</div>
									<p className="mt-3 text-slate-600 text-xs sm:text-sm dark:text-slate-400">
										Focus on maxing out Attack Speed first, then Move Speed.
										These stats are difficult to acquire from other sources and
										provide significant advantages in early gameplay.
									</p>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="midgame" className="mt-4 space-y-4">
							<Card>
								<CardHeader className="pb-2">
									<CardTitle className="text-base sm:text-lg">
										Mid-Game Strategy
									</CardTitle>
									<CardDescription>
										For players in the middle stages
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										<div className="rounded-full bg-purple-100 px-2 py-1 font-medium text-purple-800 text-xs sm:px-3 sm:text-sm dark:bg-purple-900 dark:text-purple-200">
											Accuracy: 50%
										</div>
										<div className="rounded-full bg-yellow-100 px-2 py-1 font-medium text-xs text-yellow-800 sm:px-3 sm:text-sm dark:bg-yellow-900 dark:text-yellow-200">
											Evasion: 50%
										</div>
									</div>
									<p className="mt-3 text-slate-600 text-xs sm:text-sm dark:text-slate-400">
										After maximizing Attack and Move Speed, distribute upgrades
										evenly between Accuracy and Evasion for a balanced approach
										to both offensive and defensive capabilities.
									</p>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="endgame" className="mt-4 space-y-4">
							<Card>
								<CardHeader className="pb-2">
									<CardTitle className="text-base sm:text-lg">
										End-Game Strategy
									</CardTitle>
									<CardDescription>
										For veteran players in the late game
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										<div className="rounded-full bg-purple-100 px-2 py-1 font-medium text-purple-800 text-xs sm:px-3 sm:text-sm dark:bg-purple-900 dark:text-purple-200">
											Accuracy: 100%
										</div>
									</div>
									<p className="mt-3 text-slate-600 text-xs sm:text-sm dark:text-slate-400">
										In the end game, focus entirely on Accuracy. The numbers are
										super low at this stage, and Accuracy becomes the most
										important stat from all available upgrades for successful
										high-level encounters.
									</p>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>
			</CardContent>
		</Card>
	);
}

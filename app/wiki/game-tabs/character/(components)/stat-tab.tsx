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
import { Activity, BarChart3, Dumbbell, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

export default function StatTab() {
	// Mock route config for links
	const RouteConfig = {
		data_base: {
			character: {
				experience: "#experience",
			},
			stats: {
				str: "#str",
				dex: "#dex",
				agi: "#agi",
				luk: "#luk",
			},
		},
	};

	return (
		<Card className="w-full shadow-md">
			<CardHeader>
				<CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
					<BarChart3 className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
					Character Stats
				</CardTitle>
				<CardDescription>
					Customize your character by allocating stat points when you level up
				</CardDescription>
			</CardHeader>
			<CardContent className="p-3 sm:p-6">
				<div className="space-y-4 sm:space-y-6">
					<div className="rounded-lg">
						<p className="text-slate-700 text-xs leading-relaxed sm:text-sm dark:text-slate-300">
							When your character{" "}
							<Link
								href={RouteConfig.data_base.character.experience}
								className="font-medium text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
							>
								levels up
							</Link>
							, you receive <span className="font-bold">5 stat points</span> to
							distribute among the following attributes:
						</p>
					</div>

					<div className="overflow-x-auto sm:overflow-visible">
						<Table className="w-full">
							<TableHeader>
								<TableRow>
									<TableHead className="w-[80px] sm:w-[100px]">Stat</TableHead>
									<TableHead>Benefits per Level</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell className="font-medium">
										<Link
											href={RouteConfig.data_base.stats.str}
											className="flex items-center gap-2 text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
										>
											<Dumbbell className="h-4 w-4" />
											STR
										</Link>
									</TableCell>
									<TableCell>+4 Min ATK & +6 Max ATK</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">
										<Link
											href={RouteConfig.data_base.stats.dex}
											className="flex items-center gap-2 text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
										>
											<Zap className="h-4 w-4" />
											DEX
										</Link>
									</TableCell>
									<TableCell>+0.1% ATK & +0.15% CRIT ATK</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">
										<Link
											href={RouteConfig.data_base.stats.agi}
											className="flex items-center gap-2 text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
										>
											<Activity className="h-4 w-4" />
											AGI
										</Link>
									</TableCell>
									<TableCell>+0.05% CRIT CHANCE & +0.5% EVASION</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">
										<Link
											href={RouteConfig.data_base.stats.luk}
											className="flex items-center gap-2 text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
										>
											<Sparkles className="h-4 w-4" />
											LUK
										</Link>
									</TableCell>
									<TableCell>+10 LIFE & +0.5% ACCURACY</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>

					<Tabs defaultValue="beginner" className="w-full">
						<h3 className="mb-3 font-semibold text-base sm:text-lg">
							Recommended Stat Distributions
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
										Beginner Build
									</CardTitle>
									<CardDescription>
										Best for new players starting the game
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										<div className="rounded-full bg-red-100 px-2 py-1 font-medium text-red-800 text-xs sm:px-3 sm:text-sm dark:bg-red-900 dark:text-red-200">
											STR: 20%
										</div>
										<div className="rounded-full bg-blue-100 px-2 py-1 font-medium text-blue-800 text-xs sm:px-3 sm:text-sm dark:bg-blue-900 dark:text-blue-200">
											DEX: 50%
										</div>
										<div className="rounded-full bg-green-100 px-2 py-1 font-medium text-green-800 text-xs sm:px-3 sm:text-sm dark:bg-green-900 dark:text-green-200">
											AGI: 30%
										</div>
									</div>
									<p className="mt-3 text-slate-600 text-xs sm:text-sm dark:text-slate-400">
										This balanced distribution provides crucial stats for the
										early game, helping you progress through initial stages more
										easily.
									</p>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="midgame" className="mt-4 space-y-4">
							<Card>
								<CardHeader className="pb-2">
									<CardTitle className="text-base sm:text-lg">
										Mid-Game Build
									</CardTitle>
									<CardDescription>For Hell stage progression</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										<div className="rounded-full bg-green-100 px-2 py-1 font-medium text-green-800 text-xs sm:px-3 sm:text-sm dark:bg-green-900 dark:text-green-200">
											AGI: Enough for 100% CRIT
										</div>
										<div className="rounded-full bg-purple-100 px-2 py-1 font-medium text-purple-800 text-xs sm:px-3 sm:text-sm dark:bg-purple-900 dark:text-purple-200">
											LUK: All remaining points
										</div>
									</div>
									<p className="mt-3 text-slate-600 text-xs sm:text-sm dark:text-slate-400">
										Focus on reaching 100% critical hit chance with AGI, then
										invest all remaining points into LUK for better accuracy
										(PvE) and life (PvP).
									</p>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="endgame" className="mt-4 space-y-4">
							<Card>
								<CardHeader className="pb-2">
									<CardTitle className="text-base sm:text-lg">
										End-Game Build
									</CardTitle>
									<CardDescription>
										For veteran players in the late game
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										<div className="rounded-full bg-green-100 px-2 py-1 font-medium text-green-800 text-xs sm:px-3 sm:text-sm dark:bg-green-900 dark:text-green-200">
											AGI: Enough for 200% CRIT
										</div>
										<div className="rounded-full bg-purple-100 px-2 py-1 font-medium text-purple-800 text-xs sm:px-3 sm:text-sm dark:bg-purple-900 dark:text-purple-200">
											LUK: All remaining points
										</div>
									</div>
									<p className="mt-3 text-slate-600 text-xs sm:text-sm dark:text-slate-400">
										Invest in AGI to reach 200% critical hit chance to counter
										boss debuffs that reduce crit chance by half. Put all
										remaining points into LUK for maximum survivability and
										accuracy.
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

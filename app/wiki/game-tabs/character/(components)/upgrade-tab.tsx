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
import { RouteConfig } from "@/lib/config/routeConfig";
import {
	ArrowUpCircle,
	Crosshair,
	MoveHorizontal,
	Shield,
	Zap,
} from "lucide-react";
import Link from "next/link";

export default function UpgradeTab() {
	return (
		<Card className="w-full shadow-md">
			<CardHeader>
				<CardTitle className="flex items-center gap-2 text-2xl">
					<ArrowUpCircle className="h-6 w-6 text-primary" />
					Character Upgrades
				</CardTitle>
				<CardDescription>
					Enhance your character by distributing Monster Meat for attribute
					upgrades
				</CardDescription>
			</CardHeader>
			<CardContent className="p-6">
				<div className="space-y-6">
					<div className="rounded-lg">
						<p className="text-slate-700 text-sm leading-relaxed dark:text-slate-300">
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

					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[150px]">Attribute</TableHead>
								<TableHead>Benefits per Upgrade</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell className="font-medium">
									<div className="flex items-center gap-2">
										<Zap className="h-4 w-4 text-primary" />
										Max ATK
									</div>
								</TableCell>
								<TableCell>+5 per upgrade</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">
									<div className="flex items-center gap-2">
										<Zap className="h-4 w-4 text-primary" />
										ATK %
									</div>
								</TableCell>
								<TableCell>+0.1% per upgrade</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">
									<div className="flex items-center gap-2">
										<Crosshair className="h-4 w-4 text-primary" />
										Accuracy
									</div>
								</TableCell>
								<TableCell>+1 per upgrade</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">
									<div className="flex items-center gap-2">
										<Shield className="h-4 w-4 text-primary" />
										Evasion
									</div>
								</TableCell>
								<TableCell>+1 per upgrade</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">
									<Link
										href={RouteConfig.data_base.stats.aspd}
										className="flex items-center gap-2 text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
									>
										<Zap className="h-4 w-4" />
										Attack Speed %
									</Link>
								</TableCell>
								<TableCell>+0.1% per upgrade</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">
									<Link
										href={RouteConfig.data_base.stats.mspd}
										className="flex items-center gap-2 text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
									>
										<MoveHorizontal className="h-4 w-4" />
										Move Speed %
									</Link>
								</TableCell>
								<TableCell>+0.1% per upgrade</TableCell>
							</TableRow>
						</TableBody>
					</Table>

					<Tabs defaultValue="beginner" className="w-full">
						<h3 className="mb-3 font-semibold text-lg">
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
									<CardTitle className="text-lg">Beginner Strategy</CardTitle>
									<CardDescription>
										Best for new players starting the game
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										<div className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-800 text-sm dark:bg-blue-900 dark:text-blue-200">
											Attack Speed: to lvl 500(max)
										</div>
										<div className="rounded-full bg-green-100 px-3 py-1 font-medium text-green-800 text-sm dark:bg-green-900 dark:text-green-200">
											Move Speed: to lvl 200(max)
										</div>
									</div>
									<p className="mt-3 text-slate-600 text-sm dark:text-slate-400">
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
									<CardTitle className="text-lg">Mid-Game Strategy</CardTitle>
									<CardDescription>
										For players in the middle stages
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										<div className="rounded-full bg-purple-100 px-3 py-1 font-medium text-purple-800 text-sm dark:bg-purple-900 dark:text-purple-200">
											Accuracy: 50%
										</div>
										<div className="rounded-full bg-yellow-100 px-3 py-1 font-medium text-sm text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
											Evasion: 50%
										</div>
									</div>
									<p className="mt-3 text-slate-600 text-sm dark:text-slate-400">
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
									<CardTitle className="text-lg">End-Game Strategy</CardTitle>
									<CardDescription>
										For veteran players in the late game
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										<div className="rounded-full bg-purple-100 px-3 py-1 font-medium text-purple-800 text-sm dark:bg-purple-900 dark:text-purple-200">
											Accuracy: 100%
										</div>
									</div>
									<p className="mt-3 text-slate-600 text-sm dark:text-slate-400">
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

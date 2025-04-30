import { Icon } from "@/components/icons/icon";
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
import { Activity, BarChart3, Dumbbell, Sparkles, Zap } from "lucide-react";
import { useMessages } from "next-intl";
import Link from "next/link";

export default function StatTab() {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	const t = useMessages().Tabs["Character-tab"].Stats;
	const commonT = useMessages().Common;
	const statsT = useMessages().Stats;
	const tabsT = useMessages().Tabs["Character-tab"].labels;

	const stats = [
		{
			name: statsT.str,
			icon: <Icon category="stats" name="str"/>,
			benefit: `+4 ${statsT.min_atk} & +6 ${statsT.max_atk}`,
			link: RouteConfig.data_base.stats.str,
		},
		{
			name: statsT.dex,
			icon: <Icon category="stats" name="dex"/>,
			benefit: `+0.1% ${statsT.atk} & +0.15% CRIT ${statsT.atk}`,
			link: RouteConfig.data_base.stats.dex,
		},
		{
			name: statsT.agi,
			icon:  <Icon category="common" name="placeholder"/>,
			benefit: `+0.05% CRIT CHANCE & +0.5% ${statsT.evasion}`,
			link: RouteConfig.data_base.stats.agi,
		},
		{
			name: statsT.luk,
			icon: <Icon category="common" name="placeholder"/>,
			benefit: `+10 ${statsT.life} & +0.5% ${statsT.accuracy}`,
			link: RouteConfig.data_base.stats.luk,
		},
	];

	return (
		<Card className="w-full shadow-md">
			<CardHeader>
				<CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
					<BarChart3 className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
					{t.title}
				</CardTitle>
				<CardDescription>{t.customize_description}</CardDescription>
			</CardHeader>
			<CardContent className="p-3 sm:p-6">
				<div className="space-y-4 sm:space-y-6">
					<div className="rounded-lg">
						<p className="text-slate-700 text-xs leading-relaxed sm:text-sm dark:text-slate-300">
							{t.level_up_intro}{" "}
							<Link
								href={RouteConfig.data_base.character.experience}
								className="font-medium text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
							>
								{t.levels_up}
							</Link>
							, {t.receive_points}{" "}
							<span className="font-bold">5 {t.stat_points}</span>{" "}
							{t.distribute_text}
						</p>
					</div>

					{isDesktop ? (
						<div className="overflow-x-auto">
							<Table className="w-full">
								<TableHeader>
									<TableRow>
										<TableHead className="w-[80px] sm:w-[100px]">
											{tabsT.stat}
										</TableHead>
										<TableHead>{t.benefits_per_level}</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{stats.map((stat, index) => (
										<TableRow key={index}>
											<TableCell className="font-medium">
												<Link
													href={stat.link}
													className="flex items-center gap-2 text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
												>
													{stat.icon}
													{stat.name}
												</Link>
											</TableCell>
											<TableCell>{stat.benefit}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					) : (
						<div className="grid gap-3">
							{stats.map((stat, index) => (
								<Card key={index} className="overflow-hidden">
									<CardContent className="p-3">
										<Link
											href={stat.link}
											className="flex items-center gap-2 text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
										>
											{stat.icon}
											<span className="font-medium">{stat.name}</span>
										</Link>
										<p className="mt-1 text-xs">{stat.benefit}</p>
									</CardContent>
								</Card>
							))}
						</div>
					)}

					<Tabs defaultValue="beginner" className="w-full">
						<h3 className="mb-3 font-semibold text-base sm:text-lg">
							{t.recommended_distributions}
						</h3>
						<TabsList className="grid w-full grid-cols-3">
							<TabsTrigger value="beginner">{t.beginner}</TabsTrigger>
							<TabsTrigger value="midgame">{t.midgame}</TabsTrigger>
							<TabsTrigger value="endgame">{t.endgame}</TabsTrigger>
						</TabsList>
						<TabsContent value="beginner" className="mt-4 space-y-4">
							<Card>
								<CardHeader className="pb-2">
									<CardTitle className="text-base sm:text-lg">
										{t.beginner_build}
									</CardTitle>
									<CardDescription>{t.beginner_description}</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										<div className="rounded-full bg-red-100 px-2 py-1 font-medium text-red-800 text-xs sm:px-3 sm:text-sm dark:bg-red-900 dark:text-red-200">
											{statsT.str}: 20%
										</div>
										<div className="rounded-full bg-blue-100 px-2 py-1 font-medium text-blue-800 text-xs sm:px-3 sm:text-sm dark:bg-blue-900 dark:text-blue-200">
											{statsT.dex}: 50%
										</div>
										<div className="rounded-full bg-green-100 px-2 py-1 font-medium text-green-800 text-xs sm:px-3 sm:text-sm dark:bg-green-900 dark:text-green-200">
											{statsT.agi}: 30%
										</div>
									</div>
									<p className="mt-3 text-slate-600 text-xs sm:text-sm dark:text-slate-400">
										{t.beginner_explanation}
									</p>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="midgame" className="mt-4 space-y-4">
							<Card>
								<CardHeader className="pb-2">
									<CardTitle className="text-base sm:text-lg">
										{t.midgame_build}
									</CardTitle>
									<CardDescription>{t.midgame_description}</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										<div className="rounded-full bg-green-100 px-2 py-1 font-medium text-green-800 text-xs sm:px-3 sm:text-sm dark:bg-green-900 dark:text-green-200">
											{statsT.agi}: {t.enough_for_100_crit}
										</div>
										<div className="rounded-full bg-purple-100 px-2 py-1 font-medium text-purple-800 text-xs sm:px-3 sm:text-sm dark:bg-purple-900 dark:text-purple-200">
											{statsT.luk}: {t.all_remaining}
										</div>
									</div>
									<p className="mt-3 text-slate-600 text-xs sm:text-sm dark:text-slate-400">
										{t.midgame_explanation}
									</p>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="endgame" className="mt-4 space-y-4">
							<Card>
								<CardHeader className="pb-2">
									<CardTitle className="text-base sm:text-lg">
										{t.endgame_build}
									</CardTitle>
									<CardDescription>{t.endgame_description}</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										<div className="rounded-full bg-green-100 px-2 py-1 font-medium text-green-800 text-xs sm:px-3 sm:text-sm dark:bg-green-900 dark:text-green-200">
											{statsT.agi}: {t.enough_for_200_crit}
										</div>
										<div className="rounded-full bg-purple-100 px-2 py-1 font-medium text-purple-800 text-xs sm:px-3 sm:text-sm dark:bg-purple-900 dark:text-purple-200">
											{statsT.luk}: {t.all_remaining}
										</div>
									</div>
									<p className="mt-3 text-slate-600 text-xs sm:text-sm dark:text-slate-400">
										{t.endgame_explanation}
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

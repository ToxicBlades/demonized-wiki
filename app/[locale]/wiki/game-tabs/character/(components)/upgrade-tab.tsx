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
import { ArrowUp, Crosshair, MoveHorizontal, Shield, Zap } from "lucide-react";
import { useMessages } from "next-intl";
import Link from "next/link";

export default function UpgradeTab() {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	const t = useMessages().Tabs["Character-tab"].Upgrade;
	const statsT = useMessages().Stats;
	const resourcesT = useMessages().Resources;

	const attributes = [
		{
			name: statsT.max_atk,
			icon: <Icon category="stats" name="max_atk" />,
			benefit: t.max_atk_benefit,
			link: null,
		},
		{
			name: `${statsT.atk}%`,
			icon: <Icon category="stats" name="atk_percent" />,
			benefit: t.atk_percent_benefit,
			link: null,
		},
		{
			name: statsT.accuracy,
			icon: <Icon category="stats" name="accuracy" />,
			benefit: t.accuracy_benefit,
			link: null,
		},
		{
			name: statsT.evasion,
			icon: <Icon category="stats" name="evasion" />,
			benefit: t.evasion_benefit,
			link: null,
		},
		{
			name: `${statsT.atack_speed}%`,
			icon: <Icon category="stats" name="aspd" />,
			benefit: t.aspd_percent_benefit,
			link: RouteConfig.data_base.stats.aspd,
		},
		{
			name: `${statsT.move_speed}%`,
			icon: <Icon category="stats" name="mspd" />,
			benefit: t.mspd_percent_benefit,
			link: RouteConfig.data_base.stats.mspd,
		},
	];

	return (
		<Card className="w-full shadow-md">
			<CardHeader>
				<CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
					<ArrowUp className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
					{t.title}
				</CardTitle>
				<CardDescription>{t.description}</CardDescription>
			</CardHeader>
			<CardContent className="p-3 sm:p-6">
				<div className="space-y-4 sm:space-y-6">
					<div className="rounded-lg">
						<p className="text-slate-700 text-xs leading-relaxed sm:text-sm dark:text-slate-300">
							{t.intro_text_1}{" "}
							<Link
								href={RouteConfig.data_base.resources.monster_meat}
								className="font-medium text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
							>
								{resourcesT.monster_meat}
							</Link>{" "}
							{t.intro_text_2}
						</p>
					</div>

					{isDesktop ? (
						<div className="overflow-x-auto">
							<Table className="w-full">
								<TableHeader>
									<TableRow>
										<TableHead className="w-[100px] sm:w-[150px]">
											{t.attribute_column}
										</TableHead>
										<TableHead>{t.benefits_column}</TableHead>
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
							{t.strategies_title}
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
										{t.beginner_strategy}
									</CardTitle>
									<CardDescription>{t.beginner_description}</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										<div className="rounded-full bg-blue-100 px-2 py-1 font-medium text-blue-800 text-xs sm:px-3 sm:text-sm dark:bg-blue-900 dark:text-blue-200">
											{statsT.atack_speed}: {t.aspd_max_level}
										</div>
										<div className="rounded-full bg-green-100 px-2 py-1 font-medium text-green-800 text-xs sm:px-3 sm:text-sm dark:bg-green-900 dark:text-green-200">
											{statsT.move_speed}: {t.mspd_max_level}
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
										{t.midgame_strategy}
									</CardTitle>
									<CardDescription>{t.midgame_description}</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										<div className="rounded-full bg-purple-100 px-2 py-1 font-medium text-purple-800 text-xs sm:px-3 sm:text-sm dark:bg-purple-900 dark:text-purple-200">
											{statsT.accuracy}: {t.accuracy_percent}
										</div>
										<div className="rounded-full bg-yellow-100 px-2 py-1 font-medium text-xs text-yellow-800 sm:px-3 sm:text-sm dark:bg-yellow-900 dark:text-yellow-200">
											{statsT.evasion}: {t.evasion_percent}
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
										{t.endgame_strategy}
									</CardTitle>
									<CardDescription>{t.endgame_description}</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										<div className="rounded-full bg-purple-100 px-2 py-1 font-medium text-purple-800 text-xs sm:px-3 sm:text-sm dark:bg-purple-900 dark:text-purple-200">
											{statsT.accuracy}: {t.accuracy_full_percent}
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

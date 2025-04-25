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
import { useMediaQuery } from "@/hooks/use-mobile";
import { RouteConfig } from "@/lib/config/routeConfig";
import { ArrowUpCircle, Sparkles } from "lucide-react";
import { useMessages } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function AwakeningTab() {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	const t = useMessages().Tabs["Character-tab"].Awakening;
	const statsT = useMessages().Stats;
	const resourcesT = useMessages().Resources;

	//TODO: heere numbers are calculated with leah items but should be wothout or mentioned that this is multiplies from items
	const awakeningTiers = [
		{
			name: "Red",
			image: "/characters/red.png",
			stats: [
				{ name: statsT.wind_atk, value: "+135000" },
				{ name: statsT.water_atk, value: "+135000" },
				{ name: statsT.earth_atk, value: "+135000" },
				{ name: statsT.dex, value: "+27000" },
				{ name: `${statsT.trait_atack}%`, value: "+2700" },
				{ name: statsT.accuracy, value: "+27000" },
				{ name: `${statsT.trait_coefficient}%`, value: "+4212" },
				{ name: `${statsT.penetration_dmg}%`, value: "+10107.5" },
				{ name: `${statsT.skill_dmg}%`, value: "+2520" },
				{ name: statsT.life, value: "+687753" },
			],
		},
		{
			name: "Black",
			image: "/characters/black.png",
			stats: [
				{ name: `${statsT.trait_atack}%`, value: "+2700" },
				{ name: statsT.accuracy, value: "+27000" },
				{ name: statsT.min_atk, value: "+108000" },
				{ name: statsT.fire_atk, value: "+135000" },
				{ name: statsT.str, value: "+27000" },
				{ name: `${statsT.crit_atk}%`, value: "+4050" },
				{ name: `${statsT.trait_coefficient}%`, value: "+4338.36" },
				{ name: `${statsT.penetration_dmg}%`, value: "+10259.11" },
				{ name: `${statsT.skill_dmg}%`, value: "+2557.8" },
				{ name: statsT.life, value: "+698069.29" },
			],
		},
		{
			name: "Death Knight",
			image: "/characters/death_knight.png",
			stats: [
				{ name: statsT.max_atk, value: "+16200" },
				{ name: statsT.accuracy, value: "+27000" },
				{ name: statsT.wind_atk, value: "+135000" },
				{ name: statsT.earth_atk, value: "+135000" },
				{ name: statsT.evasion, value: "+27000" },
				{ name: statsT.water_atk, value: "+135000" },
				{ name: `${statsT.trait_coefficient}%`, value: "+4464.72" },
				{ name: `${statsT.penetration_dmg}%`, value: "+10410.72" },
				{ name: `${statsT.skill_dmg}%`, value: "+2595.6" },
				{ name: statsT.life, value: "+708385.59" },
			],
		},
		{
			name: "Dark Knight",
			image: "/characters/dark_knight.png",
			stats: [
				{ name: statsT.water_atk, value: "+135000" },
				{ name: statsT.wind_atk, value: "+135000" },
				{ name: `${statsT.atk}%`, value: "+2700" },
				{ name: statsT.min_atk, value: "+108000" },
				{ name: statsT.str, value: "+27000" },
				{ name: statsT.earth_atk, value: "+135000" },
				{ name: `${statsT.trait_coefficient}%`, value: "+4591.08" },
				{ name: `${statsT.penetration_dmg}%`, value: "+10562.34" },
				{ name: `${statsT.skill_dmg}%`, value: "+2633.39" },
				{ name: statsT.life, value: "+718701.88" },
			],
		},
		{
			name: "Ark Knight",
			image: "/characters/ark_knight.png",
			stats: [
				{ name: statsT.wind_atk, value: "+135000" },
				{ name: statsT.water_atk, value: "+135000" },
				{ name: statsT.fire_atk, value: "+135000" },
				{ name: `${statsT.trait_atack}%`, value: "+2700" },
				{ name: statsT.earth_atk, value: "+135000" },
				{ name: statsT.accuracy, value: "+27000" },
				{ name: `${statsT.trait_coefficient}%`, value: "+4717.44" },
				{ name: `${statsT.penetration_dmg}%`, value: "+10713.95" },
				{ name: `${statsT.skill_dmg}%`, value: "+2671.20" },
				{ name: statsT.life, value: "+729018.18" },
			],
		},
		{
			name: "Knight King",
			image: "/characters/knight_king.png",
			stats: [
				{ name: statsT.water_atk, value: "+135000" },
				{ name: statsT.max_atk, value: "+162000" },
				{ name: statsT.evasion, value: "+27000" },
				{ name: `${statsT.atk}%`, value: "+2700" },
				{ name: statsT.min_atk, value: "+108000" },
				{ name: statsT.earth_atk, value: "+135000" },
				{ name: `${statsT.trait_coefficient}%`, value: "+4843.80" },
				{ name: `${statsT.penetration_dmg}%`, value: "+10865.56" },
				{ name: `${statsT.skill_dmg}%`, value: "+2709" },
				{ name: statsT.life, value: "+739334.47" },
			],
		},
		{
			name: "Devil King",
			image: "/characters/devil_king.png",
			stats: [
				{ name: statsT.accuracy, value: "+27000" },
				{ name: statsT.wind_atk, value: "+135000" },
				{ name: statsT.water_atk, value: "+135000" },
				{ name: statsT.earth_atk, value: "+135000" },
				{ name: statsT.dex, value: "+270000" },
				{ name: `${statsT.trait_atack}%`, value: "+2700" },
				{ name: `${statsT.trait_coefficient}%`, value: "+4870.16" },
				{ name: `${statsT.penetration_dmg}%`, value: "+11017.17" },
				{ name: `${statsT.skill_dmg}%`, value: "+2746.8" },
				{ name: statsT.life, value: "+749650.77" },
			],
		},
		{
			name: "Soul King",
			image: "/characters/soul_king.png",
			stats: [
				{ name: statsT.accuracy, value: "+27000" },
				{ name: statsT.dex, value: "+27000" },
				{ name: `${statsT.trait_atack}%`, value: "+2700" },
				{ name: statsT.water_atk, value: "+135000" },
				{ name: statsT.earth_atk, value: "+135000" },
				{ name: statsT.wind_atk, value: "+135000" },
				{ name: `${statsT.trait_coefficient}%`, value: "+5096.52" },
				{ name: `${statsT.penetration_dmg}%`, value: "+11168.79" },
				{ name: `${statsT.skill_dmg}%`, value: "+2784.60" },
				{ name: statsT.life, value: "+759967.06" },
			],
		},
		{
			name: "Leoric",
			image: "/characters/leoric.png",
			stats: [
				{ name: statsT.wind_atk, value: "+115,000" },
				{ name: statsT.earth_atk, value: "+115,000" },
				{ name: statsT.dex, value: "+23,000" },
				{ name: `${statsT.trait_atack}%`, value: "+2,300%" },
				{ name: statsT.accuracy, value: "+23,000" },
				{ name: `${statsT.trait_coefficient}%`, value: "+3,500%" },
				{ name: `${statsT.penetration_dmg}%`, value: "+8,500%" },
				{ name: `${statsT.skill_dmg}%`, value: "+2,000%" },
				{ name: statsT.life, value: "+500,000" },
			],
		},
		{
			name: "Arthas",
			image: "/characters/arthas.png",
			stats: [
				{ name: statsT.wind_atk, value: "+125,000" },
				{ name: statsT.earth_atk, value: "+125,000" },
				{ name: statsT.dex, value: "+25,000" },
				{ name: `${statsT.trait_atack}%`, value: "+2,500%" },
				{ name: statsT.accuracy, value: "+25,000" },
				{ name: `${statsT.trait_coefficient}%`, value: "+3,800%" },
				{ name: `${statsT.penetration_dmg}%`, value: "+9,000%" },
				{ name: `${statsT.skill_dmg}%`, value: "+2,200%" },
				{ name: statsT.life, value: "+600,000" },
			],
		},
		{
			name: "Knight Shadow",
			image: "/characters/knight_shadow.png",
			stats: [
				{ name: statsT.wind_atk, value: "+130,000" },
				{ name: statsT.earth_atk, value: "+130,000" },
				{ name: statsT.dex, value: "+26,000" },
				{ name: `${statsT.trait_atack}%`, value: "+2,600%" },
				{ name: statsT.accuracy, value: "+26,000" },
				{ name: `${statsT.trait_coefficient}%`, value: "+4,000%" },
				{ name: `${statsT.penetration_dmg}%`, value: "+9,500%" },
				{ name: `${statsT.skill_dmg}%`, value: "+2,400%" },
				{ name: statsT.life, value: "+650,000" },
			],
		},
		{
			name: "Demon Slayer",
			image: "/characters/demon_slayer.png",
			stats: [
				{ name: statsT.wind_atk, value: "+135,000" },
				{ name: statsT.earth_atk, value: "+135,000" },
				{ name: statsT.dex, value: "+27,000" },
				{ name: `${statsT.trait_atack}%`, value: "+2,700%" },
				{ name: statsT.accuracy, value: "+27,000" },
				{ name: `${statsT.trait_coefficient}%`, value: "+4,212%" },
				{ name: `${statsT.penetration_dmg}%`, value: "+10,107.5%" },
				{ name: `${statsT.skill_dmg}%`, value: "+2,520%" },
				{ name: statsT.life, value: "+687,753" },
			],
		},
	];

	return (
		<Card className="w-full shadow-md">
			<CardHeader>
				<CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
					<Sparkles className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
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
								href={RouteConfig.data_base.resources.candle}
								className="font-medium text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
							>
								{resourcesT.candle}
							</Link>{" "}
							{t.intro_text_2}{" "}
							<Link
								href={RouteConfig.data_base.resources.chalice}
								className="font-medium text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
							>
								{resourcesT.chalice_of_drakness}
							</Link>{" "}
							{t.intro_text_3}
						</p>
						<ul className="mt-2 list-disc pl-5 text-slate-700 text-xs sm:text-sm dark:text-slate-300">
							<li>
								{t.candles_use_1}{" "}
								<span className="font-bold">{resourcesT.candle}</span>{" "}
								{t.candles_use_2}
							</li>
							<li>
								{t.chalices_use_1}{" "}
								<span className="font-bold">
									{resourcesT.chalice_of_drakness}
								</span>{" "}
								{t.chalices_use_2}
							</li>
							<li>
								{t.next_skin_text_1}{" "}
								<span className="font-bold">{resourcesT.candle}</span>
							</li>
						</ul>
					</div>

					<h3 className="flex items-center font-semibold text-base sm:text-lg">
						<Sparkles className="mr-2 h-4 w-4 text-primary sm:h-5 sm:w-5" />
						{t.maxed_stats_title}
					</h3>

					<div className="mt-4 rounded-md bg-amber-50 p-2 sm:p-3 dark:bg-amber-950/30">
						<p className="flex items-center font-medium text-amber-800 text-xs sm:text-sm dark:text-amber-400">
							<ArrowUpCircle className="mr-2 h-4 w-4 flex-shrink-0" />
							{t.stats_vary_note}
						</p>
					</div>
					{isDesktop ? (
						<div className="overflow-x-auto">
							<Table className="w-full">
								<TableHeader>
									<TableRow>
										<TableHead className="w-[80px] sm:w-[150px]">
											{t.skin_column}
										</TableHead>
										<TableHead className="w-[60px] sm:w-[120px]">
											{t.preview_column}
										</TableHead>
										<TableHead>{t.awakening_stats_column}</TableHead>
									</TableRow>
								</TableHeader>

								<TableBody>
									{awakeningTiers.map((tier, index) => (
										<TableRow key={index}>
											<TableCell className="font-medium">{tier.name}</TableCell>
											<TableCell>
												<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
													<Image
														src={tier.image || "/placeholder.svg"}
														alt={`${tier.name} ${t.awakening_skin_alt}`}
														width={64}
														height={64}
														className="object-cover"
													/>
												</div>
											</TableCell>
											<TableCell>
												<div className="flex flex-wrap gap-2">
													{tier.stats.map((stat, statIndex) => (
														<div
															key={statIndex}
															className="rounded-md bg-slate-100 px-2 py-1 text-xs dark:bg-slate-800"
														>
															<span className="font-medium">{stat.name}:</span>{" "}
															{stat.value}
														</div>
													))}
												</div>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					) : (
						<div className="grid gap-4">
							{awakeningTiers.map((tier, index) => (
								<Card key={index} className="overflow-hidden">
									<CardContent className="p-3">
										<div className="mb-3 flex items-center gap-3">
											<div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-md">
												<Image
													src={tier.image || "/placeholder.svg"}
													alt={`${tier.name} ${t.awakening_skin_alt}`}
													width={56}
													height={56}
													className="object-cover"
												/>
											</div>
											<h4 className="font-medium">{tier.name}</h4>
										</div>
										<div className="grid gap-2">
											{tier.stats.map((stat, statIndex) => (
												<div
													key={statIndex}
													className="flex justify-between rounded-md bg-slate-50 p-2 text-xs dark:bg-slate-800"
												>
													<span>{stat.name}:</span>
													<span className="font-medium">{stat.value}</span>
												</div>
											))}
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	);
}

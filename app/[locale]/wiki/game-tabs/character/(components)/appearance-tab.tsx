"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useMediaQuery } from "@/hooks/use-mobile";
import { ArrowUpCircle, ChevronDown, Palette } from "lucide-react";
import { useMessages } from "next-intl";
import Image from "next/image";
import { useState } from "react";

export default function AppearanceTab() {
	const isDesktop = useMediaQuery("(min-width: 768px)");
	const [expandedTier, setExpandedTier] = useState<string | null>(null);

	const t = useMessages().Tabs["Character-tab"].Appearance;
	const statsT = useMessages().Stats;

	const possibleStats = [
		statsT.str,
		statsT.dex,
		statsT.min_atk,
		statsT.max_atk,
		statsT.atk,
		`${statsT.atk}%`,
		statsT.accuracy,
		statsT.evasion,
		`${statsT.crit_atk}%`,
		statsT.fire_atk,
		statsT.water_atk,
		statsT.earth_atk,
		statsT.wind_atk,
		`${statsT.trait_atack}%`,
	];

	const recommendedStats = [
		statsT.accuracy,
		statsT.dex,
		`${statsT.trait_atack}%`,
		statsT.earth_atk,
		statsT.water_atk,
		statsT.wind_atk,
	];

	const promotionTiers = [
		{
			name: "Red",
			image: "/characters/red.png",
			stats: [
				{ name: statsT.str, range: "50~1000" },
				{ name: statsT.dex, range: "50~1000" },
				{ name: statsT.min_atk, range: "200~4000" },
				{ name: statsT.max_atk, range: "300~6000" },
				{ name: statsT.atk, range: "250~5000" },
				{ name: `${statsT.atk}%`, range: "5~100" },
				{ name: statsT.accuracy, range: "50~1000" },
				{ name: statsT.evasion, range: "50~1000" },
				{ name: `${statsT.crit_atk}%`, range: "10~150" },
				{ name: statsT.fire_atk, range: "250~5000" },
				{ name: statsT.water_atk, range: "250~5000" },
				{ name: statsT.earth_atk, range: "250~5000" },
				{ name: statsT.wind_atk, range: "250~5000" },
				{ name: `${statsT.trait_atack}%`, range: "5~100" },
			],
		},
		{
			name: "Black",
			image: "/characters/black.png",
			stats: [
				{ name: statsT.str, range: "50~1000" },
				{ name: statsT.dex, range: "50~1000" },
				{ name: statsT.min_atk, range: "200~4000" },
				{ name: statsT.max_atk, range: "300~6000" },
				{ name: statsT.atk, range: "250~5000" },
				{ name: `${statsT.atk}%`, range: "5~100" },
				{ name: statsT.accuracy, range: "50~1000" },
				{ name: statsT.evasion, range: "50~1000" },
				{ name: `${statsT.crit_atk}%`, range: "10~150" },
				{ name: statsT.fire_atk, range: "250~5000" },
				{ name: statsT.water_atk, range: "250~5000" },
				{ name: statsT.earth_atk, range: "250~5000" },
				{ name: statsT.wind_atk, range: "250~5000" },
				{ name: `${statsT.trait_atack}%`, range: "5~100" },
			],
		},
		{
			name: "Death Knight",
			image: "/characters/death_knight.png",
			stats: [
				{ name: statsT.str, range: "50~1000" },
				{ name: statsT.dex, range: "50~1000" },
				{ name: statsT.min_atk, range: "200~4000" },
				{ name: statsT.max_atk, range: "300~6000" },
				{ name: statsT.atk, range: "250~5000" },
				{ name: `${statsT.atk}%`, range: "5~100" },
				{ name: statsT.accuracy, range: "50~1000" },
				{ name: statsT.evasion, range: "50~1000" },
				{ name: `${statsT.crit_atk}%`, range: "10~150" },
				{ name: statsT.fire_atk, range: "250~5000" },
				{ name: statsT.water_atk, range: "250~5000" },
				{ name: statsT.earth_atk, range: "250~5000" },
				{ name: statsT.wind_atk, range: "250~5000" },
				{ name: `${statsT.trait_atack}%`, range: "5~100" },
			],
		},
		{
			name: "Dark Knight",
			image: "/characters/dark_knight.png",
			stats: [
				{ name: statsT.str, range: "50~1000" },
				{ name: statsT.dex, range: "50~1000" },
				{ name: statsT.min_atk, range: "200~4000" },
				{ name: statsT.max_atk, range: "300~6000" },
				{ name: statsT.atk, range: "250~5000" },
				{ name: `${statsT.atk}%`, range: "5~100" },
				{ name: statsT.accuracy, range: "50~1000" },
				{ name: statsT.evasion, range: "50~1000" },
				{ name: `${statsT.crit_atk}%`, range: "10~150" },
				{ name: statsT.fire_atk, range: "250~5000" },
				{ name: statsT.water_atk, range: "250~5000" },
				{ name: statsT.earth_atk, range: "250~5000" },
				{ name: statsT.wind_atk, range: "250~5000" },
				{ name: `${statsT.trait_atack}%`, range: "5~100" },
			],
		},
		{
			name: "Ark Knight",
			image: "/characters/ark_knight.png",
			stats: [
				{ name: statsT.str, range: "200~4000" },
				{ name: statsT.dex, range: "200~4000" },
				{ name: statsT.min_atk, range: "800~16000" },
				{ name: statsT.max_atk, range: "1200~24000" },
				{ name: statsT.atk, range: "1000~20000" },
				{ name: `${statsT.atk}%`, range: "20~400" },
				{ name: statsT.accuracy, range: "200~4000" },
				{ name: statsT.evasion, range: "200~4000" },
				{ name: `${statsT.crit_atk}%`, range: "40~600" },
				{ name: statsT.fire_atk, range: "1000~20000" },
				{ name: statsT.water_atk, range: "1000~20000" },
				{ name: statsT.earth_atk, range: "1000~20000" },
				{ name: statsT.wind_atk, range: "1000~20000" },
				{ name: `${statsT.trait_atack}%`, range: "20~400" },
			],
		},
		{
			name: "Knight King",
			image: "/characters/knight_king.png",
			stats: [
				{ name: statsT.str, range: "300~6000" },
				{ name: statsT.dex, range: "300~6000" },
				{ name: statsT.min_atk, range: "1200~24000" },
				{ name: statsT.max_atk, range: "1800~36000" },
				{ name: statsT.atk, range: "1500~30000" },
				{ name: `${statsT.atk}%`, range: "30~600" },
				{ name: statsT.accuracy, range: "300~6000" },
				{ name: statsT.evasion, range: "300~6000" },
				{ name: `${statsT.crit_atk}%`, range: "60~900" },
				{ name: statsT.fire_atk, range: "1500~30000" },
				{ name: statsT.water_atk, range: "1500~30000" },
				{ name: statsT.earth_atk, range: "1500~30000" },
				{ name: statsT.wind_atk, range: "1500~30000" },
				{ name: `${statsT.trait_atack}%`, range: "30~600" },
			],
		},
		{
			name: "Devil King",
			image: "/characters/devil_king.png",
			stats: [
				{ name: statsT.str, range: "400~8000" },
				{ name: statsT.dex, range: "400~8000" },
				{ name: statsT.min_atk, range: "1600~32000" },
				{ name: statsT.max_atk, range: "2400~48000" },
				{ name: statsT.atk, range: "2000~40000" },
				{ name: `${statsT.atk}%`, range: "40~800" },
				{ name: statsT.accuracy, range: "400~8000" },
				{ name: statsT.evasion, range: "400~8000" },
				{ name: `${statsT.crit_atk}%`, range: "80~1200" },
				{ name: statsT.fire_atk, range: "2000~40000" },
				{ name: statsT.water_atk, range: "2000~40000" },
				{ name: statsT.earth_atk, range: "2000~40000" },
				{ name: statsT.wind_atk, range: "2000~40000" },
				{ name: `${statsT.trait_atack}%`, range: "40~800" },
			],
		},
		{
			name: "Soul King",
			image: "/characters/soul_king.png",
			stats: [
				{ name: statsT.str, range: "500~10000" },
				{ name: statsT.dex, range: "500~10000" },
				{ name: statsT.min_atk, range: "2000~40000" },
				{ name: statsT.max_atk, range: "3000~60000" },
				{ name: statsT.atk, range: "2500~50000" },
				{ name: `${statsT.atk}%`, range: "50~1000" },
				{ name: statsT.accuracy, range: "500~10000" },
				{ name: statsT.evasion, range: "500~10000" },
				{ name: `${statsT.crit_atk}%`, range: "100~1500" },
				{ name: statsT.fire_atk, range: "2500~50000" },
				{ name: statsT.water_atk, range: "2500~50000" },
				{ name: statsT.earth_atk, range: "2500~50000" },
				{ name: statsT.wind_atk, range: "2500~50000" },
				{ name: `${statsT.trait_atack}%`, range: "50~1000" },
			],
		},
		{
			name: "Leoric",
			image: "/characters/leoric.png",
			stats: [
				{ name: statsT.str, range: "600~12000" },
				{ name: statsT.dex, range: "600~12000" },
				{ name: statsT.min_atk, range: "2400~48000" },
				{ name: statsT.max_atk, range: "3600~72000" },
				{ name: statsT.atk, range: "3000~60000" },
				{ name: `${statsT.atk}%`, range: "60~1200" },
				{ name: statsT.accuracy, range: "600~12000" },
				{ name: statsT.evasion, range: "600~12000" },
				{ name: `${statsT.crit_atk}%`, range: "120~1800" },
				{ name: statsT.fire_atk, range: "3000~60000" },
				{ name: statsT.water_atk, range: "3000~60000" },
				{ name: statsT.earth_atk, range: "3000~60000" },
				{ name: statsT.wind_atk, range: "3000~60000" },
				{ name: `${statsT.trait_atack}%`, range: "60~1200" },
			],
		},
		{
			name: "Arthas",
			image: "/characters/arthas.png",
			stats: [
				{ name: statsT.str, range: "700~14000" },
				{ name: statsT.dex, range: "700~14000" },
				{ name: statsT.min_atk, range: "2800~56000" },
				{ name: statsT.max_atk, range: "4200~84000" },
				{ name: statsT.atk, range: "3500~70000" },
				{ name: `${statsT.atk}%`, range: "70~1400" },
				{ name: statsT.accuracy, range: "700~14000" },
				{ name: statsT.evasion, range: "700~14000" },
				{ name: `${statsT.crit_atk}%`, range: "140~2100" },
				{ name: statsT.fire_atk, range: "3500~70000" },
				{ name: statsT.water_atk, range: "3500~70000" },
				{ name: statsT.earth_atk, range: "3500~70000" },
				{ name: statsT.wind_atk, range: "3500~70000" },
				{ name: `${statsT.trait_atack}%`, range: "70~1400" },
			],
		},
		{
			name: "Knight Shadow",
			image: "/characters/knight_shadow.png",
			stats: [
				{ name: statsT.str, range: "800~16000" },
				{ name: statsT.dex, range: "800~16000" },
				{ name: statsT.min_atk, range: "3200~64000" },
				{ name: statsT.max_atk, range: "4800~96000" },
				{ name: statsT.atk, range: "4000~80000" },
				{ name: `${statsT.atk}%`, range: "80~1600" },
				{ name: statsT.accuracy, range: "800~16000" },
				{ name: statsT.evasion, range: "800~16000" },
				{ name: `${statsT.crit_atk}%`, range: "160~2400" },
				{ name: statsT.fire_atk, range: "4000~80000" },
				{ name: statsT.water_atk, range: "4000~80000" },
				{ name: statsT.earth_atk, range: "4000~80000" },
				{ name: statsT.wind_atk, range: "4000~80000" },
				{ name: `${statsT.trait_atack}%`, range: "80~1600" },
			],
		},
		{
			name: "Demon Slayer",
			image: "/characters/demon_slayer.png",
			stats: [
				{ name: statsT.str, range: "900~18000" },
				{ name: statsT.dex, range: "900~18000" },
				{ name: statsT.min_atk, range: "3600~72000" },
				{ name: statsT.max_atk, range: "5400~108000" },
				{ name: statsT.atk, range: "4500~90000" },
				{ name: `${statsT.atk}%`, range: "90~1800" },
				{ name: statsT.accuracy, range: "900~18000" },
				{ name: statsT.evasion, range: "900~18000" },
				{ name: `${statsT.crit_atk}%`, range: "180~2700" },
				{ name: statsT.fire_atk, range: "4500~90000" },
				{ name: statsT.water_atk, range: "4500~90000" },
				{ name: statsT.earth_atk, range: "4500~90000" },
				{ name: statsT.wind_atk, range: "4500~90000" },
				{ name: `${statsT.trait_atack}%`, range: "90~1800" },
			],
		},
	];

	const specialSkins = [
		{
			name: t.berserker,
			image: "/skins/berserker.png",
			source: t.berserker_source,
			effect: t.berserker_effect,
		},
		{
			name: t.oni,
			image: "/skins/oni.png",
			source: t.oni_source,
			effect: t.oni_effect,
		},
		{
			name: t.succubus,
			image: "/skins/succubus.png",
			source: t.succubus_source,
			effect: t.succubus_effect,
		},
		{
			name: t.funny_demon,
			image: "/skins/funny_demon.png",
			source: t.funny_demon_source,
			effect: t.funny_demon_effect,
		},
		{
			name: t.dancer,
			image: "/skins/dancer_of_the_mist.png",
			source: t.dancer_source,
			effect: t.dancer_effect,
		},
		{
			name: t.dragon_tamer,
			image: "/skins/dragon_tamer.png",
			source: t.dragon_tamer_source,
			effect: t.dragon_tamer_effect,
		},
	];

	const toggleTier = (tierName: string) => {
		if (expandedTier === tierName) {
			setExpandedTier(null);
		} else {
			setExpandedTier(tierName);
		}
	};

	return (
		<Card className="w-full shadow-md">
			<CardHeader>
				<CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
					<Palette className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
					{t.title}
				</CardTitle>
				<CardDescription>{t.description}</CardDescription>
			</CardHeader>
			<CardContent className="p-3 sm:p-6">
				<div className="space-y-4 sm:space-y-6">
					<div className="rounded-lg">
						<p className="mb-4 text-slate-700 text-xs leading-relaxed sm:text-sm dark:text-slate-300">
							{t.intro_text}
						</p>

						<div className="space-y-4">
							<div>
								<h4 className="mb-2 font-semibold text-sm">
									{t.possible_stats}:
								</h4>
								<div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-3 sm:text-sm md:grid-cols-4">
									{possibleStats.map((stat, index) => (
										<div
											key={index}
											className="rounded bg-slate-100 p-2 dark:bg-slate-800"
										>
											{stat}
										</div>
									))}
								</div>
							</div>

							<div className="rounded-lg bg-amber-50 p-3 text-xs sm:text-sm dark:bg-amber-950/30">
								<p className="mb-1 flex items-center font-medium">
									<ArrowUpCircle className="mr-1 h-4 w-4 text-amber-600 dark:text-amber-400" />
									{t.beginner_tip_title}:
								</p>
								<p>{t.beginner_tip_text}</p>
							</div>
							<div>
								<h4 className="mb-2 font-semibold text-sm">
									{t.recommended_stats}
								</h4>
								<div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-3 sm:text-sm">
									{recommendedStats.map((stat, index) => (
										<div
											key={index}
											className="rounded bg-green-100 p-2 dark:bg-green-900/30"
										>
											{stat}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					<h3 className="flex items-center font-semibold text-base sm:text-lg">
						<Palette className="mr-2 h-4 w-4 text-primary sm:h-5 sm:w-5" />
						{t.tiers_title}
					</h3>

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
										<TableHead className="text-center">
											{t.slots_column}
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{promotionTiers.map((tier, index) => (
										<TableRow key={index}>
											<TableCell className="font-medium">{tier.name}</TableCell>
											<TableCell>
												<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
													<Image
														src={tier.image || "/placeholder.svg"}
														alt={`${tier.name} ${t.promotion_skin_alt}`}
														width={64}
														height={64}
														className="object-cover"
													/>
												</div>
											</TableCell>
											<TableCell>
												<div className="grid grid-cols-1 gap-2">
													<div className="rounded p-2 text-xs">
														<Select>
															<SelectTrigger className="w-full">
																<SelectValue placeholder={t.check_stat_range} />
															</SelectTrigger>
															<SelectContent>
																{tier.stats.map((stat, idx) => (
																	<SelectItem key={idx} value={stat.name}>
																		{stat.name} ({stat.range})
																	</SelectItem>
																))}
															</SelectContent>
														</Select>
													</div>
												</div>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					) : (
						<div className="grid gap-4">
							{promotionTiers.map((tier, index) => (
								<Card key={index} className="overflow-hidden">
									<CardContent className="p-3">
										<div
											className="flex cursor-pointer items-center justify-between"
											onClick={() => toggleTier(tier.name)}
										>
											<div className="flex items-center gap-3">
												<div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-md">
													<Image
														src={tier.image || "/placeholder.svg"}
														alt={`${tier.name} ${t.promotion_skin_alt}`}
														width={56}
														height={56}
														className="object-cover"
													/>
												</div>
												<div>
													<h4 className="font-medium">{tier.name}</h4>
													<p className="text-slate-500 text-xs dark:text-slate-400">
														{t.tap_to_view}
													</p>
												</div>
											</div>
											<ChevronDown
												className={`h-5 w-5 transition-transform ${expandedTier === tier.name ? "rotate-180" : ""}`}
											/>
										</div>

										{expandedTier === tier.name && (
											<div className="mt-3 border-t pt-3">
												<h5 className="mb-2 font-medium text-sm">
													{t.stat_ranges}:
												</h5>
												<div className="grid grid-cols-1 gap-2 text-xs">
													{tier.stats.map((stat, idx) => (
														<div
															key={idx}
															className="flex justify-between rounded bg-slate-50 p-2 dark:bg-slate-800"
														>
															<span>{stat.name}:</span>
															<span className="font-medium">{stat.range}</span>
														</div>
													))}
												</div>
											</div>
										)}
									</CardContent>
								</Card>
							))}
						</div>
					)}
				</div>

				<h3 className="mt-6 flex items-center font-semibold text-base sm:text-lg">
					<Palette className="mr-2 h-4 w-4 text-primary sm:h-5 sm:w-5" />
					{t.special_appearance}
				</h3>

				<p className="mb-4 text-slate-700 text-xs leading-relaxed sm:text-sm dark:text-slate-300">
					{t.special_appearance_text}
				</p>

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
									<TableHead>{t.source_column}</TableHead>
									<TableHead>{t.effect_column}</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{specialSkins.map((skin, index) => (
									<TableRow key={index}>
										<TableCell className="font-medium">{skin.name}</TableCell>
										<TableCell>
											<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
												<Image
													src={skin.image || "/placeholder.svg"}
													alt={`${skin.name} ${t.special_skin_alt}`}
													width={64}
													height={64}
													className="object-cover"
												/>
											</div>
										</TableCell>
										<TableCell>{skin.source}</TableCell>
										<TableCell>{skin.effect}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				) : (
					<div className="grid gap-4">
						{specialSkins.map((skin, index) => (
							<Card key={index} className="overflow-hidden">
								<CardContent className="p-3">
									<div className="flex items-center gap-3">
										<div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-md">
											<Image
												src={skin.image || "/placeholder.svg"}
												alt={`${skin.name} ${t.special_skin_alt}`}
												width={56}
												height={56}
												className="object-cover"
											/>
										</div>
										<div>
											<h4 className="font-medium">{skin.name}</h4>
											<p className="mt-1 text-slate-500 text-xs dark:text-slate-400">
												{skin.source}
											</p>
										</div>
									</div>
									<div className="mt-2 rounded-md bg-slate-50 p-2 text-xs dark:bg-slate-800">
										<span className="font-medium">{t.effect_label}:</span>{" "}
										{skin.effect}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				)}
			</CardContent>
		</Card>
	);
}

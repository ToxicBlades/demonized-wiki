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
import Image from "next/image";
import { useState } from "react";

export default function AppearanceTab() {
	const isDesktop = useMediaQuery("(min-width: 768px)");
	const [expandedTier, setExpandedTier] = useState<string | null>(null);

	const possibleStats = [
		"STR",
		"DEX",
		"Min ATK",
		"Max ATK",
		"ATK",
		"ATK%",
		"Accuracy",
		"Evasion",
		"CRIT ATK%",
		"Fire ATK",
		"Water ATK",
		"Earth ATK",
		"Wind ATK",
		"Trait ATK%",
	];

	const recommendedStats = [
		"Accuracy",
		"DEX",
		"Trait ATK%",
		"Earth ATK",
		"Water ATK",
		"Wind ATK",
	];

	const promotionTiers = [
		{
			name: "Red",
			image: "/characters/red.png",
			stats: [
				{ name: "STR", range: "50~1000" },
				{ name: "DEX", range: "50~1000" },
				{ name: "Min ATK", range: "200~4000" },
				{ name: "Max ATK", range: "300~6000" },
				{ name: "ATK", range: "250~5000" },
				{ name: "ATK%", range: "5~100" },
				{ name: "Accuracy", range: "50~1000" },
				{ name: "Evasion", range: "50~1000" },
				{ name: "CRIT ATK%", range: "10~150" },
				{ name: "Fire ATK", range: "250~5000" },
				{ name: "Water ATK", range: "250~5000" },
				{ name: "Earth ATK", range: "250~5000" },
				{ name: "Wind ATK", range: "250~5000" },
				{ name: "Trait ATK%", range: "5~100" },
			],
		},
		{
			name: "Black",
			image: "/characters/black.png",
			stats: [
				{ name: "STR", range: "50~1000" },
				{ name: "DEX", range: "50~1000" },
				{ name: "Min ATK", range: "200~4000" },
				{ name: "Max ATK", range: "300~6000" },
				{ name: "ATK", range: "250~5000" },
				{ name: "ATK%", range: "5~100" },
				{ name: "Accuracy", range: "50~1000" },
				{ name: "Evasion", range: "50~1000" },
				{ name: "CRIT ATK%", range: "10~150" },
				{ name: "Fire ATK", range: "250~5000" },
				{ name: "Water ATK", range: "250~5000" },
				{ name: "Earth ATK", range: "250~5000" },
				{ name: "Wind ATK", range: "250~5000" },
				{ name: "Trait ATK%", range: "5~100" },
			],
		},
		{
			name: "Death Knight",
			image: "/characters/death_knight.png",
			stats: [
				{ name: "STR", range: "50~1000" },
				{ name: "DEX", range: "50~1000" },
				{ name: "Min ATK", range: "200~4000" },
				{ name: "Max ATK", range: "300~6000" },
				{ name: "ATK", range: "250~5000" },
				{ name: "ATK%", range: "5~100" },
				{ name: "Accuracy", range: "50~1000" },
				{ name: "Evasion", range: "50~1000" },
				{ name: "CRIT ATK%", range: "10~150" },
				{ name: "Fire ATK", range: "250~5000" },
				{ name: "Water ATK", range: "250~5000" },
				{ name: "Earth ATK", range: "250~5000" },
				{ name: "Wind ATK", range: "250~5000" },
				{ name: "Trait ATK%", range: "5~100" },
			],
		},
		{
			name: "Dark Knight",
			image: "/characters/dark_knight.png",
			stats: [
				{ name: "STR", range: "50~1000" },
				{ name: "DEX", range: "50~1000" },
				{ name: "Min ATK", range: "200~4000" },
				{ name: "Max ATK", range: "300~6000" },
				{ name: "ATK", range: "250~5000" },
				{ name: "ATK%", range: "5~100" },
				{ name: "Accuracy", range: "50~1000" },
				{ name: "Evasion", range: "50~1000" },
				{ name: "CRIT ATK%", range: "10~150" },
				{ name: "Fire ATK", range: "250~5000" },
				{ name: "Water ATK", range: "250~5000" },
				{ name: "Earth ATK", range: "250~5000" },
				{ name: "Wind ATK", range: "250~5000" },
				{ name: "Trait ATK%", range: "5~100" },
			],
		},
		{
			name: "Ark Knight",
			image: "/characters/ark_knight.png",
			stats: [
				{ name: "STR", range: "200~4000" },
				{ name: "DEX", range: "200~4000" },
				{ name: "Min ATK", range: "800~16000" },
				{ name: "Max ATK", range: "1200~24000" },
				{ name: "ATK", range: "1000~20000" },
				{ name: "ATK%", range: "20~400" },
				{ name: "Accuracy", range: "200~4000" },
				{ name: "Evasion", range: "200~4000" },
				{ name: "CRIT ATK%", range: "40~600" },
				{ name: "Fire ATK", range: "1000~20000" },
				{ name: "Water ATK", range: "1000~20000" },
				{ name: "Earth ATK", range: "1000~20000" },
				{ name: "Wind ATK", range: "1000~20000" },
				{ name: "Trait ATK%", range: "20~400" },
			],
		},
		{
			name: "Knight King",
			image: "/characters/knight_king.png",
			stats: [
				{ name: "STR", range: "300~6000" },
				{ name: "DEX", range: "300~6000" },
				{ name: "Min ATK", range: "1200~24000" },
				{ name: "Max ATK", range: "1800~36000" },
				{ name: "ATK", range: "1500~30000" },
				{ name: "ATK%", range: "30~600" },
				{ name: "Accuracy", range: "300~6000" },
				{ name: "Evasion", range: "300~6000" },
				{ name: "CRIT ATK%", range: "60~900" },
				{ name: "Fire ATK", range: "1500~30000" },
				{ name: "Water ATK", range: "1500~30000" },
				{ name: "Earth ATK", range: "1500~30000" },
				{ name: "Wind ATK", range: "1500~30000" },
				{ name: "Trait ATK%", range: "30~600" },
			],
		},
		{
			name: "Devil King",
			image: "/characters/devil_king.png",
			stats: [
				{ name: "STR", range: "400~8000" },
				{ name: "DEX", range: "400~8000" },
				{ name: "Min ATK", range: "1600~32000" },
				{ name: "Max ATK", range: "2400~48000" },
				{ name: "ATK", range: "2000~40000" },
				{ name: "ATK%", range: "40~800" },
				{ name: "Accuracy", range: "400~8000" },
				{ name: "Evasion", range: "400~8000" },
				{ name: "CRIT ATK%", range: "80~1200" },
				{ name: "Fire ATK", range: "2000~40000" },
				{ name: "Water ATK", range: "2000~40000" },
				{ name: "Earth ATK", range: "2000~40000" },
				{ name: "Wind ATK", range: "2000~40000" },
				{ name: "Trait ATK%", range: "40~800" },
			],
		},
		{
			name: "Soul King",
			image: "/characters/soul_king.png",
			stats: [
				{ name: "STR", range: "500~10000" },
				{ name: "DEX", range: "500~10000" },
				{ name: "Min ATK", range: "2000~40000" },
				{ name: "Max ATK", range: "3000~60000" },
				{ name: "ATK", range: "2500~50000" },
				{ name: "ATK%", range: "50~1000" },
				{ name: "Accuracy", range: "500~10000" },
				{ name: "Evasion", range: "500~10000" },
				{ name: "CRIT ATK%", range: "100~1500" },
				{ name: "Fire ATK", range: "2500~50000" },
				{ name: "Water ATK", range: "2500~50000" },
				{ name: "Earth ATK", range: "2500~50000" },
				{ name: "Wind ATK", range: "2500~50000" },
				{ name: "Trait ATK%", range: "50~1000" },
			],
		},
		{
			name: "Leoric",
			image: "/characters/leoric.png",
			stats: [
				{ name: "STR", range: "600~12000" },
				{ name: "DEX", range: "600~12000" },
				{ name: "Min ATK", range: "2400~48000" },
				{ name: "Max ATK", range: "3600~72000" },
				{ name: "ATK", range: "3000~60000" },
				{ name: "ATK%", range: "60~1200" },
				{ name: "Accuracy", range: "600~12000" },
				{ name: "Evasion", range: "600~12000" },
				{ name: "CRIT ATK%", range: "120~1800" },
				{ name: "Fire ATK", range: "3000~60000" },
				{ name: "Water ATK", range: "3000~60000" },
				{ name: "Earth ATK", range: "3000~60000" },
				{ name: "Wind ATK", range: "3000~60000" },
				{ name: "Trait ATK%", range: "60~1200" },
			],
		},
		{
			name: "Arthas",
			image: "/characters/arthas.png",
			stats: [
				{ name: "STR", range: "700~14000" },
				{ name: "DEX", range: "700~14000" },
				{ name: "Min ATK", range: "2800~56000" },
				{ name: "Max ATK", range: "4200~84000" },
				{ name: "ATK", range: "3500~70000" },
				{ name: "ATK%", range: "70~1400" },
				{ name: "Accuracy", range: "700~14000" },
				{ name: "Evasion", range: "700~14000" },
				{ name: "CRIT ATK%", range: "140~2100" },
				{ name: "Fire ATK", range: "3500~70000" },
				{ name: "Water ATK", range: "3500~70000" },
				{ name: "Earth ATK", range: "3500~70000" },
				{ name: "Wind ATK", range: "3500~70000" },
				{ name: "Trait ATK%", range: "70~1400" },
			],
		},
		{
			name: "Knight Shadow",
			image: "/characters/knight_shadow.png",
			stats: [
				{ name: "STR", range: "800~16000" },
				{ name: "DEX", range: "800~16000" },
				{ name: "Min ATK", range: "3200~64000" },
				{ name: "Max ATK", range: "4800~96000" },
				{ name: "ATK", range: "4000~80000" },
				{ name: "ATK%", range: "80~1600" },
				{ name: "Accuracy", range: "800~16000" },
				{ name: "Evasion", range: "800~16000" },
				{ name: "CRIT ATK%", range: "160~2400" },
				{ name: "Fire ATK", range: "4000~80000" },
				{ name: "Water ATK", range: "4000~80000" },
				{ name: "Earth ATK", range: "4000~80000" },
				{ name: "Wind ATK", range: "4000~80000" },
				{ name: "Trait ATK%", range: "80~1600" },
			],
		},
		{
			name: "Demon Slayer",
			image: "/characters/demon_slayer.png",
			stats: [
				{ name: "STR", range: "900~18000" },
				{ name: "DEX", range: "900~18000" },
				{ name: "Min ATK", range: "3600~72000" },
				{ name: "Max ATK", range: "5400~108000" },
				{ name: "ATK", range: "4500~90000" },
				{ name: "ATK%", range: "90~1800" },
				{ name: "Accuracy", range: "900~18000" },
				{ name: "Evasion", range: "900~18000" },
				{ name: "CRIT ATK%", range: "180~2700" },
				{ name: "Fire ATK", range: "4500~90000" },
				{ name: "Water ATK", range: "4500~90000" },
				{ name: "Earth ATK", range: "4500~90000" },
				{ name: "Wind ATK", range: "4500~90000" },
				{ name: "Trait ATK%", range: "90~1800" },
			],
		},
	];

	const specialSkins = [
		{
			name: "Berserker",
			image: "/skins/berserker.png",
			source: "Transcendence Shop: 30 coins",
			effect: "Appearence HP +1% per level",
		},
		{
			name: "Oni",
			image: "/skins/oni.png",
			source: "Transcendence Shop: 30 coins",
			effect: "Appearence Attack Power +1% per level",
		},
		{
			name: "Succubus",
			image: "/skins/succubus.png",
			source: "Blood Contract: 400k blood",
			effect: "Appearence Skill Attack Power +1% per level",
		},
		{
			name: "Funny Demon",
			image: "/skins/funny_demon.png",
			source: "Second Year Anniversary",
			effect: "Appearence Skill Attack Power +1% per level",
		},
		{
			name: "Dancer of the Mist",
			image: "/skins/dancer_of_the_mist.png",
			source: "Cherry Blossom Event",
			effect: "Appearence Attack Power +1% per level",
		},
		{
			name: "Dragon Tamer",
			image: "/skins/dragon_tamer.png",
			source: "Blue Dragon Event",
			effect: "Appeareance HP +1% per level",
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
					Appearance Ability
				</CardTitle>
				<CardDescription>
					Upgrade your character's appearance and stats through the promotion
					system
				</CardDescription>
			</CardHeader>
			<CardContent className="p-3 sm:p-6">
				<div className="space-y-4 sm:space-y-6">
					<div className="rounded-lg">
						<p className="mb-4 text-slate-700 text-xs leading-relaxed sm:text-sm dark:text-slate-300">
							Promoting your character provides not only new skins but also
							appearance abilities for each skin. You get 2 slots on 1st level
							of skin and +1 slot for each level up.
						</p>

						<div className="space-y-4">
							<div>
								<h4 className="mb-2 font-semibold text-sm">Possible Stats:</h4>
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
									Beginner Tip:
								</p>
								<p>
									At the start, focus on rolling for legendary and mythic stats
									regardless of which ones they are. As you progress to
									mid-game, follow the recommended stats for all appearance
									skins.
								</p>
							</div>
							<div>
								<h4 className="mb-2 font-semibold text-sm">
									Recommended Stats
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
						Promotion Tiers and stats
					</h3>

					{isDesktop ? (
						<div className="overflow-x-auto">
							<Table className="w-full">
								<TableHeader>
									<TableRow>
										<TableHead className="w-[80px] sm:w-[150px]">
											Skin
										</TableHead>
										<TableHead className="w-[60px] sm:w-[120px]">
											Preview
										</TableHead>
										<TableHead className="text-center">Slots</TableHead>
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
														alt={`${tier.name} promotion skin`}
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
																<SelectValue placeholder="Check stat range" />
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
														alt={`${tier.name} promotion skin`}
														width={56}
														height={56}
														className="object-cover"
													/>
												</div>
												<div>
													<h4 className="font-medium">{tier.name}</h4>
													<p className="text-slate-500 text-xs dark:text-slate-400">
														Tap to view stat ranges
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
													Stat Ranges:
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
					Special Appearance
				</h3>

				<p className="mb-4 text-slate-700 text-xs leading-relaxed sm:text-sm dark:text-slate-300">
					You can receive different skins which have possess effect bonuses
				</p>

				{isDesktop ? (
					<div className="overflow-x-auto">
						<Table className="w-full">
							<TableHeader>
								<TableRow>
									<TableHead className="w-[80px] sm:w-[150px]">Skin</TableHead>
									<TableHead className="w-[60px] sm:w-[120px]">
										Preview
									</TableHead>
									<TableHead>Source</TableHead>
									<TableHead>Possess Effect</TableHead>
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
													alt={`${skin.name} special skin`}
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
												alt={`${skin.name} special skin`}
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
										<span className="font-medium">Effect:</span> {skin.effect}
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

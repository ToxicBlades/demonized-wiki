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
import Image from "next/image";
import Link from "next/link";

export default function AwakeningTab() {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	//TODO: heere numbers are calculated with leah items but should be wothout or mentioned that this is multiplies from items
	const awakeningTiers = [
		{
			name: "Red",
			image: "/characters/red.png",
			stats: [
				{ name: "Wind ATK", value: "+135000" },
				{ name: "Water ATK", value: "+135000" },
				{ name: "Earth ATK", value: "+135000" },
				{ name: "DEX", value: "+27000" },
				{ name: "Trait ATK%", value: "+2700" },
				{ name: "Accuracy", value: "+27000" },
				{ name: "Trait Coefficient%", value: "+4212" },
				{ name: "Penetration DMG%", value: "+10107.5" },
				{ name: "Skill DMG%", value: "+2520" },
				{ name: "Life", value: "+687753" },
			],
		},
		{
			name: "Black",
			image: "/characters/black.png",
			stats: [
				{ name: "Trait ATK%", value: "+2700" },
				{ name: "Accuracy", value: "+27000" },
				{ name: "Min ATK", value: "+108000" },
				{ name: "Fire ATK", value: "+135000" },
				{ name: "STR", value: "+27000" },
				{ name: "CRIT ATK%", value: "+4050" },
				{ name: "Trait Coefficient%", value: "+4338.36" },
				{ name: "Penetration DMG%", value: "+10259.11" },
				{ name: "Skill DMG%", value: "+2557.8" },
				{ name: "Life", value: "+698069.29" },
			],
		},
		{
			name: "Death Knight",
			image: "/characters/death_knight.png",
			stats: [
				{ name: "Max ATK", value: "+16200" },
				{ name: "Accuracy", value: "+27000" },
				{ name: "Wind ATK", value: "+135000" },
				{ name: "Earth ATK", value: "+135000" },
				{ name: "Evasion", value: "+27000" },
				{ name: "Water ATK", value: "+135000" },
				{ name: "Trait Coefficient%", value: "+4464.72" },
				{ name: "Penetration DMG%", value: "+10410.72" },
				{ name: "Skill DMG%", value: "+2595.6" },
				{ name: "Life", value: "+708385.59" },
			],
		},
		{
			name: "Dark Knight",
			image: "/characters/dark_knight.png",
			stats: [
				{ name: "Water ATK", value: "+135000" },
				{ name: "Wind ATK", value: "+135000" },
				{ name: "ATK%", value: "+2700" },
				{ name: "Min ATK", value: "+108000" },
				{ name: "STR", value: "+27000" },
				{ name: "Earth ATK", value: "+135000" },
				{ name: "Trait Coefficient%", value: "+4591.08" },
				{ name: "Penetration DMG%", value: "+10562.34" },
				{ name: "Skill DMG%", value: "+2633.39" },
				{ name: "Life", value: "+718701.88" },
			],
		},
		{
			name: "Ark Knight",
			image: "/characters/ark_knight.png",
			stats: [
				{ name: "Wind ATK", value: "+135000" },
				{ name: "Water ATK", value: "+135000" },
				{ name: "Fire ATK", value: "+135000" },
				{ name: "Trait ATK%", value: "+2700" },
				{ name: "Earth ATK", value: "+135000" },
				{ name: "Accuracy", value: "+27000" },
				{ name: "Trait Coefficient%", value: "+4717.44" },
				{ name: "Penetration DMG%", value: "+10713.95" },
				{ name: "Skill DMG%", value: "+2671.20" },
				{ name: "Life", value: "+729018.18" },
			],
		},
		{
			name: "Knight King",
			image: "/characters/knight_king.png",
			stats: [
				{ name: "Water ATK", value: "+135000" },
				{ name: "Max ATK", value: "+162000" },
				{ name: "Evasion", value: "+27000" },
				{ name: "ATK%", value: "+2700" },
				{ name: "Min ATK", value: "+108000" },
				{ name: "Earth ATK", value: "+135000" },
				{ name: "Trait Coefficient%", value: "+4843.80" },
				{ name: "Penetration DMG%", value: "+10865.56" },
				{ name: "Skill DMG%", value: "+2709" },
				{ name: "Life", value: "+739334.47" },
			],
		},
		{
			name: "Devil King",
			image: "/characters/devil_king.png",
			stats: [
				{ name: "Accuracy", value: "+27000" },
				{ name: "Wind ATK", value: "+135000" },
				{ name: "Water ATK", value: "+135000" },
				{ name: "Earth ATK", value: "+135000" },
				{ name: "DEX", value: "+270000" },
				{ name: "Trait ATK%", value: "+2700" },
				{ name: "Trait Coefficient%", value: "+4870.16" },
				{ name: "Penetration DMG%", value: "+11017.17" },
				{ name: "Skill DMG%", value: "+2746.8" },
				{ name: "Life", value: "+749650.77" },
			],
		},
		{
			name: "Soul King",
			image: "/characters/soul_king.png",
			stats: [
				{ name: "Accuracy 27000", value: "+27000" },
				{ name: "DEX", value: "+27000" },
				{ name: "Trait ATK%", value: "+2700" },
				{ name: "Water ATK", value: "+135000" },
				{ name: "Earth ATK", value: "+135000" },
				{ name: "Wind ATK", value: "+135000" },
				{ name: "Trait Coefficient%", value: "+5096.52" },
				{ name: "Penetration DMG%", value: "+11168.79" },
				{ name: "Skill DMG%", value: "+2784.60" },
				{ name: "Life", value: "+759967.06" },
			],
		},
		{
			name: "Leoric",
			image: "/characters/leoric.png",
			stats: [
				{ name: "Wind ATK", value: "+115,000" },
				{ name: "Earth ATK", value: "+115,000" },
				{ name: "DEX", value: "+23,000" },
				{ name: "Trait ATK%", value: "+2,300%" },
				{ name: "Accuracy", value: "+23,000" },
				{ name: "Trait Coefficient", value: "+3,500%" },
				{ name: "Penetrating DMG%", value: "+8,500%" },
				{ name: "Skill Damage%", value: "+2,000%" },
				{ name: "Life", value: "+500,000" },
			],
		},
		{
			name: "Arthas",
			image: "/characters/arthas.png",
			stats: [
				{ name: "Wind ATK", value: "+125,000" },
				{ name: "Earth ATK", value: "+125,000" },
				{ name: "DEX", value: "+25,000" },
				{ name: "Trait ATK%", value: "+2,500%" },
				{ name: "Accuracy", value: "+25,000" },
				{ name: "Trait Coefficient", value: "+3,800%" },
				{ name: "Penetrating DMG%", value: "+9,000%" },
				{ name: "Skill Damage%", value: "+2,200%" },
				{ name: "Life", value: "+600,000" },
			],
		},
		{
			name: "Knight Shadow",
			image: "/characters/knight_shadow.png",
			stats: [
				{ name: "Wind ATK", value: "+130,000" },
				{ name: "Earth ATK", value: "+130,000" },
				{ name: "DEX", value: "+26,000" },
				{ name: "Trait ATK%", value: "+2,600%" },
				{ name: "Accuracy", value: "+26,000" },
				{ name: "Trait Coefficient", value: "+4,000%" },
				{ name: "Penetrating DMG%", value: "+9,500%" },
				{ name: "Skill Damage%", value: "+2,400%" },
				{ name: "Life", value: "+650,000" },
			],
		},
		{
			name: "Demon Slayer",
			image: "/characters/demon_slayer.png",
			stats: [
				{ name: "Wind ATK", value: "+135,000" },
				{ name: "Earth ATK", value: "+135,000" },
				{ name: "DEX", value: "+27,000" },
				{ name: "Trait ATK%", value: "+2,700%" },
				{ name: "Accuracy", value: "+27,000" },
				{ name: "Trait Coefficient", value: "+4,212%" },
				{ name: "Penetrating DMG%", value: "+10,107.5%" },
				{ name: "Skill Damage%", value: "+2,520%" },
				{ name: "Life", value: "+687,753" },
			],
		},
	];

	return (
		<Card className="w-full shadow-md">
			<CardHeader>
				<CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
					<Sparkles className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
					Character Awakening
				</CardTitle>
				<CardDescription>
					Unlock your character's true potential through the awakening system
				</CardDescription>
			</CardHeader>
			<CardContent className="p-3 sm:p-6">
				<div className="space-y-4 sm:space-y-6">
					<div className="rounded-lg">
						<p className="text-slate-700 text-xs leading-relaxed sm:text-sm dark:text-slate-300">
							Starting at level 600, you will unlock the awakening system which
							uses{" "}
							<Link
								href={RouteConfig.data_base.resources.candle}
								className="font-medium text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
							>
								candles
							</Link>{" "}
							and{" "}
							<Link
								href={RouteConfig.data_base.resources.chalice}
								className="font-medium text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80"
							>
								chalices of darkness
							</Link>{" "}
							to significantly boost your character's power.
						</p>
						<ul className="mt-2 list-disc pl-5 text-slate-700 text-xs sm:text-sm dark:text-slate-300">
							<li>
								Use <span className="font-bold">candles</span> to upgrade
								individual stats (max level: 600 for each skin)
							</li>
							<li>
								Use <span className="font-bold">chalices of darkness</span> to
								increase stat multipliers (max multiplier: x3)
							</li>
							<li>
								To open awakening of next skin you need to max only stats with{" "}
								<span className="font-bold">candles</span>
							</li>
						</ul>
					</div>

					<h3 className="flex items-center font-semibold text-base sm:text-lg">
						<Sparkles className="mr-2 h-4 w-4 text-primary sm:h-5 sm:w-5" />
						Maxed awakening Stats(with leah items)
					</h3>

					<div className="mt-4 rounded-md bg-amber-50 p-2 sm:p-3 dark:bg-amber-950/30">
						<p className="flex items-center font-medium text-amber-800 text-xs sm:text-sm dark:text-amber-400">
							<ArrowUpCircle className="mr-2 h-4 w-4 flex-shrink-0" />
							stats from 1-6 may vary in order, only 4 last stats are the same
							always
						</p>
					</div>
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
										<TableHead>
											Awakening Stats (Maximum Values, with leah items).
										</TableHead>
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
														alt={`${tier.name} awakening skin`}
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
													alt={`${tier.name} awakening skin`}
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

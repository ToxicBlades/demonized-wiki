"use client";

import { Icon } from "@/components/icons/icon";
import { Badge } from "@/components/ui/badge";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMediaQuery } from "@/hooks/use-mobile";
import { RouteConfig } from "@/lib/config/routeConfig";
import { ArrowUpCircle, Sparkles } from "lucide-react";
import { useMessages } from "next-intl";
import Link from "next/link";
import { useState } from "react";

export default function PromoteTab() {
	const isDesktop = useMediaQuery("(min-width: 768px)");
	const [selectedPower, setSelectedPower] = useState("power1");

	// This would normally come from your translation system
	const t = useMessages().Tabs["Character-tab"].MysticalPower;

	const statsT = useMessages().Stats;
	// Sample data for mystical powers
	const mysticalPowers = [
		{
			id: "power1",
			romanNumeral: "I",
			requiredLevel: 0,
			stats: [
				{
					icon: <Icon category="stats" name="str" />,
					name: statsT.str,
					value: "600",
				},
				{
					icon: <Icon category="stats" name="dex" />,
					name: statsT.dex,
					value: "600",
				},
				{
					icon: <Icon category="stats" name="fire" />,
					name: statsT.fire_atk,
					value: "10000",
				},
				{
					icon: <Icon category="stats" name="water" />,
					name: statsT.water_atk,
					value: "10000",
				},
				{
					icon: <Icon category="stats" name="earth" />,
					name: statsT.earth_atk,
					value: "10000",
				},
				{
					icon: <Icon category="stats" name="wind" />,
					name: statsT.wind_atk,
					value: "10000",
				},
			],
		},
		{
			id: "power2",
			romanNumeral: "II",
			requiredLevel: 0,
			stats: [
				{
					icon: <Icon category="stats" name="min_atk" />,
					name: statsT.min_atk,
					value: "6000",
				},
				{
					icon: <Icon category="stats" name="max_atk" />,
					name: statsT.max_atk,
					value: "9000",
				},
				{
					icon: <Icon category="stats" name="accuracy" />,
					name: statsT.accuracy,
					value: "750",
				},
				{
					icon: <Icon category="stats" name="evasion" />,
					name: statsT.evasion,
					value: "750",
				},
				{
					icon: <Icon category="stats" name="crit_atk" />,
					name: `${statsT.crit_atk}%`,
					value: "300",
				},
				{
					icon: <Icon category="stats" name="trait_atk" />,
					name: `${statsT.trait_atack}%`,
					value: "75",
				},
			],
		},
		{
			id: "power3",
			romanNumeral: "III",
			requiredLevel: 300,
			stats: [
				{
					icon: <Icon category="stats" name="atk" />,
					name: statsT.atk,
					value: "10000",
				},
				{
					icon: <Icon category="stats" name="atk_percent" />,
					name: `${statsT.atk}%`,
					value: "400",
				},
				{
					icon: <Icon category="stats" name="fire" />,
					name: statsT.fire_atk,
					value: "20000",
				},
				{
					icon: <Icon category="stats" name="water" />,
					name: statsT.water_atk,
					value: "20000",
				},
				{
					icon: <Icon category="stats" name="earth" />,
					name: statsT.earth_atk,
					value: "20000",
				},
				{
					icon: <Icon category="stats" name="wind" />,
					name: statsT.wind_atk,
					value: "20000",
				},
			],
		},
		{
			id: "power4",
			romanNumeral: "IV",
			requiredLevel: 450,
			stats: [
				{
					icon: <Icon category="stats" name="str" />,
					name: statsT.str,
					value: "1500",
				},
				{
					icon: <Icon category="stats" name="dex" />,
					name: statsT.dex,
					value: "1500",
				},
				{
					icon: <Icon category="stats" name="atk" />,
					name: statsT.atk,
					value: "12500",
				},
				{
					icon: <Icon category="stats" name="atk_percent" />,
					name: `${statsT.atk}%`,
					value: "500",
				},
				{
					icon: <Icon category="stats" name="min_atk" />,
					name: statsT.min_atk,
					value: "10000",
				},
				{
					icon: <Icon category="stats" name="max_atk" />,
					name: statsT.max_atk,
					value: "15000",
				},
			],
		},
		{
			id: "power5",
			romanNumeral: "V",
			requiredLevel: 600,
			stats: [
				{
					icon: <Icon category="stats" name="str" />,
					name: statsT.str,
					value: "2700",
				},
				{
					icon: <Icon category="stats" name="dex" />,
					name: statsT.dex,
					value: "2700",
				},
				{
					icon: <Icon category="stats" name="fire" />,
					name: statsT.fire_atk,
					value: "45000",
				},
				{
					icon: <Icon category="stats" name="water" />,
					name: statsT.water_atk,
					value: "45000",
				},
				{
					icon: <Icon category="stats" name="earth" />,
					name: statsT.earth_atk,
					value: "45000",
				},
				{
					icon: <Icon category="stats" name="wind" />,
					name: statsT.wind_atk,
					value: "45000",
				},
			],
		},
		{
			id: "power6",
			romanNumeral: "VI",
			requiredLevel: 750,
			stats: [
				{
					icon: <Icon category="stats" name="min_atk" />,
					name: statsT.min_atk,
					value: "26000",
				},
				{
					icon: <Icon category="stats" name="max_atk" />,
					name: statsT.max_atk,
					value: "39000",
				},
				{
					icon: <Icon category="stats" name="accuracy" />,
					name: statsT.accuracy,
					value: "3250",
				},
				{
					icon: <Icon category="stats" name="evasion" />,
					name: statsT.evasion,
					value: "3250",
				},
				{
					icon: <Icon category="stats" name="crit_atk" />,
					name: `${statsT.crit_atk}%`,
					value: "1300",
				},
				{
					icon: <Icon category="stats" name="trait_atk" />,
					name: `${statsT.trait_atack}%`,
					value: "315",
				},
			],
		},
		{
			id: "power7",
			romanNumeral: "VII",
			requiredLevel: 900,
			stats: [
				{
					icon: <Icon category="stats" name="atk" />,
					name: statsT.atk,
					value: "42500",
				},
				{
					icon: <Icon category="stats" name="atk_percent" />,
					name: `${statsT.atk}%`,
					value: "1700",
				},
				{
					icon: <Icon category="stats" name="fire" />,
					name: statsT.fire_atk,
					value: "85000",
				},
				{
					icon: <Icon category="stats" name="water" />,
					name: statsT.water_atk,
					value: "85000",
				},
				{
					icon: <Icon category="stats" name="earth" />,
					name: statsT.earth_atk,
					value: "85000",
				},
				{
					icon: <Icon category="stats" name="wind" />,
					name: statsT.wind_atk,
					value: "85000",
				},
			],
		},
		{
			id: "power8",
			romanNumeral: "VIII",
			requiredLevel: 1050,
			stats: [
				{
					icon: <Icon category="stats" name="atk" />,
					name: statsT.atk,
					value: "52500",
				},
				{
					icon: <Icon category="stats" name="penetration_chance" />,
					name: `${statsT.penetration_chance}%`,
					value: "20",
				},
				{
					icon: <Icon category="stats" name="str" />,
					name: statsT.str,
					value: "6300",
				},
				{
					icon: <Icon category="stats" name="dex" />,
					name: statsT.dex,
					value: "6300",
				},
				{
					icon: <Icon category="stats" name="min_atk" />,
					name: statsT.min_atk,
					value: "42000",
				},
				{
					icon: <Icon category="stats" name="max_atk" />,
					name: statsT.max_atk,
					value: "63000",
				},
			],
		},
		{
			id: "power9",
			romanNumeral: "IX",
			requiredLevel: 1200,
			stats: [
				{
					icon: <Icon category="stats" name="accuracy" />,
					name: statsT.accuracy,
					value: "6250",
				},
				{
					icon: <Icon category="stats" name="evasion" />,
					name: statsT.evasion,
					value: "6250",
				},
				{
					icon: <Icon category="stats" name="max_atk" />,
					name: statsT.max_atk,
					value: "75000",
				},
				{
					icon: <Icon category="stats" name="min_atk" />,
					name: statsT.min_atk,
					value: "50000",
				},
				{
					icon: <Icon category="stats" name="crit_atk" />,
					name: statsT.min_atk,
					value: "2500",
				},
				{
					icon: <Icon category="stats" name="penetration_damage" />,
					name: `${statsT.penetration_dmg}%`,
					value: "200",
				},
			],
		},
		{
			id: "power10",
			romanNumeral: "X",
			requiredLevel: 1350,
			stats: [
				{
					icon: <Icon category="stats" name="atk_percent" />,
					name: `${statsT.atk}%`,
					value: "3300",
				},
				{
					icon: <Icon category="stats" name="crit_atk" />,
					name: `${statsT.crit_atk}%`,
					value: "3300",
				},
				{
					icon: <Icon category="stats" name="str" />,
					name: statsT.str,
					value: "9900",
				},
				{
					icon: <Icon category="stats" name="dex" />,
					name: statsT.dex,
					value: "9900",
				},
				{
					icon: <Icon category="stats" name="trait_atk" />,
					name: `${statsT.trait_atack}%`,
					value: "795",
				},
				{
					icon: <Icon category="stats" name="penetration_damage" />,
					name: `${statsT.penetration_dmg}%`,
					value: "600",
				},
			],
		},
		{
			id: "power11",
			romanNumeral: "XI",
			requiredLevel: 1500,
			stats: [
				{
					icon: <Icon category="stats" name="atk" />,
					name: statsT.atk,
					value: "122500",
				},
				{
					icon: <Icon category="stats" name="atk_percent" />,
					name: `${statsT.atk}%`,
					value: "4900",
				},
				{
					icon: <Icon category="stats" name="crit_atk" />,
					name: `${statsT.crit_atk}%`,
					value: "4900",
				},
				{
					icon: <Icon category="stats" name="fire" />,
					name: statsT.fire_atk,
					value: "245000",
				},
				{
					icon: <Icon category="stats" name="water" />,
					name: statsT.water_atk,
					value: "245000",
				},
				{
					icon: <Icon category="stats" name="trait_atk" />,
					name: `${statsT.trait_atack}%`,
					value: "63000",
				},
			],
		},
		{
			id: "power12",
			romanNumeral: "XII",
			requiredLevel: 1650,
			stats: [
				{
					icon: <Icon category="stats" name="accuracy" />,
					name: statsT.accuracy,
					value: "16250",
				},
				{
					icon: <Icon category="stats" name="evasion" />,
					name: statsT.evasion,
					value: "16250",
				},
				{
					icon: <Icon category="stats" name="earth" />,
					name: statsT.earth_atk,
					value: "325000",
				},
				{
					icon: <Icon category="stats" name="wind" />,
					name: statsT.wind_atk,
					value: "325000",
				},
				{
					icon: <Icon category="stats" name="trait_atk" />,
					name: `${statsT.trait_atack}%`,
					value: "1565",
				},
				{
					icon: <Icon category="stats" name="penetration_damage" />,
					name: `${statsT.penetration_dmg}%`,
					value: "1400",
				},
			],
		},
		{
			id: "power13",
			romanNumeral: "XIII",
			requiredLevel: 1800,
			stats: [
				{
					icon: <Icon category="stats" name="fire" />,
					name: statsT.fire_atk,
					value: "405000",
				},
				{
					icon: <Icon category="stats" name="water" />,
					name: statsT.water_atk,
					value: "405000",
				},
				{
					icon: <Icon category="stats" name="earth" />,
					name: statsT.earth_atk,
					value: "405000",
				},
				{
					icon: <Icon category="stats" name="wind" />,
					name: statsT.wind_atk,
					value: "405000",
				},
				{
					icon: <Icon category="stats" name="str" />,
					name: statsT.str,
					value: "24300",
				},
				{
					icon: <Icon category="stats" name="dex" />,
					name: statsT.dex,
					value: "29100",
				},
			],
		},
		{
			id: "power14",
			romanNumeral: "XIV",
			requiredLevel: 1950,
			stats: [
				{
					icon: <Icon category="stats" name="atk" />,
					name: statsT.atk,
					value: "242500",
				},
				{
					icon: <Icon category="stats" name="atk_percent" />,
					name: `${statsT.atk}%`,
					value: "405000",
				},
				{
					icon: <Icon category="stats" name="min_atk" />,
					name: statsT.min_atk,
					value: "194000",
				},
				{
					icon: <Icon category="stats" name="max_atk" />,
					name: statsT.max_atk,
					value: "291000",
				},
				{
					icon: <Icon category="stats" name="str" />,
					name: statsT.str,
					value: "29100",
				},
				{
					icon: <Icon category="stats" name="dex" />,
					name: statsT.dex,
					value: "33900",
				},
			],
		},
		{
			id: "power15",
			romanNumeral: "XV",
			requiredLevel: 2100,
			stats: [
				{
					icon: <Icon category="stats" name="fire" />,
					name: statsT.fire_atk,
					value: "565000",
				},
				{
					icon: <Icon category="stats" name="water" />,
					name: statsT.water_atk,
					value: "565000",
				},
				{
					icon: <Icon category="stats" name="earth" />,
					name: statsT.earth_atk,
					value: "565000",
				},
				{
					icon: <Icon category="stats" name="wind" />,
					name: statsT.wind_atk,
					value: "565000",
				},
				{
					icon: <Icon category="stats" name="min_atk" />,
					name: statsT.min_atk,
					value: "24300",
				},
				{
					icon: <Icon category="stats" name="max_atk" />,
					name: statsT.max_atk,
					value: "29100",
				},
			],
		},
		{
			id: "power16",
			romanNumeral: "XVI",
			requiredLevel: 2250,
			stats: [
				{
					icon: <Icon category="stats" name="accuracy" />,
					name: statsT.accuracy,
					value: "32250",
				},
				{
					icon: <Icon category="stats" name="evasion" />,
					name: statsT.evasion,
					value: "32250",
				},
				{
					icon: <Icon category="stats" name="crit_atk" />,
					name: `${statsT.crit_atk}%`,
					value: "405000",
				},
				{
					icon: <Icon category="stats" name="trait_atk" />,
					name: `${statsT.trait_atack}%`,
					value: "3100",
				},
				{
					icon: <Icon category="stats" name="atk" />,
					name: statsT.atk,
					value: "322500",
				},
				{
					icon: <Icon category="stats" name="atk_percent" />,
					name: `${statsT.atk}%`,
					value: "14500",
				},
			],
		},
		{
			id: "power17",
			romanNumeral: "XVII",
			requiredLevel: 2400,
			stats: [
				{
					icon: <Icon category="stats" name="fire" />,
					name: statsT.fire_atk,
					value: "725000",
				},
				{
					icon: <Icon category="stats" name="water" />,
					name: statsT.water_atk,
					value: "725000",
				},
				{
					icon: <Icon category="stats" name="earth" />,
					name: statsT.earth_atk,
					value: "725000",
				},
				{
					icon: <Icon category="stats" name="wind" />,
					name: statsT.wind_atk,
					value: "725000",
				},
				{
					icon: <Icon category="stats" name="atk" />,
					name: statsT.atk,
					value: "362500",
				},
				{
					icon: <Icon category="stats" name="str" />,
					name: statsT.str,
					value: "48300",
				},
			],
		},

		{
			id: "power18",
			romanNumeral: "XVIII",
			requiredLevel: 2550,
			stats: [
				{
					icon: <Icon category="stats" name="min_atk" />,
					name: statsT.min_atk,
					value: "322000",
				},
				{
					icon: <Icon category="stats" name="max_atk" />,
					name: statsT.max_atk,
					value: "483000",
				},
				{
					icon: <Icon category="stats" name="accuracy" />,
					name: statsT.accuracy,
					value: "40250",
				},
				{
					icon: <Icon category="stats" name="evasion" />,
					name: statsT.evasion,
					value: "40250",
				},
				{
					icon: <Icon category="stats" name="crit_atk" />,
					name: `${statsT.crit_atk}%`,
					value: "16100",
				},
				{
					icon: <Icon category="stats" name="trait_atk" />,
					name: `${statsT.trait_atack}%`,
					value: "4255",
				},
			],
		},

		{
			id: "power19",
			romanNumeral: "XIX",
			requiredLevel: 2700,
			stats: [
				{
					icon: <Icon category="stats" name="fire" />,
					name: statsT.fire_atk,
					value: "885000",
				},
				{
					icon: <Icon category="stats" name="water" />,
					name: statsT.water_atk,
					value: "885000",
				},
				{
					icon: <Icon category="stats" name="earth" />,
					name: statsT.earth_atk,
					value: "885000",
				},
				{
					icon: <Icon category="stats" name="wind" />,
					name: statsT.wind_atk,
					value: "885000",
				},
				{
					icon: <Icon category="stats" name="str" />,
					name: statsT.str,
					value: "53100",
				},
				{
					icon: <Icon category="stats" name="dex" />,
					name: statsT.dex,
					value: "53100",
				},
			],
		},

		{
			id: "power20",
			romanNumeral: "XX",
			requiredLevel: 2850,
			stats: [
				{
					icon: <Icon category="stats" name="atk" />,
					name: statsT.atk,
					value: "362500",
				},
				{
					icon: <Icon category="stats" name="atk_percent" />,
					name: `${statsT.atk}%`,
					value: "14500",
				},
				{
					icon: <Icon category="stats" name="crit_atk" />,
					name: `${statsT.crit_atk}%`,
					value: "16100",
				},
				{
					icon: <Icon category="stats" name="accuracy" />,
					name: statsT.accuracy,
					value: "40250",
				},
				{
					icon: <Icon category="stats" name="evasion" />,
					name: statsT.evasion,
					value: "40250",
				},
				{
					icon: <Icon category="stats" name="trait_atk" />,
					name: `${statsT.trait_atack}%`,
					value: "4255",
				},
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
				<CardDescription>{t.intro_text}</CardDescription>
			</CardHeader>
			<CardContent className="p-3 sm:p-6">
				<div className="space-y-4 sm:space-y-6">
					<div className="mt-4 rounded-md bg-amber-50 p-2 sm:p-3 dark:bg-amber-950/30">
						<p className="flex items-center font-medium text-amber-800 text-xs sm:text-sm dark:text-amber-400">
							<div>
							<ArrowUpCircle className="mr-2 h-4 w-4 flex-shrink-0" />
							{t.tip}:{" "}
							<Link href={RouteConfig.data_base.relics}>{t.relic}</Link>
							</div>
						</p>
					</div>
					<Tabs
						value={selectedPower}
						onValueChange={setSelectedPower}
						className="w-full"
					>
						{/* Mobile-optimized tabs */}
						<div className="mb-4 overflow-hidden">
							{!isDesktop ? (
								<div className="mb-2 flex items-center gap-2">
									<Select
										value={selectedPower}
										onValueChange={setSelectedPower}
									>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="Select Power" />
										</SelectTrigger>
										<SelectContent>
											{mysticalPowers.map((power) => (
												<SelectItem key={power.id} value={power.id}>
													Power {power.romanNumeral} (Level{" "}
													{power.requiredLevel})
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>
							) : (
								<TabsList className="inline-flex h-auto w-auto flex-wrap gap-2 rounded-md bg-transparent p-0">
									{mysticalPowers.map((power) => (
										<TabsTrigger
											key={power.id}
											value={power.id}
											className={`flex h-10 min-w-[40px] items-center justify-center rounded-md border ${
												selectedPower === power.id
													? "border-primary bg-primary/10"
													: "border-border bg-background"
											}`}
										>
											<span className="font-semibold">
												{power.romanNumeral}
											</span>
										</TabsTrigger>
									))}
								</TabsList>
							)}
						</div>

						{mysticalPowers.map((power) => (
							<TabsContent key={power.id} value={power.id} className="mt-0">
								<Card>
									<CardHeader className="pb-2">
										<div className="flex items-start">
											<Badge variant="outline" className="ml-2">
												{t.required_level}: {power.requiredLevel}
											</Badge>
										</div>
									</CardHeader>
									<CardContent>
										{isDesktop ? (
											<div className="grid grid-cols-3 gap-4">
												{power.stats.map((stat, index) => (
													<div
														key={index}
														className="flex items-center gap-2 rounded-md border p-3"
													>
														{stat.icon}
														<div>
															<div className="font-medium">{stat.name}</div>
															<div className="text-primary text-sm">
																{stat.value}
															</div>
														</div>
													</div>
												))}
											</div>
										) : (
											<div className="grid grid-cols-2 gap-2">
												{power.stats.map((stat, index) => (
													<div
														key={index}
														className="flex flex-col rounded-md border p-2"
													>
														<div className="mb-1 flex items-center gap-1">
															{stat.icon}
															<div className="font-medium text-xs">
																{stat.name}
															</div>
														</div>
														<div className="font-semibold text-primary text-sm">
															{stat.value}
														</div>
													</div>
												))}
											</div>
										)}
									</CardContent>
								</Card>
							</TabsContent>
						))}
					</Tabs>
				</div>
			</CardContent>
		</Card>
	);
}

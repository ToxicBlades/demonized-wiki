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
import { useMediaQuery } from "@/hooks/use-mobile";
import { ArrowUpCircle, Crown, Dumbbell, Zap } from "lucide-react";
import { useMessages } from "next-intl";
import Image from "next/image";

export default function PromoteTab() {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	const t = useMessages().Tabs["Character-tab"].Promote;
	const statsT = useMessages().Stats;

	const promotionTiers = [
		{
			name: "Red",
			image: "/characters/red.png",
			str: "+10%",
			aspd: "+5%",
		},
		{
			name: "Black",
			image: "/characters/black.png",
			str: "+20%",
			aspd: "+5%",
		},
		{
			name: "Death Knight",
			image: "/characters/death_knight.png",
			str: "+30%",
			aspd: "+5%",
		},
		{
			name: "Dark Knight",
			image: "/characters/dark_knight.png",
			str: "+40%",
			aspd: "+5%",
		},
		{
			name: "Ark Knight",
			image: "/characters/ark_knight.png",
			str: "+50%",
			aspd: "+5%",
		},
		{
			name: "Knight King",
			image: "/characters/knight_king.png",
			str: "+60%",
			aspd: "+5%",
		},
		{
			name: "Devil King",
			image: "/characters/devil_king.png",
			str: "+70%",
			aspd: "+5%",
		},
		{
			name: "Soul King",
			image: "/characters/soul_king.png",
			str: "+150%",
			aspd: "+5%",
		},
		{
			name: "Leoric",
			image: "/characters/leoric.png",
			str: "+250%",
			aspd: "+5%",
		},
		{
			name: "Arthas",
			image: "/characters/arthas.png",
			str: "+350%",
			aspd: "+5%",
		},
		{
			name: "Knight Shadow",
			image: "/characters/knight_shadow.png",
			str: "+350%",
			aspd: "+5%",
		},
		{
			name: "Demon Slayer",
			image: "/characters/demon_slayer.png",
			str: "+350%",
			aspd: "+5%",
		},
	];

	return (
		<Card className="w-full shadow-md">
			<CardHeader>
				<CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
					<Crown className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
					{t.title}
				</CardTitle>
				<CardDescription>{t.description}</CardDescription>
			</CardHeader>
			<CardContent className="p-3 sm:p-6">
				<div className="space-y-4 sm:space-y-6">
					<div className="rounded-lg">
						<p className="text-slate-700 text-xs leading-relaxed sm:text-sm dark:text-slate-300">
							{t.intro_text}
						</p>
						<ul className="mt-2 list-disc pl-5 text-slate-700 text-xs sm:text-sm dark:text-slate-300">
							<li>{t.benefit_1}</li>
							<li>{t.benefit_2}</li>
							<li>{t.benefit_3}</li>
						</ul>
						<div className="mt-4 rounded-md bg-amber-50 p-2 sm:p-3 dark:bg-amber-950/30">
							<p className="flex items-center font-medium text-amber-800 text-xs sm:text-sm dark:text-amber-400">
								<ArrowUpCircle className="mr-2 h-4 w-4 flex-shrink-0" />
								{t.priority_tip}
							</p>
						</div>
					</div>

					<h3 className="flex items-center font-semibold text-base sm:text-lg">
						<Crown className="mr-2 h-4 w-4 text-primary sm:h-5 sm:w-5" />
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
										<TableHead>
											<div className="flex items-center gap-1">
												<Icon category="stats" name="str" />,
												<span>{t.str_per_level}</span>
											</div>
										</TableHead>
										<TableHead>
											<div className="flex items-center gap-1">
												<Icon category="common" name="placeholder" />,
												<span>{t.aspd_per_level}</span>
											</div>
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
											<TableCell>{tier.str}</TableCell>
											<TableCell>{tier.aspd}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					) : (
						<div className="grid gap-4">
							{promotionTiers.map((tier, index) => (
								<Card key={index} className="overflow-hidden">
									<div className="flex items-center p-3">
										<div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-md">
											<Image
												src={tier.image || "/placeholder.svg"}
												alt={`${tier.name} ${t.promotion_skin_alt}`}
												width={56}
												height={56}
												className="object-cover"
											/>
										</div>
										<div className="ml-3 flex-1">
											<h4 className="font-medium">{tier.name}</h4>
											<div className="mt-1 grid grid-cols-2 gap-1 text-xs">
												<div className="flex items-center">
													<Dumbbell className="mr-1 h-3 w-3 text-primary" />
													<span>
														{statsT.str}: {tier.str}
													</span>
												</div>
												<div className="flex items-center">
													<Zap className="mr-1 h-3 w-3 text-primary" />
													<span>
														{t.aspd}: {tier.aspd}
													</span>
												</div>
											</div>
										</div>
									</div>
								</Card>
							))}
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	);
}

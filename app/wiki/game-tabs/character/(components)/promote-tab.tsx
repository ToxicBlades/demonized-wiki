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
import { ArrowUpCircle, Crown, Dumbbell, Zap } from "lucide-react";
import Image from "next/image";

export default function PromoteTab() {
	return (
		<Card className="w-full shadow-md">
			<CardHeader>
				<CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
					<Crown className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
					Character Promotion
				</CardTitle>
				<CardDescription>
					Upgrade your character's appearance and stats through the promotion
					system
				</CardDescription>
			</CardHeader>
			<CardContent className="p-3 sm:p-6">
				<div className="space-y-4 sm:space-y-6">
					<div className="rounded-lg">
						<p className="text-slate-700 text-xs leading-relaxed sm:text-sm dark:text-slate-300">
							Promoting your character is a powerful mechanic that provides
							three major benefits:
						</p>
						<ul className="mt-2 list-disc pl-5 text-slate-700 text-xs sm:text-sm dark:text-slate-300">
							<li>Significant stat upgrades (STR% and Attack Speed%)</li>
							<li>Unique character skins for visual progression</li>
							<li>
								Additional slots for appearance abilities (+1 slot per
								promotion)
							</li>
						</ul>
						<div className="mt-4 rounded-md bg-amber-50 p-2 sm:p-3 dark:bg-amber-950/30">
							<p className="flex items-center font-medium text-amber-800 text-xs sm:text-sm dark:text-amber-400">
								<ArrowUpCircle className="mr-2 h-4 w-4 flex-shrink-0" />
								Promotion should be a top priority as it provides Attack Speed%
								(a valuable stat) and slots for appearance abilities.
							</p>
						</div>
					</div>

					<h3 className="flex items-center font-semibold text-base sm:text-lg">
						<Crown className="mr-2 h-4 w-4 text-primary sm:h-5 sm:w-5" />
						Promotion Tiers and Bonuses
					</h3>

					<div className="overflow-x-auto sm:overflow-visible">
						<Table className="w-full">
							<TableHeader>
								<TableRow>
									<TableHead className="w-[80px] sm:w-[150px]">Skin</TableHead>
									<TableHead className="w-[60px] sm:w-[120px]">
										Preview
									</TableHead>
									<TableHead>
										<div className="flex items-center gap-1">
											<Dumbbell className="h-4 w-4 text-primary" />
											<span className="xs:inline hidden">STR% per Level</span>
											<span className="xs:hidden">STR%</span>
										</div>
									</TableHead>
									<TableHead>
										<div className="flex items-center gap-1">
											<Zap className="h-4 w-4 text-primary" />
											<span className="xs:inline hidden">
												Attack Speed% per Level
											</span>
											<span className="xs:hidden">ASPD%</span>
										</div>
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell className="font-medium">Red</TableCell>
									<TableCell>
										<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
											<Image
												src="/characters/red.png"
												alt="Red promotion skin"
												width={64}
												height={64}
												className="object-cover"
											/>
										</div>
									</TableCell>
									<TableCell>+10%</TableCell>
									<TableCell>+5%</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Black</TableCell>
									<TableCell>
										<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
											<Image
												src="/characters/black.png"
												alt="Black promotion skin"
												width={64}
												height={64}
												className="object-cover"
											/>
										</div>
									</TableCell>
									<TableCell>+20%</TableCell>
									<TableCell>+5%</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Death Knight</TableCell>
									<TableCell>
										<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
											<Image
												src="/characters/death_knight.png"
												alt="Death Knight promotion skin"
												width={64}
												height={64}
												className="object-cover"
											/>
										</div>
									</TableCell>
									<TableCell>+30%</TableCell>
									<TableCell>+5%</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Dark Knight</TableCell>
									<TableCell>
										<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
											<Image
												src="/characters/dark_knight.png"
												alt="Dark Knight promotion skin"
												width={64}
												height={64}
												className="object-cover"
											/>
										</div>
									</TableCell>
									<TableCell>+40%</TableCell>
									<TableCell>+5%</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Ark Knight</TableCell>
									<TableCell>
										<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
											<Image
												src="/characters/ark_knight.png"
												alt="Ark Knight promotion skin"
												width={64}
												height={64}
												className="object-cover"
											/>
										</div>
									</TableCell>
									<TableCell>+50%</TableCell>
									<TableCell>+5%</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Knight King</TableCell>
									<TableCell>
										<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
											<Image
												src="/characters/knight_king.png"
												alt="Knight King promotion skin"
												width={64}
												height={64}
												className="object-cover"
											/>
										</div>
									</TableCell>
									<TableCell>+60%</TableCell>
									<TableCell>+5%</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Devil King</TableCell>
									<TableCell>
										<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
											<Image
												src="/characters/devil_king.png"
												alt="Devil King promotion skin"
												width={64}
												height={64}
												className="object-cover"
											/>
										</div>
									</TableCell>
									<TableCell>+70%</TableCell>
									<TableCell>+5%</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Soul King</TableCell>
									<TableCell>
										<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
											<Image
												src="/characters/soul_king.png"
												alt="Soul King promotion skin"
												width={64}
												height={64}
												className="object-cover"
											/>
										</div>
									</TableCell>
									<TableCell>+150%</TableCell>
									<TableCell>+5%</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Leoric</TableCell>
									<TableCell>
										<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
											<Image
												src="/characters/leoric.png"
												alt="Leoric promotion skin"
												width={64}
												height={64}
												className="object-cover"
											/>
										</div>
									</TableCell>
									<TableCell>+250%</TableCell>
									<TableCell>+5%</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Arthas</TableCell>
									<TableCell>
										<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
											<Image
												src="/characters/arthas.png"
												alt="Arthas promotion skin"
												width={64}
												height={64}
												className="object-cover"
											/>
										</div>
									</TableCell>
									<TableCell>+350%</TableCell>
									<TableCell>+5%</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Knight Shadow</TableCell>
									<TableCell>
										<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
											<Image
												src="/characters/knight_shadow.png"
												alt="Knight Shadow promotion skin"
												width={64}
												height={64}
												className="object-cover"
											/>
										</div>
									</TableCell>
									<TableCell>+350%</TableCell>
									<TableCell>+5%</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Demon Slayer</TableCell>
									<TableCell>
										<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
											<Image
												src="/characters/demon_slayer.png"
												alt="Demon Slayer promotion skin"
												width={64}
												height={64}
												className="object-cover"
											/>
										</div>
									</TableCell>
									<TableCell>+350%</TableCell>
									<TableCell>+5%</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

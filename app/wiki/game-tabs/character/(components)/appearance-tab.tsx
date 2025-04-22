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
import { ArrowUpCircle, Palette } from "lucide-react";
import Image from "next/image";

export default function AppearanceTab() {
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
									<div className="rounded bg-slate-100 p-2 dark:bg-slate-800">
										STR
									</div>
									<div className="rounded bg-slate-100 p-2 dark:bg-slate-800">
										DEX
									</div>
									<div className="rounded bg-slate-100 p-2 dark:bg-slate-800">
										Min ATK
									</div>
									<div className="rounded bg-slate-100 p-2 dark:bg-slate-800">
										Max ATK
									</div>
									<div className="rounded bg-slate-100 p-2 dark:bg-slate-800">
										ATK
									</div>
									<div className="rounded bg-slate-100 p-2 dark:bg-slate-800">
										ATK%
									</div>
									<div className="rounded bg-slate-100 p-2 dark:bg-slate-800">
										Accuracy
									</div>
									<div className="rounded bg-slate-100 p-2 dark:bg-slate-800">
										Evasion
									</div>
									<div className="rounded bg-slate-100 p-2 dark:bg-slate-800">
										CRIT ATK%
									</div>
									<div className="rounded bg-slate-100 p-2 dark:bg-slate-800">
										Fire ATK
									</div>
									<div className="rounded bg-slate-100 p-2 dark:bg-slate-800">
										Water ATK
									</div>
									<div className="rounded bg-slate-100 p-2 dark:bg-slate-800">
										Earth ATK
									</div>
									<div className="rounded bg-slate-100 p-2 dark:bg-slate-800">
										Wind ATK
									</div>
									<div className="rounded bg-slate-100 p-2 dark:bg-slate-800">
										Trait ATK%
									</div>
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
									<div className="rounded bg-green-100 p-2 dark:bg-green-900/30">
										Accuracy
									</div>
									<div className="rounded bg-green-100 p-2 dark:bg-green-900/30">
										DEX
									</div>
									<div className="rounded bg-green-100 p-2 dark:bg-green-900/30">
										Trait ATK%
									</div>
									<div className="rounded bg-green-100 p-2 dark:bg-green-900/30">
										Earth ATK
									</div>
									<div className="rounded bg-green-100 p-2 dark:bg-green-900/30">
										Water ATK
									</div>
									<div className="rounded bg-green-100 p-2 dark:bg-green-900/30">
										Wind ATK
									</div>
								</div>
							</div>
						</div>
					</div>

					<h3 className="flex items-center font-semibold text-base sm:text-lg">
						<Palette className="mr-2 h-4 w-4 text-primary sm:h-5 sm:w-5" />
						Promotion Tiers and stats
					</h3>

					<div className="overflow-x-auto">
						<Table className="w-full">
							<TableHeader>
								<TableRow>
									<TableHead className="w-[80px] sm:w-[150px]">Skin</TableHead>
									<TableHead className="w-[60px] sm:w-[120px]">
										Preview
									</TableHead>
									<TableHead className="text-center">Slots</TableHead>
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
									<TableCell>
										<div className="grid grid-cols-1 gap-2">
											<div className=" rounded p-2 text-xs">
												<Select>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Check stat range" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="STR">STR (50~1000)</SelectItem>
														<SelectItem value="DEX">DEX (50~1000)</SelectItem>
														<SelectItem value="Min ATK">
															Min ATK (200~4000)
														</SelectItem>
														<SelectItem value="Max ATK">
															Max ATK (300~6000)
														</SelectItem>
														<SelectItem value="ATK">ATK (250~5000)</SelectItem>
														<SelectItem value="ATK">ATK% (5~100)</SelectItem>
														<SelectItem value="Accuracy">
															Accuracy (50~1000)
														</SelectItem>
														<SelectItem value="Evasion">
															Evasion (50~1000)
														</SelectItem>
														<SelectItem value="CRIT ATK%">
															CRIT ATK% (10~150)
														</SelectItem>
														<SelectItem value="Fire ATK">
															Fire ATK (250~5000)
														</SelectItem>
														<SelectItem value="Water ATK">
															Water ATK (250~5000)
														</SelectItem>
														<SelectItem value="Earth ATK">
															Earth ATK (250~5000)
														</SelectItem>
														<SelectItem value="Wind ATK">
															Wind ATK (250~5000)
														</SelectItem>
														<SelectItem value="Trait ATK%">
															Trait ATK% (5~100)
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>
									</TableCell>
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
									<TableCell>
										<div className="grid grid-cols-1 gap-2">
											<div className=" rounded p-2 text-xs">
												<Select>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Check stat range" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="STR">STR (50~1000)</SelectItem>
														<SelectItem value="DEX">DEX (50~1000)</SelectItem>
														<SelectItem value="Min ATK">
															Min ATK (200~4000)
														</SelectItem>
														<SelectItem value="Max ATK">
															Max ATK (300~6000)
														</SelectItem>
														<SelectItem value="ATK">ATK (250~5000)</SelectItem>
														<SelectItem value="ATK">ATK% (5~100)</SelectItem>
														<SelectItem value="Accuracy">
															Accuracy (50~1000)
														</SelectItem>
														<SelectItem value="Evasion">
															Evasion (50~1000)
														</SelectItem>
														<SelectItem value="CRIT ATK%">
															CRIT ATK% (10~150)
														</SelectItem>
														<SelectItem value="Fire ATK">
															Fire ATK (250~5000)
														</SelectItem>
														<SelectItem value="Water ATK">
															Water ATK (250~5000)
														</SelectItem>
														<SelectItem value="Earth ATK">
															Earth ATK (250~5000)
														</SelectItem>
														<SelectItem value="Wind ATK">
															Wind ATK (250~5000)
														</SelectItem>
														<SelectItem value="Trait ATK%">
															Trait ATK% (5~100)
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>
									</TableCell>
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
									<TableCell>
										<div className="grid grid-cols-1 gap-2">
											<div className=" rounded p-2 text-xs">
												<Select>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Check stat range" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="STR">STR (50~1000)</SelectItem>
														<SelectItem value="DEX">DEX (50~1000)</SelectItem>
														<SelectItem value="Min ATK">
															Min ATK (200~4000)
														</SelectItem>
														<SelectItem value="Max ATK">
															Max ATK (300~6000)
														</SelectItem>
														<SelectItem value="ATK">ATK (250~5000)</SelectItem>
														<SelectItem value="ATK">ATK% (5~100)</SelectItem>
														<SelectItem value="Accuracy">
															Accuracy (50~1000)
														</SelectItem>
														<SelectItem value="Evasion">
															Evasion (50~1000)
														</SelectItem>
														<SelectItem value="CRIT ATK%">
															CRIT ATK% (10~150)
														</SelectItem>
														<SelectItem value="Fire ATK">
															Fire ATK (250~5000)
														</SelectItem>
														<SelectItem value="Water ATK">
															Water ATK (250~5000)
														</SelectItem>
														<SelectItem value="Earth ATK">
															Earth ATK (250~5000)
														</SelectItem>
														<SelectItem value="Wind ATK">
															Wind ATK (250~5000)
														</SelectItem>
														<SelectItem value="Trait ATK%">
															Trait ATK% (5~100)
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>
									</TableCell>
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
									<TableCell>
										<div className="grid grid-cols-1 gap-2">
											<div className=" rounded p-2 text-xs">
												<Select>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Check stat range" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="STR">STR (50~1000)</SelectItem>
														<SelectItem value="DEX">DEX (50~1000)</SelectItem>
														<SelectItem value="Min ATK">
															Min ATK (200~4000)
														</SelectItem>
														<SelectItem value="Max ATK">
															Max ATK (300~6000)
														</SelectItem>
														<SelectItem value="ATK">ATK (250~5000)</SelectItem>
														<SelectItem value="ATK">ATK% (5~100)</SelectItem>
														<SelectItem value="Accuracy">
															Accuracy (50~1000)
														</SelectItem>
														<SelectItem value="Evasion">
															Evasion (50~1000)
														</SelectItem>
														<SelectItem value="CRIT ATK%">
															CRIT ATK% (10~150)
														</SelectItem>
														<SelectItem value="Fire ATK">
															Fire ATK (250~5000)
														</SelectItem>
														<SelectItem value="Water ATK">
															Water ATK (250~5000)
														</SelectItem>
														<SelectItem value="Earth ATK">
															Earth ATK (250~5000)
														</SelectItem>
														<SelectItem value="Wind ATK">
															Wind ATK (250~5000)
														</SelectItem>
														<SelectItem value="Trait ATK%">
															Trait ATK% (5~100)
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>
									</TableCell>
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
									<TableCell>
										<div className="grid grid-cols-1 gap-2">
											<div className=" rounded p-2 text-xs">
												<Select>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Check stat range" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="STR">STR (200~4000)</SelectItem>
														<SelectItem value="DEX">DEX (200~4000)</SelectItem>
														<SelectItem value="Min ATK">
															Min ATK (800~16000)
														</SelectItem>
														<SelectItem value="Max ATK">
															Max ATK (1200~24000)
														</SelectItem>
														<SelectItem value="ATK">
															ATK (1000~20000)
														</SelectItem>
														<SelectItem value="ATK">ATK% (20~400)</SelectItem>
														<SelectItem value="Accuracy">
															Accuracy (200~4000)
														</SelectItem>
														<SelectItem value="Evasion">
															Evasion (200~4000)
														</SelectItem>
														<SelectItem value="CRIT ATK%">
															CRIT ATK% (40~600)
														</SelectItem>
														<SelectItem value="Fire ATK">
															Fire ATK (1000~20000)
														</SelectItem>
														<SelectItem value="Water ATK">
															Water ATK (1000~20000)
														</SelectItem>
														<SelectItem value="Earth ATK">
															Earth ATK (1000~20000)
														</SelectItem>
														<SelectItem value="Wind ATK">
															Wind ATK (1000~20000)
														</SelectItem>
														<SelectItem value="Trait ATK%">
															Trait ATK% (20~400)
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>
									</TableCell>
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
									<TableCell>
										<div className="grid grid-cols-1 gap-2">
											<div className=" rounded p-2 text-xs">
												<Select>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Check stat range" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="STR">STR (300~6000)</SelectItem>
														<SelectItem value="DEX">DEX (300~6000)</SelectItem>
														<SelectItem value="Min ATK">
															Min ATK (1200~24000)
														</SelectItem>
														<SelectItem value="Max ATK">
															Max ATK (1800~36000)
														</SelectItem>
														<SelectItem value="ATK">
															ATK (1500~30000)
														</SelectItem>
														<SelectItem value="ATK">ATK% (30~600)</SelectItem>
														<SelectItem value="Accuracy">
															Accuracy (300~6000)
														</SelectItem>
														<SelectItem value="Evasion">
															Evasion (300~6000)
														</SelectItem>
														<SelectItem value="CRIT ATK%">
															CRIT ATK% (60~900)
														</SelectItem>
														<SelectItem value="Fire ATK">
															Fire ATK (1500~30000)
														</SelectItem>
														<SelectItem value="Water ATK">
															Water ATK (1500~30000)
														</SelectItem>
														<SelectItem value="Earth ATK">
															Earth ATK (1500~30000)
														</SelectItem>
														<SelectItem value="Wind ATK">
															Wind ATK (1500~30000)
														</SelectItem>
														<SelectItem value="Trait ATK%">
															Trait ATK% (30~600)
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>
									</TableCell>
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
									<TableCell>
										<div className="grid grid-cols-1 gap-2">
											<div className=" rounded p-2 text-xs">
												<Select>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Check stat range" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="STR">STR (400~8000)</SelectItem>
														<SelectItem value="DEX">DEX (400~8000)</SelectItem>
														<SelectItem value="Min ATK">
															Min ATK (1600~32000)
														</SelectItem>
														<SelectItem value="Max ATK">
															Max ATK (2400~48000)
														</SelectItem>
														<SelectItem value="ATK">
															ATK (2000~40000)
														</SelectItem>
														<SelectItem value="ATK">ATK% (40~800)</SelectItem>
														<SelectItem value="Accuracy">
															Accuracy (400~8000)
														</SelectItem>
														<SelectItem value="Evasion">
															Evasion (400~8000)
														</SelectItem>
														<SelectItem value="CRIT ATK%">
															CRIT ATK% (80~1200)
														</SelectItem>
														<SelectItem value="Fire ATK">
															Fire ATK (2000~40000)
														</SelectItem>
														<SelectItem value="Water ATK">
															Water ATK (2000~40000)
														</SelectItem>
														<SelectItem value="Earth ATK">
															Earth ATK (2000~40000)
														</SelectItem>
														<SelectItem value="Wind ATK">
															Wind ATK (2000~40000)
														</SelectItem>
														<SelectItem value="Trait ATK%">
															Trait ATK% (40~800)
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>
									</TableCell>
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
									<TableCell>
										<div className="grid grid-cols-1 gap-2">
											<div className=" rounded p-2 text-xs">
												<Select>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Check stat range" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="STR">STR (500~10000)</SelectItem>
														<SelectItem value="DEX">DEX (500~10000)</SelectItem>
														<SelectItem value="Min ATK">
															Min ATK (2000~40000)
														</SelectItem>
														<SelectItem value="Max ATK">
															Max ATK (3000~60000)
														</SelectItem>
														<SelectItem value="ATK">
															ATK (2500~50000)
														</SelectItem>
														<SelectItem value="ATK">ATK% (50~1000)</SelectItem>
														<SelectItem value="Accuracy">
															Accuracy (500~10000)
														</SelectItem>
														<SelectItem value="Evasion">
															Evasion (500~10000)
														</SelectItem>
														<SelectItem value="CRIT ATK%">
															CRIT ATK% (100~1500)
														</SelectItem>
														<SelectItem value="Fire ATK">
															Fire ATK (2500~50000)
														</SelectItem>
														<SelectItem value="Water ATK">
															Water ATK (2500~50000)
														</SelectItem>
														<SelectItem value="Earth ATK">
															Earth ATK (2500~50000)
														</SelectItem>
														<SelectItem value="Wind ATK">
															Wind ATK (2500~50000)
														</SelectItem>
														<SelectItem value="Trait ATK%">
															Trait ATK% (50~1000)
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>
									</TableCell>
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
									<TableCell>
										<div className="grid grid-cols-1 gap-2">
											<div className=" rounded p-2 text-xs">
												<Select>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Check stat range" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="STR">STR (600~12000)</SelectItem>
														<SelectItem value="DEX">DEX (600~12000)</SelectItem>
														<SelectItem value="Min ATK">
															Min ATK (2400~48000)
														</SelectItem>
														<SelectItem value="Max ATK">
															Max ATK (3600~72000)
														</SelectItem>
														<SelectItem value="ATK">
															ATK (3000~60000)
														</SelectItem>
														<SelectItem value="ATK">ATK% (60~1200)</SelectItem>
														<SelectItem value="Accuracy">
															Accuracy (600~12000)
														</SelectItem>
														<SelectItem value="Evasion">
															Evasion (600~12000)
														</SelectItem>
														<SelectItem value="CRIT ATK%">
															CRIT ATK% (120~1800)
														</SelectItem>
														<SelectItem value="Fire ATK">
															Fire ATK (3000~60000)
														</SelectItem>
														<SelectItem value="Water ATK">
															Water ATK (3000~60000)
														</SelectItem>
														<SelectItem value="Earth ATK">
															Earth ATK (3000~60000)
														</SelectItem>
														<SelectItem value="Wind ATK">
															Wind ATK (3000~60000)
														</SelectItem>
														<SelectItem value="Trait ATK%">
															Trait ATK% (60~1200)
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>
									</TableCell>
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
									<TableCell>
										<div className="grid grid-cols-1 gap-2">
											<div className=" rounded p-2 text-xs">
												<Select>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Check stat range" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="STR">STR (700~14000)</SelectItem>
														<SelectItem value="DEX">DEX (700~14000)</SelectItem>
														<SelectItem value="Min ATK">
															Min ATK (2800~56000)
														</SelectItem>
														<SelectItem value="Max ATK">
															Max ATK (4200~84000)
														</SelectItem>
														<SelectItem value="ATK">
															ATK (3500~70000)
														</SelectItem>
														<SelectItem value="ATK">ATK% (70~1400)</SelectItem>
														<SelectItem value="Accuracy">
															Accuracy (700~14000)
														</SelectItem>
														<SelectItem value="Evasion">
															Evasion (700~14000)
														</SelectItem>
														<SelectItem value="CRIT ATK%">
															CRIT ATK% (140~2100)
														</SelectItem>
														<SelectItem value="Fire ATK">
															Fire ATK (3500~70000)
														</SelectItem>
														<SelectItem value="Water ATK">
															Water ATK (3500~70000)
														</SelectItem>
														<SelectItem value="Earth ATK">
															Earth ATK (3500~70000)
														</SelectItem>
														<SelectItem value="Wind ATK">
															Wind ATK (3500~70000)
														</SelectItem>
														<SelectItem value="Trait ATK%">
															Trait ATK% (70~1400)
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>
									</TableCell>
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
									<TableCell>
										<div className="grid grid-cols-1 gap-2">
											<div className=" rounded p-2 text-xs">
												<Select>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Check stat range" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="STR">STR (800~16000)</SelectItem>
														<SelectItem value="DEX">DEX (800~16000)</SelectItem>
														<SelectItem value="Min ATK">
															Min ATK (3200~64000)
														</SelectItem>
														<SelectItem value="Max ATK">
															Max ATK (4800~96000)
														</SelectItem>
														<SelectItem value="ATK">
															ATK (4000~80000)
														</SelectItem>
														<SelectItem value="ATK">ATK% (80~1600)</SelectItem>
														<SelectItem value="Accuracy">
															Accuracy (800~16000)
														</SelectItem>
														<SelectItem value="Evasion">
															Evasion (800~16000)
														</SelectItem>
														<SelectItem value="CRIT ATK%">
															CRIT ATK% (160~2400)
														</SelectItem>
														<SelectItem value="Fire ATK">
															Fire ATK (4000~80000)
														</SelectItem>
														<SelectItem value="Water ATK">
															Water ATK (4000~80000)
														</SelectItem>
														<SelectItem value="Earth ATK">
															Earth ATK (4000~80000)
														</SelectItem>
														<SelectItem value="Wind ATK">
															Wind ATK (4000~80000)
														</SelectItem>
														<SelectItem value="Trait ATK%">
															Trait ATK% (80~1600)
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>
									</TableCell>
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
									<TableCell>
										<div className="grid grid-cols-1 gap-2">
											<div className=" rounded p-2 text-xs">
												<Select>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Check stat range" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="STR">STR (900~18000)</SelectItem>
														<SelectItem value="DEX">DEX (900~18000)</SelectItem>
														<SelectItem value="Min ATK">
															Min ATK (3600~72000)
														</SelectItem>
														<SelectItem value="Max ATK">
															Max ATK (5400~108000)
														</SelectItem>
														<SelectItem value="ATK">
															ATK (4500~90000)
														</SelectItem>
														<SelectItem value="ATK">ATK% (90~1800)</SelectItem>
														<SelectItem value="Accuracy">
															Accuracy (900~18000)
														</SelectItem>
														<SelectItem value="Evasion">
															Evasion (900~18000)
														</SelectItem>
														<SelectItem value="CRIT ATK%">
															CRIT ATK% (180~2700)
														</SelectItem>
														<SelectItem value="Fire ATK">
															Fire ATK (4500~90000)
														</SelectItem>
														<SelectItem value="Water ATK">
															Water ATK (4500~90000)
														</SelectItem>
														<SelectItem value="Earth ATK">
															Earth ATK (4500~90000)
														</SelectItem>
														<SelectItem value="Wind ATK">
															Wind ATK (4500~90000)
														</SelectItem>
														<SelectItem value="Trait ATK%">
															Trait ATK% (90~1800)
														</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
				</div>

				<h3 className="mt-6 flex items-center font-semibold text-base sm:text-lg">
					<Palette className="mr-2 h-4 w-4 text-primary sm:h-5 sm:w-5" />
					Special Appearance
				</h3>

				<p className="mb-4 text-slate-700 text-xs leading-relaxed sm:text-sm dark:text-slate-300">
					You can receive different skins which have possess effect bonuses
				</p>

				<div className="overflow-x-auto">
					<Table className="w-full">
						<TableHeader>
							<TableRow>
								<TableHead className="w-[80px] sm:w-[150px]">Skin</TableHead>
								<TableHead className="w-[60px] sm:w-[120px]">Preview</TableHead>
								<TableHead>Source</TableHead>
								<TableHead>Possess Effect</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell className="font-medium">Berserker</TableCell>
								<TableCell>
									<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
										<Image
											src="/characters/berserker.png"
											alt="Berserker special skin"
											width={64}
											height={64}
											className="object-cover"
										/>
									</div>
								</TableCell>
								<TableCell>Transcendence Shop: 30 coins</TableCell>
								<TableCell>Appearence HP +1% per level</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">Oni</TableCell>
								<TableCell>
									<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
										<Image
											src="/characters/oni.png"
											alt="Oni special skin"
											width={64}
											height={64}
											className="object-cover"
										/>
									</div>
								</TableCell>
								<TableCell>Transcendence Shop: 30 coins</TableCell>
								<TableCell>Appearence Attack Power +1% per level</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">Succubus</TableCell>
								<TableCell>
									<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
										<Image
											src="/characters/succubus.png"
											alt="Succubus special skin"
											width={64}
											height={64}
											className="object-cover"
										/>
									</div>
								</TableCell>
								<TableCell>Blood Contract: 400k blood</TableCell>
								<TableCell>
									Appearence Skill Attack Power +1% per level
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">Funny Demon</TableCell>
								<TableCell>
									<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
										<Image
											src="/characters/funny_demon.png"
											alt="Funny Demon special skin"
											width={64}
											height={64}
											className="object-cover"
										/>
									</div>
								</TableCell>
								<TableCell>2 Years Anniversary</TableCell>
								<TableCell>
									Appearence Skill Attack Power +1% per level
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">
									Dancer of the Mist
								</TableCell>
								<TableCell>
									<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
										<Image
											src="/characters/dancer_mist.png"
											alt="Dancer of the Mist special skin"
											width={64}
											height={64}
											className="object-cover"
										/>
									</div>
								</TableCell>
								<TableCell>Cherry Blossom Event</TableCell>
								<TableCell>Appearence Attack Power +1% per level</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">Dragon Tamer</TableCell>
								<TableCell>
									<div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-16 sm:w-16">
										<Image
											src="/characters/dragon_tamer.png"
											alt="Dragon Tamer special skin"
											width={64}
											height={64}
											className="object-cover"
										/>
									</div>
								</TableCell>
								<TableCell>Blue Dragon Event</TableCell>
								<TableCell>Appeareance HP +1% per level</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</CardContent>
		</Card>
	);
}

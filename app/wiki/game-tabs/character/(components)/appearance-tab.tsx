import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpCircle, Palette } from "lucide-react"
import Image from "next/image"
import { useMediaQuery } from "@/hooks/use-mobile"

export default function AppearanceTab() {
  const isDesktop = useMediaQuery("(min-width: 768px)")

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
  ]

  const recommendedStats = ["Accuracy", "DEX", "Trait ATK%", "Earth ATK", "Water ATK", "Wind ATK"]

  const promotionTiers = [
    {
      name: "Red",
      image: "/characters/red.png",
      statRange: "STR (50~1000), DEX (50~1000), Min ATK (200~4000), etc.",
    },
    {
      name: "Black",
      image: "/characters/black.png",
      statRange: "STR (50~1000), DEX (50~1000), Min ATK (200~4000), etc.",
    },
    {
      name: "Death Knight",
      image: "/characters/death_knight.png",
      statRange: "STR (50~1000), DEX (50~1000), Min ATK (200~4000), etc.",
    },
    {
      name: "Dark Knight",
      image: "/characters/dark_knight.png",
      statRange: "STR (50~1000), DEX (50~1000), Min ATK (200~4000), etc.",
    },
    {
      name: "Ark Knight",
      image: "/characters/ark_knight.png",
      statRange: "STR (200~4000), DEX (200~4000), Min ATK (800~16000), etc.",
    },
    {
      name: "Knight King",
      image: "/characters/knight_king.png",
      statRange: "STR (300~6000), DEX (300~6000), Min ATK (1200~24000), etc.",
    },
    {
      name: "Devil King",
      image: "/characters/devil_king.png",
      statRange: "STR (400~8000), DEX (400~8000), Min ATK (1600~32000), etc.",
    },
    {
      name: "Soul King",
      image: "/characters/soul_king.png",
      statRange: "STR (500~10000), DEX (500~10000), Min ATK (2000~40000), etc.",
    },
    {
      name: "Leoric",
      image: "/characters/leoric.png",
      statRange: "STR (600~12000), DEX (600~12000), Min ATK (2400~48000), etc.",
    },
    {
      name: "Arthas",
      image: "/characters/arthas.png",
      statRange: "STR (700~14000), DEX (700~14000), Min ATK (2800~56000), etc.",
    },
    {
      name: "Knight Shadow",
      image: "/characters/knight_shadow.png",
      statRange: "STR (800~16000), DEX (800~16000), Min ATK (3200~64000), etc.",
    },
    {
      name: "Demon Slayer",
      image: "/characters/demon_slayer.png",
      statRange: "STR (900~18000), DEX (900~18000), Min ATK (3600~72000), etc.",
    },
  ]

  const specialSkins = [
    {
      name: "Berserker",
      image: "/characters/berserker.png",
      source: "Transcendence Shop: 30 coins",
      effect: "Appearence HP +1% per level",
    },
    {
      name: "Oni",
      image: "/characters/oni.png",
      source: "Transcendence Shop: 30 coins",
      effect: "Appearence Attack Power +1% per level",
    },
    {
      name: "Succubus",
      image: "/characters/succubus.png",
      source: "Blood Contract: 400k blood",
      effect: "Appearence Skill Attack Power +1% per level",
    },
    {
      name: "Funny Demon",
      image: "/characters/funny_demon.png",
      source: "2 Years Anniversary",
      effect: "Appearence Skill Attack Power +1% per level",
    },
    {
      name: "Dancer of the Mist",
      image: "/characters/dancer_mist.png",
      source: "Cherry Blossom Event",
      effect: "Appearence Attack Power +1% per level",
    },
    {
      name: "Dragon Tamer",
      image: "/characters/dragon_tamer.png",
      source: "Blue Dragon Event",
      effect: "Appeareance HP +1% per level",
    },
  ]

  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
          <Palette className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
          Appearance Ability
        </CardTitle>
        <CardDescription>Upgrade your character's appearance and stats through the promotion system</CardDescription>
      </CardHeader>
      <CardContent className="p-3 sm:p-6">
        <div className="space-y-4 sm:space-y-6">
          <div className="rounded-lg">
            <p className="mb-4 text-slate-700 text-xs leading-relaxed sm:text-sm dark:text-slate-300">
              Promoting your character provides not only new skins but also appearance abilities for each skin. You get
              2 slots on 1st level of skin and +1 slot for each level up.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 font-semibold text-sm">Possible Stats:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-3 sm:text-sm md:grid-cols-4">
                  {possibleStats.map((stat, index) => (
                    <div key={index} className="rounded bg-slate-100 p-2 dark:bg-slate-800">
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
                  At the start, focus on rolling for legendary and mythic stats regardless of which ones they are. As
                  you progress to mid-game, follow the recommended stats for all appearance skins.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-sm">Recommended Stats</h4>
                <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-3 sm:text-sm">
                  {recommendedStats.map((stat, index) => (
                    <div key={index} className="rounded bg-green-100 p-2 dark:bg-green-900/30">
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
                    <TableHead className="w-[80px] sm:w-[150px]">Skin</TableHead>
                    <TableHead className="w-[60px] sm:w-[120px]">Preview</TableHead>
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
                                {possibleStats.map((stat, idx) => (
                                  <SelectItem key={idx} value={stat}>
                                    {stat} (varies by tier)
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
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                          {tier.statRange.substring(0, 30)}...
                        </p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Select>
                        <SelectTrigger className="w-full text-xs">
                          <SelectValue placeholder="Check stat range" />
                        </SelectTrigger>
                        <SelectContent>
                          {possibleStats.map((stat, idx) => (
                            <SelectItem key={idx} value={stat}>
                              {stat} (varies by tier)
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
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
                  <TableHead className="w-[60px] sm:w-[120px]">Preview</TableHead>
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
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{skin.source}</p>
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
  )
}

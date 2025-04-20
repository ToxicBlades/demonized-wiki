import { TypographyH1, TypographyMuted } from "@/components/Typography"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RouteConfig } from "@/lib/config/routeConfig"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container px-4 py-6">
      <div className="flex max-w-[980px] flex-col items-start gap-2 mb-8 md:mb-12">
        <TypographyH1 className="text-3xl md:text-4xl lg:text-5xl">Welcome to the Community Wiki</TypographyH1>
        <TypographyMuted className="text-base md:text-lg max-w-[90%] md:max-w-[80%]">
          Your comprehensive resource for game information, guides, and community knowledge. All content is created and
          maintained by players like you.
        </TypographyMuted>
      </div>
      <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Game Guides</CardTitle>
            <CardDescription>Comprehensive guides for beginners and veterans</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base">
              Find detailed walkthroughs, strategy guides, and tips to help you master the game.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href={RouteConfig.guides.community_guides}>Browse Guides</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Game Database</CardTitle>
            <CardDescription>Detailed information on all game elements</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base">
              Explore our comprehensive database of characters, items, locations, and more.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href={RouteConfig.content.items}>Explore Database</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="h-full sm:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Community</CardTitle>
            <CardDescription>Connect with other players</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base">
              Join discussions, share your knowledge, and connect with fellow players.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href={RouteConfig.discord}>Join Community</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

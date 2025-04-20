import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container px-4 py-6 md:py-12">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
            Welcome to the Community Wiki
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Your comprehensive resource for game information, guides, and community knowledge. All content is created
            and maintained by players like you.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/guides/getting-started">Get Started</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contribute">Contribute</Link>
          </Button>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Game Guides</CardTitle>
              <CardDescription>Comprehensive guides for beginners and veterans</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Find detailed walkthroughs, strategy guides, and tips to help you master the game.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/guides">Browse Guides</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Game Database</CardTitle>
              <CardDescription>Detailed information on all game elements</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Explore our comprehensive database of characters, items, locations, and more.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/database">Explore Database</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Community</CardTitle>
              <CardDescription>Connect with other players</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Join discussions, share your knowledge, and connect with fellow players.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/community">Join Community</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Recent Updates</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">New Content Added: Seasonal Event Guide</h3>
                  <p className="text-sm text-muted-foreground">Updated information about the latest seasonal event</p>
                </div>
                <span className="text-xs text-muted-foreground">2 days ago</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button variant="outline" asChild>
            <Link href="/updates">View All Updates</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

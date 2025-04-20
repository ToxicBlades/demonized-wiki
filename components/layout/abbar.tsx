"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeSwitcher } from "../themeSwitcher"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Demonized Unofficial Wiki</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>User Guides</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Getting Started
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Essential guides for new players to get started with the game.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/guides/beginners"
                        >
                          <div className="text-sm font-medium leading-none">
                            Beginner's Guide
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn the basics of the game and how to progress.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/guides/advanced"
                        >
                          <div className="text-sm font-medium leading-none">
                            Advanced Techniques
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Master advanced gameplay mechanics and strategies.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/guides/builds"
                        >
                          <div className="text-sm font-medium leading-none">
                            Character Builds
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Explore optimal character builds and loadouts.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Game Content</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/content/items"
                        >
                          <div className="text-sm font-medium leading-none">Items</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Comprehensive database of all in-game items.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/content/characters"
                        >
                          <div className="text-sm font-medium leading-none">Characters</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Information about playable characters and NPCs.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/content/locations"
                        >
                          <div className="text-sm font-medium leading-none">Locations</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Maps and details about game world locations.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/content/quests"
                        >
                          <div className="text-sm font-medium leading-none">Quests</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Quest guides and walkthroughs.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/community/forums"
                        >
                          <div className="text-sm font-medium leading-none">Forums</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Join discussions with other players.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/community/events"
                        >
                          <div className="text-sm font-medium leading-none">Events</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Upcoming community events and gatherings.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/community/contribute"
                        >
                          <div className="text-sm font-medium leading-none">Contribute</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Help improve the wiki by contributing content.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="/" className="flex items-center space-x-2 pb-6">
              <span className="font-bold">Demonized Unofficial Wiki</span>
            </Link>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <h4 className="font-medium">User Guides</h4>
                <div className="pl-2">
                  <div className="grid gap-1">
                    <Link href="/guides/beginners" className="text-sm">Beginner's Guide</Link>
                    <Link href="/guides/advanced" className="text-sm">Advanced Techniques</Link>
                    <Link href="/guides/builds" className="text-sm">Character Builds</Link>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <h4 className="font-medium">Game Content</h4>
                <div className="pl-2">
                  <div className="grid gap-1">
                    <Link href="/content/items" className="text-sm">Items</Link>
                    <Link href="/content/characters" className="text-sm">Characters</Link>
                    <Link href="/content/locations" className="text-sm">Locations</Link>
                    <Link href="/content/quests" className="text-sm">Quests</Link>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <h4 className="font-medium">Community</h4>
                <div className="pl-2">
                  <div className="grid gap-1">
                    <Link href="/community/forums" className="text-sm">Forums</Link>
                    <Link href="/community/events" className="text-sm">Events</Link>
                    <Link href="/community/contribute" className="text-sm">Contribute</Link>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex items-center space-x-2 md:hidden">
          <span className="font-bold">Demonized Wiki</span>
        </Link>

        {/* Right side - Theme Switcher */}
        <div className="flex flex-1 items-center justify-end">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}

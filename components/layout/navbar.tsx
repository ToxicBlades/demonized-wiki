"use client"

import { RouteConfig } from "@/lib/config/routeConfig"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from 'lucide-react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

// Authorized navigation links and their dropdown options
const Navlinks = [
  {
    trigger: "User guides",
    contentItems: [
      {
        title: "Beginners guide",
        content: "Learn the basics of the game and how to progress",
        href: RouteConfig.guides.beginners_guide,
      },
      {
        title: "Community guides",
        content: "Community guides made by other players",
        href: RouteConfig.guides.community_guides,
      },
    ],
  },
  {
    trigger: "Game Content",
    contentItems: [
      {
        title: "Items",
        content: "Comprehensive database of all in-game items.",
        href: RouteConfig.guides.community_guides,
      },
      {
        title: "Characters",
        content: "Information about playable characters and NPCs.",
        href: RouteConfig.guides.community_guides,
      },
      {
        title: "Locations",
        content: " Maps and details about game world locations.",
        href: RouteConfig.guides.community_guides,
      },
      {
        title: "Resources",
        content: "Information about all resources",
        href: RouteConfig.guides.community_guides,
      },
    ],
  },
]

interface NavigationLinksProps {
  usePublic?: boolean
}

export default function NavigationLinks({}: NavigationLinksProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Desktop Navigation
  const DesktopNavigation = (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {Navlinks.map((navItem, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger>{navItem.trigger}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {navItem.contentItems.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                          "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                          {
                            "bg-accent/50 text-accent-foreground": pathname === item.href,
                          },
                        )}
                      >
                        <div className="text-sm font-medium leading-none">{item.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{item.content}</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )

  // Mobile Navigation
  const MobileNavigation = (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[350px]">
          <SheetHeader>
            <SheetTitle asChild>
							<Link href={RouteConfig.home} className="text-lg font-semibold" onClick={() => setIsOpen(false)}>
                Unofficial Demonized Wiki
              </Link>
							</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-6 py-4">
            <Accordion type="single" collapsible className="w-full">
              {Navlinks.map((navItem, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-base">{navItem.trigger}</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2 pl-4">
                      {navItem.contentItems.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.href}
                          className={cn("py-2 text-sm transition-colors", {
                            "text-primary font-medium": pathname === item.href,
                            "text-muted-foreground": pathname !== item.href,
                          })}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )

  return (
    <>
      {DesktopNavigation}
      {MobileNavigation}
    </>
  )
}

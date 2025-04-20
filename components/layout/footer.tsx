"use client"
import Link from "next/link"
import { Github } from 'lucide-react'
import { RouteConfig } from "@/lib/config/routeConfig"

export function Footer() {
  return (
    <footer className="border-t py-8 md:py-10">
      <div className="container flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:gap-8 md:px-6">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            This is an <strong>unofficial</strong> wiki. All data is collected and maintained by the player community.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
          <nav className="flex flex-wrap justify-center gap-5 md:gap-6">
            <Link href="mailto:toxicblade.work@gmail.com" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
            <Link href={RouteConfig.policy} className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href={RouteConfig.terms} className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href={RouteConfig.contribute}
            target="_blank"
            className="text-sm font-medium hover:underline underline-offset-4">
              Contribute
            </Link>
            <Link href={RouteConfig.discord}
            target="_blank"
            className="text-sm font-medium hover:underline underline-offset-4">
              Discord
            </Link>
          </nav>
          <div className="flex items-center gap-5 md:gap-6">
            <Link
              href={RouteConfig.contribute}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

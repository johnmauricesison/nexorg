"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Moon, Sun } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { useTheme } from "next-themes"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Announcements",
    href: "/docs/primitives/alert-dialog",
    description:
      "Be Notified to your organization activities and announcements",
  },
  {
    title: "New Org",
    href: "/docs/primitives/hover-card",
    description:
      "Build your own University Org",
  },
  {
    title: "Recognition",
    href: "/docs/primitives/progress",
    description:
      "Recognize University Org in NexOrg",
  },
  {
    title: "Streamline Operations",
    href: "/docs/primitives/scroll-area",
    description: "Organization operations making easy in NexOrg",
  },
  {
    title: "Calendar",
    href: "/docs/primitives/tabs",
    description:
      "See your organizational activities and events",
  },
  {
    title: "Kanban and Archive",
    href: "/docs/primitives/tooltip",
    description:
      "Manage your task using Kanban and Save your Organization Resources",
  },
]

export function WebNavigationMenu() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-full flex justify-center  py-4">
      

        <NavigationMenu viewport={false}>
        <NavigationMenuList>
            <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                    <NavigationMenuLink asChild>
                    <a
                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                        href="/"
                    >
                        <div className="mt-4 mb-2 text-lg font-medium">
                        NexOrg
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                        Your software for University Organizations
                        </p>
                    </a>
                    </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Accreditation">
                    Accredit Organizations in NexOrg
                </ListItem>
                <ListItem href="/docs/installation" title="Activities">
                    Streamline Operations in NexOrg
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Management">
                    Manage Organizational Resources in NexOrg
                </ListItem>
                </ul>
            </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                    <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    >
                    {component.description}
                    </ListItem>
                ))}
                </ul>
            </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/docs">Docs</Link>
            </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <NavigationMenuTrigger>List</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                <li>
                    <NavigationMenuLink asChild>
                    <Link href="#">
                        <div className="font-medium">Components</div>
                        <div className="text-muted-foreground">
                        Browse all components in the library.
                        </div>
                    </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                    <Link href="#">
                        <div className="font-medium">Documentation</div>
                        <div className="text-muted-foreground">
                        Learn how to use the library.
                        </div>
                    </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                    <Link href="#">
                        <div className="font-medium">Blog</div>
                        <div className="text-muted-foreground">
                        Read our latest blog posts.
                        </div>
                    </Link>
                    </NavigationMenuLink>
                </li>
                </ul>
            </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                <li>
                    <NavigationMenuLink asChild>
                    <Link href="#">Components</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                    <Link href="#">Documentation</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                    <Link href="#">Blocks</Link>
                    </NavigationMenuLink>
                </li>
                </ul>
            </NavigationMenuContent>
            {/* </NavigationMenuItem>
            <NavigationMenuItem>
            <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                <li>
                    <NavigationMenuLink asChild>
                    <Link href="#" className="flex-row items-center gap-2">
                        <CircleHelpIcon />
                        Backlog
                    </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                    <Link href="#" className="flex-row items-center gap-2">
                        <CircleIcon />
                        To Do
                    </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                    <Link href="#" className="flex-row items-center gap-2">
                        <CircleCheckIcon />
                        Done
                    </Link>
                    </NavigationMenuLink>
                </li>
                </ul>
            </NavigationMenuContent>*/}
            </NavigationMenuItem>
            <NavigationMenuItem>
              <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className='rounded-3xl'>
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                System
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
            </NavigationMenuItem> 
        </NavigationMenuList>
        </NavigationMenu>
        
        <div className="">
            <Link href="/login">
                <Button variant={"ghost"}>Log in</Button>
            </Link>
            
            <Button variant={"default"}>Join Us Now</Button>    
        </div>
        
    </div>


  )
}

function ListItem({
    title,
    children,
    href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

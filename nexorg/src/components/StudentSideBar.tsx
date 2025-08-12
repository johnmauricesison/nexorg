import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Bell, Blend, Book, Box, Calendar, ChevronDown, ChevronUp, GalleryVerticalEnd, HelpCircle, Home, Inbox, Info, InfoIcon, Kanban, LayoutDashboard, Newspaper, Plus, Projector, Search, Settings, Star, User, User2, Users } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import { SidebarUserFooter } from './SidebarUserFooter'

const items_one = [
  {
    title: "Home",
    url: "/student",
    icon: Home,
  },
  // {
  //   title: "Dashboard",
  //   url: "#",
  //   icon: LayoutDashboard,
  // },
  {
    title: "My Calendar",
    url: "/student/calendar",
    icon: Calendar,
  },
  {
    title: "My Resources",
    url: "#",
    icon: Box,
  },
  {
    title: "Notifications",
    url: "#",
    icon: Bell,
  },
  {
    title: "My Kanban Board",
    url: "student/kanban",
    icon: Kanban,
  },
  // {
  //   title: "Posts",
  //   url: "#",
  //   icon: Newspaper,
  // },
  // {
  //   title: "Red Book",
  //   url: "#",
  //   icon: Book,
  // },
  // {
  //   title: "Members",
  //   url: "#",
  //   icon: Users,
  // },
]

const items_two = [
  {
    title: "Help",
    url: "#",
    icon: HelpCircle,
  },
  {
    title: "About Us",
    url: "#",
    icon: Info,
  },
  {
    title: "Want to start an Org?",
    url: "#",
    icon: Star,
  }
]

// USER PROFILE
const data = {
  user: {
    name: "John Maurice P. Sison",
    email: "johnmaurice910@gmail.com",
    avatar: "https://github.com/johnmauricesison.png",
  }
}

export const AppSideBar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg">
              <Link href="/">
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <GalleryVerticalEnd className="size-4" />
            
              </div>
              {/* <Image src="Blend" alt="logo" width={20} height={20} /> */}
              <span>NexOrg</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        {/* <SidebarSeparator></SidebarSeparator> */}
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup >
          <SidebarGroupLabel>Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items_one.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Collapsible */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                About
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            {/* <SidebarGroupAction>
              <span className="sr-only">Add Project</span>
            </SidebarGroupAction> 
              
              Eto naman kapag gusto mo action agad
            */}




            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items_two.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter >
        {/* <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton >
                  <User2 />John Maurice P. Sison <ChevronUp className='ml-auto' />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu> */}

        <SidebarUserFooter user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

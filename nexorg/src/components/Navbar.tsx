"use client"

import { LogOut, Moon, Settings, Sun, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button'
import { useTheme } from 'next-themes'
import { SidebarTrigger, useSidebar } from './ui/sidebar'
import { NotificationTopNavBar } from './NotificationTopNavBar'

export const Navbar = () => {
    
    const { theme, setTheme } = useTheme();
    // const { toggleSidebar } = useSidebar();
  return (
    <nav className='p-4 flex items-center justify-between sticky top-0 z-50'>
        {/* LEFT */}
        <SidebarTrigger></SidebarTrigger>
        {/* <Button variant="outline" onClick={toggleSidebar}>Custom Button</Button> */}
        {/* RIGHT */}
        <div className='flex items-center gap-4'>
            {/* <Link href="/">Dashboard</Link> */}

            {/* Notification Dropdown */}
            <NotificationTopNavBar />
            {/* DARK MODE DROPDOWN */}
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

            {/* USER DROPDOWN */}
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src="https://github.com/johnmauricesison.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={10}>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <User className='h-[1.2rem] w-[1.2rem] mr-2' />
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings className='h-[1.2rem] w-[1.2rem] mr-2' />
                        Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">
                        <LogOut className='h-[1.2rem] w-[1.2rem] mr-2' />
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </nav>
  )
}

import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown-menu'
import { BellIcon } from 'lucide-react'
import { Button } from './ui/button'

export const NotificationTopNavBar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className='rounded-3xl'>
          <BellIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 max-h-[400px] overflow-auto">
        <div className="grid gap-4 p-4">
          <h4 className="font-medium leading-none">Notifications</h4>
          <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
            <div className="grid gap-1">
              <p className="text-sm font-medium">New task received</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">5 min ago</p>
            </div>
          </div>
          <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
            <div className="grid gap-1">
              <p className="text-sm font-medium">Payment processed</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">10 min ago</p>
            </div>
          </div>
          <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
            <div className="grid gap-1">
              <p className="text-sm font-medium">New Event</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">1 hour ago</p>
            </div>
          </div>
          <Button variant="outline" className="mt-4">
            See All
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

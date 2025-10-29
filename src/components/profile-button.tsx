"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function ProfileButton() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="hover:bg-background flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl px-2 py-2">
            <div className="bg-foreground text-background flex size-10 items-center justify-center rounded-full font-semibold">
              B
            </div>
            <div className="min-w-0 flex-1 px-1 text-left">
              <p className="truncate text-sm font-medium">Bharat Singh</p>
              <p className="text-muted-foreground truncate text-xs">
                bharat@example.com
              </p>
            </div>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-[var(--radix-dropdown-menu-trigger-width)]"
          align="center"
        >
          <DropdownMenuItem disabled>shrey.route88@gmail.com</DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            Settings
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

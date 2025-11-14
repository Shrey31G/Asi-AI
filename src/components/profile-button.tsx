"use client";

import { signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function ProfileButton({ user }: any) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="hover:bg-background flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl px-2 py-2">
            <div className="bg-foreground text-background flex size-10 items-center justify-center rounded-full font-semibold">
              B
            </div>
            <div className="min-w-0 flex-1 px-1 text-left">
              <p className="truncate text-sm font-medium">{user.name}</p>
              <p className="text-muted-foreground truncate text-xs">
                {user.email}
              </p>
            </div>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-[var(--radix-dropdown-menu-trigger-width)]"
          align="center"
        >
          <DropdownMenuItem disabled>{user.email}</DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            Settings
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => signOut({ callbackUrl: "/" })}
            className="cursor-pointer"
          >
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

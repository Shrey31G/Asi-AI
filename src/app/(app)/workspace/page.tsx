import ProfileButton from "@/components/profile-button";
import SignOutButton from "@/components/signOut-button";
import { authoptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Workspace() {
  const session = await getServerSession(authoptions);
  // if (!session) {
  //   redirect("/signin");
  // }
  return (
    <>
      <div className="grid h-screen grid-cols-12 overflow-hidden">
        <div className="bg-background3 col-span-2 flex min-h-0 flex-col border">
          <div className="min-h-12 w-full flex-shrink-0">hi</div>

          <div className="scrollbar-thin min-h-0 w-full flex-1 overflow-y-auto overscroll-contain px-4">
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
            <div>bru</div>
          </div>

          <div className="relative flex h-17 w-full shrink-0 items-center justify-center">
            <div className="from-background via-background to-background/0 pointer-events-none absolute inset-0 -top-4 z-10 w-full bg-gradient-to-t via-65% blur-sm dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900" />
            <div className="relative z-20 w-full">
              <ProfileButton />
            </div>
          </div>
        </div>

        <div className="col-span-10 h-screen min-h-0 flex-1 dark:bg-neutral-900">
          <div className="relative flex h-full flex-col overflow-hidden">
            <header className="sticky top-0 min-h-12 w-full flex-shrink-0">
              <div className="from-background via-background to-background/0 pointer-events-none absolute inset-0 -bottom-5 z-10 bg-gradient-to-b via-65% blur-sm dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900" />

              <div className="relative z-20 flex w-full items-center justify-between gap-4 p-3 pr-3 pl-11 lg:px-8 lg:pr-3 lg:pl-4">
                <div>ASI AI</div>
                <div>Share</div>
              </div>
            </header>

            <div className="scrollbar-thin flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain">
              hi
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

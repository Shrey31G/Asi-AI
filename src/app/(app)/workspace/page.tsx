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
        <div className="col-span-2 flex min-h-0 flex-col border dark:bg-[rgb(31,30,29)]">
          <div className="min-h-12 w-full flex-shrink-0">hi</div>

          <div className="scrollbar-thin min-h-0 w-full overflow-y-auto overscroll-contain">
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
        </div>

        <div className="col-span-10 h-screen min-h-0 flex-1 dark:bg-neutral-900">
          <div className="relative flex h-full flex-col overflow-hidden">
            <header className="sticky top-0 min-h-12 w-full flex-shrink-0">
              <div className="pointer-events-none absolute inset-0 blur-sm" />
              <div className="flex w-full items-center justify-between gap-4 p-3 pr-3 pl-11 lg:px-8 lg:pr-3 lg:pl-4">
                <div>ASI AI</div>
                <div>Share</div>
              </div>
            </header>
            <div className="scrollbar-thin min-h-0 flex-1 overflow-y-auto overscroll-contain">
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
              <div>asod</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { ModeToggle } from "@/components/mode-toggle";
import SignInButton from "@/components/signIn-button";
import { Button } from "@/components/ui/button";
import { authoptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function SignIn() {
  const session = await getServerSession(authoptions);

  if (session) {
    redirect("/workspace");
  }

  return (
    <>
      <div className="bg-background2 grid min-h-screen min-w-screen grid-cols-5 p-4">
        <div className="relative col-span-2 flex h-full w-full items-center justify-center overflow-auto">
          <div className="font-dynapuff absolute top-0 left-5 text-3xl font-bold">
            ASI AI
          </div>
          <Button
            variant={"secondary"}
            asChild
            className="bg-background2 text-foreground absolute top-0 right-2 cursor-pointer"
          >
            <Link href={"/"}>
              <GoBackIcon /> Go back
            </Link>
          </Button>

          <div className="min-w-[60%]">
            <div className="mb-6">
              <h1 className="text-4xl font-semibold">Welcome Back</h1>
              <p className="dark:text-foreground p-1 text-sm text-neutral-500">
                Sign in to continue with your AI assistant
              </p>
            </div>
            <div className="rounded-3xl border p-6">
              <div className="flex flex-col gap-4">
                <SignInButton text="Sign In with Google" provider="google" />
                <SignInButton text="Sign In with Github" provider="github" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative col-span-3 rounded-xl bg-green-400">
          <div className="absolute top-0 right-0">
            <ModeToggle></ModeToggle>
          </div>
        </div>
      </div>
    </>
  );
}

function GoBackIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
      <path d="M5 12l6 6" />
      <path d="M5 12l6 -6" />
    </svg>
  );
}

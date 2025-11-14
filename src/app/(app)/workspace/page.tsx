
import WorkspaceClient from "@/components/workspace/workspace-client";
import { authoptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Workspace() {
  const session = await getServerSession(authoptions);
  if (!session) {
    redirect("/signin");
  }
  return (
    <>
      <WorkspaceClient user={session.user} />
    </>
  );
}

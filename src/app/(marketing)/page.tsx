import { authoptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authoptions);

  if (session) {
    redirect("/workspace");
  }

  return <div>hi Landing page</div>;
}

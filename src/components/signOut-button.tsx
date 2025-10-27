"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <>
      <button
        className="cursor-pointer border"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Log Out
      </button>
    </>
  );
}

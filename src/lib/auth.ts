import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions, Session } from "next-auth";
import prisma from "./prisma";
import Google from "next-auth/providers/google";
import { AdapterUser } from "next-auth/adapters";
import Github from "next-auth/providers/github";

export const authoptions: AuthOptions = {

    adapter: PrismaAdapter(prisma),

    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),

        Github({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        })
    ],
    session: {
        strategy: 'database',
        maxAge: 24 * 60 * 60
    },
    pages: {
        signIn: '/signin',
        error: '/auth/error',
        verifyRequest: '/auth/verify'
    },

    callbacks: {
        async session({ session, user }: { session: Session, user: AdapterUser }) {
            if (session.user) {
                session.user.id = user.id
            }
            return session
        },
        async redirect({ url, baseUrl }) {
            if (url.startsWith("/")) return `${baseUrl}${url}`
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        }
    },
    debug: process.env.NODE_ENV === 'development'
}


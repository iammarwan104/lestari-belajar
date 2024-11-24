import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import type { Provider } from "next-auth/providers"
import { PrismaClient } from "@prisma/client"
import { getUserFromDb } from "@/app/lib/action"
 
const providers: Provider[] = [
  Credentials({
    credentials: { 
      username: {label : "Username", type: "text"},
      password: { label: "Password", type: "password" }
   },
    async authorize(c) {

      const data = await getUserFromDb(c.username as string, c.password as string)

      // console.log(data)
      if (c.username !== await data.data?.username) return null
      if (c.password !== await data.data?.password) return null

      return {
        id: data.data?.username,
        name: data.data?.username,
        username: data.data?.username,
      }
    },
  }),
]
 
export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider()
      return { id: providerData.id, name: providerData.name }
    } else {
      return { id: provider.id, name: provider.name }
    }
  })
  .filter((provider) => provider.id !== "credentials")
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  pages: {
    signIn: "/signin",
    verifyRequest: '/auth/verify-request',
    newUser: '/auth/new-user'
  },
  cookies: {
    sessionToken: {
      name: '__Secure-next-auth.session-token',
      options: {
        httpOnly: false,
        sameSite: 'none',
        path: '/',
        secure: true,
        partitioned: true
      },
    }
}
})
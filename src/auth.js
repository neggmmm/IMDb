import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  callbacks: {
    async session({ session, token }) {
      return session
    },
    async jwt({ token, account, profile }) {
      return token
    },
  },
  pages: {
    signIn: '/sign-in',
  },
})
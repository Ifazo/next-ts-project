import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { GithubProfile } from "next-auth/providers/github";
import { GoogleProfile } from "next-auth/providers/google";
import { db } from "@/db/script";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        const user = await db.user.findUnique({
          where: {
            email: credentials.email
          },
        });
        if (!user) {
          return null;
        }
        if (user.password === credentials.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      profile(profile: GithubProfile) {
        console.log(profile);
        return {
          id: profile.id.toString(),
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
          role: "user",
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile(profile: GoogleProfile) {
        console.log(profile);
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: "user",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

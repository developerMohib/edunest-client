import NextAuth, { Account, Profile, User } from "next-auth";
import { CredentialInput } from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { AdapterUser } from "next-auth/adapters";
import connectDB from "@/lib/db";
import Facebook from "next-auth/providers/facebook";


interface SignInParams {
  user: AdapterUser | User;
  account: Account | null;
  profile?: Profile | undefined;
  email?: {
    verificationRequest?: boolean;
  };
  credentials?: Record<string, CredentialInput>;
}

const { db } = (await connectDB()) || { db: null };
if (!db) throw new Error("Failed to connect to the database");
// const userCollection = db.collection("Users");

export const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Facebook({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id ?? user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = (token.id ?? token.id) as string;
        session.user.email = token.email as string;
      }
      return session;
    },
    async signIn({ user, account }: SignInParams) {
      console.log("user 97", user, account);
      if (
        account?.provider === "google" ||
        account?.provider === "facebook" 
      ) {
        // here you can check if the user exists in your database
        }  else {
        return true;
      }
    },
  },
   secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/signin",
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

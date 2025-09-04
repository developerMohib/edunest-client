import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // Replace with your authentication logic
                console.log(credentials ,'credentials')
                if (
                    credentials?.username === "admin" &&
                    credentials?.password === "password"
                ) {
                    return { id: "1", name: "Admin", email: "admin@example.com" };
                }
                return null;
            }
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    pages: {
        signIn: "/signin"
    }
});

export { handler as GET, handler as POST };
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import AdminUser from "@/utils/schemas/AdminUser";
import connectToDB from "@/utils/db";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials, _req) {
        const { username, password } = credentials;

        try {
          await connectToDB();
          const user = await AdminUser.findOne({ username: username }, { username: 1, password: 1 });
          if (!user) {
            throw new Error("User with username " + username + " not found");
          }

          const isPassword = await compare(password, user.password);
          if (!isPassword) {
            throw new Error("Invalid credentials");
          }

          return { id: user.id, something: { id: user.id, name: user.username }, name: user.username };
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = token.sub;

      return session;
    },
  },
  pages: {
    signIn: "/admin/login",
  },
});

export { handler as GET, handler as POST };

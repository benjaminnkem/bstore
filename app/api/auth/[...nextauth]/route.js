import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import AdminUser from "@/utils/schemas/AdminUser";
import connectToDB from "@/utils/db";

export const authOptions = {
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

          return { id: user.id, name: user.username, email: user.email };
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
    async session({ session, token }) {
      session.user.id = token.sub;

      return session;
    },
  },
  pages: {
    signIn: "/admin/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

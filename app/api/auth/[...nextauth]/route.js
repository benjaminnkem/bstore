import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import connectToDB from "@/lib/config/db";
import UsersSchema from "@/lib/schemas/users/UsersSchema";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { type: "text", placeholder: "username", label: "username" },
        password: { type: "text", placeholder: "password", label: "password" },
      },
      async authorize(credentials, _req) {
        const { username, password } = credentials;

        try {
          await connectToDB();
          const user = await UsersSchema.findOne({ username }, { username: 1, password: 1, email: 1 });

          if (!user) throw new Error("User with username " + username + " not found");

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
    signIn: "/account/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

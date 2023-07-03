import dbConnection from "@/data/mysql_db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const bycrpt = require("bcryptjs");

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { username, password } = credentials;
        const connection = await dbConnection.getConnection();

        try {
          const [[existsUsername]] = await connection.query(
            `SELECT username FROM admin_users WHERE username = ${username}`
          );

          if (!existsUsername) {
            throw new Error("User not found");
          }

          const isPassword = await bycrpt.compare(password, existsUsername.password);
          if (!isPassword) {
            throw new Error("Invalid credentials");
          }

          return { id: `${existsUsername.id}`, username: existsUsername.username };
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin/login",
  },
});

export { handler as GET, handler as POST };

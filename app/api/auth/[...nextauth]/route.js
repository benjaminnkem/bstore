import dbConnection from "@/data/mysql_db";
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
        // const connection = await dbConnection.getConnection();

        try {
          // const [[existsUsername]] = await connection.query(
          //   `SELECT username FROM admin_users WHERE username = ${username}`
          // );

          // console.log("got here 2", existsUsername);

          // if (!existsUsername) {
          //   throw new Error("User not found");
          // }

          // console.log("got here 3");

          // const isPassword = await compare(password, existsUsername.password);
          // if (!isPassword) {
          //   throw new Error("Invalid credentials");
          // }

          await connectToDB();
          const user = await AdminUser.findOne({ username: username }, { username: 1, password: 1 });
          if (!user) {
            throw new Error("User with username " + username + " not found");
          }

          const isPassword = await compare(password, user.password);
          if (!isPassword) {
            throw new Error("Invalid credentials");
          }
          return { id: user._id, username: user.username };
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

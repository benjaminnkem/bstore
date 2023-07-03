import { SessionProvider } from "next-auth/react";
import "./globals.css";

export const metadata = {
  title: "BStore - Your Store, Our Store",
  description: "BStore is a simple shopping website that makes payments and shopping online easier",
  robots: "noindex",
  keywords: "Online Store, Online Shopping, Gadgets, Products, Appliances, Buy",
};

export default function RootLayout({ Component, pageProps: { session, ...children } }) {
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </SessionProvider>
  );
}

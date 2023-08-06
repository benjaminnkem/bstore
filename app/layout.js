import "remixicon/fonts/remixicon.css";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "BStore - Your Store, Our Store",
  description: "BStore is a simple shopping website that makes payments and shopping online easier",
  keywords: "Online Store, Online Shopping, Gadgets, Products, Appliances, Buy",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "500", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}

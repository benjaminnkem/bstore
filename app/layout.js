import "remixicon/fonts/remixicon.css";
import "./globals.css";
import { Poppins } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata = {
  title: "BStore - Quality Eyewear, Clothes & Accessories",
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

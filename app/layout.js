import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "BStore - Your Store, Our Store",
  description: "BStore is a simple shopping website that makes payments and shopping online easier",
  keywords: "Online Store, Online Shopping, Gadgets, Products, Appliances, Buy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="py-4 border"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}

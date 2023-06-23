import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "BStore - Your Store, Our Store",
  description: "BStore is a simple shopping website that makes payments and shopping online easier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

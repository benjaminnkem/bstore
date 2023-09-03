import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { Poppins } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Providers from "@/utils/providers/providers";
config.autoAddCss = false;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "500", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

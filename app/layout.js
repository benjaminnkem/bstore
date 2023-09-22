import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { DM_Sans } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Providers from "@/lib/utils/providers";
config.autoAddCss = false;

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

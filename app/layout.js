import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { DM_Sans } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import GeneralProvider from "@/lib/utils/general";
config.autoAddCss = false;

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "500", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.className}>
      <body>
        <GeneralProvider>{children}</GeneralProvider>
      </body>
    </html>
  );
}

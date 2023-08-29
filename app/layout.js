import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { DM_Sans } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import GeneralProvider from "@/lib/providers/general";
config.autoAddCss = false;

const dmSansa = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "500", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSansa.className}>
      <body>
        <GeneralProvider>{children}</GeneralProvider>
      </body>
    </html>
  );
}

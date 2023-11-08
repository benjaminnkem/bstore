import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Providers from "../lib/utils/providers";
import { dmSans } from "@/lib/fonts";
import NavbarSpace from "@/components/Common/Custom/navbar-space";
config.autoAddCss = false;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.className}>
      <body>
        <Providers>
          <NavbarSpace />
          {children}
        </Providers>
      </body>
    </html>
  );
}

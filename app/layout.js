import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Providers from "../lib/utils/providers";
import { dmSans } from "@/lib/fonts";
config.autoAddCss = false;

export const metadata = {
  title: {
    default: "BStore",
    template: `%s | Bstore`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

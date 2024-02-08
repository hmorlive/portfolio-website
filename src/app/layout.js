import { Raleway } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const font = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Hazmed Moreno",
  description: "Personal Page - Hazmed Moreno",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} relative flex flex-col text-zinc-600 bg-zinc-950`}
      >
        {children}
      </body>
    </html>
  );
}

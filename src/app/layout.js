import { Raleway } from "next/font/google";
import "./globals.css";

const font = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Hazmed Moreno",
  description: "Personal Page - Hazmed Moreno",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} relative flex flex-col text-zinc-600 bg-white`}
      >
        {children}
      </body>
    </html>
  );
}

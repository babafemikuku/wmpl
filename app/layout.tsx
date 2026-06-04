// app/layout.tsx

import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: { default: "WMP", template: "%s | WMP" },
  description:
    "WMP helps founders build clearer operating structures, stronger accountability, and more resilient workforce systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfairDisplay.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-background font-body text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
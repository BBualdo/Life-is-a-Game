import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Life is a Game",
  description: "Generated by create next app",
};

const blender = localFont({
  src: "../public/assets/fonts/Blender-Pro-Bold.ttf",
});

export const arcade = localFont({ src: "../public/assets/fonts/ARCADE_I.ttf" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/favicon.png" sizes="32x32" />
      </head>
      <body className={blender.className}>{children}</body>
    </html>
  );
}

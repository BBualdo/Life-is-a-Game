import type { Metadata } from "next";

import { Play } from "next/font/google";

import "./globals.css";
import ReduxProvider from "../redux/ReduxProvider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Life is a Game",
  description: "Generated by create next app",
};

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-black ${play.className}`}>
        <ReduxProvider>
          <>
            {children}{" "}
            <Toaster
              position="top-center"
              toastOptions={{
                unstyled: true,
                classNames: {
                  toast:
                    "bg-black border-2 border-cp-cyan px-4 text-cp-cyan py-2 w-full text-center overflow-hidden",
                  title: "font-bold xs:text-md lg:text-lg",
                },
              }}
            />
          </>
        </ReduxProvider>
      </body>
    </html>
  );
}

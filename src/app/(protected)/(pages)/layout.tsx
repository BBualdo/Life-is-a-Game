import MobileNav from "@/src/components/Interface/shared/MobileNav";
import Navbar from "@/src/components/Interface/shared/Navbar";
import { Toaster } from "sonner";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <MobileNav />
      {children}
      <Toaster
        position="bottom-center"
        toastOptions={{
          unstyled: true,
          classNames: {
            toast:
              "bg-black border-2 border-cp-cyan px-4 text-cp-cyan py-2 w-full text-center overflow-hidden",
            title: "font-bold text-lg",
          },
        }}
      />
    </>
  );
}

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
      {children}
      <Toaster />
    </>
  );
}

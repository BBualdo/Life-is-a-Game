import MainMenu from "@/src/components/Interface/MainMenu/MainMenu";

export default function Home() {
  const value: string = "Jakaś wartość";

  return (
    <main className="flex min-h-screen items-center">
      <MainMenu />
    </main>
  );
}

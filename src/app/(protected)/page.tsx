import MainMenu from "@/src/components/Interface/MainMenu/MainMenu";

export default function Home() {
  const value: string = "Jakaś wartość";

  return (
    <main className="min-h-screen flex items-center">
      <MainMenu />
    </main>
  );
}

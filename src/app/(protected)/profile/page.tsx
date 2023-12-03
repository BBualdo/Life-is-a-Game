import BackButton from "@/src/components/Interface/shared/BackButton";
import UserData from "@/src/components/Interface/Profile/UserData";

export default function Profile() {
  return (
    <main className="gradient-cp flex min-h-screen flex-col items-center justify-center py-20">
      <BackButton />
      <UserData />
    </main>
  );
}

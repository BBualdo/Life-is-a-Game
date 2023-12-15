import BackButton from "@/src/components/Interface/shared/BackButton";
import UserData from "@/src/components/Interface/Profile/UserData";
import ProfileBackdrop from "@/src/components/Interface/Profile/ProfileBackdrop";

export default function Profile() {
  return (
    <>
      <ProfileBackdrop />
      <main className="flex min-h-screen flex-col items-center justify-center py-20">
        <BackButton className="text-cp-red hover:text-cp-red/50" />
        <UserData />
      </main>
    </>
  );
}

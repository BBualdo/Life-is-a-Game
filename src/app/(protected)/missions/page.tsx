import MissionsBackdrop from "@/src/components/Interface/Missions/MissionsBackdrop";
import MissionsContainer from "@/src/components/Interface/Missions/MissionsContainer";
import BackButton from "@/src/components/Interface/shared/BackButton";

export default function Missions() {
  return (
    <>
      <MissionsBackdrop />
      <main className="flex min-h-screen flex-col justify-center p-20 text-white">
        <BackButton className="text-cp-cyan hover:text-cp-cyan/50" />
        <MissionsContainer />
      </main>
    </>
  );
}

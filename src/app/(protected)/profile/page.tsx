import UserAvatar from "@/src/components/Interface/UserAvatar";
import UserLevel from "@/src/components/Interface/UserLevel";

export default function Profile() {
  return (
    <main className="gradient-cp flex min-h-screen flex-col items-center justify-center py-20">
      <div className="flex h-[12px] w-3/5">
        <div className="light-silver-shadow bg-light-silver w-[80px]"></div>
        <div className="light-silver-shadow bg-light-silver ml-2 w-[100px]"></div>
        <div className="light-silver-shadow bg-light-silver ml-[2px] w-[10px]"></div>
        <div className="light-silver-shadow bg-light-silver ml-2 w-[200px]"></div>
        <div className="light-silver-shadow bg-light-silver ml-1 w-[300px]"></div>
        <div className="light-silver-shadow bg-light-silver ml-2 flex-1"></div>
        <div className="light-silver-shadow bg-light-silver ml-2 flex w-[80px] gap-[2px]"></div>
        <div className="light-silver-shadow ml-2 flex w-[200px] gap-[2px]">
          <div className="bg-light-silver flex-1"></div>
          <div className="bg-light-silver flex-1"></div>
          <div className="bg-light-silver flex-1"></div>
          <div className="bg-light-silver flex-1"></div>
          <div className="bg-light-silver flex-1"></div>
          <div className="bg-light-silver flex-1"></div>
          <div className="bg-light-silver flex-1"></div>
          <div className="bg-light-silver flex-1"></div>
          <div className="bg-light-silver flex-1"></div>
          <div className="bg-light-silver flex-1"></div>
          <div className="bg-light-silver flex-1"></div>
          <div className="bg-light-silver flex-1"></div>
          <div className="bg-light-silver flex-1"></div>
          <div className="bg-light-silver flex-1"></div>
          <div className="bg-light-silver flex-1"></div>
          <div className="bg-light-silver flex-1"></div>
          <div className="bg-light-silver flex-1"></div>
          <div className="bg-light-silver flex-1"></div>
          <div className="bg-light-silver flex-1"></div>
          <div className="bg-light-silver flex-1"></div>
        </div>
      </div>
      <section className="w-3/5 border-b border-white py-2">
        <div className="flex">
          <UserAvatar />
          <UserLevel />
        </div>
      </section>
    </main>
  );
}

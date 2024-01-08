import Backdrop from "@/src/components/Auth/Backdrop";
import { arcade } from "@/src/fonts";
import Logo from "@/src/components/Auth/Logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Backdrop />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className={arcade.className}>
          <Logo />
        </div>
        <div className="flex flex-col items-center">
          {/* <LoginProviders /> */}
          {children}
        </div>
      </main>
    </>
  );
};

export default AuthLayout;

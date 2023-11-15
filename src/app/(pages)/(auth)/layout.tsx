import Backdrop from "@/src/components/Auth/Backdrop";
import { arcade } from "@/src/fonts";
import Logo from "@/src/components/Auth/Logo";
import LoginProviders from "@/src/components/Auth/LoginProviders";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Backdrop />
      <main className="flex flex-col items-center min-h-screen justify-center">
        <div className={arcade.className}>
          <Logo />
        </div>
        <div className="flex flex-col items-center">
          <LoginProviders />
          {children}
        </div>
      </main>
    </>
  );
};

export default AuthLayout;

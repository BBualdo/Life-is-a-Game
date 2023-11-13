import Backdrop from "@/app/components/Auth/Backdrop";
import { arcade } from "../components/fonts";
import Logo from "@/app/components/Auth/Logo";
import LoginProviders from "@/app/components/Auth/LoginProviders";

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

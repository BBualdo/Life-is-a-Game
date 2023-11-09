import Backdrop from "../_components/Login/Backdrop";
import LoginProviders from "../_components/Login/LoginProviders";
import Logo from "../_components/Login/Logo";
import { arcade } from "../layout";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Backdrop />
      <div className="flex flex-col items-center min-h-screen justify-center">
        <div className={arcade.className}>
          <Logo />
        </div>
        <div className="flex flex-col items-center">
          <LoginProviders />
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;

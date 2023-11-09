import Logo from "../../components/Login/Logo";
import { arcade } from "../../layout";
import Backdrop from "./Backdrop";
import LoginForm from "./LoginForm";
import LoginProviders from "./LoginProviders";

const Login = () => {
  return (
    <>
      <Backdrop />
      <div className="flex flex-col items-center min-h-screen justify-center">
        <div className={arcade.className}>
          <Logo />
        </div>
        <div className="flex flex-col items-center">
          <LoginProviders />
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;

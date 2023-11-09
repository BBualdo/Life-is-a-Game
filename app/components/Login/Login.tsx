import Logo from "../../components/Login/Logo";
import { arcade } from "../../layout";
import Backdrop from "./Backdrop";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <Backdrop />
      <div className="flex flex-col items-center min-h-screen justify-center gap-4">
        <div className={arcade.className}>
          <Logo />
        </div>
        <LoginForm />
      </div>
    </>
  );
};

export default Login;

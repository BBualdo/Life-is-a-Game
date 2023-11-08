import Logo from "../../components/Login/Logo";
import { arcade } from "../../layout";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <div
        aria-hidden
        className="bg-black fixed top-0 bottom-0 w-full bg-rog bg-no-repeat bg-center min-h-screen"
      />
      <div className="flex flex-col items-center min-h-screen justify-center gap-4 backdrop-blur-sm">
        <div className={arcade.className}>
          <Logo />
        </div>
        <LoginForm />

        <button className="btn btn-cyan hover:btn-red">Create account</button>
      </div>
    </>
  );
};

export default Login;

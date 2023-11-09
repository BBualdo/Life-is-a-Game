import Home from "./_components/Home/Home";

export default function Dashboard() {
  return (
    // if user is not verified redirect to /login
    // if user is verified redirect to /home or sth
    <Home />
  );
}

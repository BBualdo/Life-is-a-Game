const Home = () => {
  const logout = () => {};

  return (
    <main
      className={`flex flex-col gap-8 items-center justify-center min-h-screen`}
    >
      <div className="text-white text-2xl">
        Signed in successfully! Welcome{" "}
        <span className="text-cp-cyan">Username</span>!
      </div>
      <button className="btn btn-red hover:bg-cp-red/30">Logout</button>
    </main>
  );
};

export default Home;

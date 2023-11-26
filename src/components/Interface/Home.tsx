const Home = () => {
  return (
    <main className="flex flex-col gap-8 items-center justify-center min-h-screen">
      <div className="text-white text-2xl">
        Signed in successfully! Welcome
        <span className="text-cp-cyan"> {"{Username}"}</span>!
      </div>
    </main>
  );
};

export default Home;

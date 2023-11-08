export default function Home() {
  return (
    <>
      <div
        aria-hidden
        className="bg-black fixed top-0 bottom-0 w-full bg-rog bg-no-repeat bg-center min-h-screen"
      />
      <div className="flex flex-col items-center min-h-screen justify-center gap-4 backdrop-blur-sm transition-all duration-1000">
        <button className="btn btn-cyan hover:btn-red">Log in</button>
        <button className="btn btn-cyan hover:btn-red">Create account</button>
      </div>
    </>
  );
}

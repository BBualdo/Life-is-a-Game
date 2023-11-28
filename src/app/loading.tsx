"use client";

import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <ReactLoading type="bars" color="#ef4444" height={100} width={70} />
      <h2 className="text-cp-red text-2xl uppercase">Hacking...</h2>
    </div>
  );
}

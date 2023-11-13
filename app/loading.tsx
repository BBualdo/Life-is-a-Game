"use client";

import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ReactLoading type="bars" color="#ef4444" height={100} width={70} />
    </div>
  );
}

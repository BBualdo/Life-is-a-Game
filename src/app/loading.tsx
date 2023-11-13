"use client";

import ReactLoading from "react-loading";

type LoadingType = {
  type:
    | "blank"
    | "balls"
    | "bars"
    | "bubbles"
    | "cubes"
    | "cylon"
    | "spin"
    | "spinningBubbles"
    | "spokes";
  color: string;
};

export default function Loading({ type, color }: LoadingType) {
  return <ReactLoading type={type} color={color} height={100} width={70} />;
}

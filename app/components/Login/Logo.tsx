"use client";

import { TypeAnimation } from "react-type-animation";

const Logo = () => {
  return (
    <div className="h-[132px] flex flex-col text-white text-2xl">
      <div>
        <span aria-hidden className="text-cp-cyan">
          L
        </span>
        <TypeAnimation
          aria-hidden
          sequence={[500, "ife"]}
          style={{
            whiteSpace: "pre-line",
          }}
          cursor={false}
        />
      </div>
      <div>
        <span aria-hidden className="text-cp-cyan">
          I
        </span>
        <TypeAnimation
          aria-hidden
          sequence={[1000, "s"]}
          style={{
            whiteSpace: "pre-line",
          }}
          cursor={false}
        />
      </div>
      <div>
        <span aria-hidden className="text-cp-cyan">
          A
        </span>
      </div>
      <div>
        <span aria-hidden className="text-cp-cyan">
          G
        </span>
        <TypeAnimation
          aria-hidden
          sequence={[1500, "ame"]}
          style={{
            whiteSpace: "pre-line",
          }}
          cursor={false}
        />
      </div>
    </div>
  );
};

export default Logo;

"use client";

import { TypeAnimation } from "react-type-animation";

const Logo = () => {
  return (
    <div className="h-[200px] flex flex-col text-white text-2xl">
      <div>
        <span className="text-cp-cyan">L</span>
        <TypeAnimation
          sequence={[500, "ife"]}
          style={{
            whiteSpace: "pre-line",
          }}
          cursor={false}
        />
      </div>
      <div>
        <span className="text-cp-cyan">I</span>
        <TypeAnimation
          sequence={[1000, "s"]}
          style={{
            whiteSpace: "pre-line",
          }}
          cursor={false}
        />
      </div>
      <div>
        <span className="text-cp-cyan">A</span>
      </div>
      <div>
        <span className="text-cp-cyan">G</span>
        <TypeAnimation
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

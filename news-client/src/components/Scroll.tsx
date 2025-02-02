import React, { JSX, useState } from "react";

export default function Scroll({ children }: { children: JSX.Element[] }) {
  const [scrollAmount, setScrollAmount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center h-full overflow-hidden">
      <button className="w-4 h-4">v</button>
      <div
        className="w-card h-card relative"
        style={{ transform: `translateY(-${scrollAmount * 40}rem)` }}
      >
        {children.map((child, i) => (
          <div className="absolute left-0" style={{ top: `${i * 40}rem` }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

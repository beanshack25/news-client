import React, { JSX, useCallback, useState } from "react";
import ScrollButton from "./ScrollButton.tsx";

export default function Scroll({ children }: { children: JSX.Element[] }) {
  const [scrollAmount, setScrollAmount] = useState(0);

  const scrollUp = useCallback(() => {
    setScrollAmount((prev) => Math.max(prev - 1, 0));
  }, []);

  const scrollDown = useCallback(() => {
    setScrollAmount((prev) => Math.min(prev + 1, children.length - 1));
  }, [children]);

  return (
    <div className="flex flex-col justify-center items-center h-full overflow-hidden gap-10">
      <div className="z-10 h-12">
        {scrollAmount !== 0 && (
          <ScrollButton icon="keyboard_arrow_up" onClick={scrollUp} />
        )}
      </div>
      <div
        className="w-card h-card relative transition-transform duration-300"
        style={{ transform: `translateY(-${scrollAmount * 40}rem)` }}
      >
        {children.map((child, i) => (
          <div className="absolute left-0" style={{ top: `${i * 40}rem` }}>
            {child}
          </div>
        ))}
      </div>
      <div className="z-10 h-12">
        {scrollAmount !== children.length - 1 && (
          <ScrollButton icon="keyboard_arrow_down" onClick={scrollDown} />
        )}
      </div>
    </div>
  );
}

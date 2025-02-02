import React from "react";

export default function Flashcard({
  title,
  content,
  link,
}: {
  title: string;
  content: string;
  link: string;
}) {
  return (
    <div className="flex flex-col bg-slate-100 rounded-xl p-8 w-card h-card shadow-lg">
      <h1 className="text-2xl font-semibold mb-5">{title}</h1>
      <div className="relative flex-1 overflow-y-hidden">
        {content.split("\n").map((i) => (
          <p className="mb-2">{i}</p>
        ))}
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b from-transparent to-slate-100"></div>
      </div>
      <div className="flex justify-between mt-2">
        <a className="cursor-pointer bg-slate-400 rounded-lg py-1.5 px-6 text-white font-semibold">
          View Article
        </a>
        <a className="cursor-pointer bg-sky-500 rounded-lg py-1.5 px-6 text-white font-semibold">
          Causalitree {">"}
        </a>
      </div>
    </div>
  );
}

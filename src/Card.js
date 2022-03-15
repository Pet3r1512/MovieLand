import React from "react";

export default function Card({ movie }) {
  return (
    <div className="card bg-white text-black pb-4 rounded-2xl max-w-[300px]">
      <div className="w-full">
        <img
          src={
            movie.Poster !== "N/A" ? movie.Poster : "http://placeholder.com/400"
          }
          alt={movie.Title}
          className="rounded-2xl mx-auto w-full min-h-[500px]"
        />
        <h3 className="text-lg font-bold px-2">{movie.Title}</h3>
      </div>
      <div className="">
        <p className="text-lg font-semibold">{movie.Year}</p>
      </div>
    </div>
  );
}

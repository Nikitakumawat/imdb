import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <Link href={`/movie/${result.id}`}>
      <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="loading.svg"
          alt="image is not available"
          style={{ maxWidth: "100%", height: "auto" }}
        ></Image>
        <div>
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="truncate font-bold text-center">
            {result.title || result.name}
          </h2>
          <p className="flex justify-between">
            {result.release_date || result.first_air_date}{" "}
            <div className="flex">
              <FiThumbsUp className="h-5 mr-1" />
              {result.vote_count}
            </div>
          </p>
        </div>
      </div>
    </Link>
  );
}

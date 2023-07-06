import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import React from "react";

export const Search = ({apiPath}) => {
  const [search] = useSearchParams();
  const queryTerm = search.get('q');

  const {data: movies} = useFetch(apiPath,queryTerm);

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length===0 ? `No results found for '${queryTerm}'`: `Results for '${queryTerm}'`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {movies.map((movie)=>(
            <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

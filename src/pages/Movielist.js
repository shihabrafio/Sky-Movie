import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const Movielist = () => {
  const [movies,setMovies]= useState([])
  useEffect(()=>{
    const fetchMovie = async ()=>{
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=fb83108cad3d591712cb684e129f8732&language=en-US&page=1");
      const data = await response.json()
      setMovies(data.results)
    }
    fetchMovie();
  },[])
  return (
    <main>
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
};

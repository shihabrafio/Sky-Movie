import { Routes,Route } from "react-router-dom";
import { MovieDetail } from "../pages/MovieDetail";
import { Movielist } from "../pages/Movielist";
import { Search } from "../pages/Search";
import { PageNotFound } from "../pages/PageNotFound";


export const Allroutes = () => {
  return (
    <div className="dark:bg-slate-800">
    <Routes>
        <Route path="/" element={<Movielist apiPath="movie/now_playing"/>}  />
        <Route path="movie/:id" element={<MovieDetail/>} />
        <Route path="movies/popular" element={<Movielist apiPath="movie/popular"/>} />
        <Route path="movies/upcoming" element={<Movielist apiPath="movie/upcoming"/>}  />
        <Route path="movies/top" element={<Movielist apiPath="movie/top_rated"/>}  />
        <Route path="search" element={<Search apiPath="search/movie"/>} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
    </div>
  )
}

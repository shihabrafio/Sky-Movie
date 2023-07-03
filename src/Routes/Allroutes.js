import { Routes,Route } from "react-router-dom";
import { MovieDetail } from "../pages/MovieDetail";
import { Movielist } from "../pages/Movielist";
import { Search } from "../pages/Search";
import { PageNotFound } from "../pages/PageNotFound";


export const Allroutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Movielist/>} />
        <Route path="movie/:id" element={<MovieDetail/>} />
        <Route path="movies/popular" element={<Movielist/>} />
        <Route path="movies/upcoming" element={<Movielist/>} />
        <Route path="movies/top" element={<Movielist/>} />
        <Route path="search" element={<Search/>} />
        <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </>
  )
}

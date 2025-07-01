import { Route,Routes } from "react-router-dom"
import { MovieDetail,MovieList,Search,PageNotFound } from "../pages/index"

export const  AllRoutes= () => {
  return (
    <>
    <div className="dark:bg-slate-800">
      <Routes>
        <Route path="" element={<MovieList/>} ></Route>
        <Route path="movie/:id" element={<MovieDetail/>} ></Route>
        <Route path="movies/popular" element={<MovieDetail/>} ></Route>
        <Route path="movies/top" element={<MovieDetail/>} ></Route>
        <Route path="movies/upcoming" element={<MovieDetail/>} ></Route>
        <Route path="Search" element={<Search/>} ></Route>
        <Route path="*" element={<PageNotFound/>} ></Route>
      </Routes>
    </div>
    </>
  )
}

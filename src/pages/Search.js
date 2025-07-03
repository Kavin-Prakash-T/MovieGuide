import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import {Card} from "../components";

export const Search = ({apiPath}) => {
const [searchParams]=useSearchParams();
const queryTerm=searchParams.get("q");

 const {data:movies}=useFetch(apiPath,queryTerm);

  return (
     <main>

      <section className="max-w-7xl mx-auto py-7">
        <p className="text-3xl text-gray-700 dark:text-white pb-7">{movies.length===0?`No results found for '${queryTerm}'`:`Result for '${queryTerm}'`}</p>

        <div className="flex justify-start flex-wrap">

          {movies.map((movie)=>(
          <Card key={movie.id} movie={movie}/>
          ))}


        </div>
      </section>
    </main>
  );
}

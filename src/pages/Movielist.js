import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const Movielist = ({apiPath}) => {
  const {data: movies} = useFetch(apiPath)

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

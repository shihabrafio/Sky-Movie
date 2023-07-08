import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const Movielist = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  useTitle(title);

  if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

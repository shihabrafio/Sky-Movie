import { Card } from "../components/Card";

export const Movielist = () => {
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </main>
  );
};

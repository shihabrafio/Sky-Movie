import { Card } from "../components/Card";

export const Movielist = () => {
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-start">
          <Card/>
          <Card/>
          <Card/>
        </div>
      </section>
    </main>
  );
};

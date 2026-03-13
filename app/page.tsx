import Hero from "./components/hero";
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Hero texto="Breath, respirar" />
      <Hero texto="este es otro" />
      <Hero texto="esto de nuevo" />
    </main>
  );
}
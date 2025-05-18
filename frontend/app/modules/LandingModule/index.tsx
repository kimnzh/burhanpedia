export default function LandingModule() {
  return (
    <main className="min-h-screen w-full flex max-md:flex-col justify-center items-center text-blue bg-white font-ubuntu font-bold text-6xl gap-8">
      <img src="/burhanpedia.webp" alt="logo" className="w-32" />
      <div className="flex flex-col items-center">
        <h1>
          burhan<span className="text-red">pedia</span>
        </h1>
        <p className="text-4xl text-black">is cooking!</p>
      </div>
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
        <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-2">Hengyi Li Photography</h1>
      <p className="text-gray-400 mb-10">A visual journey through light, silence, and geometry.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="/images/photo1.jpg" className="rounded-xl shadow-lg" alt="Photo 1" />
        <img src="/images/photo2.jpg" className="rounded-xl shadow-lg" alt="Photo 2" />
        <img src="/images/photo3.jpg" className="rounded-xl shadow-lg" alt="Photo 3" />
      </div>
    </main>
  );
}

import Image from 'next/image';

const skills = [
  { name: 'Next.js', icon: '/stack/nextjs.png' },
  { name: 'Tailwind CSS', icon: '/stack/tailwind.png' },
  { name: 'React', icon: '/stack/react.png' },
  { name: 'TypeScript', icon: '/stack/typescript.png' },
  { name: 'GitHub Pages', icon: '/stack/github.png' },
];

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow-md">
        <div className="text-2xl font-bold">HENGYI LI</div>
        <ul className="flex space-x-6 text-sm font-medium">
          <li>Home</li>
          <li className="text-gray-700">Projects</li>
          <li>Photography</li>
          <li>About me</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center p-12">
        <Image
          src="/images/hero.jpg"
          alt="hero"
          width={960}
          height={540}
          className="rounded-xl shadow-lg"
        />
        <p className="mt-4 text-gray-600 italic">Hope I can be a bridge between you and nature.</p>
      </section>

      {/* Tech Stack Gallery */}
      <section className="bg-gray-50 py-10">
        <h2 className="text-2xl font-semibold text-center mb-6">My Tech Stack</h2>
        <div className="overflow-x-auto whitespace-nowrap px-6">
          <div className="flex space-x-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="w-48 flex-shrink-0 bg-white rounded-xl shadow p-4 flex flex-col items-center hover:scale-105 transition"
              >
                <img src={skill.icon} alt={skill.name} className="h-16 w-16 object-contain mb-2" />
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

"use client"; // if you're using app/ directory in Next.js 13+
import Image from 'next/image';
import { TechStackSection } from '@/components/techStack';
import { NavBar } from '@/components/NavBar';
import { ProjectsSection } from '@/components/Projects'
import { AboutMe } from '@/components/About';
import { ContactFooter } from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-white text-gray-900 pt-24">
      {/* Navbar */ }
      { NavBar() }

      <div id="top" />

      {/* Hero Section */}
      <section className="flex flex-col items-center p-12">
        <Image
          src="/images/hero.jpg"
          alt="hero"
          width={1366}
          height={768}
          className="rounded-xl shadow-lg"
        />
        <p className="mt-4 text-gray-600 italic">Some roads are drawn on maps. Others are drawn in will.</p>
      </section>

      {/* Tech Stack Gallery */}
      { TechStackSection() }

      {/* Projects section */ }
      { ProjectsSection() }

      {/* About me section */ }
      { AboutMe() }

      {/* Contact */ }
      {ContactFooter()}
    </main>
  );
}

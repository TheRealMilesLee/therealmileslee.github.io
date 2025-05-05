"use client";

import { Link } from "lucide-react";
import Image from 'next/image';

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/70 backdrop-blur-md shadow-md flex justify-between items-center px-6 py-4">
      <div className="flex items-center space-x-3">
        <Image
          src="/images/avatar.jpg"
          alt="My Logo"
          className="w-10 h-10 rounded-full border border-gray-300 shadow"
        />
        <h1 className="text-2xl font-bold text-white">Hengyi Li</h1>
      </div>
      <ul className="flex space-x-6 text-sm font-medium text-gray-200">
        <li><Link href="/" className="hover:text-white">Home</Link></li>
        <li><Link href="/#projects" className="hover:text-white">Projects</Link></li>
        <li><Link href="/photography" className="hover:text-white">Photography</Link></li>
        <li><Link href="/#about" className="hover:text-white">About me</Link></li>
        <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
      </ul>
    </nav>
  );
}

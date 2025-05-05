// app/photography/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Dialog, DialogContent } from "@/components/ui/dialog";
// app/photography/page.tsx
import images from '../../../imageList.json'; // 注意路径


export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md text-white flex justify-between items-center p-6">
      <div className="flex items-center space-x-3">
        <img
          src="/images/avatar.jpg"
          alt="My Logo"
          className="w-10 h-10 rounded-full border border-gray-700"
        />
        <h1 className="text-2xl font-bold">Hengyi Li</h1>
      </div>
      <ul className="flex space-x-6 text-sm">
        <li><a href="/" className="hover:text-gray-300">Home</a></li>
        <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
        <li><Link href="/photography" className="hover:text-gray-300">Photography</Link></li>
        <li><a href="#about" className="hover:text-gray-300">About me</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  );
}

export default function PhotographyPage() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <NavBar />

      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center">
        {/* 大图展示区 */}
        <div className="w-full mb-8">
          <img
            src={images[current]}
            alt={`Photo ${current + 1}`}
            className="w-full h-auto object-contain rounded-lg shadow-xl"
          />
        </div>

        {/* 缩略图栏 */}
        <div className="w-full overflow-x-auto scrollbar-none">
          <div className="flex space-x-4 pb-2">
            {images.map((src, idx) => (
              <div
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`flex-shrink-0 w-24 h-16 rounded-md overflow-hidden cursor-pointer transition-transform ${
                  idx === current ? "ring-2 ring-white" : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={src}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

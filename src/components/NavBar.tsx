"use client"; // if you're using app/ directory in Next.js 13+
import Link from "next/link";
import Image from "next/image";
export function NavBar()
{
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/55 backdrop-blur-xl shadow-md flex justify-between items-center p-6">
      <div className="flex items-center space-x-3">
        <Image
          src="/images/avatar.jpg"
          alt="My Logo"
          className="w-10 h-10 rounded-full border border-gray-300 shadow"
        />
        <h1 className="text-2xl font-bold">Hengyi Li</h1>
      </div>
      <ul className="flex space-x-6 text-sm font-medium">
        {/* 滑到顶部 */}
        <li>
          <a href="#top" className="hover:text-gray-900">
            Home
          </a>
        </li>

        {/* 滑到 Projects 区块 */}
        <li>
          <a href="#projects" className="hover:text-gray-900">
            Projects
          </a>
        </li>

        {/* 跳转到摄影页 */}
        <li>
          <Link href="/photography" className="hover:text-gray-900">
            Photography
          </Link>
        </li>

        {/* 滑到 About me 区块 */}
        <li>
          <a href="#about" className="hover:text-gray-900">
            About me
          </a>
        </li>

        {/* 滑到 Contact 区块 */}
        <li>
          <a href="#contact" className="hover:text-gray-900">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

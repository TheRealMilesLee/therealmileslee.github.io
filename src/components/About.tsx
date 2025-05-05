"use client"; // if you're using app/ directory in Next.js 13+
import Image from 'next/image';
import { useEffect, useRef } from "react";
import {
  SiPython, SiCplusplus, SiJavascript, SiGo, SiGnubash, SiMysql,
  SiDocker, SiKubernetes, SiJenkins, SiLinux, SiApple,
  SiGithubactions, SiGitlab, SiAnsible, SiMongodb, SiPostgresql,
  SiNodedotjs, SiReact, SiD3Dotjs, SiSwift, SiJirasoftware, SiConfluence
} from 'react-icons/si';
import { IoLogoWechat } from "react-icons/io5";
import Link from "next/link";

export function AboutMe()
{
  return (
    <section id='about' className="py-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Avatar */}
        <div className="flex justify-center">
          <img
            src="/images/hengyi-avatar.jpg"
            alt="Hengyi Li"
            className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full shadow-xl"
          />
        </div>

        {/* Right: Profile Info */}
        <div>
          <h1 className="text-4xl font-bold mb-2">Hengyi Li</h1>

          {/* Summary */}
          <div className="mt-6 text-sm text-gray-800 leading-relaxed">
            <p>
              DevOps Engineer and Software Developer with expertise in CI/CD pipeline optimization,
              containerization (Docker, Kubernetes), and system administration. Skilled in Python,
              Bash, and JavaScript development with experience in automating infrastructure and
              implementing high-availability solutions. Proven track record of reducing deployment
              times by 80% and ensuring 99.9% service uptime through robust system architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

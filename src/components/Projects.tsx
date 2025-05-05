"use client"; // if you're using app/ directory in Next.js 13+

import { SiPython, SiDocker, SiNodedotjs, SiSwift} from 'react-icons/si';
import { IoLogoWechat } from "react-icons/io5";
import Link from "next/link";

type Project = {
  title: string;
  href: string;
  date: string;
  bullets: string[];
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

const projects: Project[] = [
  {
    title: "Used Car Picker Web Application",
    href: "https://github.com/TheRealMilesLee/ECS272-FinalProject",
    date: "Oct. 2024 – Dec. 2024",
    bullets: [
      "Developed full‑stack web app with Node.js, MongoDB & D3.js to visualize 5,000+ vehicle records.",
      "Built RESTful API with optimized MongoDB queries & Redis caching, reducing response time from 2–3s to <200ms.",
      "Designed responsive UI with interactive filters and price‑tracking algorithms for vehicles 15% below market value.",
      "Implemented error handling & data validation, cutting crashes and improving UX with clear feedback.",
    ],
    Icon: SiNodedotjs,
  },
  {
    title: "GFW Research (Master’s Thesis)",
    href: "https://github.com/TheRealMilesLee/GFW-Research",
    date: "Sep. 2023 – Present",
    bullets: [
      "Analyzed China’s Internet censorship using custom Python tools & network analysis across millions of users.",
      "Built Docker‑based distributed probing infrastructure for 10,000+ domains, collecting 500 GB+ of traffic.",
      "Quantified censorship trends via DNS errors, IP patterns & packet inspection to map filtering nodes.",
      "Explored socio‑political impacts of “information cocoons”, contributing to academic discourse on free flow of knowledge.",
    ],
    Icon: SiPython,
  },
  {
    title: "macOS Music Player",
    href: "https://github.com/TheRealMilesLee/MusicPlayer-macOS",
    date: "Jan. 2023 – May. 2023",
    bullets: [
      "Built native SwiftUI app with Core Audio for lossless playback and custom UI components.",
      "Trained CoreML model for personalized playlists (65% → 85% relevance) using collaborative filtering.",
      "Achieved 90% test coverage with XCTest and GitHub Actions CI/CD, reducing integration issues by 70%.",
      "Optimized audio pipeline to cut CPU usage by 40%, extending battery life on older Macs.",
      "Published DocC docs & user guides; community contributed 5+ plugins without altering core code.",
    ],
    Icon: SiSwift,
  },
  {
    title: "ML‑Powered Email Security Extension",
    href: "https://github.com/TheRealMilesLee/SpamFilter",
    date: "Aug. 2022 – Dec. 2022",
    bullets: [
      "Built Chrome extension with JS frontend & Python (scikit‑learn) backend for phishing detection.",
      "Extracted 15 key features; ML pipeline achieved 92% accuracy vs. 75% default filters.",
      "Reduced inference time from 800 ms to 150 ms per email, enabling real‑time protection.",
      "Secured API communication with auth & encryption, protecting user content.",
      "User testing with 50 participants; UI improvements cut false positives by 60%.",
    ],
    Icon: SiPython,
  },
  {
    title: "WeChat Admissions MiniProgram",
    href: "https://github.com/The-Fabulous-Truman-Developer/WechatDeveloper",
    date: "Aug. 2021 – May. 2023",
    bullets: [
      "Built WeChat MiniProgram (WXSS/WXML + Node.js & MongoDB) for international student recruitment.",
      "Implemented secure auth & RESTful backend; grew to 1,000+ DAU despite time‑zone differences.",
      "Applied agile sprints; delivered 35+ feature requests based on stakeholder feedback.",
      "Developed analytics dashboard for admissions staff, increasing conversion rates by 24%.",
      "Trained staff & handed over detailed docs, ensuring sustainable platform maintenance.",
    ],
    Icon: IoLogoWechat,
  },
  {
    title: "Home Datacenter Project",
    href: "https://github.com/TheRealMilesLee/ContainerizedEnvironment",
    date: "Jun 2023 - Aug 2023",
    bullets: [
      "Deployed Proxmox VE virtualization on underutilized hardware, consolidating 5 critical VMs (3 Windows, 2 Linux) and saving ¥50,000 in hardware costs by eliminating physical servers.",
      "Built Docker Compose-based dev environment on Ubuntu with Ollama AI, Nginx, GitLab, NAS, and proxies. Automated setup reduced deployment time from 3 days to 30 minutes.",
      "Implemented CI/CD with Jenkins, GitLab CI, and GitHub Actions, synchronizing code between internal and external repos, reducing integration delays and merge conflicts by 75%.",
      "Configured network security with firewall rules and proxies for secure file sharing and remote access, achieving successful ISO 27001 audit.",
      "Standardized dev environment with VM templates and automated bootstrapping, reducing developer onboarding time from 5 days to 2 days (60% faster).",
    ],
    Icon:SiDocker
  }
];


export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, href, date, bullets, Icon }) => (
          <div
            key={title}
            className="relative bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            {/* 右上角图标 */}
            <div className="absolute top-4 right-4 text-gray-500">
              <Icon size={24} />
            </div>

            {/* 标题 & 日期 */}
            <h3 className="text-xl font-bold mb-1">
              <Link href={href} target="_blank" className="hover:underline">
                {title}
              </Link>
            </h3>
            <p className="text-sm text-gray-600 mb-4">{date}</p>

            {/* 要点列表 */}
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
              {bullets.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

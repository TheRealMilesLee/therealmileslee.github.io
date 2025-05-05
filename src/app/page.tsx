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
import { Mail, Phone, Linkedin, Github } from "lucide-react";
const skills = [
  { name: "Python", icon: SiPython },
  { name: "C++", icon: SiCplusplus },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Go", icon: SiGo },
  { name: "Bash", icon: SiGnubash },
  { name: "MySQL", icon: SiMysql },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Jenkins", icon: SiJenkins },
  { name: "Linux", icon: SiLinux },
  { name: "Apple MDM", icon: SiApple },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "GitLab CI", icon: SiGitlab },
  { name: "Ansible", icon: SiAnsible },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "React.js", icon: SiReact },
  { name: "D3.js", icon: SiD3Dotjs },
  { name: "SwiftUI", icon: SiSwift },
  { name: "Jira", icon: SiJirasoftware },
  { name: "Confluence", icon: SiConfluence },
];
type Project = {
  title: string;
  href: string;
  date: string;
  bullets: string[];
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};
export function TechStackSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollSpeed = 1; // px per tick
    let intervalId: NodeJS.Timeout;

    const startScroll = () => {
      intervalId = setInterval(() => {
        if (!scrollContainer) return;
        scrollContainer.scrollLeft += scrollSpeed;
        // reset to start for infinite effect
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }, 20); // control smoothness
    };

    startScroll();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="bg-gray-50 py-10">
      <h2 className="text-2xl font-semibold text-center mb-6">My Tech Stack</h2>
      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap px-6 scrollbar-hide"
      >
        <div className="flex space-x-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="w-48 flex-shrink-0 bg-white rounded-xl shadow p-4 flex flex-col items-center hover:scale-105 transition"
            >
              <skill.icon size={48} className="mb-2 text-gray-700" />
              <p className="text-sm font-medium text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/55 backdrop-blur-xl shadow-md flex justify-between items-center p-6">
      <div className="flex items-center space-x-3">
        <img
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


export function AboutMe() {
  return (
    <section className="py-12 px-6 bg-white">
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
          <div className="space-y-1 text-gray-700 text-sm">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:trdli@ucdavis.edu" className="hover:underline">
                trdli@ucdavis.edu
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (816) 541-9947 / +86 17158324710</span>
            </div>
            <div className="flex items-center space-x-2">
              <Linkedin className="w-4 h-4" />
              <a
                href="https://linkedin.com/in/hengyi-li-968744191/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/hengyi-li-968744191/
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Github className="w-4 h-4" />
              <a
                href="https://github.com/TheRealMilesLee"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/TheRealMilesLee
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-6 text-sm text-gray-800 leading-relaxed">
            <p className="font-semibold mb-2">PROFESSIONAL SUMMARY</p>
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
      {AboutMe()}
    </main>
  );
}

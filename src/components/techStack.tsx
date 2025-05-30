"use client"; // if you're using app/ directory in Next.js 13+
import { useEffect, useRef } from "react";
import {
  SiPython, SiCplusplus, SiJavascript, SiGo, SiGnubash, SiMysql,
  SiDocker, SiKubernetes, SiJenkins, SiLinux, SiApple,
  SiGithubactions, SiGitlab, SiAnsible, SiMongodb, SiPostgresql,
  SiNodedotjs, SiReact, SiD3Dotjs, SiSwift, SiJirasoftware, SiConfluence
} from 'react-icons/si';
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
export function TechStackSection()
{
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 1; // px per tick
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

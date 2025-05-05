"use client"; // if you're using app/ directory in Next.js 13+
import { Mail, Phone, Linkedin, Github } from "lucide-react";
export function ContactFooter()
{
  return (
    <footer id='contact' className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-10 text-sm text-gray-700">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Hengyi Li</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-center space-y-4 md:space-y-0">
          {/* Left: Contact Info */}
          <div className="space-y-1 text-sm">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gray-500" />
              <a href="mailto:trdli@ucdavis.edu" className="hover:underline">
                trdli@ucdavis.edu
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gray-500" />
              <span>+1 (816) 541-9947 / +86 17158324710</span>
            </div>
          </div>

          {/* Right: Social Links */}
          <div className="space-y-1 text-sm">
            <div className="flex items-center space-x-2">
              <Linkedin className="w-4 h-4 text-gray-500" />
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
              <Github className="w-4 h-4 text-gray-500" />
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
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gray-200" />

        {/* Optional signature or note */}
        <div className="text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Hengyi Li. Designed with intention.
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { Facebook, Globe, Mail, Phone } from 'lucide-react';
import logoImg from '../assets/athu.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b2818] text-green-50 py-12 sm:py-16 px-4 sm:px-10 border-t-4 border-[#0a8c5e]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start">

        {/* Column 1: Brand Section */}
        <div className="md:col-span-5 space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <div className="bg-white p-1 rounded-full shadow-lg flex-shrink-0">
              <img
                src={logoImg}
                alt="Athukorala Group Logo"
                loading="lazy"
                decoding="async"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-contain"
              />
            </div>
            <h3 className="text-center sm:text-left md:text-left">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
                Athukorala Group
              </span>
              <span className="block text-white/80 font-normal text-base sm:text-lg mt-0.5">
                (Pvt) Ltd
              </span>
            </h3>
          </div>
          
          <p className="text-green-200/70 text-sm leading-relaxed max-w-sm px-2 sm:px-0">
            Producers of fine Ceylon tea. Dedicated to uncompromised quality, sustainability, and bringing the authentic taste of Sri Lanka to the world.
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div className="md:col-span-4 space-y-4 sm:space-y-6 text-center md:text-left w-full">
          <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-widest font-sans border-b border-green-800 pb-2 inline-block md:block">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start justify-center md:justify-start gap-3 text-green-200/80 hover:text-white transition-colors">
              <Phone size={18} className="text-[#0a8c5e] mt-0.5 shrink-0" />
              <span className="text-sm text-left leading-relaxed font-medium">
                091-229 1123 <br /> 091-779 1123
              </span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3 text-green-200/80 hover:text-white transition-colors">
              <Mail size={18} className="text-[#0a8c5e] shrink-0" />
              <a href="mailto:atf@athukoralagroup.com" className="text-sm font-medium hover:underline decoration-[#0a8c5e] underline-offset-4 transition-all overflow-hidden text-ellipsis">
                atf@athukoralagroup.com
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Connect / Socials */}
        <div className="md:col-span-3 space-y-4 sm:space-y-6 text-center md:text-left w-full">
          <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-widest font-sans border-b border-green-800 pb-2 inline-block md:block">
            Connect
          </h4>
          <ul className="space-y-4">
            <li className="flex items-center justify-center md:justify-start gap-3 text-green-200/80 hover:text-white transition-colors group">
              <Globe size={18} className="text-[#0a8c5e] group-hover:text-lime-400 transition-colors shrink-0" />
              <a
                href="http://www.athukoralagroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium group-hover:underline decoration-lime-400 underline-offset-4 transition-all"
              >
                athukoralagroup.com
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3 text-green-200/80 hover:text-white transition-colors group">
              <Facebook size={18} className="text-[#0a8c5e] group-hover:text-lime-400 transition-colors shrink-0" />
              <a
                href="https://web.facebook.com/athukorala.tea.1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium group-hover:underline decoration-lime-400 underline-offset-4 transition-all"
              >
                Athukorala Tea
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom / Legal */}
      <div className="max-w-7xl mx-auto mt-10 sm:mt-16 pt-6 border-t border-green-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-green-200/50 text-[11px] sm:text-xs text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} Athukorala Group (Pvt) Ltd. All rights reserved.</p>
        <div className="flex gap-4 sm:gap-6 font-medium">
          <button className="hover:text-green-200 transition-colors uppercase tracking-wider">
            Privacy Policy
          </button>
          <button className="hover:text-green-200 transition-colors uppercase tracking-wider">
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  );
};
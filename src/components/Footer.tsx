import React from 'react';
import { Facebook, Globe, Mail, Phone } from 'lucide-react';
import logoImg from '../assets/athu.png';

export const Footer: React.FC = () => {

  return (
    <footer className="bg-emerald-950 text-white py-10 px-6 sm:px-10 backdrop-blur-lg shadow-inner shadow-green-800/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start border-t border-green-700/40 pt-10">

        {/* Logo & Title */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-center sm:text-left">
          <img
            src={logoImg}
            alt="Logo"
            decoding="async"
            className="w-16 h-16 mx-auto sm:mx-0 rounded-full border-4 border-white/30 shadow-lg object-contain"
          />
          <span className="text-2xl font-extrabold bg-gradient-to-r from-lime-300 via-white to-lime-200 bg-clip-text text-transparent drop-shadow">
            Athukorala Group (Pvt) Ltd
          </span>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="flex justify-center sm:justify-start items-center gap-3">
            <Phone size={18} className="text-lime-300" />
            <span>091-229 1123 / 091-779 1123</span>
          </div>
          <div className="flex justify-center sm:justify-start items-center gap-3">
            <Mail size={18} className="text-lime-300" />
            <span>atf@athukoralagroup.com</span>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="flex justify-center sm:justify-start items-center gap-3 hover:scale-105 transition-transform text-lime-200">
            <Globe size={20} />
            <a
              href="http://www.athukoralagroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-dotted"
            >
              www.athukoralagroup.com
            </a>
          </div>
          <div className="flex justify-center sm:justify-start items-center gap-3 hover:scale-105 transition-transform text-lime-200">
            <Facebook size={20} />
            <a
              href="https://web.facebook.com/athukorala.tea.1"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-dotted"
            >
              Athukorala Tea
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-green-100/60 text-sm border-t border-green-700/40 pt-6">
        <p>&copy; {new Date().getFullYear()} Athukorala Tea Factory. All rights reserved.</p>
      </div>
    </footer>
  );
};

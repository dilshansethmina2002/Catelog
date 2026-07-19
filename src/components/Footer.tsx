import React from 'react';
import { Facebook, Globe, Mail, Phone, MapPin } from 'lucide-react';
import logoImg from '../assets/athu.png';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#050f08] border-t-4 border-[#0a8c5e]">
      
      {/* ========================================= */}
      {/* MOBILE VIEW (Hidden on Desktop/Tablet)    */}
      {/* ========================================= */}
      <div className="block md:hidden py-10 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          
          {/* Brand Section */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="bg-white p-1.5 rounded-full shadow-lg">
              <img
                src={logoImg}
                alt="Athukorala Group Logo"
                loading="lazy"
                className="w-14 h-14 rounded-full object-contain"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
              Athukorala Group <span className="text-green-400/80 text-lg font-medium block sm:inline">(PVT) LTD</span>
            </h3>
          </div>

          {/* Clickable Icons & Links Section */}
          <div className="flex flex-col items-center gap-5 w-full">
            
            {/* Circle Icons Row */}
            <div className="flex justify-center items-center gap-4 sm:gap-6">
              
              <a href="https://web.facebook.com/athukorala.tea.1" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#0a8c5e]/10 text-[#0a8c5e] rounded-full hover:bg-[#1877F2] hover:text-white transition-all duration-300" aria-label="Facebook">
                <Facebook size={22} />
              </a>
              <a href="https://wa.me/94772304946" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#0a8c5e]/10 text-[#0a8c5e] rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-300" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="tel:0912291123" className="p-3 bg-[#0a8c5e]/10 text-[#0a8c5e] rounded-full hover:bg-[#0a8c5e] hover:text-white transition-all duration-300" aria-label="Call Us">
                <Phone size={22} />
              </a>
              
              
            </div>

            {/* Email & Website with Text */}
            <div className="flex flex-col items-center gap-3 w-full mt-2">
              <a href="mailto:atf@athukoralagroup.com" className="flex items-center justify-center gap-3 w-[260px] px-5 py-3 bg-[#0a8c5e]/10 text-[#0a8c5e] rounded-full hover:bg-[#0a8c5e] hover:text-white transition-all duration-300">
                <Mail size={18} className="shrink-0" />
                <span className="text-sm font-medium tracking-wide">atf@athukoralagroup.com</span>
              </a>
              
              <a href="http://www.athukoralagroup.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-[260px] px-5 py-3 bg-[#0a8c5e]/10 text-[#0a8c5e] rounded-full hover:bg-lime-500 hover:text-white transition-all duration-300">
                <Globe size={18} className="shrink-0" />
                <span className="text-sm font-medium tracking-wide">athukoralagroup.com</span>
              </a>
            </div>

          </div>

          {/* Footer Bottom / Legal */}
          <div className="w-full mt-4 pt-6 border-t border-green-900/40 text-center text-green-200/40 text-xs">
            <p>&copy; {new Date().getFullYear()} Athukorala Group (PVT) LTD. {t.footer.rights}</p>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* DESKTOP VIEW (Hidden on Mobile)           */}
      {/* ========================================= */}
      <div className="hidden md:block text-green-50 py-16 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Column 1: Brand Section */}
          <div className="col-span-5 space-y-6 text-left flex flex-col items-start">
            <div className="flex flex-row items-center justify-start gap-4">
              <div className="bg-white p-1 rounded-full shadow-lg flex-shrink-0">
                <img
                  src={logoImg}
                  alt="Athukorala Group Logo"
                  loading="lazy"
                  decoding="async"
                  className="w-16 h-16 rounded-full object-contain"
                />
              </div>
              <h3 className="text-left">
                <span className="block text-3xl font-serif font-bold text-white tracking-wide">
                  Athukorala Group
                </span>
                <span className="block text-white/80 font-normal text-lg mt-0.5">
                  (PVT) LTD
                </span>
              </h3>
            </div>
            
            <p className="text-green-200/70 text-sm leading-relaxed max-w-sm px-0">
              {t.footer.description}
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="col-span-4 space-y-6 text-left w-full">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest font-sans border-b border-green-800 pb-2 block">
              {t.footer.contact}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start justify-start gap-3 text-green-200/80 hover:text-white transition-colors">
                <Phone size={18} className="text-[#0a8c5e] mt-0.5 shrink-0" />
                <span className="text-sm text-left leading-relaxed font-medium">
                  091-229 1123
                </span>
              </li>
              <li className="flex items-center justify-start gap-3 text-green-200/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#0a8c5e] shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <a href="https://wa.me/94772304946" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline decoration-[#0a8c5e] underline-offset-4 transition-all">
                  +94 77 230 4946
                </a>
              </li>
              <li className="flex items-center justify-start gap-3 text-green-200/80 hover:text-white transition-colors">
                <Mail size={18} className="text-[#0a8c5e] shrink-0" />
                <a href="mailto:atf@athukoralagroup.com" className="text-sm font-medium hover:underline decoration-[#0a8c5e] underline-offset-4 transition-all break-all min-w-0">
                  atf@athukoralagroup.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect / Socials */}
          <div className="col-span-3 space-y-6 text-left w-full">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest font-sans border-b border-green-800 pb-2 block">
              {t.footer.connect}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center justify-start gap-3 text-green-200/80 hover:text-white transition-colors group">
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
              <li className="flex items-center justify-start gap-3 text-green-200/80 hover:text-white transition-colors group">
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
        <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-green-900/50 flex flex-row justify-between items-center gap-4 text-green-200/50 text-xs text-left">
          <p>&copy; {new Date().getFullYear()} Athukorala Group (PVT) LTD. {t.footer.rights}</p>
        </div>
      </div>
      
    </footer>
  );
};
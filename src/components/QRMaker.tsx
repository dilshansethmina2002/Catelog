import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import productsData from '../data/products.json'; // JSON ෆයිල් එක
import athuLogo from '../assets/athu.png'; // පින්තූරය තියෙන නිවැරදි පාර (Path) දෙන්න

export const QRMaker: React.FC = () => {
  // මේක ඔයාගේ වෙබ්සයිට් එක අන්තර්ජාලයට දැම්මට පස්සේ ලැබෙන නියම URL එකට වෙනස් කරන්න
  // දැනට ඔයාගේ පරිගණකයේ වැඩ කරන නිසා localhost දීලා තියෙනවා
  const BASE_URL = "http://localhost:5173"; 
  // උදා: const BASE_URL = "https://www.oyagesite.com";

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-emerald-900">
          Tea Products - QR Code Generator
        </h1>

        {/* QR කේත ටික පේළියට ලස්සනට පෙන්නන්න Grid එකක් */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {productsData.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center text-center border border-gray-200">
              
              {/* මෙතනින් තමයි අදාළ Product එකට යන ලින්ක් එක QR එක ඇතුළට දාන්නේ */}
              <QRCodeSVG
                value={`${BASE_URL}/product/${product.id}`}
                size={120}
                level={"H"} // Error correction level එක (Print කරාම කියවන්න ලේසි වෙන්න High දුන්නා)
                
                // ඔයාගේ කම්පැණි ලෝගෝ එකක් QR එක මැදට දාන්න ඕන නම් මේක පාවිච්චි කරන්න:
                imageSettings={{
                    src: athuLogo,
                    height: 34,
                    width: 34,
                    excavate: true,
                }}
              />
              
              <h3 className="mt-4 text-xs font-bold text-gray-800 line-clamp-2">
                {product.name}
              </h3>
              <p className="text-[10px] text-gray-400 mt-1 font-mono">
                {product.id}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
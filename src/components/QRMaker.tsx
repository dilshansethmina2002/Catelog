import React from 'react';
// ✅ QRCodeSVG වෙනුවට QRCodeCanvas භාවිතා කර ඇත
import { QRCodeCanvas } from 'qrcode.react';
import productsData from '../data/products.json';
import spicesData from '../data/spices.json';
import athuLogo from '../assets/athu.png';
import { useLanguage } from '../context/LanguageContext';
import { productTranslations } from '../data/productTranslations';

const spiceIds = new Set(spicesData.map((s) => s.id));
const allItems = [
  ...productsData,
  ...spicesData,
].sort((a, b) => a.name.localeCompare(b.name));

export const QRMaker: React.FC = () => {
  const BASE_URL = "http://localhost:5173";
  const { language } = useLanguage();

  // ✅ QR Code එක PNG පින්තූරයක් ලෙස Download කිරීමේ Function එක
  const downloadQR = (productId: string, imagePath: string) => {
    // Canvas element එක ලබා ගැනීම
    const canvas = document.getElementById(`qr-${productId}`) as HTMLCanvasElement;
    if (!canvas) return;

    // Canvas එකෙන් PNG URL එකක් සාදා ගැනීම
    const pngUrl = canvas.toDataURL("image/png");

    // Download Link එකක් සාදා එය Click කරවීම
    const link = document.createElement("a");
    link.href = pngUrl;
    // නම අගට .png යොදා ඇත
    const baseName = imagePath.split('/').pop()?.replace('.jpg', '') ?? productId;
    link.download = `${baseName}_QR.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 pt-[80px] lg:pt-[120px]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-emerald-900">
          Tea Products - QR Code Generator
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {allItems.map((product) => {
            const isSpice = spiceIds.has(product.id);
            const detailPath = isSpice ? 'spice' : 'product';
            return (
            <div key={product.id} className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center text-center border border-gray-200">

              {/* ✅ QRCodeCanvas බවට වෙනස් කර ඇත */}
              <QRCodeCanvas
                id={`qr-${product.id}`}
                value={`${BASE_URL}/${detailPath}/${product.id}`}
                size={120}
                level={"H"}
                imageSettings={{
                    src: athuLogo,
                    height: 34,
                    width: 34,
                    excavate: true,
                }}
              />

              <h3 className="mt-4 text-xs font-bold text-gray-800 line-clamp-2 h-8">
                {productTranslations[product.id]?.[language]?.name || product.name}
              </h3>

              <div className="flex w-full gap-2 mt-3">
                <a
                  href={`${BASE_URL}/${detailPath}/${product.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-2 py-1.5 bg-emerald-600 text-white text-xs font-medium rounded-md hover:bg-emerald-700 transition-colors text-center flex items-center justify-center"
                >
                  View
                </a>

                <button
                  onClick={() => downloadQR(product.id, product.image)}
                  className="flex-1 px-2 py-1.5 bg-slate-800 text-white text-xs font-medium rounded-md hover:bg-slate-900 transition-colors text-center flex items-center justify-center"
                >
                  Download
                </button>
              </div>

            </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import productsData from '../data/products.json'; 
import athuLogo from '../assets/athu.png'; 

export const QRMaker: React.FC = () => {
  const BASE_URL = "http://localhost:5173"; 

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-emerald-900">
          Tea Products - QR Code Generator
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {productsData.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center text-center border border-gray-200">
              
              <QRCodeSVG
                value={`${BASE_URL}/product/${product.id}`}
                size={120}
                level={"H"} 
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
              
              {/* <p className="text-[10px] text-gray-400 mt-1 font-mono">
                {product.id}
              </p> */}

              {/* Added View Button Here */}
              <a 
                href={`${BASE_URL}/product/${product.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-4 py-1.5 bg-emerald-600 text-white text-xs font-medium rounded-md hover:bg-emerald-700 transition-colors w-full text-center"
              >
                View
              </a>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
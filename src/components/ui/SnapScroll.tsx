import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Footer } from '../Footer';

interface CinematicSection {
  id: number;
  title: string;
  image: string;
  productName: string;
  subtitle: string;
  url: string;
}

const sections: CinematicSection[] = [
  // ── All entries in alphabetical order by title ────────────────────────────
  { id: 6,   title: "Black Tea Flower",                          subtitle: "Floral & Aromatic",       image: "/images/Black Tea Flower 25g.jpg",                                        productName: "Botanical Infusions",  url: "/product/tea-002" },
  { id: 7,   title: "Black Tea with Curry Leaves",               subtitle: "Bold & Herbal",            image: "/images/Black Tea with Curry Leaves 50g.jpg",                             productName: "Ayurvedic Blend",      url: "/product/tea-056" },
  { id: 8,   title: "Black Tea with Gotukola",                   subtitle: "Wellness & Bold",          image: "/images/Black Tea with Gotukola 50g.jpg",                                 productName: "Ayurvedic Blend",      url: "/product/tea-052" },
  { id: 9,   title: "Black Tea with Heen Bovitiya",              subtitle: "Herbal & Healing",         image: "/images/Black Tea with Heen Bovitiya 50g.jpg",                            productName: "Wellness Collection",  url: "/product/tea-068" },
  { id: 10,  title: "Black Tea with Moringa",                    subtitle: "Superfood Blend",          image: "/images/Black Tea with Moringa 50g.jpg",                                  productName: "Wellness Collection",  url: "/product/tea-049" },
  { id: 11,  title: "BOPF SP 200",                               subtitle: "Brisk & Strong",           image: "/images/BOPF SP 200.jpg",                                                 productName: "Ceylon Heritage",      url: "/product/tea-004" },
  { id: 12,  title: "BOPF SP 400",                               subtitle: "Bold & Classic",           image: "/images/BOPF SP 400.jpg",                                                 productName: "Ceylon Heritage",      url: "/product/tea-003" },
  { id: 13,  title: "BOPF SP TB",                                subtitle: "Convenient & Bold",        image: "/images/BOPF SP TB 200g.jpg",                                             productName: "Ceylon Heritage",      url: "/product/tea-005" },
  { id: 14,  title: "BOPF Special",                              subtitle: "Rich & Full-Bodied",       image: "/images/BOPF Special 200g.jpg",                                           productName: "Ceylon Heritage",      url: "/product/tea-103" },
  { id: 15,  title: "Cardamon Flavoured",                        subtitle: "Spiced & Exotic",          image: "/images/Cardamon Flavoured 50g.jpg",                                      productName: "Spiced Infusions",     url: "/product/tea-006" },
  { id: 16,  title: "Ceylon Black Tea BOP",                      subtitle: "Rich & Balanced",          image: "/images/Ceylon Black Tea BOP Broken Orange Pekoe 150g.jpg",               productName: "Heritage Estates",     url: "/product/tea-088" },
  { id: 17,  title: "Ceylon Green Tea with Lemongrass",          subtitle: "Fresh & Citrusy",          image: "/images/Ceylon Green Tea with Lemongrass 100g.jpg",                       productName: "Green Collection",     url: "/product/tea-001" },
  { id: 18,  title: "Ceylon Hibiscus Black Tea",                 subtitle: "Tart & Vibrant",           image: "/images/Ceylon Hibiscus Black Tea with Natural Hibiscus 50g.jpg",         productName: "Botanical Infusions",  url: "/product/tea-089" },
  { id: 19,  title: "Ceylon Mix Flower Black Tea",               subtitle: "Floral & Romantic",        image: "/images/Ceylon Mix Flower Black Tea with Natural Flowers -Pink Pouch 50g.jpg", productName: "Botanical Infusions", url: "/product/tea-090" },
  { id: 20,  title: "Ceylon Mix Flower Black Tea",               subtitle: "Bright & Cheerful",        image: "/images/Ceylon Mix Flower Black Tea with Natural Flowers-Yellow Pouch 50g.jpg", productName: "Botanical Infusions", url: "/product/tea-091" },
  { id: 21,  title: "Ceylon Premium Tea",                        subtitle: "Balanced & Refined",       image: "/images/Ceylon Premium tea 125g.jpg",                                     productName: "Ceylon Heritage",      url: "/product/tea-007" },
  { id: 22,  title: "Ceylon Rose Black Tea",                     subtitle: "Romantic & Floral",        image: "/images/Ceylon Rose Black Tea with Natural Rose 50g.jpg",                 productName: "Botanical Infusions",  url: "/product/tea-092" },
  { id: 23,  title: "Ceylon Special FFSP Tea",                   subtitle: "Golden & Sweet",           image: "/images/Ceylon Special FFSP tea 125g.jpg",                                productName: "Artisan Reserve",      url: "/product/tea-008" },
  { id: 24,  title: "Ceylon Supreme Tea",                        subtitle: "Supreme & Full-Bodied",    image: "/images/Ceylon Supreme tea 150g.jpg",                                     productName: "Ceylon Heritage",      url: "/product/tea-009" },
  { id: 3,   title: "Ceylon Tea BOP",                            subtitle: "Bold & Full-Bodied",       image: "/images/Ceylon tea BOP 100g.jpg",                                         productName: "Heritage Estates",     url: "/product/tea-010" },
  { id: 25,  title: "Ceylon Tea OP1",                            subtitle: "Light & Floral",           image: "/images/Ceylon tea OP1 100g.jpg",                                         productName: "Heritage Estates",     url: "/product/tea-011" },
  { id: 26,  title: "Ceylon Tea PEKO",                           subtitle: "Malty & Bold",             image: "/images/Ceylon tea PEKO 100g.jpg",                                        productName: "Heritage Estates",     url: "/product/tea-012" },
  { id: 27,  title: "Chakra Tea",                                subtitle: "Balancing & Soothing",     image: "/images/Chakra Tea 25g.jpg",                                              productName: "Wellness Collection",  url: "/product/tea-013" },
  { id: 28,  title: "Cinnamon Tea",                              subtitle: "Sweet & Spicy",            image: "/images/Cinnamon Tea 100g.jpg",                                           productName: "Spiced Wellness",      url: "/product/tea-014" },
  { id: 4,   title: "Cinnamon Tea Box",                          subtitle: "Warm & Invigorating",      image: "/images/Cinnamon Tea Box 100g.jpg",                                       productName: "Spiced Wellness",      url: "/product/tea-015" },
  { id: 29,  title: "Earl Grey Tea",                             subtitle: "Citrus & Refined",         image: "/images/Earl Grey Tea 125g.jpg",                                          productName: "Classic Collection",   url: "/product/tea-048" },
  { id: 30,  title: "Earl Grey Tea Box",                         subtitle: "Classic & Elegant",        image: "/images/Earl Grey Tea Box 100g.jpg",                                      productName: "Classic Collection",   url: "/product/tea-016" },
  { id: 31,  title: "English Afternoon Tea",                     subtitle: "Smooth & Delicate",        image: "/images/English Afternoon Tea 125g.jpg",                                  productName: "Classic Collection",   url: "/product/tea-080" },
  { id: 32,  title: "English Breakfast Tea",                     subtitle: "Bold & Traditional",       image: "/images/English Breakfast Tea 125g.jpg",                                  productName: "Classic Collection",   url: "/product/tea-074" },
  { id: 33,  title: "Extra Special FFEXSP Tea",                  subtitle: "Luxury & Refined",         image: "/images/Extra special FFEXSP tea 150g.jpg",                               productName: "Artisan Reserve",      url: "/product/tea-018" },
  { id: 2,   title: "FBOP Box",                                  subtitle: "Premium & Aromatic",       image: "/images/FBOP Box 100g.jpg",                                               productName: "Artisan Reserve",      url: "/product/tea-019" },
  { id: 34,  title: "Flavoured Ceylon Black Lemongrass Tea",     subtitle: "Citrus & Invigorating",    image: "/images/Flavoured Ceylon Black Lemongrass Tea 100g.jpg",                  productName: "Flavoured Collection", url: "/product/tea-093" },
  { id: 35,  title: "Flavoured Ceylon Tea Blackberry",           subtitle: "Berry & Bold",             image: "/images/Flavoured Ceylon Tea Blackberry 125g.jpg",                        productName: "Flavoured Collection", url: "/product/tea-063" },
  { id: 48,  title: "Flavoured Ceylon Tea Caramel",              subtitle: "Rich & Velvety",           image: "/images/Flavoured Ceylon Tea 125g with Natural Caramel Extract 125g.jpg",  productName: "Flavoured Collection", url: "/product/tea-094" },
  { id: 36,  title: "Flavoured Ceylon Tea Cardamom",             subtitle: "Spiced & Warming",         image: "/images/Flavoured Ceylon Tea Cardamom 125g.jpg",                          productName: "Flavoured Collection", url: "/product/tea-084" },
  { id: 37,  title: "Flavoured Ceylon Tea Honey",                subtitle: "Sweet & Comforting",       image: "/images/Flavoured Ceylon Tea Honey 125g.jpg",                             productName: "Flavoured Collection", url: "/product/tea-071" },
  { id: 38,  title: "Flavoured Ceylon Tea Jasmine",              subtitle: "Floral & Soothing",        image: "/images/Flavoured Ceylon Tea Jasmine 125g.jpg",                           productName: "Flavoured Collection", url: "/product/tea-070" },
  { id: 39,  title: "Flavoured Ceylon Tea Lemon",                subtitle: "Zesty & Bright",           image: "/images/Flavoured Ceylon Tea Lemon 125g.jpg",                             productName: "Flavoured Collection", url: "/product/tea-067" },
  { id: 40,  title: "Flavoured Ceylon Tea Lime",                 subtitle: "Tart & Refreshing",        image: "/images/Flavoured Ceylon Tea Lime 125g.jpg",                              productName: "Flavoured Collection", url: "/product/tea-075" },
  { id: 41,  title: "Flavoured Ceylon Tea Mango",                subtitle: "Tropical & Sweet",         image: "/images/Flavoured Ceylon Tea Mango 125g.jpg",                             productName: "Flavoured Collection", url: "/product/tea-060" },
  { id: 42,  title: "Flavoured Ceylon Tea Masala",               subtitle: "Bold & Warming",           image: "/images/Flavoured Ceylon Tea Masala Tea 100g.jpg",                        productName: "Flavoured Collection", url: "/product/tea-096" },
  { id: 43,  title: "Flavoured Ceylon Tea Mixed Fruit",          subtitle: "Fruity & Lively",          image: "/images/Flavoured Ceylon Tea Mixed Fruit 125g.jpg",                       productName: "Flavoured Collection", url: "/product/tea-078" },
  { id: 49,  title: "Flavoured Ceylon Tea Peach",                subtitle: "Delicate & Sweet",         image: "/images/Flavoured Ceylon Tea with Natural Peach 125g.jpg",                 productName: "Flavoured Collection", url: "/product/tea-095" },
  { id: 44,  title: "Flavoured Ceylon Tea Peppermint",           subtitle: "Cool & Refreshing",        image: "/images/Flavoured Ceylon Tea Peppermint 125g.jpg",                        productName: "Flavoured Collection", url: "/product/tea-082" },
  { id: 45,  title: "Flavoured Ceylon Tea Pineapple",            subtitle: "Tropical & Bright",        image: "/images/Flavoured Ceylon Tea Pineapple 125g.jpg",                         productName: "Flavoured Collection", url: "/product/tea-061" },
  { id: 46,  title: "Flavoured Ceylon Tea Pomegranate",          subtitle: "Rich & Vibrant",           image: "/images/Flavoured Ceylon Tea Pomegranate 125g.jpg",                       productName: "Flavoured Collection", url: "/product/tea-065" },
  { id: 47,  title: "Flavoured Ceylon Tea Strawberry Cream",     subtitle: "Sweet & Indulgent",        image: "/images/Flavoured Ceylon Tea Strawberry Cream 125g.jpg",                  productName: "Flavoured Collection", url: "/product/tea-059" },
  { id: 50,  title: "Ginger Tea",                                subtitle: "Spicy & Warming",          image: "/images/Ginger Tea 100g.jpg",                                             productName: "Wellness Collection",  url: "/product/tea-020" },
  { id: 51,  title: "Ginger Tea Box",                            subtitle: "Spicy & Warming",          image: "/images/Ginger Tea Box 100g.jpg",                                         productName: "Wellness Collection",  url: "/product/tea-021" },
  { id: 52,  title: "Golden Tips",                               subtitle: "Rare & Precious",          image: "/images/Golden Tips 20g.jpg",                                             productName: "Artisan Reserve",      url: "/product/tea-057" },
  { id: 53,  title: "Golden Tips Roll",                          subtitle: "Artisan & Precious",       image: "/images/Golden Tips Roll 50g.jpg",                                        productName: "Artisan Reserve",      url: "/product/tea-033" },
  { id: 54,  title: "Green Tea",                                 subtitle: "Fresh & Pure",             image: "/images/Green Tea 200g.jpg",                                              productName: "Green Collection",     url: "/product/tea-040" },
  { id: 55,  title: "Green Tea Box",                             subtitle: "Clean & Refreshing",       image: "/images/Green tea Box 50g.jpg",                                           productName: "Green Collection",     url: "/product/tea-022" },
  { id: 56,  title: "Hibiscus Tea Box",                          subtitle: "Tart & Ruby-Red",          image: "/images/Hibiscus Tea Box 100g.jpg",                                       productName: "Botanical Infusions",  url: "/product/tea-023" },
  { id: 57,  title: "Jasmine Flavoured Tea",                     subtitle: "Fragrant & Floral",        image: "/images/Jasmine Flavoured Tea 50g.jpg",                                   productName: "Botanical Infusions",  url: "/product/tea-086" },
  { id: 58,  title: "Jasmine Tea Box",                           subtitle: "Sweet & Fragrant",         image: "/images/jasmine Tea Box 100g.jpg",                                        productName: "Botanical Infusions",  url: "/product/tea-024" },
  { id: 59,  title: "Karapincha Green Tea Tin",                  subtitle: "Herbal & Fresh",           image: "/images/Karapincha Green Tea Tin 40g.jpg",                                productName: "Green Collection",     url: "/product/tea-104" },
  { id: 60,  title: "Masala Tea Box",                            subtitle: "Boldly Spiced",            image: "/images/Masala Tea Box 100g.jpg",                                         productName: "Spiced Infusions",     url: "/product/tea-025" },
  { id: 61,  title: "Mint Flavoured Tea",                        subtitle: "Cool & Crisp",             image: "/images/Mint Flavoured Tea 50g.jpg",                                      productName: "Flavoured Collection", url: "/product/tea-087" },
  { id: 62,  title: "Mint Tea Box",                              subtitle: "Refreshingly Cool",        image: "/images/Mint Tea Box 100g.jpg",                                           productName: "Botanical Infusions",  url: "/product/tea-026" },
  { id: 63,  title: "Mixed Fruit Tea Roll",                      subtitle: "Fruity & Artisan",         image: "/images/Mixed Fruit Tea Roll 50g.jpg",                                    productName: "Artisan Collection",   url: "/product/tea-105" },
  { id: 64,  title: "Moringa Green Tea Tin",                     subtitle: "Superfood & Pure",         image: "/images/Moringa Green Tea Tin 40g.jpg",                                   productName: "Green Collection",     url: "/product/tea-106" },
  { id: 65,  title: "OP Ceylon Tea",                             subtitle: "Classic & Pure",           image: "/images/OP 200g.jpg",                                                     productName: "Heritage Estates",     url: "/product/tea-027" },
  { id: 66,  title: "OP Pure Ceylon Purple Label",               subtitle: "Royal & Refined",          image: "/images/OP Pure Ceylon Purple Lable 200g.jpg",                            productName: "Heritage Estates",     url: "/product/tea-107" },
  { id: 67,  title: "OP1 Ceylon Tea",                            subtitle: "Whole Leaf & Delicate",    image: "/images/OP1 200g.jpg",                                                    productName: "Heritage Estates",     url: "/product/tea-029" },
  { id: 68,  title: "OPA Ceylon Tea",                            subtitle: "Bright & Premium",         image: "/images/OPA 100g.jpg",                                                    productName: "Heritage Estates",     url: "/product/tea-017" },
  { id: 69,  title: "OPA Ceylon Tea",                            subtitle: "Bright & Premium",         image: "/images/OPA 200g.jpg",                                                    productName: "Heritage Estates",     url: "/product/tea-031" },
  { id: 70,  title: "OPA Transparent Package",                   subtitle: "Pure & Bright",            image: "/images/OPA Transparent Package 200g.jpg",                                productName: "Heritage Estates",     url: "/product/tea-102" },
  { id: 71,  title: "Orange Flavoured Tea",                      subtitle: "Citrus & Sweet",           image: "/images/Orange Flavoured Tea 50g.jpg",                                    productName: "Flavoured Collection", url: "/product/tea-062" },
  { id: 72,  title: "PEKOE Ceylon Tea",                          subtitle: "Rich & Malty",             image: "/images/PEKOE 200g.jpg",                                                  productName: "Heritage Estates",     url: "/product/tea-034" },
  { id: 73,  title: "Pekoe Purple Label",                        subtitle: "Rich & Royal",             image: "/images/Pekoe Purple Label 200g.jpg",                                     productName: "Heritage Estates",     url: "/product/tea-050" },
  { id: 74,  title: "PEKOE Purple Label",                        subtitle: "Bold & Royal",             image: "/images/PEKOE Purple Lable 100g.jpg",                                     productName: "Heritage Estates",     url: "/product/tea-108" },
  { id: 75,  title: "Pink Tea Roll",                             subtitle: "Rare & Artisan",           image: "/images/Pink Tea Roll 25g.jpg",                                           productName: "Artisan Reserve",      url: "/product/tea-109" },
  { id: 76,  title: "Pink Tea Single Estate",                    subtitle: "Single Estate & Rare",     image: "/images/Pink Tea Single Estate Artisanal 25g.jpg",                        productName: "Artisan Reserve",      url: "/product/tea-081" },
  { id: 77,  title: "Premium OPA Ceylon Tea",                    subtitle: "Premium & Pure",           image: "/images/Premium OPA Ceylon Tea 50g.jpg",                                  productName: "Heritage Estates",     url: "/product/tea-097" },
  { id: 78,  title: "Premium Silver Tips",                       subtitle: "Rare & Precious",          image: "/images/Premium Silver Tips 40g.jpg",                                     productName: "Artisan Reserve",      url: "/product/tea-085" },
  { id: 79,  title: "Premium Silver Tips",                       subtitle: "Rare & Silver",            image: "/images/Premium Silver Tips 20g.jpg",                                     productName: "Artisan Reserve",      url: "/product/tea-073" },
  { id: 80,  title: "Pure Ceylon Purple Tea",                    subtitle: "Rare & Antioxidant",       image: "/images/Pure Ceylon Purple Tea 100g.jpg",                                 productName: "Artisan Reserve",      url: "/product/tea-079" },
  { id: 81,  title: "Pure Ceylon Tea BOP",                       subtitle: "Pure & Classic",           image: "/images/Pure Ceylon Tea BOP 200g.jpg",                                    productName: "Ceylon Heritage",      url: "/product/tea-035" },
  { id: 82,  title: "Pure Ceylon Tea FBOPF Extra Special",       subtitle: "Extra Special Grade",      image: "/images/Pure Ceylon Tea FBOPF Extra Special 100g.jpg",                    productName: "Artisan Reserve",      url: "/product/tea-098" },
  { id: 83,  title: "Pure Ceylon Tea FBOPF Special",             subtitle: "Special Grade & Pure",     image: "/images/Pure Ceylon Tea FBOPF Special.jpg",                               productName: "Artisan Reserve",      url: "/product/tea-099" },
  { id: 84,  title: "Pure Ceylon Tea Purple Label OP",           subtitle: "Royal Purple Grade",       image: "/images/Pure Ceylon Tea Purple Lable OP 200g.jpg",                        productName: "Heritage Estates",     url: "/product/tea-110" },
  { id: 85,  title: "Pure Ceylon Tea Single Estate BOPF",        subtitle: "Single Estate & Bold",     image: "/images/Pure Ceylon Tea Single Estate 400g BOPF Sp.jpg",                  productName: "Artisan Reserve",      url: "/product/tea-100" },
  { id: 86,  title: "Pure Ceylon Tea TB",                        subtitle: "Convenient & Pure",        image: "/images/Pure Ceylon Tea TB 50g.jpg",                                      productName: "Ceylon Heritage",      url: "/product/tea-036" },
  { id: 87,  title: "Pure Ceylon Tea with Curry Leaves",         subtitle: "Herbal & Bold",            image: "/images/Pure Ceylon Tea with Curry leaves 50g.jpg",                       productName: "Ayurvedic Blend",      url: "/product/tea-077" },
  { id: 88,  title: "Pure Ceylon Tea with Gotukola",             subtitle: "Wellness & Pure",          image: "/images/Pure Ceylon Tea with Gotukola 50g.jpg",                           productName: "Ayurvedic Blend",      url: "/product/tea-076" },
  { id: 89,  title: "Pure Ceylon Tea with Heenbovitiya",         subtitle: "Healing & Pure",           image: "/images/Pure Ceylon Tea with Heenbovitiya 50g.jpg",                       productName: "Ayurvedic Blend",      url: "/product/tea-083" },
  { id: 90,  title: "Pure Ceylon Tea with Moringa",              subtitle: "Superfood & Pure",         image: "/images/Pure Ceylon Tea with Moringa 50g.jpg",                            productName: "Wellness Collection",  url: "/product/tea-053" },
  { id: 91,  title: "Purple Tea Roll",                           subtitle: "Rare & Artisan",           image: "/images/Purple tea Roll 50g.jpg",                                         productName: "Artisan Reserve",      url: "/product/tea-037" },
  { id: 1,   title: "Rose Tea Box",                              subtitle: "Aromatic & Delicate",      image: "/images/Rose Tea Box 100g.jpg",                                           productName: "Botanical Infusions",  url: "/product/tea-038" },
  { id: 92,  title: "Sigiriya Ceylon Tea OP",                    subtitle: "Heritage & Pride",         image: "/images/Sigiriya Ceylon Tea OP 100g.jpg",                                 productName: "Heritage Estates",     url: "/product/tea-101" },
  { id: 93,  title: "Silver Green Tea Roll",                     subtitle: "Pure & Silver",            image: "/images/Silver green tea Roll 50g.jpg",                                   productName: "Artisan Reserve",      url: "/product/tea-039" },
  { id: 94,  title: "Silver Tips Tea Roll",                      subtitle: "Precious & Artisan",       image: "/images/Silver Tips Tea Roll 50g.jpg",                                    productName: "Artisan Reserve",      url: "/product/tea-111" },
  { id: 95,  title: "Slim Beauty Black Tea",                     subtitle: "Wellness & Slimming",      image: "/images/Slim Beauty Black Tea 100g.jpg",                                  productName: "Wellness Collection",  url: "/product/tea-044" },
  { id: 96,  title: "Slim Beauty Tea Roll",                      subtitle: "Artisan & Wellness",       image: "/images/Slim beauty tea Roll 50g.jpg",                                    productName: "Artisan Collection",   url: "/product/tea-112" },
  { id: 97,  title: "Soursop Flavoured Tea",                     subtitle: "Tropical & Exotic",        image: "/images/Soursop Flavoured Tea 50g.jpg",                                   productName: "Flavoured Collection", url: "/product/tea-055" },
  { id: 98,  title: "Soursop Tea Box",                           subtitle: "Exotic & Tropical",        image: "/images/Soursop Tea Box 100g.jpg",                                        productName: "Flavoured Collection", url: "/product/tea-113" },
  { id: 5,   title: "Spice Collection",                          subtitle: "Bold & Warming",           image: "/images/Cinnamon Stick Alba 50g.jpg",                                     productName: "Premium Spices",       url: "/spices"           },
  { id: 99,  title: "Vanilla Tea Box",                           subtitle: "Sweet & Creamy",           image: "/images/Vanila Tea Box 100g.jpg",                                         productName: "Flavoured Collection", url: "/product/tea-041" },
  { id: 100, title: "Vita Glow Tea",                             subtitle: "Vitality & Glow",          image: "/images/Vita glow Tea 25g.jpg",                                           productName: "Wellness Collection",  url: "/product/tea-042" },
  { id: 101, title: "White Tea",                                 subtitle: "Delicate & Pure",          image: "/images/White Tea 25g.jpg",                                               productName: "Artisan Reserve",      url: "/product/tea-045" },
  { id: 102, title: "White Tea Roll",                            subtitle: "Pure & Artisan",           image: "/images/White tea Roll 25g.jpg",                                          productName: "Artisan Reserve",      url: "/product/tea-043" },
];

// ── Accordion shutter slats that peel open ─────────────────────────────────
const ShutterOverlay = ({ isVisible, count = 6 }: { isVisible: boolean; count?: number }) => {
  const slats = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      delay: 0.08 + i * 0.06,
    }))
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {slats.current.map((slat) => (
        <div
          key={slat.id}
          style={{
            position: 'absolute',
            width: '100%',
            height: `${100 / count}%`,
            top: `${(100 / count) * slat.id}%`,
            background: 'rgba(250, 248, 245, 0.95)',
            transformOrigin: `50% ${slat.id < count / 2 ? '0%' : '100%'}`,
            transform: isVisible ? 'scaleY(0)' : 'scaleY(1)',
            transition: isVisible
              ? `transform 0.8s cubic-bezier(0.76, 0, 0.24, 1) ${slat.delay}s`
              : `transform 0.3s ease`,
            zIndex: 10,
          }}
        />
      ))}
    </div>
  );
};

// ── Spinning seal that breaks on reveal ────────────────────────────────────
const BreakingSeal = ({ isVisible }: { isVisible: boolean }) => (
  <div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    style={{
      zIndex: 15,
      opacity: isVisible ? 0 : 1,
      transition: 'opacity 0.5s ease 0.3s',
    }}
  >
    {/* Outer circle seal */}
    <div
      style={{
        position: 'absolute',
        width: '80px',
        height: '80px',
        border: '2px solid #d4ccc6',
        borderRadius: '50%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0.6,
      }}
    />
    {/* Inner decorative seal dot */}
    <div
      style={{
        position: 'absolute',
        width: '12px',
        height: '12px',
        background: '#d4ccc6',
        borderRadius: '50%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0.4,
      }}
    />
    {/* Rotating ribbon */}
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0.5,
      }}
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#d4ccc6"
        strokeWidth="1"
        strokeDasharray="282"
        strokeDashoffset="282"
        style={{
          animation: isVisible ? 'none' : 'spin 8s linear infinite',
        }}
      />
    </svg>
  </div>
);

// ── Zooming centered image ─────────────────────────────────────────────────
const ZoomingImage = ({
  src,
  alt,
  isVisible,
}: {
  src: string;
  alt: string;
  isVisible: boolean;
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#faf8f5',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(1.8) rotate(-8deg)',
          filter: isVisible ? 'brightness(1)' : 'brightness(0.85)',
          transition: isVisible
            ? 'transform 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s, filter 1.6s ease 0.3s'
            : 'transform 0.4s ease, filter 0.4s ease',
        }}
      />
    </div>
  );
};

// ── Text with Y-axis rotation (book opening) ───────────────────────────────
const TextContent = ({
  section,
  isVisible,
  isImageLeft,
  index,
}: {
  section: CinematicSection;
  isVisible: boolean;
  isImageLeft: boolean;
  index: number;
}) => {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const rotationDirection = isImageLeft ? -12 : 12;

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingLeft: 'clamp(2rem, 5vw, 6rem)',
        paddingRight: 'clamp(2rem, 5vw, 6rem)',
        transformStyle: 'preserve-3d',
        perspective: '1200px',
      }}
    >
      {/* Large watermark that spins into place */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: isImageLeft ? 'max(2rem, 5%)' : undefined,
          left: !isImageLeft ? 'max(2rem, 5%)' : undefined,
          transform: `translateY(-50%) rotate(${isVisible ? '0deg' : '180deg'})`,
          fontSize: 'clamp(8rem, 16vw, 16rem)',
          fontWeight: 900,
          fontFamily: 'Georgia, serif',
          color: 'rgba(120, 113, 108, 0.05)',
          letterSpacing: '-0.05em',
          opacity: isVisible ? 1 : 0,
          transition: isVisible
            ? 'opacity 1s ease 0.5s, transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s'
            : 'opacity 0.3s ease, transform 0.3s ease',
          pointerEvents: 'none',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Content container that rotates in like a book opening */}
      <div
        style={{
          transformStyle: 'preserve-3d',
          transform: isVisible
            ? 'rotateY(0deg) rotateX(0deg) translateZ(0)'
            : `rotateY(${rotationDirection}deg) rotateX(8deg) translateZ(-20px)`,
          opacity: isVisible ? 1 : 0,
          transition: isVisible
            ? 'transform 1.1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.35s, opacity 0.8s ease 0.3s'
            : 'transform 0.3s ease, opacity 0.3s ease',
          filter: isVisible ? 'blur(0px)' : 'blur(2px)',
        }}
      >
        {/* Label with animated underline */}
        <div
          style={{
            position: 'relative',
            marginBottom: '1.5rem',
            display: 'inline-block',
          }}
        >
          <span
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#a8a29e',
              display: 'inline-block',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-1.5rem)',
              transition: isVisible
                ? 'opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s'
                : 'opacity 0.15s ease, transform 0.15s ease',
            }}
          >
            {section.productName}
          </span>
          {/* Sliding underline */}
          <div
            style={{
              position: 'absolute',
              bottom: '-6px',
              left: 0,
              height: '1px',
              background: '#292524',
              width: isVisible ? '100%' : '0%',
              transition: isVisible
                ? 'width 0.8s cubic-bezier(0.76, 0, 0.24, 1) 0.75s'
                : 'width 0.2s ease',
            }}
          />
        </div>

        {/* Title with letter spacing expansion */}
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 5rem)',
            fontFamily: 'Georgia, serif',
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: '1.5rem',
            color: '#292524',
            letterSpacing: isVisible ? '-0.02em' : '0.2em',
            opacity: isVisible ? 1 : 0.5,
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0.95)',
            transition: isVisible
              ? 'letter-spacing 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s, opacity 0.7s ease 0.4s, transform 0.9s ease 0.4s'
              : 'letter-spacing 0.2s ease, opacity 0.15s ease, transform 0.15s ease',
          }}
        >
          {section.title}
        </h1>

        {/* Subtitle with dash animation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: isVisible
              ? 'opacity 0.7s ease 0.8s, transform 0.7s ease 0.8s'
              : 'opacity 0.15s ease, transform 0.15s ease',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: isVisible ? '20px' : '0px',
              height: '1px',
              background: '#78716c',
              flexShrink: 0,
              transition: isVisible
                ? 'width 0.6s cubic-bezier(0.76, 0, 0.24, 1) 0.85s'
                : 'width 0.2s ease',
            }}
          />
          <p
            style={{
              fontSize: '0.7rem',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#928e89',
            }}
          >
            {section.subtitle}
          </p>
        </div>

        {/* CTA Button */}
        <div
          style={{
            marginTop: '2.5rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.95)',
            transition: isVisible
              ? 'opacity 0.6s ease 1s, transform 0.6s ease 1s'
              : 'opacity 0.15s ease, transform 0.15s ease',
          }}
        >
          <button
          onClick={() => {
            // අදාළ පිටුවට යොමු කිරීම
            window.location.href = section.url; 
          }}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            fontSize: '0.6rem',
            fontWeight: 800,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#292524',
            position: 'relative',
            overflow: 'visible',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {t?.catalog?.discoverMore || "DISCOVER MORE"}
          <span
            style={{
              position: 'absolute',
              bottom: '-8px',
              left: 0,
              width: '100%',
              height: '2px',
              background: '#292524',
              transformOrigin: 'center',
              transform: isHovered ? 'scaleX(1.15)' : 'scaleX(1)',
              transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          />
        </button>
        </div>
      </div>
    </div>
  );
};

// ── Section block ──────────────────────────────────────────────────────────
const SectionBlock = ({
  section,
  index,
}: {
  section: CinematicSection;
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const isImageLeft = index % 2 === 0;

  return (
    <div
      ref={sectionRef}
      id={`catalog-${section.url.split('/').pop() ?? section.id}`}
      className={`relative flex flex-col h-[calc(100svh-4rem)] sm:h-[calc(100svh-5rem)] w-full snap-start overflow-hidden md:flex-row ${isImageLeft ? '' : 'md:flex-row-reverse'
        }`}
    >
      {/* ── IMAGE HALF ── */}
      <div
        className="relative w-full h-2/5 md:w-1/2 md:h-full bg-stone-100"
        style={{ perspective: '1200px' }}
      >
        <ZoomingImage src={section.image} alt={section.title} isVisible={isVisible} />
        <ShutterOverlay isVisible={isVisible} count={5} />
        <BreakingSeal isVisible={isVisible} />
      </div>

      {/* ── TEXT HALF ── */}
      <div
        className="relative w-full h-3/5 md:w-1/2 md:h-full bg-[#FAF8F5]"
        style={{ perspective: '1200px' }}
      >
        <TextContent section={section} isVisible={isVisible} isImageLeft={isImageLeft} index={index} />
      </div>
    </div>
  );
};

// ── Root ───────────────────────────────────────────────────────────────────
export default function EditorialSnapScroll(): JSX.Element {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const localizedSections = sections
    .map((s) => {
      const tIdx = s.id >= 1 && s.id <= 5 ? s.id - 1 : -1;
      return {
        ...s,
        title: (tIdx >= 0 && t?.catalog?.sections?.[tIdx]?.title) || s.title,
        subtitle: (tIdx >= 0 && t?.catalog?.sections?.[tIdx]?.subtitle) || s.subtitle,
        productName: (tIdx >= 0 && t?.catalog?.sections?.[tIdx]?.productName) || s.productName,
      };
    })
    .filter(s => s.url !== '/spices');

  // Hide body scrollbar while on this page so only the snap container's bar shows
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Preload all images immediately on mount so every section is ready without delay
  useEffect(() => {
    localizedSections.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, [localizedSections]);

  return (
    <>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }

      `}</style>

      <div
        ref={scrollRef}
        className="fixed top-16 sm:top-20 left-0 right-0 bottom-0 overflow-y-scroll snap-y snap-mandatory scroll-smooth overscroll-y-contain font-sans antialiased bg-[#FAF8F5] text-stone-900"
        style={{ WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
      >
        {localizedSections.map((section, index) => (
          <SectionBlock key={section.id} section={section} index={index} />
        ))}
        <div className="snap-start w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}
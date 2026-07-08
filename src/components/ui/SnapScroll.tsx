import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Footer } from '../Footer';
import { productTranslations } from '../../data/productTranslations';
import { subtitleTranslations, categoryTranslations } from '../../data/catalogTranslations';

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
  { id: 32, title: "Black Tea Flower 25g Pouch", subtitle: "Floral & Aromatic", image: "/images/Tea Packets/Black Tea Flower  Packet 25g.jpg", productName: "Botanical Infusions", url: "/product/tea-148" },
  { id: 7, title: "Black Tea with Curry Leaves 50g Box", subtitle: "Bold & Herbal", image: "/images/Tea Boxes/Black Tea with Curry Leaves Tea Box 50g.jpg", productName: "Ayurvedic Blend", url: "/product/tea-123" },
  { id: 8, title: "Black Tea with Gotukola 50g Box", subtitle: "Wellness & Bold", image: "/images/Tea Boxes/Black Tea with Gotukola  Tea Box 50g.jpg", productName: "Ayurvedic Blend", url: "/product/tea-124" },
  { id: 9, title: "Black Tea with Heen Bovitiya 50g Box", subtitle: "Herbal & Healing", image: "/images/Tea Boxes/Black Tea with Heen Bovitiya Tea Box 50g.jpg", productName: "Wellness Collection", url: "/product/tea-125" },
  { id: 10, title: "Black Tea with Moringa 50g Box", subtitle: "Superfood Blend", image: "/images/Tea Boxes/Black Tea with Moringa Tea Box50g.jpg", productName: "Wellness Collection", url: "/product/tea-126" },
  { id: 3, title: "BOP 100g Bag", subtitle: "Bold & Full-Bodied", image: "/images/Tea Bags/Ceylon tea BOP tea bag  100g.jpg", productName: "Heritage Estates", url: "/product/tea-118" },
  { id: 33, title: "BOP 200g Pouch", subtitle: "Bold & Full-Bodied", image: "/images/Tea Packets/BOP Tea Packet 200g.jpg", productName: "Heritage Estates", url: "/product/tea-149" },
  { id: 87, title: "Cardamom 50g Roll", subtitle: "Spiced & Exotic", image: "/images/Tea Tin Products/Cardamon Flavoured  Tea Tin 50g.jpg", productName: "Spiced Infusions", url: "/product/tea-203" },
  { id: 34, title: "Ceylon Black Tea BOP Broken Orange Pekoe 150g Pouch", subtitle: "Rich & Balanced", image: "/images/Tea Packets/Ceylon Black Tea BOP Broken Orange PEKOE Tea Packet  150g.jpg", productName: "Heritage Estates", url: "/product/tea-150" },
  { id: 35, title: "Ceylon Hibiscus Black Tea 50g Pouch", subtitle: "Tart & Vibrant", image: "/images/Tea Packets/Ceylon Hibiscus Black Tea Packet  50g.jpg", productName: "Botanical Infusions", url: "/product/tea-151" },
  { id: 36, title: "Ceylon Mix Flower Black Tea - Pink 50g Pouch", subtitle: "Floral & Romantic", image: "/images/Tea Packets/Ceylon Mix Flower Black Tea with Natural Flowers -Pink Packet 50g.jpg", productName: "Botanical Infusions", url: "/product/tea-152" },
  { id: 37, title: "Ceylon Mix Flower Black Tea - Yellow 50g Pouch", subtitle: "Bright & Cheerful", image: "/images/Tea Packets/Ceylon Mix Flower Black Tea with Natural Flowers-Yellow Packet 50g.jpg", productName: "Botanical Infusions", url: "/product/tea-153" },
  { id: 38, title: "Ceylon Premium Tea 125g Pouch", subtitle: "Balanced & Refined", image: "/images/Tea Packets/Ceylon Premium Tea Packet 125g.jpg", productName: "Ceylon Heritage", url: "/product/tea-154" },
  { id: 39, title: "Ceylon Rose Black Tea 50g Pouch", subtitle: "Romantic & Floral", image: "/images/Tea Packets/Ceylon Rose Black Tea Packet 50g.jpg", productName: "Botanical Infusions", url: "/product/tea-155" },
  { id: 40, title: "Ceylon Special FFSP 125g Pouch", subtitle: "Golden & Sweet", image: "/images/Tea Packets/Ceylon Special FFSP Tea Packet 125g.jpg", productName: "Artisan Reserve", url: "/product/tea-156" },
  { id: 41, title: "Ceylon Supreme FBOP 150g Pouch", subtitle: "Supreme & Full-Bodied", image: "/images/Tea Packets/Ceylon Supreme FBOP Tea Packet 150g.jpg", productName: "Ceylon Heritage", url: "/product/tea-157" },
  { id: 31, title: "Chakra Tea 25g Pouch", subtitle: "Balancing & Soothing", image: "/images/Tea Packets/Black Tea Chakra Tea Packet  25g.jpg", productName: "Wellness Collection", url: "/product/tea-147" },
  { id: 4, title: "Cinnamon Tea 100g Box", subtitle: "Warm & Invigorating", image: "/images/Tea Boxes/Cinnamon Tea Box 100g.jpg", productName: "Spiced Wellness", url: "/product/tea-128" },
  { id: 88, title: "Curry Leaves Flavoured Tea 50g Roll", subtitle: "Bold & Herbal", image: "/images/Tea Tin Products/Curry Leaves Flavoured Tea Tin 50g.jpg", productName: "Ayurvedic Blend", url: "/product/tea-204" },
  { id: 13, title: "Earl Grey 100g Box", subtitle: "Classic & Elegant", image: "/images/Tea Boxes/Earl Grey Tea Box 100g.jpg", productName: "Classic Collection", url: "/product/tea-129" },
  { id: 42, title: "Earl Grey Tea 125g Pouch", subtitle: "Citrus & Refined", image: "/images/Tea Packets/Early Grey Tea  Packet 125g.jpg", productName: "Classic Collection", url: "/product/tea-158" },
  { id: 43, title: "English Afternoon Tea 125g Pouch", subtitle: "Smooth & Delicate", image: "/images/Tea Packets/English Afternoon Tea Packet 125g.jpg", productName: "Classic Collection", url: "/product/tea-159" },
  { id: 44, title: "English Breakfast Tea 125g Pouch", subtitle: "Bold & Traditional", image: "/images/Tea Packets/English Breakfast Tea Packet 125g.jpg", productName: "Classic Collection", url: "/product/tea-160" },
  { id: 45, title: "Extra Special FFEXSP 150g Pouch", subtitle: "Luxury & Refined", image: "/images/Tea Packets/Extra special FFEXSP Tea Packet 150g.jpg", productName: "Artisan Reserve", url: "/product/tea-161" },
  { id: 2, title: "FBOP 100g Box", subtitle: "Premium & Aromatic", image: "/images/Tea Boxes/FBOP Box 100g.jpg", productName: "Artisan Reserve", url: "/product/tea-130" },
  { id: 15, title: "FBOPF Extra Special 100g Box", subtitle: "Extra Special Grade", image: "/images/Tea Boxes/FBOPF Extra Special Tea Box 100g.jpg", productName: "Artisan Reserve", url: "/product/tea-131" },
  { id: 16, title: "FBOPF Special 100g Box", subtitle: "Special Grade & Pure", image: "/images/Tea Boxes/FBOPF Special Tea Box 100g.jpg", productName: "Artisan Reserve", url: "/product/tea-132" },
  { id: 47, title: "Flavoured Ceylon Tea Blackberry 125g Pouch", subtitle: "Berry & Bold", image: "/images/Tea Packets/Flavoured Ceylon Tea Blackberry Tea Packet 125g.jpg", productName: "Flavoured Collection", url: "/product/tea-163" },
  { id: 62, title: "Flavoured Ceylon Tea Caramel 125g Pouch", subtitle: "Rich & Velvety", image: "/images/Tea Packets/Flavoured Ceylon Tea with Caramel Tea Packet 125g.jpg", productName: "Flavoured Collection", url: "/product/tea-178" },
  { id: 48, title: "Flavoured Ceylon Tea Cardamom 125g Pouch", subtitle: "Spiced & Warming", image: "/images/Tea Packets/Flavoured Ceylon Tea Cardamom Tea Packet 125g.jpg", productName: "Flavoured Collection", url: "/product/tea-164" },
  { id: 49, title: "Flavoured Ceylon Tea Cinnamon 100g Pouch", subtitle: "Sweet & Spicy", image: "/images/Tea Packets/Flavoured Ceylon Tea Cinnamon Tea Packet  100g.jpg", productName: "Spiced Wellness", url: "/product/tea-165" },
  { id: 50, title: "Flavoured Ceylon Tea Ginger 100g Pouch", subtitle: "Spicy & Warming", image: "/images/Tea Packets/Flavoured Ceylon Tea Ginger Tea Packet 100g.jpg", productName: "Wellness Collection", url: "/product/tea-166" },
  { id: 51, title: "Flavoured Ceylon Tea Honey 125g Pouch", subtitle: "Sweet & Comforting", image: "/images/Tea Packets/Flavoured Ceylon Tea Honey Tea Packet 125g.jpg", productName: "Flavoured Collection", url: "/product/tea-167" },
  { id: 52, title: "Flavoured Ceylon Tea Jasmine 125g Pouch", subtitle: "Floral & Soothing", image: "/images/Tea Packets/Flavoured Ceylon Tea Jasmine Tea Packet 125g.jpg", productName: "Flavoured Collection", url: "/product/tea-168" },
  { id: 53, title: "Flavoured Ceylon Tea Lemon 125g Pouch", subtitle: "Zesty & Bright", image: "/images/Tea Packets/Flavoured Ceylon Tea Lemon Tea Packet 125g.jpg", productName: "Flavoured Collection", url: "/product/tea-169" },
  { id: 46, title: "Flavoured Ceylon Tea Lemongrass 100g Pouch", subtitle: "Citrus & Invigorating", image: "/images/Tea Packets/Flavoured Black Lemongrass Tea Packet 100g.jpg", productName: "Flavoured Collection", url: "/product/tea-162" },
  { id: 54, title: "Flavoured Ceylon Tea Lime 125g Pouch", subtitle: "Tart & Refreshing", image: "/images/Tea Packets/Flavoured Ceylon Tea Lime Tea Packet 125g.jpg", productName: "Flavoured Collection", url: "/product/tea-170" },
  { id: 55, title: "Flavoured Ceylon Tea Mango 125g Pouch", subtitle: "Tropical & Sweet", image: "/images/Tea Packets/Flavoured Ceylon Tea Mango Tea Packet 125g.jpg", productName: "Flavoured Collection", url: "/product/tea-171" },
  { id: 56, title: "Flavoured Ceylon Tea Masala 100g Pouch", subtitle: "Bold & Warming", image: "/images/Tea Packets/Flavoured Ceylon Tea Masala Tea Packet  100g.jpg", productName: "Flavoured Collection", url: "/product/tea-172" },
  { id: 57, title: "Flavoured Ceylon Tea Mixed Fruit 125g Pouch", subtitle: "Fruity & Lively", image: "/images/Tea Packets/Flavoured Ceylon Tea Mixed Fruit Tea Packet 125g.jpg", productName: "Flavoured Collection", url: "/product/tea-173" },
  { id: 63, title: "Flavoured Ceylon Tea Peach 125g Pouch", subtitle: "Delicate & Sweet", image: "/images/Tea Packets/Flavoured Ceylon Tea with Peach Tea Packet 125g.jpg", productName: "Flavoured Collection", url: "/product/tea-179" },
  { id: 58, title: "Flavoured Ceylon Tea Peppermint 125g Pouch", subtitle: "Cool & Refreshing", image: "/images/Tea Packets/Flavoured Ceylon Tea Peppermint Tea Packet 125g.jpg", productName: "Flavoured Collection", url: "/product/tea-174" },
  { id: 59, title: "Flavoured Ceylon Tea Pineapple 125g Pouch", subtitle: "Tropical & Bright", image: "/images/Tea Packets/Flavoured Ceylon Tea Pineapple Tea Packet 125g.jpg", productName: "Flavoured Collection", url: "/product/tea-175" },
  { id: 60, title: "Flavoured Ceylon Tea Pomegranate 125g Pouch", subtitle: "Rich & Vibrant", image: "/images/Tea Packets/Flavoured Ceylon Tea Pomegranate Tea Packet 125g.jpg", productName: "Flavoured Collection", url: "/product/tea-176" },
  { id: 61, title: "Flavoured Ceylon Tea Strawberry Cream 125g Pouch", subtitle: "Sweet & Indulgent", image: "/images/Tea Packets/Flavoured Ceylon Tea Strawberry Cream Tea Packet  125g.jpg", productName: "Flavoured Collection", url: "/product/tea-177" },
  { id: 64, title: "Flavoured Green Tea Lemongrass 100g Pouch", subtitle: "Fresh & Citrusy", image: "/images/Tea Packets/Flavoured Green Tea with Lemongrass Tea Packet 100g.jpg", productName: "Green Collection", url: "/product/tea-180" },
  { id: 17, title: "Ginger Tea 100g Box", subtitle: "Spicy & Warming", image: "/images/Tea Boxes/Ginger Tea Box 100g.jpg", productName: "Wellness Collection", url: "/product/tea-133" },
  { id: 89, title: "Golden Tips 50g Roll", subtitle: "Rare & Precious", image: "/images/Tea Tin Products/Golden Tips Tea Tin 50g.jpg", productName: "Artisan Reserve", url: "/product/tea-205" },
  { id: 90, title: "Gotukola Flavoured Tea 50g Roll", subtitle: "Wellness & Bold", image: "/images/Tea Tin Products/Gotukola Flavoured Tea Tin 50g.jpg", productName: "Ayurvedic Blend", url: "/product/tea-206" },
  { id: 65, title: "Green Tea 200g Pouch", subtitle: "Fresh & Pure", image: "/images/Tea Packets/Green Tea Packet 200g.jpg", productName: "Green Collection", url: "/product/tea-181" },
  { id: 18, title: "Green Tea 50g Box", subtitle: "Clean & Refreshing", image: "/images/Tea Boxes/Green tea Box 50g.jpg", productName: "Green Collection", url: "/product/tea-134" },
  { id: 91, title: "Heen Bovitiya Flavoured Tea 50g Roll", subtitle: "Herbal & Healing", image: "/images/Tea Tin Products/Heen Bovitiya Flavoured Tea Tin  50g.jpg", productName: "Wellness Collection", url: "/product/tea-207" },
  { id: 19, title: "Hibiscus Tea 100g Box", subtitle: "Tart & Ruby-Red", image: "/images/Tea Boxes/Hibiscus Tea Box 100g.jpg", productName: "Botanical Infusions", url: "/product/tea-135" },
  { id: 92, title: "Jasmine 50g Roll", subtitle: "Fragrant & Floral", image: "/images/Tea Tin Products/Jasmine Flavoured Tea  Tin 50g.jpg", productName: "Botanical Infusions", url: "/product/tea-208" },
  { id: 20, title: "Jasmine Tea 100g Box", subtitle: "Sweet & Fragrant", image: "/images/Tea Boxes/jasmine Tea Box 100g.jpg", productName: "Botanical Infusions", url: "/product/tea-136" },
  { id: 93, title: "Karapincha Green Tea 40g Roll", subtitle: "Herbal & Fresh", image: "/images/Tea Tin Products/Karapincha Green Tea Tin 40g.jpg", productName: "Green Collection", url: "/product/tea-209" },
  { id: 21, title: "Masala Tea 100g Box", subtitle: "Boldly Spiced", image: "/images/Tea Boxes/Masala Tea Box 100g.jpg", productName: "Spiced Infusions", url: "/product/tea-137" },
  { id: 94, title: "Mint 50g Roll", subtitle: "Cool & Crisp", image: "/images/Tea Tin Products/Mint Flavoured Tea Tin 50g.jpg", productName: "Flavoured Collection", url: "/product/tea-210" },
  { id: 22, title: "Mint Tea 100g Box", subtitle: "Refreshingly Cool", image: "/images/Tea Boxes/Mint Tea Box 100g.jpg", productName: "Botanical Infusions", url: "/product/tea-138" },
  { id: 95, title: "Mixed Fruit 50g Roll", subtitle: "Fruity & Artisan", image: "/images/Tea Tin Products/Mixed Fruit Tea Tin 50g.jpg", productName: "Artisan Collection", url: "/product/tea-211" },
  { id: 96, title: "Moringa Flavoured Tea 50g Roll", subtitle: "Superfood Blend", image: "/images/Tea Tin Products/Moringa Flavoured Tea Tin  50g.jpg", productName: "Wellness Collection", url: "/product/tea-212" },
  { id: 97, title: "Moringa Green Tea 40g Roll", subtitle: "Superfood & Pure", image: "/images/Tea Tin Products/Moringa Green Tea Tin 40g.jpg", productName: "Green Collection", url: "/product/tea-213" },
  { id: 107, title: "OP 100g Bag", subtitle: "Heritage & Pride", image: "/images/Tea Bags/Ceylon Tea OP  tea bag 100g.jpg", productName: "Heritage Estates", url: "/product/tea-119" },
  { id: 23, title: "OP 200g Box", subtitle: "Classic & Pure", image: "/images/Tea Boxes/OP Tea Box 200g.jpg", productName: "Heritage Estates", url: "/product/tea-139" },
  { id: 66, title: "OP 200g Pouch", subtitle: "Classic & Pure", image: "/images/Tea Packets/OP  Tea Packet  200g.jpg", productName: "Heritage Estates", url: "/product/tea-182" },
  { id: 108, title: "OP1 100g Bag", subtitle: "Light & Floral", image: "/images/Tea Bags/Ceylon tea OP1 tea bag 100g.jpg", productName: "Heritage Estates", url: "/product/tea-120" },
  { id: 24, title: "OP1 200g Box", subtitle: "Whole Leaf & Delicate", image: "/images/Tea Boxes/OP1  Tea Box 200g.jpg", productName: "Heritage Estates", url: "/product/tea-140" },
  { id: 67, title: "OP1 200g Pouch", subtitle: "Whole Leaf & Delicate", image: "/images/Tea Packets/OP1 Tea Packet 200g.jpg", productName: "Heritage Estates", url: "/product/tea-183" },
  { id: 5, title: "OPA 100g Bag", subtitle: "Premium & Pure", image: "/images/Tea Bags/Ceylon Tea OPA  tea bag 100g.jpg", productName: "Heritage Estates", url: "/product/tea-121" },
  { id: 25, title: "OPA 200g Box", subtitle: "Bright & Premium", image: "/images/Tea Boxes/OPA Tea Box  200g.jpg", productName: "Heritage Estates", url: "/product/tea-141" },
  { id: 68, title: "OPA 200g Pouch", subtitle: "Bright & Premium", image: "/images/Tea Packets/OPA Tea Packet 200g.jpg", productName: "Heritage Estates", url: "/product/tea-184" },
  { id: 69, title: "OPA Transparent 200g Pouch", subtitle: "Pure & Bright", image: "/images/Tea Packets/OPA Transparent Tea Packet  200g.jpg", productName: "Heritage Estates", url: "/product/tea-185" },
  { id: 98, title: "Orange 50g Roll", subtitle: "Citrus & Sweet", image: "/images/Tea Tin Products/Orange Flavoured Tea Tin 50g.jpg", productName: "Flavoured Collection", url: "/product/tea-214" },
  { id: 6, title: "PEKOE 100g Bag", subtitle: "Rich & Malty", image: "/images/Tea Bags/Ceylon tea PEKOE tea bag 100g.jpg", productName: "Heritage Estates", url: "/product/tea-122" },
  { id: 70, title: "PEKOE 100g Pouch", subtitle: "Rich & Malty", image: "/images/Tea Packets/PEKOE Tea Packet 100g.jpg", productName: "Heritage Estates", url: "/product/tea-186" },
  { id: 26, title: "PEKOE 200g Box", subtitle: "Rich & Malty", image: "/images/Tea Boxes/PEKOE Tea Box 200g.jpg", productName: "Heritage Estates", url: "/product/tea-142" },
  { id: 71, title: "PEKOE 200g Pouch", subtitle: "Rich & Malty", image: "/images/Tea Packets/PEKOE Tea Packet 200g.jpg", productName: "Heritage Estates", url: "/product/tea-187" },
  { id: 99, title: "Pink Tea 25g Roll", subtitle: "Rare & Artisan", image: "/images/Tea Tin Products/Pink Tea Tin 25g.jpg", productName: "Artisan Reserve", url: "/product/tea-215" },
  { id: 72, title: "Pink Tea Single Estate Artisanal 25g Pouch", subtitle: "Single Estate & Rare", image: "/images/Tea Packets/Pink Tea Single Estate Artisanal Tea Packet  25g.jpg", productName: "Artisan Reserve", url: "/product/tea-188" },
  { id: 11, title: "Pitigala BOPF Sp 200g Box", subtitle: "Brisk & Strong", image: "/images/Tea Boxes/BOPF SP Tea Box  200g.jpg", productName: "Ceylon Heritage", url: "/product/tea-127" },
  { id: 73, title: "Premium Golden Tips 20g Pouch", subtitle: "Rare & Precious", image: "/images/Tea Packets/Premium Golden Tips Tea Packet 20g.jpg", productName: "Artisan Reserve", url: "/product/tea-189" },
  { id: 74, title: "Premium Golden Tips 40g Pouch", subtitle: "Rare & Precious", image: "/images/Tea Packets/Premium Golden Tips Tea Packet 40g.jpg", productName: "Artisan Reserve", url: "/product/tea-190" },
  { id: 75, title: "Premium OPA Ceylon Tea 50g Pouch", subtitle: "Premium & Pure", image: "/images/Tea Packets/Premium OPA Ceylon Tea Packet  50g.jpg", productName: "Heritage Estates", url: "/product/tea-191" },
  { id: 76, title: "Premium Silver Tips 20g Pouch", subtitle: "Rare & Silver", image: "/images/Tea Packets/Premium Silver Tips Tea Packet  20g.jpg", productName: "Artisan Reserve", url: "/product/tea-192" },
  { id: 77, title: "Premium Silver Tips 40g Pouch", subtitle: "Rare & Precious", image: "/images/Tea Packets/Premium Silver Tips Tea Packet  40g.jpg", productName: "Artisan Reserve", url: "/product/tea-193" },
  { id: 27, title: "Premium Taste 50g Box", subtitle: "Boxed & Gift-Ready", image: "/images/Tea Boxes/Premium Taste Tea Box 50g.jpg", productName: "Boxed Collection", url: "/product/tea-143" },
  { id: 78, title: "Purple Tea 100g Pouch", subtitle: "Rare & Artisan", image: "/images/Tea Packets/Purple Tea Packet 100g.jpg", productName: "Artisan Reserve", url: "/product/tea-194" },
  { id: 100, title: "Purple Tea 50g Roll", subtitle: "Rare & Artisan", image: "/images/Tea Tin Products/Purple Tea Tin 50g.jpg", productName: "Artisan Reserve", url: "/product/tea-216" },
  { id: 1, title: "Rose Tea 100g Box", subtitle: "Aromatic & Delicate", image: "/images/Tea Boxes/Rose Tea Box 100g.jpg", productName: "Botanical Infusions", url: "/product/tea-144" },
  { id: 101, title: "Silver Green Tea 50g Roll", subtitle: "Pure & Silver", image: "/images/Tea Tin Products/Silver green tea Tin 50g.jpg", productName: "Artisan Reserve", url: "/product/tea-217" },
  { id: 102, title: "Silver Tips 50g Roll", subtitle: "Precious & Artisan", image: "/images/Tea Tin Products/Silver Tips Tea Tin 50g.jpg", productName: "Artisan Reserve", url: "/product/tea-218" },
  { id: 79, title: "Single Estate BOPF Sp 200g Pouch", subtitle: "Brisk & Strong", image: "/images/Tea Packets/Single Estate BOPF SP Tea Packet 200.jpg", productName: "Ceylon Heritage", url: "/product/tea-195" },
  { id: 80, title: "Single Estate BOPF Sp 400g Pouch", subtitle: "Single Estate & Bold", image: "/images/Tea Packets/Single Estate BOPF Sp Tea Packet 400g.jpg", productName: "Artisan Reserve", url: "/product/tea-196" },
  { id: 81, title: "Single Estate BOPF Special 200g Pouch", subtitle: "Rich & Full-Bodied", image: "/images/Tea Packets/Single Estate BOPF Special Tea Packet  200g.jpg", productName: "Ceylon Heritage", url: "/product/tea-197" },
  { id: 82, title: "Single Estate BOPF Special 400g Pouch", subtitle: "Rich & Full-Bodied", image: "/images/Tea Packets/Single Estate BOPF Special Tea Packet  400.jpg", productName: "Ceylon Heritage", url: "/product/tea-198" },
  { id: 83, title: "Single Estate Premium BOPF Special 400g Pouch", subtitle: "Rich & Full-Bodied", image: "/images/Tea Packets/Single Estate Premium BOPF Special Tea Packet 400g.jpg", productName: "Ceylon Heritage", url: "/product/tea-199" },
  { id: 103, title: "Slim Beauty 50g Roll", subtitle: "Artisan & Wellness", image: "/images/Tea Tin Products/Slim beauty Tea Tin 50g.jpg", productName: "Artisan Collection", url: "/product/tea-219" },
  { id: 84, title: "Slim Beauty Black Tea 100g Pouch", subtitle: "Wellness & Slimming", image: "/images/Tea Packets/Slim Beauty Black Tea Packet 100g.jpg", productName: "Wellness Collection", url: "/product/tea-200" },
  { id: 104, title: "Soursop 50g Roll", subtitle: "Tropical & Exotic", image: "/images/Tea Tin Products/Soursop Flavoured Tea Tin 50g.jpg", productName: "Flavoured Collection", url: "/product/tea-220" },
  { id: 29, title: "Soursop Tea 100g Box", subtitle: "Exotic & Tropical", image: "/images/Tea Boxes/Soursop Tea Box 100g.jpg", productName: "Flavoured Collection", url: "/product/tea-145" },
  { id: 106,   title: "Spice Collection",                          subtitle: "Bold & Warming",           image: "/images/Spices/Tins/Cinnamon Stick Alba 50g.jpg",                        productName: "Premium Spices",       url: "/spices"           },
  { id: 30, title: "Vanilla Tea 100g Box", subtitle: "Sweet & Creamy", image: "/images/Tea Boxes/Vanila Tea Box 100g.jpg", productName: "Flavoured Collection", url: "/product/tea-146" },
  { id: 85, title: "Vita Glow Tea 25g Pouch", subtitle: "Vitality & Glow", image: "/images/Tea Packets/Vita glow Tea  Packet  25g.jpg", productName: "Wellness Collection", url: "/product/tea-201" },
  { id: 86, title: "White Tea 25g Pouch", subtitle: "Delicate & Pure", image: "/images/Tea Packets/White Tea  Packet 25g.jpg", productName: "Artisan Reserve", url: "/product/tea-202" },
  { id: 105, title: "White Tea 25g Roll", subtitle: "Delicate & Pure", image: "/images/Tea Tin Products/White tea Tin 25g.jpg", productName: "Artisan Reserve", url: "/product/tea-221" },
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
  const navigate = useNavigate();
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
            navigate(section.url);
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
  const { t, language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const localizedSections = sections
    .filter(s => s.url !== '/spices')
    .map((s) => {
      const tIdx = s.id >= 1 && s.id <= 4 ? s.id - 1 : -1;
      const productId = s.url.startsWith('/product/') ? s.url.replace('/product/', '') : null;
      const productTrans = productId ? productTranslations[productId]?.[language] : null;
      return {
        ...s,
        title: (tIdx >= 0 && t?.catalog?.sections?.[tIdx]?.title) || productTrans?.name || s.title,
        subtitle: (tIdx >= 0 && t?.catalog?.sections?.[tIdx]?.subtitle) || subtitleTranslations[s.subtitle]?.[language as keyof typeof subtitleTranslations[string]] || s.subtitle,
        productName: (tIdx >= 0 && t?.catalog?.sections?.[tIdx]?.productName) || categoryTranslations[s.productName]?.[language as keyof typeof categoryTranslations[string]] || s.productName,
      };
    });

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
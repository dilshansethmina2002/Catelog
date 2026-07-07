import { useLanguage } from '../context/LanguageContext';
import { Section } from './Section';
import logoImg from '../assets/tea.jpg'; // மே  hackக் எல்லாத்துக்கும் பொதுவானது
import { useParams } from 'react-router-dom';

// JSON ෆයිල් එක import කරගන්නවා
import productsData from '../data/products.json';
import spicesData from '../data/spices.json';
import { ingredientTranslations } from '../data/ingredientTranslations';
import { ingredientImageMap } from '../data/ingredientImages';

export function IngredientsSection() {
  const { t, language } = useLanguage();

  const { id } = useParams();
  const featuredProduct = productsData.find((p) => p.id === id) || spicesData.find((p) => p.id === id) || productsData[0];

  const isTea001 = !id || id === 'tea-001';
  const rawIngredients = isTea001 ? t.ingredients.items : (featuredProduct.ingredients || t.ingredients.items);
  const ingredientsList = (isTea001 || language === 'en')
    ? rawIngredients
    : rawIngredients.map((item: any) => ingredientTranslations[item.name]?.[language as keyof typeof ingredientTranslations[string]] ?? item);

  // New ingredient content images take priority; fall back to legacy ingredientImage, then Unsplash
  const dynamicIngredientImage =
    ingredientImageMap[id ?? "tea-001"] ||
    featuredProduct.ingredientImage ||
    "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=600&auto=format&fit=crop";

  return (
    <Section
      id="ingredients"
      className="bg-emerald-950 text-white relative overflow-hidden py-16 sm:py-24 lg:py-32"
    >
      {/* Editorial Background Text */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <span className="text-[20vw] font-serif font-bold leading-none whitespace-nowrap absolute top-10 left-0">
          {t.ingredients.pureNature}
        </span>
      </div>

      {/* மோபயில் வலடீ px-4 கிலும்த், லோகு ஸ்க்ரீன்வலடீ px-6 கிலும்த் பேடிங் பாலனோ கர அத */}
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">

        {/* Left Column: Image Collage */}
        <div className="lg:col-span-5 relative h-[320px] sm:h-[450px] lg:h-[600px] w-full order-1 lg:order-none">

          {/* ප්‍රධාන පින්තූරය (logoImg) */}
          <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-t-[40px] sm:rounded-t-[100px] overflow-hidden z-10 border-r-4 border-t-4 border-amber-500/30">
            <img
              src={logoImg}
              alt={t.ingredients.mainImageAlt}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* වෙනස් වන පින්තූරය (JSON එකෙන් එන පින්තූරය) */}
          <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-emerald-900 rounded-b-[40px] sm:rounded-b-[100px] overflow-hidden z-20 border-l-4 border-b-4 border-emerald-700">
            <img
              src={dynamicIngredientImage}
              alt={t.ingredients.leavesImageAlt}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover hover:scale-110 hover:opacity-100 transition-all duration-700"
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-7 lg:pl-12 order-2 lg:order-none">
          <div>
            <span className="text-amber-400 font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
              {t.ingredients.composition}
            </span>

            {/* மோபயில்வலடீ text-3xl/leading-tight லெசும்த் லோகு திரவலடீ text-7xl/leading-none லெசும்த் ஹரே */}
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-bold text-white mb-8 sm:mb-12 leading-tight lg:leading-none">
              {t.ingredients.title}
            </h2>

            {/* மோபயில் எகேடீ கருண அதர பரதரோ space-y-6/8 டக்வா அடு கர அத */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              {ingredientsList.map((item: any, index: number) => (
                <div
                  key={index}
                  className="group border-b border-emerald-800 pb-6 sm:pb-8 last:border-0"
                >
                  <div className="flex items-baseline gap-3 sm:gap-4 mb-2 sm:mb-3">
                    <span className="text-amber-500 font-serif text-lg sm:text-xl italic">
                      0{index + 1}
                    </span>
                    {/* மோபயில் மாத்ரிகா text-xl கர அத */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  {/* iPhone SE வன்ன குட திரவலடீ text எக தெரபென்னே நத வென்ன pl-6 டுன்னா */}
                  <p className="text-emerald-200/60 text-base sm:text-lg pl-6 sm:pl-10 leading-relaxed font-light max-w-xl">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

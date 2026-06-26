// Maps each product ID to its matching ingredient content image
// from public/images_of_products_ingredients/
// Products without a specific match use the generic fallback image.

const FALLBACK = "/images_of_products_ingredients/other all tea products .jpg";

export const ingredientImageMap: Record<string, string> = {
  // ── Black Tea Flower ─────────────────────────────────────────────────────
  "tea-002": "/images_of_products_ingredients/black tea flower product.jpg",

  // ── Black Tea with Herbs (no specific ingredient image) ──────────────────
  "tea-056": FALLBACK, // Black Tea with Curry Leaves
  "tea-052": FALLBACK, // Black Tea with Gotukola
  "tea-068": FALLBACK, // Black Tea with Heen Bovitiya
  "tea-049": FALLBACK, // Black Tea with Moringa

  // ── BOPF / BOPF SP ───────────────────────────────────────────────────────
  "tea-004": "/images_of_products_ingredients/BOPF sp.jpg",  // BOPF SP 200
  "tea-003": "/images_of_products_ingredients/BOPF.jpg",     // BOPF SP 400
  "tea-005": "/images_of_products_ingredients/BOPF sp.jpg",  // BOPF SP TB
  "tea-103": "/images_of_products_ingredients/BOPF sp.jpg",  // BOPF Special
  "tea-100": "/images_of_products_ingredients/BOPF sp.jpg",  // Pure Ceylon Tea Single Estate BOPF Sp

  // ── Cardamom Flavoured (no specific image) ───────────────────────────────
  "tea-006": FALLBACK,

  // ── BOP products ─────────────────────────────────────────────────────────
  "tea-088": "/images_of_products_ingredients/all BOP products.jpg", // Ceylon Black Tea BOP
  "tea-010": "/images_of_products_ingredients/all BOP products.jpg", // Ceylon tea BOP
  "tea-035": "/images_of_products_ingredients/all BOP products.jpg", // Pure Ceylon Tea BOP

  // ── Ceylon Green Tea with Lemongrass / Lemongrass teas ───────────────────
  "tea-001": "/images_of_products_ingredients/all green lemon grass tea products .jpg",
  "tea-093": "/images_of_products_ingredients/all green lemon grass tea products .jpg",

  // ── Hibiscus / Mix Flower / Rose (no specific image) ────────────────────
  "tea-089": FALLBACK,
  "tea-090": FALLBACK,
  "tea-091": FALLBACK,
  "tea-092": FALLBACK,
  "tea-023": FALLBACK,
  "tea-038": FALLBACK,

  // ── Ceylon Premium / Supreme (no specific image) ─────────────────────────
  "tea-007": FALLBACK,
  "tea-009": FALLBACK,

  // ── FFSP – Flowery Fannings Special ──────────────────────────────────────
  "tea-008": "/images_of_products_ingredients/FF sp.jpg",
  "tea-099": "/images_of_products_ingredients/FF sp.jpg",

  // ── FFEXSP – Flowery Fannings Extra Special ───────────────────────────────
  "tea-018": "/images_of_products_ingredients/FF Ex sp .jpg",
  "tea-098": "/images_of_products_ingredients/FF Ex sp .jpg",

  // ── OP1 ──────────────────────────────────────────────────────────────────
  "tea-011": "/images_of_products_ingredients/All OP1 tea products .jpg",
  "tea-029": "/images_of_products_ingredients/All OP1 tea products .jpg",

  // ── PEKOE ────────────────────────────────────────────────────────────────
  "tea-012": "/images_of_products_ingredients/all PEKOE tea products.jpg",
  "tea-034": "/images_of_products_ingredients/all PEKOE tea products.jpg",
  "tea-050": "/images_of_products_ingredients/all PEKOE tea products.jpg",
  "tea-108": "/images_of_products_ingredients/all PEKOE tea products.jpg",

  // ── Chakra Tea ───────────────────────────────────────────────────────────
  "tea-013": "/images_of_products_ingredients/CHAKRA tea products .jpg",

  // ── Cinnamon Flavoured Tea ───────────────────────────────────────────────
  "tea-014": "/images_of_products_ingredients/All cinnamon flavoured tea products .jpg",
  "tea-015": "/images_of_products_ingredients/All cinnamon flavoured tea products .jpg",

  // ── Earl Grey ─────────────────────────────────────────────────────────────
  "tea-048": "/images_of_products_ingredients/all earlygray tea products.jpg",
  "tea-016": "/images_of_products_ingredients/all earlygray tea products.jpg",

  // ── English Afternoon / Breakfast (no specific image) ────────────────────
  "tea-080": FALLBACK,
  "tea-074": FALLBACK,

  // ── FBOP ─────────────────────────────────────────────────────────────────
  "tea-019": "/images_of_products_ingredients/all FBOP tea products .jpg",

  // ── Flavoured teas without a dedicated ingredient image ──────────────────
  "tea-063": FALLBACK, // Blackberry
  "tea-084": FALLBACK, // Cardamom
  "tea-071": FALLBACK, // Honey
  "tea-070": FALLBACK, // Jasmine
  "tea-067": FALLBACK, // Lemon
  "tea-075": FALLBACK, // Lime
  "tea-060": FALLBACK, // Mango
  "tea-078": FALLBACK, // Mixed Fruit
  "tea-082": FALLBACK, // Peppermint
  "tea-061": FALLBACK, // Pineapple
  "tea-065": FALLBACK, // Pomegranate
  "tea-059": FALLBACK, // Strawberry Cream
  "tea-094": FALLBACK, // Caramel Extract
  "tea-095": FALLBACK, // Natural Peach
  "tea-062": FALLBACK, // Orange Flavoured

  // ── Masala Tea ───────────────────────────────────────────────────────────
  "tea-096": "/images_of_products_ingredients/all masala flavour products  .jpg",
  "tea-025": "/images_of_products_ingredients/all masala flavour products  .jpg",

  // ── Ginger Tea ───────────────────────────────────────────────────────────
  "tea-020": "/images_of_products_ingredients/all ginger flavoured tea products .jpg",
  "tea-021": "/images_of_products_ingredients/all ginger flavoured tea products .jpg",

  // ── Golden Tips ──────────────────────────────────────────────────────────
  "tea-057": "/images_of_products_ingredients/golden tea products.jpg",
  "tea-033": "/images_of_products_ingredients/golden tea products.jpg",

  // ── Green Tea ────────────────────────────────────────────────────────────
  "tea-040": "/images_of_products_ingredients/all greentea products .jpg",
  "tea-022": "/images_of_products_ingredients/all greentea products .jpg",
  "tea-104": "/images_of_products_ingredients/all greentea products .jpg", // Karapincha Green Tea
  "tea-106": "/images_of_products_ingredients/all greentea products .jpg", // Moringa Green Tea

  // ── Jasmine / Mint (no specific image) ───────────────────────────────────
  "tea-086": FALLBACK,
  "tea-024": FALLBACK,
  "tea-087": FALLBACK,
  "tea-026": FALLBACK,
  "tea-105": FALLBACK, // Mixed Fruit Roll

  // ── OP ───────────────────────────────────────────────────────────────────
  "tea-027": "/images_of_products_ingredients/all OP tea products .jpg",
  "tea-107": "/images_of_products_ingredients/all OP tea products .jpg",
  "tea-110": "/images_of_products_ingredients/all OP tea products .jpg",
  "tea-101": "/images_of_products_ingredients/all OP tea products .jpg", // Sigiriya Ceylon Tea OP

  // ── OPA ──────────────────────────────────────────────────────────────────
  "tea-017": "/images_of_products_ingredients/all OPA tea products.jpg",
  "tea-031": "/images_of_products_ingredients/all OPA tea products.jpg",
  "tea-102": "/images_of_products_ingredients/all OPA tea products.jpg",
  "tea-097": "/images_of_products_ingredients/all OPA tea products.jpg",

  // ── Pink Tea ─────────────────────────────────────────────────────────────
  "tea-109": "/images_of_products_ingredients/all PINK tea products.jpg",
  "tea-081": "/images_of_products_ingredients/all PINK tea products.jpg",

  // ── Premium Silver Tips ──────────────────────────────────────────────────
  "tea-085": "/images_of_products_ingredients/silver tips tea .jpg",
  "tea-073": "/images_of_products_ingredients/silver tips tea .jpg",
  "tea-111": "/images_of_products_ingredients/silver tips tea .jpg", // Silver Tips Tea Roll

  // ── Pure Ceylon Purple Tea ───────────────────────────────────────────────
  "tea-079": "/images_of_products_ingredients/purple tea products.jpg",

  // ── Pure Ceylon Tea TB (BOPF fannings in teabags) ────────────────────────
  "tea-036": "/images_of_products_ingredients/BOPF.jpg",

  // ── Pure Ceylon Tea with Herbs (no specific image) ───────────────────────
  "tea-077": FALLBACK,
  "tea-076": FALLBACK,
  "tea-083": FALLBACK,
  "tea-053": FALLBACK,

  // ── Purple Tea Roll ──────────────────────────────────────────────────────
  "tea-037": "/images_of_products_ingredients/purple tea products.jpg",

  // ── Silver Green Tea Roll ────────────────────────────────────────────────
  "tea-039": "/images_of_products_ingredients/silver green tea products .jpg",

  // ── Slim Beauty ──────────────────────────────────────────────────────────
  "tea-044": "/images_of_products_ingredients/all slim beauty products .jpg",
  "tea-112": "/images_of_products_ingredients/all slim beauty products .jpg",

  // ── Soursop / Vanilla (no specific image) ────────────────────────────────
  "tea-055": FALLBACK,
  "tea-113": FALLBACK,
  "tea-041": FALLBACK,

  // ── Vita Glow ────────────────────────────────────────────────────────────
  "tea-042": "/images_of_products_ingredients/All vita glow products .jpg",

  // ── White Tea ────────────────────────────────────────────────────────────
  "tea-045": "/images_of_products_ingredients/all white tea products.jpg",
  "tea-043": "/images_of_products_ingredients/all white tea products.jpg",

  // ── Spices ───────────────────────────────────────────────────────────────
  "tea-058": "/images_of_products_ingredients/black pepper products .jpg",
  "tea-064": "/images_of_products_ingredients/All cinnamon stick products .jpg", // Cinnamon Pouches
  "tea-051": "/images_of_products_ingredients/All cinnamon stick products .jpg", // Cinnamon Stick Alba
  "tea-069": "/images_of_products_ingredients/tumeric spices products .jpg",
};

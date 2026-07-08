// Maps each product ID to its matching ingredient content image
// from public/images_of_products_ingredients/
// Products without a specific match use the generic fallback image.

const FALLBACK = "/images_of_products_ingredients/other all tea products .jpg";

export const ingredientImageMap: Record<string, string> = {
  // ── Black Tea Flower ─────────────────────────────────────────────────────
  "tea-002": "/images_of_products_ingredients/black tea flower product.jpg",

  // ── Black Tea with Curry Leaves ──────────────────────────────────────────
  "tea-056": "/images_of_products_ingredients/Black tea with curry leaves products.jpg",
  "tea-077": "/images_of_products_ingredients/Black tea with curry leaves products.jpg",

  // ── Black Tea with Gotukola ──────────────────────────────────────────────
  "tea-052": "/images_of_products_ingredients/Black tea with gotukola products.jpg",
  "tea-076": "/images_of_products_ingredients/Black tea with gotukola products.jpg",

  // ── Black Tea with Heen Bovitiya ─────────────────────────────────────────
  "tea-068": "/images_of_products_ingredients/black tea with heenbovitiya products.jpg",
  "tea-083": "/images_of_products_ingredients/black tea with heenbovitiya products.jpg",

  // ── Black Tea with Moringa ───────────────────────────────────────────────
  "tea-049": "/images_of_products_ingredients/black tea with moringa products.jpg",
  "tea-053": "/images_of_products_ingredients/black tea with moringa products.jpg",

  // ── Cardamom Flavoured Tea ───────────────────────────────────────────────
  "tea-006": "/images_of_products_ingredients/Cardamon Flavoured tea products.jpg",
  "tea-084": "/images_of_products_ingredients/Cardamon Flavoured tea products.jpg",

  // ── Hibiscus Tea ─────────────────────────────────────────────────────────
  "tea-089": "/images_of_products_ingredients/Ceylon hibiscus black tea products .jpg",
  "tea-023": "/images_of_products_ingredients/Ceylon hibiscus black tea products .jpg",

  // ── Mix Flower Tea ───────────────────────────────────────────────────────
  "tea-090": "/images_of_products_ingredients/Ceylon mix flower black tea products.jpg",
  "tea-091": "/images_of_products_ingredients/Ceylon mix flower black tea products.jpg",

  // ── Pure Black Tea (Premium / Supreme / English styles) ──────────────────
  "tea-007": "/images_of_products_ingredients/Ceylon premium tea products .jpg",
  "tea-009": "/images_of_products_ingredients/Ceylon premium tea products .jpg",
  "tea-074": "/images_of_products_ingredients/Ceylon premium tea products .jpg",
  "tea-080": "/images_of_products_ingredients/Ceylon premium tea products .jpg",

  // ── Rose Tea ─────────────────────────────────────────────────────────────
  "tea-092": "/images_of_products_ingredients/ceylon rose black tea products .jpg",
  "tea-038": "/images_of_products_ingredients/ceylon rose black tea products .jpg",

  // ── BOPF / BOPF SP ───────────────────────────────────────────────────────
  "tea-004": "/images_of_products_ingredients/BOPF sp.jpg",  // BOPF SP 200
  "tea-003": "/images_of_products_ingredients/BOPF.jpg",     // BOPF SP 400
  "tea-005": "/images_of_products_ingredients/BOPF sp.jpg",  // BOPF SP TB
  "tea-103": "/images_of_products_ingredients/BOPF sp.jpg",  // BOPF Special
  "tea-100": "/images_of_products_ingredients/BOPF sp.jpg",  // Pure Ceylon Tea Single Estate BOPF Sp

  // ── BOP products ─────────────────────────────────────────────────────────
  "tea-088": "/images_of_products_ingredients/all BOP products.jpg", // Ceylon Black Tea BOP
  "tea-010": "/images_of_products_ingredients/all BOP products.jpg", // Ceylon tea BOP
  "tea-035": "/images_of_products_ingredients/all BOP products.jpg", // Pure Ceylon Tea BOP

  // ── Ceylon Green Tea with Lemongrass / Lemongrass teas ───────────────────
  "tea-001": "/images_of_products_ingredients/all green lemon grass tea products .jpg",
  "tea-093": "/images_of_products_ingredients/all green lemon grass tea products .jpg",

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

  // ── FBOP ─────────────────────────────────────────────────────────────────
  "tea-019": "/images_of_products_ingredients/all FBOP tea products .jpg",

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

  // ── Purple Tea Roll ──────────────────────────────────────────────────────
  "tea-037": "/images_of_products_ingredients/purple tea products.jpg",

  // ── Silver Green Tea Roll ────────────────────────────────────────────────
  "tea-039": "/images_of_products_ingredients/silver green tea products .jpg",

  // ── Slim Beauty ──────────────────────────────────────────────────────────
  "tea-044": "/images_of_products_ingredients/all slim beauty products .jpg",
  "tea-112": "/images_of_products_ingredients/all slim beauty products .jpg",

  // ── Vita Glow ────────────────────────────────────────────────────────────
  "tea-042": "/images_of_products_ingredients/All vita glow products .jpg",

  // ── White Tea ────────────────────────────────────────────────────────────
  "tea-045": "/images_of_products_ingredients/all white tea products.jpg",
  "tea-043": "/images_of_products_ingredients/all white tea products.jpg",

  // ── Spices ───────────────────────────────────────────────────────────────
  "tea-058": "/images_of_products_ingredients/black pepper products .jpg",
  "tea-064": "/images_of_products_ingredients/all cinnamon powder spices product.jpg", // Cinnamon Pouches (ground/powder)
  "tea-051": "/images_of_products_ingredients/All cinnamon stick products .jpg",        // Cinnamon Stick Alba
  "tea-069": "/images_of_products_ingredients/tumeric spices products .jpg",

  // ── New catalog (tea-114 to tea-221) ─────────────────────────────────────
  "tea-114": "/images_of_products_ingredients/black pepper products .jpg", // Black Pepper 50g Pouch
  "tea-115": "/images_of_products_ingredients/all cinnamon powder spices product.jpg", // Cinnamon 50g Pouch
  "tea-116": "/images_of_products_ingredients/tumeric spices products .jpg", // Turmeric 50g Pouch
  "tea-117": "/images_of_products_ingredients/All cinnamon stick products .jpg", // Cinnamon Stick Alba 50g Roll
  "tea-118": "/images_of_products_ingredients/all BOP products.jpg", // BOP 100g Bag
  "tea-119": "/images_of_products_ingredients/all OP tea products .jpg", // OP 100g Bag
  "tea-120": "/images_of_products_ingredients/All OP1 tea products .jpg", // OP1 100g Bag
  "tea-121": "/images_of_products_ingredients/all OPA tea products.jpg", // OPA 100g Bag
  "tea-122": "/images_of_products_ingredients/all PEKOE tea products.jpg", // PEKOE 100g Bag
  "tea-123": "/images_of_products_ingredients/Black tea with curry leaves products.jpg", // Black Tea with Curry Leaves 50g Box
  "tea-124": "/images_of_products_ingredients/Black tea with gotukola products.jpg", // Black Tea with Gotukola 50g Box
  "tea-125": "/images_of_products_ingredients/black tea with heenbovitiya products.jpg", // Black Tea with Heen Bovitiya 50g Box
  "tea-126": "/images_of_products_ingredients/black tea with moringa products.jpg", // Black Tea with Moringa 50g Box
  "tea-127": "/images_of_products_ingredients/BOPF sp.jpg", // Pitigala BOPF Sp 200g Box
  "tea-128": "/images_of_products_ingredients/All cinnamon flavoured tea products .jpg", // Cinnamon Tea 100g Box
  "tea-129": "/images_of_products_ingredients/all earlygray tea products.jpg", // Earl Grey 100g Box
  "tea-130": "/images_of_products_ingredients/all FBOP tea products .jpg", // FBOP 100g Box
  "tea-131": "/images_of_products_ingredients/FF Ex sp .jpg", // FBOPF Extra Special 100g Box
  "tea-132": "/images_of_products_ingredients/FF sp.jpg", // FBOPF Special 100g Box
  "tea-133": "/images_of_products_ingredients/all ginger flavoured tea products .jpg", // Ginger Tea 100g Box
  "tea-134": "/images_of_products_ingredients/all greentea products .jpg", // Green Tea 50g Box
  "tea-135": "/images_of_products_ingredients/Ceylon hibiscus black tea products .jpg", // Hibiscus Tea 100g Box
  "tea-136": "/images_of_products_ingredients/all flavoured ceylon jasmine tea products .jpg", // Jasmine Tea 100g Box
  "tea-137": "/images_of_products_ingredients/all masala flavour products  .jpg", // Masala Tea 100g Box
  "tea-138": "/images_of_products_ingredients/all remain mint tea products .jpg", // Mint Tea 100g Box
  "tea-139": "/images_of_products_ingredients/all OP tea products .jpg", // OP 200g Box
  "tea-140": "/images_of_products_ingredients/All OP1 tea products .jpg", // OP1 200g Box
  "tea-141": "/images_of_products_ingredients/all OPA tea products.jpg", // OPA 200g Box
  "tea-142": "/images_of_products_ingredients/all PEKOE tea products.jpg", // PEKOE 200g Box
  "tea-143": "/images_of_products_ingredients/Ceylon premium tea products .jpg", // Premium Taste 50g Box
  "tea-144": "/images_of_products_ingredients/ceylon rose black tea products .jpg", // Rose Tea 100g Box
  "tea-145": "/images_of_products_ingredients/all soursop tea products .jpg", // Soursop Tea 100g Box
  "tea-146": "/images_of_products_ingredients/all vanilla tea products.jpg", // Vanilla Tea 100g Box
  "tea-147": "/images_of_products_ingredients/CHAKRA tea products .jpg", // Chakra Tea 25g Pouch
  "tea-148": "/images_of_products_ingredients/black tea flower product.jpg", // Black Tea Flower 25g Pouch
  "tea-149": "/images_of_products_ingredients/all BOP products.jpg", // BOP 200g Pouch
  "tea-150": "/images_of_products_ingredients/all BOP products.jpg", // Ceylon Black Tea BOP Broken Orange Pekoe 150g Pouch
  "tea-151": "/images_of_products_ingredients/Ceylon hibiscus black tea products .jpg", // Ceylon Hibiscus Black Tea 50g Pouch
  "tea-152": "/images_of_products_ingredients/Ceylon mix flower black tea products.jpg", // Ceylon Mix Flower Black Tea - Pink 50g Pouch
  "tea-153": "/images_of_products_ingredients/Ceylon mix flower black tea products.jpg", // Ceylon Mix Flower Black Tea - Yellow 50g Pouch
  "tea-154": "/images_of_products_ingredients/Ceylon premium tea products .jpg", // Ceylon Premium Tea 125g Pouch
  "tea-155": "/images_of_products_ingredients/ceylon rose black tea products .jpg", // Ceylon Rose Black Tea 50g Pouch
  "tea-156": "/images_of_products_ingredients/FF sp.jpg", // Ceylon Special FFSP 125g Pouch
  "tea-157": "/images_of_products_ingredients/Ceylon premium tea products .jpg", // Ceylon Supreme FBOP 150g Pouch
  "tea-158": "/images_of_products_ingredients/all earlygray tea products.jpg", // Earl Grey Tea 125g Pouch
  "tea-159": "/images_of_products_ingredients/Ceylon premium tea products .jpg", // English Afternoon Tea 125g Pouch
  "tea-160": "/images_of_products_ingredients/Ceylon premium tea products .jpg", // English Breakfast Tea 125g Pouch
  "tea-161": "/images_of_products_ingredients/FF Ex sp .jpg", // Extra Special FFEXSP 150g Pouch
  "tea-162": "/images_of_products_ingredients/all green lemon grass tea products .jpg", // Flavoured Ceylon Tea Lemongrass 100g Pouch
  "tea-163": "/images_of_products_ingredients/Flavoured ceylon blackberry tea products.jpg", // Flavoured Ceylon Tea Blackberry 125g Pouch
  "tea-164": "/images_of_products_ingredients/Cardamon Flavoured tea products.jpg", // Flavoured Ceylon Tea Cardamom 125g Pouch
  "tea-165": "/images_of_products_ingredients/All cinnamon flavoured tea products .jpg", // Flavoured Ceylon Tea Cinnamon 100g Pouch
  "tea-166": "/images_of_products_ingredients/all ginger flavoured tea products .jpg", // Flavoured Ceylon Tea Ginger 100g Pouch
  "tea-167": "/images_of_products_ingredients/flavoured ceylon honey tea products .jpg", // Flavoured Ceylon Tea Honey 125g Pouch
  "tea-168": "/images_of_products_ingredients/all flavoured ceylon jasmine tea products .jpg", // Flavoured Ceylon Tea Jasmine 125g Pouch
  "tea-169": "/images_of_products_ingredients/flavoured ceylon lemon tea products .jpg", // Flavoured Ceylon Tea Lemon 125g Pouch
  "tea-170": "/images_of_products_ingredients/flavoured ceylon lime tea products .jpg", // Flavoured Ceylon Tea Lime 125g Pouch
  "tea-171": "/images_of_products_ingredients/flavoured ceylon mango tea products .jpg", // Flavoured Ceylon Tea Mango 125g Pouch
  "tea-172": "/images_of_products_ingredients/all masala flavour products  .jpg", // Flavoured Ceylon Tea Masala 100g Pouch
  "tea-173": "/images_of_products_ingredients/all flavoured ceylon mixed fruits tea products .jpg", // Flavoured Ceylon Tea Mixed Fruit 125g Pouch
  "tea-174": "/images_of_products_ingredients/flavoured ceylon pepper mint tea products .jpg", // Flavoured Ceylon Tea Peppermint 125g Pouch
  "tea-175": "/images_of_products_ingredients/flavoured ceylon pineapple tea products .jpg", // Flavoured Ceylon Tea Pineapple 125g Pouch
  "tea-176": "/images_of_products_ingredients/flavoured ceylon pomegranate tea products .jpg", // Flavoured Ceylon Tea Pomegranate 125g Pouch
  "tea-177": "/images_of_products_ingredients/flavoured ceylon stawberry cream tea products .jpg", // Flavoured Ceylon Tea Strawberry Cream 125g Pouch
  "tea-178": "/images_of_products_ingredients/flavoured ceylon caramel tea products .jpg", // Flavoured Ceylon Tea Caramel 125g Pouch
  "tea-179": "/images_of_products_ingredients/flavoured ceylon peach tea products .jpg", // Flavoured Ceylon Tea Peach 125g Pouch
  "tea-180": "/images_of_products_ingredients/all green lemon grass tea products .jpg", // Flavoured Green Tea Lemongrass 100g Pouch
  "tea-181": "/images_of_products_ingredients/all greentea products .jpg", // Green Tea 200g Pouch
  "tea-182": "/images_of_products_ingredients/all OP tea products .jpg", // OP 200g Pouch
  "tea-183": "/images_of_products_ingredients/All OP1 tea products .jpg", // OP1 200g Pouch
  "tea-184": "/images_of_products_ingredients/all OPA tea products.jpg", // OPA 200g Pouch
  "tea-185": "/images_of_products_ingredients/all OPA tea products.jpg", // OPA Transparent 200g Pouch
  "tea-186": "/images_of_products_ingredients/all PEKOE tea products.jpg", // PEKOE 100g Pouch
  "tea-187": "/images_of_products_ingredients/all PEKOE tea products.jpg", // PEKOE 200g Pouch
  "tea-188": "/images_of_products_ingredients/all PINK tea products.jpg", // Pink Tea Single Estate Artisanal 25g Pouch
  "tea-189": "/images_of_products_ingredients/golden tea products.jpg", // Premium Golden Tips 20g Pouch
  "tea-190": "/images_of_products_ingredients/golden tea products.jpg", // Premium Golden Tips 40g Pouch
  "tea-191": "/images_of_products_ingredients/all OPA tea products.jpg", // Premium OPA Ceylon Tea 50g Pouch
  "tea-192": "/images_of_products_ingredients/silver tips tea .jpg", // Premium Silver Tips 20g Pouch
  "tea-193": "/images_of_products_ingredients/silver tips tea .jpg", // Premium Silver Tips 40g Pouch
  "tea-194": "/images_of_products_ingredients/purple tea products.jpg", // Purple Tea 100g Pouch
  "tea-195": "/images_of_products_ingredients/BOPF sp.jpg", // Single Estate BOPF Sp 200g Pouch
  "tea-196": "/images_of_products_ingredients/BOPF sp.jpg", // Single Estate BOPF Sp 400g Pouch
  "tea-197": "/images_of_products_ingredients/BOPF sp.jpg", // Single Estate BOPF Special 200g Pouch
  "tea-198": "/images_of_products_ingredients/BOPF sp.jpg", // Single Estate BOPF Special 400g Pouch
  "tea-199": "/images_of_products_ingredients/BOPF sp.jpg", // Single Estate Premium BOPF Special 400g Pouch
  "tea-200": "/images_of_products_ingredients/all slim beauty products .jpg", // Slim Beauty Black Tea 100g Pouch
  "tea-201": "/images_of_products_ingredients/All vita glow products .jpg", // Vita Glow Tea 25g Pouch
  "tea-202": "/images_of_products_ingredients/all white tea products.jpg", // White Tea 25g Pouch
  "tea-203": "/images_of_products_ingredients/Cardamon Flavoured tea products.jpg", // Cardamom 50g Roll
  "tea-204": "/images_of_products_ingredients/Black tea with curry leaves products.jpg", // Curry Leaves Flavoured Tea 50g Roll
  "tea-205": "/images_of_products_ingredients/golden tea products.jpg", // Golden Tips 50g Roll
  "tea-206": "/images_of_products_ingredients/Black tea with gotukola products.jpg", // Gotukola Flavoured Tea 50g Roll
  "tea-207": "/images_of_products_ingredients/black tea with heenbovitiya products.jpg", // Heen Bovitiya Flavoured Tea 50g Roll
  "tea-208": "/images_of_products_ingredients/all flavoured ceylon jasmine tea products .jpg", // Jasmine 50g Roll
  "tea-209": "/images_of_products_ingredients/karapincha green tea products .jpg", // Karapincha Green Tea 40g Roll
  "tea-210": "/images_of_products_ingredients/all remain mint tea products .jpg", // Mint 50g Roll
  "tea-211": "/images_of_products_ingredients/all flavoured ceylon mixed fruits tea products .jpg", // Mixed Fruit 50g Roll
  "tea-212": "/images_of_products_ingredients/black tea with moringa products.jpg", // Moringa Flavoured Tea 50g Roll
  "tea-213": "/images_of_products_ingredients/all other moringa tea products .jpg", // Moringa Green Tea 40g Roll
  "tea-214": "/images_of_products_ingredients/all orange flavoured tea products .jpg", // Orange 50g Roll
  "tea-215": "/images_of_products_ingredients/all PINK tea products.jpg", // Pink Tea 25g Roll
  "tea-216": "/images_of_products_ingredients/purple tea products.jpg", // Purple Tea 50g Roll
  "tea-217": "/images_of_products_ingredients/silver green tea products .jpg", // Silver Green Tea 50g Roll
  "tea-218": "/images_of_products_ingredients/silver tips tea .jpg", // Silver Tips 50g Roll
  "tea-219": "/images_of_products_ingredients/all slim beauty products .jpg", // Slim Beauty 50g Roll
  "tea-220": "/images_of_products_ingredients/all soursop tea products .jpg", // Soursop 50g Roll
  "tea-221": "/images_of_products_ingredients/all white tea products.jpg", // White Tea 25g Roll
};

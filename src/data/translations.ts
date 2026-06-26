export type Language = 'en' | 'es' | 'ru' | 'it' | 'fr' | 'ja' | 'zh';

export const translations = {
  en: {
    nav: { language: 'Language', home: 'Home', spices: 'Spices', search: 'Search', searchPlaceholder: 'Search products...', noProductsFound: 'No products found' },
    hero: {
      title: 'Ceylon Green Tea with Lemongrass',
      tagline: 'A refreshing blend of Ceylon Green Tea and zesty Lemongrass',
      cta: 'Let\'s Make Tea',
      scroll: 'Scroll to explore',
      exportQuality: 'Export Quality'
    },
    process: {
      title: 'The Art of Freshness',
      subtitle: 'From garden to cup, preserving nature’s zest',
      steps: [
        {
          title: 'Harvesting',
          description:
            'Hand-picked typically in the early morning to ensure the leaves remain cool and hydrated.'
        },
        {
          title: 'Steaming',
          description:
            'Gently steamed to half oxidation, preserving the vibrant green color and nutrients.'
        },
        {
          title: 'Rolling & Blending',
          description:
            'Rolled to release flavor, then masterfully blended with dried lemongrass stalks.'
        },
        {
          title: 'Drying',
          description:
            'Carefully dried to lock in the citrus aroma and antioxidant properties.'
        }]
    },
    ingredients: {
      title: 'Pure Ingredients',
      subtitle: "Nature's finest selection",
      composition: 'Composition',
      items: [
        {
          name: 'Green Tea Leaves',
          description: 'Premium Ceylon green tea, rich in catechins and antioxidants.'
        },
        {
          name: 'Natural Lemongrass',
          description: 'Dried lemongrass stalks for a citrusy, aromatic kick.'
        }]
    },
    benefits: {
      title: 'Health Benefits',
      subtitle: 'Wellness in every sip',
      items: [
        {
          title: 'Metabolism Boost',
          description: 'Green tea catechins help increase metabolic rate naturally.'
        },
        {
          title: 'Digestive Aid',
          description: 'Lemongrass is traditionally used to soothe digestion and bloating.'
        },
        {
          title: 'Focus & Calm',
          description: 'L-theanine promotes relaxation without drowsiness.'
        },
        {
          title: 'Natural Detox',
          description: 'Rich in antioxidants that help cleanse the body of toxins.'
        }]
    },
    brewing: {
      title: 'Perfect Brewing',
      subtitle: 'The ritual of preparation',
      steps: [
        {
          title: 'Boil Water',
          description: 'Heat fresh water to 80°C (176°F). Avoid boiling completely to protect delicate green tea leaves.'
        },
        {
          title: 'Add Tea',
          description: 'Add 1 teaspoon (2g) of tea blend per cup into your teapot or infuser.'
        },
        {
          title: 'Steep',
          description: 'Pour hot water and cover. Let it steep for 2 minutes for a light, refreshing taste.'
        },
        {
          title: 'Serve',
          description: 'Strain and serve hot. Garnish with a fresh stalk of lemongrass if desired.'
        }
      ]
    },
    price: {
      title: 'Purchase',
      subtitle: 'Choose your perfect blend',
      pack: 'Premium Pack',
      weight: '100g Loose Leaf',
      price: '$10.00',
      cta: 'Add to Cart',
      shipping: 'Free shipping worldwide',
      videoTitle: "Please take a moment to leave a review",
      videoDescription: 'Share Your Experience',
      perPack: '/ pack',
      trustedExcellence: 'Trusted Excellence'
    },
    footer: {
      rights: 'All rights reserved.',
      contact: 'Contact Us',
      connect: 'Connect',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service'
    },
    catalog: {
      discoverMore: 'Discover More',
      sections: [
        { title: 'Rose Tea', subtitle: 'Aromatic & Delicate', productName: 'Botanical Collection' },
        { title: 'FBOP Tea', subtitle: 'Premium & Aromatic', productName: 'Artisan Reserve' },
        { title: 'Ceylon BOP Tea', subtitle: 'Bold & Full-Bodied', productName: 'Heritage Estates' },
        { title: 'Cinnamon Tea', subtitle: 'Warm & Invigorating', productName: 'Spiced Wellness' }
      ]
    },
    homepage: {
      hero: {
        brandMarker: 'Since 1991 · Sri Lanka',
        headline1: 'The Art of',
        headline2: 'Ceylon Tea',
        subheading: 'Manufacturers & exporters of premium Ceylon tea and spices. Grown in the highlands. Crafted with generations of expertise.',
        ctaCatalog: 'Explore Catalog',
        ctaProducts: 'Our Products',
        scroll: 'Scroll',
      },
      stats: {
        premiumTeas: 'Premium Teas',
        languages: 'Languages',
        ceylonOrigin: 'Ceylon Origin',
        gradeQuality: 'Grade Quality',
      },
      featured: {
        label: 'Curated Selection',
        heading: 'Featured Teas',
        tags: ['Floral & Delicate', 'Premium Grade', 'Warm & Soothing'] as [string, string, string],
        discover: 'Discover',
        viewAll: 'View All Products',
      },
      heritage: {
        label: 'Our Heritage',
        heading1: 'Rooted in the highlands',
        heading2: 'of Sri Lanka',
        description: 'For generations, Athukorala Group has crafted teas of uncompromised quality from the pristine slopes of Ceylon. Each blend carries the essence of our land — rich, aromatic, and authentic.',
        pillars: ['Pure Ceylon', 'Export Grade', 'Sustainable'] as [string, string, string],
      },
      spices: {
        label: 'Also Available',
        badge: 'Premium Spices',
        heading1: 'Discover Our',
        heading2: 'Spice Collection',
        description: 'From aromatic cinnamon to rare native spices — explore our curated collection of Ceylon spices, sourced with the same commitment to quality as our teas.',
        cta: 'Explore Spices',
      },
      catalogCta: {
        label: 'Cinematic Experience',
        heading1: 'Step into the',
        heading2: 'Full Collection',
        description: 'Experience our teas through a cinematic editorial journey — crafted to bring the essence of each blend to life.',
        cta: 'Enter Catalog',
      },
    }
  },
  es: {
    nav: { language: 'Idioma', home: 'Inicio', spices: 'Especias', search: 'Buscar', searchPlaceholder: 'Buscar productos...', noProductsFound: 'No se encontraron productos' },
    hero: {
      title: 'Té Verde de Ceilán con Limoncillo',
      tagline: 'Una mezcla refrescante de Té Verde de Ceilán y Limoncillo vibrante',
      cta: 'Vamos a preparar té',
      scroll: 'Desplázate para explorar',
      exportQuality: 'Calidad de Exportación'
    },
    process: {
      title: 'El Arte de la Frescura',
      subtitle: 'Del jardín a la taza, preservando la esencia de la naturaleza',
      steps: [
        {
          title: 'Cosecha',
          description: 'Recogido a mano típicamente temprano en la mañana para asegurar que las hojas permanezcan frescas e hidratadas.'
        },
        {
          title: 'Vaporizado',
          description: 'Vaporizado suavemente para detener la oxidación, preservando el vibrante color verde y los nutrientes.'
        },
        {
          title: 'Enrollado y Mezcla',
          description: 'Enrollado para liberar sabor, luego mezclado magistralmente con tallos de limoncillo seco.'
        },
        {
          title: 'Secado',
          description: 'Secado cuidadosamente para sellar el aroma cítrico y las propiedades antioxidantes.'
        }]
    },
    ingredients: {
      title: 'Ingredientes Puros',
      subtitle: 'La mejor selección de la naturaleza',
      composition: 'Composición',
      items: [
        {
          name: 'Hojas de Té Verde',
          description: 'Té verde de Ceilán premium, rico en catequinas y antioxidantes.'
        },
        {
          name: 'Limoncillo Natural',
          description: 'Tallos de limoncillo seco para un toque cítrico y aromático.'
        }]
    },
    benefits: {
      title: 'Beneficios para la Salud',
      subtitle: 'Bienestar en cada sorbo',
      items: [
        {
          title: 'Impulso Metabólico',
          description: 'Las catequinas del té verde ayudan a aumentar la tasa metabólica naturalmente.'
        },
        {
          title: 'Ayuda Digestiva',
          description: 'El limoncillo se usa tradicionalmente para calmar la digestión y la hinchazón.'
        },
        {
          title: 'Enfoque y Calma',
          description: 'La L-teanina promueve la relajación sin somnolencia.'
        },
        {
          title: 'Detox Natural',
          description: 'Rico en antioxidantes que ayudan a limpiar el cuerpo de toxinas.'
        }]
    },
    brewing: {
      title: 'Preparación Perfecta',
      subtitle: 'El ritual de preparación',
      steps: [
        {
          title: 'Hervir Agua',
          description: 'Caliente agua fresca a 80°C. Evite hervir completamente para proteger las delicadas hojas de té verde.'
        },
        {
          title: 'Añadir Té',
          description: 'Añada 1 cucharadita (2g) de mezcla de té por taza en su tetera o infusor.'
        },
        {
          title: 'Infundir',
          description: 'Vierta agua caliente y cubra. Deje reposar 2 minutos para un sabor ligero y refrescante.'
        },
        {
          title: 'Servir',
          description: 'Cuele y sirva caliente. Decore con un tallo fresco de limoncillo si lo desea.'
        }
      ]
    },
    price: {
      title: 'Compra',
      subtitle: 'Elige tu mezcla perfecta',
      pack: 'Paquete Premium',
      weight: '100g Hoja Suelta',
      price: '$10.00',
      cta: 'Añadir al Carrito',
      shipping: 'Envío gratis a todo el mundo',
      videoTitle: "Por favor, tómese un momento para dejar una reseña",
      videoDescription: 'Comparte Tu Experiencia',
      perPack: '/ paquete',
      trustedExcellence: 'Excelencia de Confianza'
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      contact: 'Contáctanos',
      connect: 'Conectar',
      privacyPolicy: 'Política de Privacidad',
      termsOfService: 'Términos de Servicio'
    },
    catalog: {
      discoverMore: 'Descubrir Más',
      sections: [
        { title: 'Té de Rosa', subtitle: 'Aromático y Delicado', productName: 'Colección Botánica' },
        { title: 'Té FBOP', subtitle: 'Premium y Aromático', productName: 'Reserva Artesanal' },
        { title: 'Té BOP de Ceilán', subtitle: 'Intenso y Con Cuerpo', productName: 'Haciendas Heritage' },
        { title: 'Té de Canela', subtitle: 'Cálido e Invigorante', productName: 'Bienestar Especiado' }
      ]
    },
    homepage: {
      hero: {
        brandMarker: 'Desde 1991 · Sri Lanka',
        headline1: 'El Arte del',
        headline2: 'Té de Ceilán',
        subheading: 'Fabricantes y exportadores de té y especias premium de Ceilán. Cultivado en las tierras altas. Elaborado con generaciones de experiencia.',
        ctaCatalog: 'Explorar Catálogo',
        ctaProducts: 'Nuestros Productos',
        scroll: 'Desplazar',
      },
      stats: {
        premiumTeas: 'Tés Premium',
        languages: 'Idiomas',
        ceylonOrigin: 'Origen Ceilán',
        gradeQuality: 'Calidad Export',
      },
      featured: {
        label: 'Selección Curada',
        heading: 'Tés Destacados',
        tags: ['Floral y Delicado', 'Calidad Premium', 'Cálido y Reconfortante'] as [string, string, string],
        discover: 'Descubrir',
        viewAll: 'Ver Todos los Productos',
      },
      heritage: {
        label: 'Nuestra Herencia',
        heading1: 'Arraigados en las tierras altas',
        heading2: 'de Sri Lanka',
        description: 'Por generaciones, Athukorala Group ha elaborado tés de calidad incomparable en las laderas prístinas de Ceilán. Cada mezcla lleva la esencia de nuestra tierra — rica, aromática y auténtica.',
        pillars: ['Ceilán Puro', 'Grado Exportación', 'Sostenible'] as [string, string, string],
      },
      spices: {
        label: 'También Disponible',
        badge: 'Especias Premium',
        heading1: 'Descubra Nuestra',
        heading2: 'Colección de Especias',
        description: 'Desde la canela aromática hasta las raras especias nativas — explore nuestra colección curada de especias de Ceilán.',
        cta: 'Explorar Especias',
      },
      catalogCta: {
        label: 'Experiencia Cinematográfica',
        heading1: 'Adéntrese en la',
        heading2: 'Colección Completa',
        description: 'Experimente nuestros tés a través de un viaje editorial cinematográfico, creado para dar vida a cada mezcla.',
        cta: 'Entrar al Catálogo',
      },
    }
  },
  fr: {
    nav: { language: 'Langue', home: 'Accueil', spices: 'Épices', search: 'Rechercher', searchPlaceholder: 'Rechercher des produits...', noProductsFound: 'Aucun produit trouvé' },
    hero: {
      title: 'Thé Vert Ceylan à la Citronnelle',
      tagline: 'Un mélange rafraîchissant de Thé Vert Ceylan et de Citronnelle zesty',
      cta: 'Préparons du thé', // Let's make tea
      scroll: 'Défiler pour explorer',
      exportQuality: "Qualité d'Exportation"
    },
    process: {
      title: "L'Art de la Fraîcheur",
      subtitle: 'Du jardin à la tasse, préservant le zeste de la nature',
      steps: [
        {
          title: 'Récolte',
          description: "Cueilli à la main typiquement tôt le matin pour s'assurer que les feuilles restent fraîches et hydratées."
        },
        {
          title: 'Vaporisation',
          description: "Doucement vaporisé pour arrêter l'oxydation, préservant la couleur verte vibrante et les nutriments."
        },
        {
          title: 'Roulage et Mélange',
          description: 'Roulé pour libérer la saveur, puis magistralement mélangé avec des tiges de citronnelle séchées.'
        },
        {
          title: 'Séchage',
          description: "Soigneusement séché pour sceller l'arôme d'agrumes et les propriétés antioxydantes."
        }]
    },
    ingredients: {
      title: 'Ingrédients Purs',
      subtitle: 'La meilleure sélection de la nature',
      composition: 'Composition',
      items: [
        {
          name: 'Feuilles de Thé Vert',
          description: 'Thé vert Ceylan premium, riche en catéchines et antioxydants.'
        },
        {
          name: 'Citronnelle Naturelle',
          description: 'Tiges de citronnelle séchée pour un coup de fouet citronné et aromatique.'
        }]
    },
    benefits: {
      title: 'Bienfaits pour la Santé',
      subtitle: 'Le bien-être dans chaque gorgée',
      items: [
        {
          title: 'Boost Métabolique',
          description: 'Les catéchines du thé vert aident à augmenter le taux métabolique naturellement.'
        },
        {
          title: 'Aide Digestive',
          description: 'La citronnelle est traditionnellement utilisée pour apaiser la digestion et les ballonnements.'
        },
        {
          title: 'Focus et Calme',
          description: 'La L-théanine favorise la relaxation sans somnolence.'
        },
        {
          title: 'Détox Naturelle',
          description: 'Riche en antioxydants qui aident à nettoyer le corps des toxines.'
        }]
    },
    brewing: {
      title: 'Infusion Parfaite',
      subtitle: 'Le rituel de préparation',
      steps: [
        {
          title: 'Bouillir l\'Eau',
          description: 'Chauffez l\'eau fraîche à 80°C. Évitez l\'ébullition complète pour protéger les délicates feuilles de thé vert.'
        },
        {
          title: 'Ajouter le Thé',
          description: 'Ajoutez 1 cuillère à café (2g) de mélange de thé par tasse dans votre théière ou infuseur.'
        },
        {
          title: 'Infuser',
          description: 'Versez l\'eau chaude et couvrez. Laissez infuser 2 minutes pour un goût léger et rafraîchissant.'
        },
        {
          title: 'Servir',
          description: 'Filtrez et servez chaud. Garnissez d\'une tige de citronnelle fraîche si vous le souhaitez.'
        }
      ]
    },
    price: {
      title: 'Achat',
      subtitle: 'Choisissez votre mélange parfait',
      pack: 'Paquet Premium',
      weight: '100g Feuilles Mobiles',
      price: '$10.00',
      cta: 'Ajouter au Panier',
      shipping: 'Livraison gratuite dans le monde entier',
      videoTitle: "Prenez un moment pour laisser un avis, s'il vous plaît",
      videoDescription: 'Partagez Votre Expérience',
      perPack: '/ paquet',
      trustedExcellence: 'Excellence de Confiance'
    },
    footer: {
      rights: 'Tous droits réservés.',
      contact: 'Contactez-nous',
      connect: 'Connexion',
      privacyPolicy: 'Politique de Confidentialité',
      termsOfService: "Conditions d'utilisation"
    },
    catalog: {
      discoverMore: 'Découvrir Plus',
      sections: [
        { title: 'Thé à la Rose', subtitle: 'Aromatique et Délicat', productName: 'Collection Botanique' },
        { title: 'Thé FBOP', subtitle: 'Premium et Aromatique', productName: 'Réserve Artisanale' },
        { title: 'Thé BOP de Ceylan', subtitle: 'Corsé et Charpenté', productName: 'Domaines Heritage' },
        { title: 'Thé à la Cannelle', subtitle: 'Chaud et Tonifiant', productName: 'Bien-être Épicé' }
      ]
    },
    homepage: {
      hero: {
        brandMarker: 'Depuis 1991 · Sri Lanka',
        headline1: "L'Art du",
        headline2: 'Thé de Ceylan',
        subheading: "Fabricants et exportateurs de thé et épices premium de Ceylan. Cultivé dans les hauts plateaux. Élaboré avec des générations d'expertise.",
        ctaCatalog: 'Explorer le Catalogue',
        ctaProducts: 'Nos Produits',
        scroll: 'Défiler',
      },
      stats: {
        premiumTeas: 'Thés Premium',
        languages: 'Langues',
        ceylonOrigin: 'Origine Ceylan',
        gradeQuality: 'Qualité Export',
      },
      featured: {
        label: 'Sélection Curatée',
        heading: 'Thés Phares',
        tags: ['Floral et Délicat', 'Qualité Premium', 'Chaud et Apaisant'] as [string, string, string],
        discover: 'Découvrir',
        viewAll: 'Voir Tous les Produits',
      },
      heritage: {
        label: 'Notre Héritage',
        heading1: 'Enracinés dans les hauts plateaux',
        heading2: 'du Sri Lanka',
        description: "Depuis des générations, le Groupe Athukorala élabore des thés d'une qualité irréprochable sur les versants immaculés de Ceylan. Chaque mélange porte l'essence de notre terre — riche, aromatique et authentique.",
        pillars: ['Pur Ceylan', 'Grade Export', 'Durable'] as [string, string, string],
      },
      spices: {
        label: 'Aussi Disponible',
        badge: 'Épices Premium',
        heading1: 'Découvrez Notre',
        heading2: "Collection d'Épices",
        description: "De la cannelle aromatique aux épices rares — explorez notre collection curatée d'épices de Ceylan, sélectionnées avec le même soin que nos thés.",
        cta: 'Explorer les Épices',
      },
      catalogCta: {
        label: 'Expérience Cinématique',
        heading1: 'Entrez dans la',
        heading2: 'Collection Complète',
        description: "Découvrez nos thés à travers un voyage éditorial cinématique — conçu pour donner vie à l'essence de chaque mélange.",
        cta: 'Accéder au Catalogue',
      },
    }
  },
  it: {
    nav: { language: 'Lingua', home: 'Home', spices: 'Spezie', search: 'Cerca', searchPlaceholder: 'Cerca prodotti...', noProductsFound: 'Nessun prodotto trovato' },
    hero: {
      title: 'Tè Verde Ceylon con Citronella',
      tagline: 'Una miscela rinfrescante di Tè Verde Ceylon e Citronella vivace',
      cta: 'Facciamo il tè',
      scroll: 'Scorri per esplorare',
      exportQuality: 'Qualità di Esportazione'
    },
    process: {
      title: "L'Arte della Freschezza",
      subtitle: 'Dal giardino alla tazza, preservando l\'essenza della natura',
      steps: [
        {
          title: 'Raccolta',
          description: 'Raccolto a mano tipicamente al mattino presto per assicurare che le foglie rimangano fresche e idratate.'
        },
        {
          title: 'Vaporizzazione',
          description: "Vaporizzato delicatamente per fermare l'ossidazione, preservando il colore verde vibrante e i nutrienti."
        },
        {
          title: 'Arrotolamento e Miscelazione',
          description: 'Arrotolato per rilasciare il sapore, poi sapientemente miscelato con gambi di citronella essiccata.'
        },
        {
          title: 'Essiccazione',
          description: "Accuratamente essiccato per sigillare l'aroma di agrumi e le proprietà antiossidanti."
        }]
    },
    ingredients: {
      title: 'Ingredienti Puri',
      subtitle: 'La migliore selezione della natura',
      composition: 'Composizione',
      items: [
        {
          name: 'Foglie di Tè Verde',
          description: 'Tè verde Ceylon premium, ricco di catechine e antiossidanti.'
        },
        {
          name: 'Citronella Naturale',
          description: 'Gambi di citronella essiccata per un tocco agrumato e aromatico.'
        }]
    },
    benefits: {
      title: 'Benefici per la Salute',
      subtitle: 'Benessere in ogni sorso',
      items: [
        {
          title: 'Spinta Metabolica',
          description: 'Le catechine del tè verde aiutano ad aumentare il metabolismo naturalmente.'
        },
        {
          title: 'Aiuto Digestivo',
          description: 'La citronella è tradizionalmente usata per lenire la digestione e il gonfiore.'
        },
        {
          title: 'Focus e Calma',
          description: 'La L-teanina promuove il rilassamento senza sonnolenza.'
        },
        {
          title: 'Detox Naturale',
          description: 'Ricco di antiossidanti che aiutano a purificare il corpo dalle tossine.'
        }]
    },
    brewing: {
      title: 'Infusione Perfetta',
      subtitle: 'Il rituale della preparazione',
      steps: [
        {
          title: 'Bollire Acqua',
          description: 'Scaldare l\'acqua fresca a 80°C. Evitare l\'ebollizione completa per proteggere le delicate foglie di tè verde.'
        },
        {
          title: 'Aggiungere Tè',
          description: 'Aggiungere 1 cucchiaino (2g) di miscela di tè per tazza nella teiera o infusore.'
        },
        {
          title: 'Infusione',
          description: 'Versare acqua calda e coprire. Lasciare in infusione per 2 minuti per un gusto leggero e rinfrescante.'
        },
        {
          title: 'Servire',
          description: 'Filtrare e servire caldo. Guarnire con un gambo fresco di citronella se desiderato.'
        }
      ]
    },
    price: {
      title: 'Acquista',
      subtitle: 'Scegli la tua miscela perfetta',
      pack: 'Pacchetto Premium',
      weight: '100g Foglie Sfuse',
      price: '$10.00',
      cta: 'Aggiungi al Carrello',
      shipping: 'Spedizione gratuita in tutto il mondo',
      videoTitle: "Per favore, prenditi un momento per lasciare una recensione",
      videoDescription: 'Condividi la Tua Esperienza',
      perPack: '/ confezione',
      trustedExcellence: 'Eccellenza Fidata'
    },
    footer: {
      rights: 'Tutti i diritti riservati.',
      contact: 'Contattaci',
      connect: 'Connettiti',
      privacyPolicy: 'Politica sulla Privacy',
      termsOfService: 'Termini di Servizio'
    },
    catalog: {
      discoverMore: 'Scopri di Più',
      sections: [
        { title: 'Tè alla Rosa', subtitle: 'Aromatico e Delicato', productName: 'Collezione Botanica' },
        { title: 'Tè FBOP', subtitle: 'Premium e Aromatico', productName: 'Riserva Artigianale' },
        { title: 'Tè BOP Ceylon', subtitle: 'Intenso e Corposo', productName: 'Tenute Heritage' },
        { title: 'Tè alla Cannella', subtitle: 'Caldo e Tonificante', productName: 'Benessere Speziato' }
      ]
    },
    homepage: {
      hero: {
        brandMarker: 'Dal 1991 · Sri Lanka',
        headline1: "L'Arte del",
        headline2: 'Tè di Ceylon',
        subheading: 'Produttori ed esportatori di pregiato tè e spezie di Ceylon. Coltivato sulle alture. Realizzato con generazioni di esperienza.',
        ctaCatalog: 'Esplora il Catalogo',
        ctaProducts: 'I Nostri Prodotti',
        scroll: 'Scorri',
      },
      stats: {
        premiumTeas: 'Tè Premium',
        languages: 'Lingue',
        ceylonOrigin: 'Origine Ceylon',
        gradeQuality: 'Qualità Export',
      },
      featured: {
        label: 'Selezione Curata',
        heading: 'Tè in Evidenza',
        tags: ['Floreale e Delicato', 'Qualità Premium', 'Caldo e Avvolgente'] as [string, string, string],
        discover: 'Scopri',
        viewAll: 'Vedi Tutti i Prodotti',
      },
      heritage: {
        label: 'Il Nostro Patrimonio',
        heading1: 'Radicati sulle alture',
        heading2: 'dello Sri Lanka',
        description: "Da generazioni, il Gruppo Athukorala crea tè di qualità senza compromessi sulle pendici incontaminate di Ceylon. Ogni miscela porta con sé l'essenza della nostra terra — ricca, aromatica e autentica.",
        pillars: ['Puro Ceylon', 'Grado Export', 'Sostenibile'] as [string, string, string],
      },
      spices: {
        label: 'Disponibile Anche',
        badge: 'Spezie Premium',
        heading1: 'Scopri la Nostra',
        heading2: 'Collezione di Spezie',
        description: "Dalla cannella aromatica alle rare spezie native — esplora la nostra selezione curata di spezie ceylonesi, con lo stesso impegno per la qualità dei nostri tè.",
        cta: 'Esplora le Spezie',
      },
      catalogCta: {
        label: 'Esperienza Cinematica',
        heading1: 'Entra nella',
        heading2: 'Collezione Completa',
        description: "Vivi i nostri tè attraverso un viaggio editoriale cinematico — creato per dare vita all'essenza di ogni miscela.",
        cta: 'Entra nel Catalogo',
      },
    }
  },
  ru: {
    nav: { language: 'Язык', home: 'Главная', spices: 'Специи', search: 'Поиск', searchPlaceholder: 'Поиск продуктов...', noProductsFound: 'Продукты не найдены' },
    hero: {
      title: 'Цейлонский Зеленый Чай с Лемонграссом',
      tagline: 'Освежающая смесь цейлонского зеленого чая и яркого лемонграсса',
      cta: 'Давайте заварим чай', // Let's brew/make tea
      scroll: 'Прокрутите, чтобы узнать больше',
      exportQuality: 'Экспортное Качество'
    },
    process: {
      title: 'Искусство Свежести',
      subtitle: 'От сада до чашки, сохраняя природную энергию',
      steps: [
        {
          title: 'Сбор урожая',
          description: 'Собирается вручную обычно рано утром, чтобы листья оставались прохладными и увлажненными.'
        },
        {
          title: 'Пропаривание',
          description: 'Бережно пропаривается для остановки окисления, сохраняя яркий зеленый цвет и питательные вещества.'
        },
        {
          title: 'Скручивание и Смешивание',
          description: 'Скручивается для раскрытия вкуса, затем мастерски смешивается с сушеными стеблями лемонграсса.'
        },
        {
          title: 'Сушка',
          description: 'Тщательно сушится, чтобы запечатать цитрусовый аромат и антиоксидантные свойства.'
        }]
    },
    ingredients: {
      title: 'Чистые Ингредиенты',
      subtitle: 'Лучший выбор природы',
      composition: 'Состав',
      items: [
        {
          name: 'Листья Зеленого Чая',
          description: 'Премиальный цейлонский зеленый чай, богатый катехинами и антиоксидантами.'
        },
        {
          name: 'Натуральный Лемонграсс',
          description: 'Сушеные стебли лемонграсса для цитрусового ароматного вкуса.'
        }]
    },
    benefits: {
      title: 'Польза для Здоровья',
      subtitle: 'Здоровье в каждом глотке',
      items: [
        {
          title: 'Ускорение Метаболизма',
          description: 'Катехины зеленого чая помогают естественно ускорить обмен веществ.'
        },
        {
          title: 'Помощь Пищеварению',
          description: 'Лемонграсс традиционно используется для улучшения пищеварения и уменьшения вздутия.'
        },
        {
          title: 'Фокус и Спокойствие',
          description: 'L-теанин способствует расслаблению без сонливости.'
        },
        {
          title: 'Натуральный Детокс',
          description: 'Богат антиоксидантами, которые помогают очищать организм от токсинов.'
        }]
    },
    brewing: {
      title: 'Идеальное Заваривание',
      subtitle: 'Ритуал приготовления',
      steps: [
        {
          title: 'Нагреть Воду',
          description: 'Нагрейте свежую воду до 80°C. Не заваривайте крутым кипятком, чтобы защитить нежные листья зеленого чая.'
        },
        {
          title: 'Добавить Чай',
          description: 'Добавьте 1 чайную ложку (2г) чайной смеси на чашку в ваш чайник или инфузер.'
        },
        {
          title: 'Заварить',
          description: 'Залейте горячей водой и накройте. Дайте настояться 2 минуты для легкого и освежающего вкуса.'
        },
        {
          title: 'Подать',
          description: 'Процедите и подавайте горячим. Украсьте свежим стеблем лемонграсса по желанию.'
        }
      ]
    },
    price: {
      title: 'Купить',
      subtitle: 'Выберите свой идеальный купаж',
      pack: 'Премиум Упаковка',
      weight: '100г Листовой Чай',
      price: '$10.00',
      cta: 'В Корзину',
      shipping: 'Бесплатная доставка по всему миру',
      videoTitle: "Пожалуйста, найдите время, чтобы оставить отзыв",
      videoDescription: 'Поделитесь Своим Опытом',
      perPack: '/ пачка',
      trustedExcellence: 'Проверенное Качество'
    },
    footer: {
      rights: 'Все права защищены.',
      contact: 'Связаться с нами',
      connect: 'Соединиться',
      privacyPolicy: 'Политика конфиденциальности',
      termsOfService: 'Условия использования'
    },
    catalog: {
      discoverMore: 'Узнать Больше',
      sections: [
        { title: 'Чай с Розой', subtitle: 'Ароматный и Нежный', productName: 'Ботаническая Коллекция' },
        { title: 'Чай FBOP', subtitle: 'Премиум и Ароматный', productName: 'Резерв Мастера' },
        { title: 'Цейлонский Чай BOP', subtitle: 'Насыщенный и Полнотелый', productName: 'Поместья Heritage' },
        { title: 'Чай с Корицей', subtitle: 'Тёплый и Бодрящий', productName: 'Пряное Здоровье' }
      ]
    },
    homepage: {
      hero: {
        brandMarker: 'С 1991 года · Шри-Ланка',
        headline1: 'Искусство',
        headline2: 'Цейлонского Чая',
        subheading: 'Производители и экспортёры премиального цейлонского чая и специй. Выращен в нагорьях. Создан с многовековым мастерством.',
        ctaCatalog: 'Смотреть Каталог',
        ctaProducts: 'Наши Продукты',
        scroll: 'Прокрутить',
      },
      stats: {
        premiumTeas: 'Чаёв Премиум',
        languages: 'Языков',
        ceylonOrigin: 'Родина — Цейлон',
        gradeQuality: 'Экспортный Класс',
      },
      featured: {
        label: 'Избранная Коллекция',
        heading: 'Избранные Чаи',
        tags: ['Цветочный и Нежный', 'Премиум Класс', 'Тёплый и Успокаивающий'] as [string, string, string],
        discover: 'Узнать',
        viewAll: 'Все Продукты',
      },
      heritage: {
        label: 'Наше Наследие',
        heading1: 'Укоренённые в нагорьях',
        heading2: 'Шри-Ланки',
        description: 'На протяжении поколений Athukorala Group создаёт чаи непревзойдённого качества на нетронутых склонах Цейлона. Каждый купаж несёт в себе сущность нашей земли — насыщенную, ароматную и подлинную.',
        pillars: ['Чистый Цейлон', 'Экспортный Класс', 'Устойчивость'] as [string, string, string],
      },
      spices: {
        label: 'Также Доступно',
        badge: 'Премиум Специи',
        heading1: 'Откройте Нашу',
        heading2: 'Коллекцию Специй',
        description: 'От ароматной корицы до редких местных специй — исследуйте нашу тщательно отобранную коллекцию цейлонских специй.',
        cta: 'Смотреть Специи',
      },
      catalogCta: {
        label: 'Кинематографический Опыт',
        heading1: 'Войдите в',
        heading2: 'Полную Коллекцию',
        description: 'Откройте для себя наши чаи через кинематографическое редакционное путешествие — созданное, чтобы передать суть каждого купажа.',
        cta: 'Открыть Каталог',
      },
    }
  },
  ja: {
    nav: { language: '言語', home: 'ホーム', spices: 'スパイス', search: '検索', searchPlaceholder: '製品を検索...', noProductsFound: '製品が見つかりません' },
    hero: {
      title: 'レモングラス入りセイロン緑茶',
      tagline: 'セイロン緑茶と爽やかなレモングラスの鮮やかなブレンド',
      cta: 'お茶を淹れましょう', // Let's brew/make tea
      scroll: 'スクロールして探索',
      exportQuality: '輸出品質'
    },
    process: {
      title: '鮮度の芸術',
      subtitle: '庭からカップへ、自然をそのままに',
      steps: [
        {
          title: '収穫',
          description: '茶葉の鮮度と保水性を保つため、通常、早朝に手摘みされます。'
        },
        {
          title: '蒸し',
          description: '酸化を止めるために優しく蒸し、鮮やかな緑色と栄養素を保ちます。'
        },
        {
          title: '揉捻とブレンド',
          description: '風味を引き出すために揉まれ、乾燥レモングラスの茎と巧みにブレンドされます。'
        },
        {
          title: '乾燥',
          description: '柑橘系の香りと抗酸化成分を閉じ込めるために慎重に乾燥させます。'
        }]
    },
    ingredients: {
      title: '純粋な成分',
      subtitle: '自然からの最高の贈り物',
      composition: '成分',
      items: [
        {
          name: '緑茶の葉',
          description: 'プレミアムセイロン緑茶。カテキンと抗酸化物質が豊富です。'
        },
        {
          name: '天然レモングラス',
          description: '柑橘系の香りと刺激のための乾燥レモングラスの茎。'
        }]
    },
    benefits: {
      title: '健康への利点',
      subtitle: '一口ごとのウェルネス',
      items: [
        {
          title: '代謝促進',
          description: '緑茶のカテキンは自然に代謝を高めるのに役立ちます。'
        },
        {
          title: '消化サポート',
          description: 'レモングラスは消化の悩みや膨満感を和らげるために伝統的に使用されています。'
        },
        {
          title: '集中と落ち着き',
          description: 'L-テアニンは眠気を催さずにリラックスを促進します。'
        },
        {
          title: 'ナチュラルデトックス',
          description: '体から毒素を排出するのに役立つ抗酸化物質が豊富です。'
        }]
    },
    brewing: {
      title: '完璧な淹れ方',
      subtitle: '準備の儀式',
      steps: [
        {
          title: 'お湯を沸かす',
          description: '新鮮な水を80°Cに温めます。繊細な茶葉を傷めないよう、完全に沸騰させないでください。'
        },
        {
          title: '茶葉を入れる',
          description: 'ティーポットや茶こしに、1杯につき小さじ1杯（2g）の茶葉を加えます。'
        },
        {
          title: '蒸らす',
          description: 'お湯を注いで蓋をし、2分間蒸らします。軽やかで爽やかな味わいが楽しめます。'
        },
        {
          title: '提供する',
          description: '濾して温かいうちに淹れます。お好みで新鮮なレモングラスを添えて。'
        }
      ]
    },
    price: {
      title: '購入',
      subtitle: '完璧なブレンドを選ぶ',
      pack: 'プレミアムパック',
      weight: '100g リーフティー',
      price: '$10.00',
      cta: 'カートに追加',
      shipping: '全世界送料無料',
      videoTitle: "よろしければ、レビューをお願いします",
      videoDescription: 'あなたの体験を共有する',
      perPack: '/ パック',
      trustedExcellence: '信頼の品質'
    },
    footer: {
      rights: '全著作権所有。',
      contact: 'お問い合わせ',
      connect: '接続',
      privacyPolicy: 'プライバシーポリシー',
      termsOfService: '利用規約'
    },
    catalog: {
      discoverMore: 'さらに見る',
      sections: [
        { title: 'ローズティー', subtitle: '芳醇で繊細', productName: 'ボタニカルコレクション' },
        { title: 'FBOPティー', subtitle: 'プレミアムで芳醇', productName: 'アルティザンリザーブ' },
        { title: 'セイロンBOPティー', subtitle: '濃厚でコクのある', productName: 'ヘリテージエステーツ' },
        { title: 'シナモンティー', subtitle: '温かく活力を与える', productName: 'スパイスウェルネス' }
      ]
    },
    homepage: {
      hero: {
        brandMarker: '1991年創業・スリランカ',
        headline1: 'セイロン茶の',
        headline2: '美の世界へ',
        subheading: 'プレミアムセイロン茶とスパイスの製造・輸出メーカー。高地で育まれ、受け継がれてきた職人の技で作られています。',
        ctaCatalog: 'カタログを見る',
        ctaProducts: '製品一覧',
        scroll: 'スクロール',
      },
      stats: {
        premiumTeas: 'プレミアム茶',
        languages: '言語対応',
        ceylonOrigin: 'セイロン産',
        gradeQuality: '輸出グレード',
      },
      featured: {
        label: '厳選コレクション',
        heading: '注目のお茶',
        tags: ['フローラル＆繊細', 'プレミアムグレード', '温かく穏やか'] as [string, string, string],
        discover: '詳細を見る',
        viewAll: '全製品を見る',
      },
      heritage: {
        label: '私たちの歴史',
        heading1: 'スリランカの',
        heading2: '高地に根ざして',
        description: '代々にわたり、アトゥコーララグループはセイロンの清純な斜面から妥協のない品質のお茶を作り続けています。すべてのブレンドには、私たちの土地の本質が宿っています。',
        pillars: ['純粋なセイロン', '輸出グレード', 'サステナブル'] as [string, string, string],
      },
      spices: {
        label: 'その他の商品',
        badge: 'プレミアムスパイス',
        heading1: '私たちの',
        heading2: 'スパイスコレクション',
        description: '芳醇なシナモンから希少なスパイスまで、厳選されたセイロンスパイスのコレクションをご覧ください。',
        cta: 'スパイスを探る',
      },
      catalogCta: {
        label: 'シネマティック体験',
        heading1: 'コレクションの',
        heading2: '世界へ',
        description: '各ブレンドの本質を伝えるシネマティックな編集の旅でお茶を体験してください。',
        cta: 'カタログへ入る',
      },
    }
  },
  zh: {
    nav: { language: '语言', home: '首页', spices: '香料', search: '搜索', searchPlaceholder: '搜索产品...', noProductsFound: '未找到产品' },
    hero: {
      title: '柠檬草 锡兰绿茶',
      tagline: '锡兰绿茶与鲜活柠檬草的清爽融合',
      cta: '来泡茶吧', // Let's make/brew tea
      scroll: '向下滚动探索',
      exportQuality: '出口品质'
    },
    process: {
      title: '鲜度的艺术',
      subtitle: '从茶园到茶杯，保留大自然的本真',
      steps: [
        {
          title: '采摘',
          description: '通常在清晨手工采摘，以确保茶叶保持清凉和水分。'
        },
        {
          title: '揉捻与拼配',
          description: '通过蒸汽温和杀青以停止氧化，保留鲜艳的绿色和营养成分。'
        },
        {
          title: '揉捻与拼配',
          description: '揉捻以释放风味，然后精妙地与干柠檬草茎拼配。'
        },
        {
          title: '干燥',
          description: '精心干燥以锁住柑橘香气及抗氧化特性。'
        }]
    },
    ingredients: {
      title: '纯净成分',
      subtitle: '大自然的精选',
      composition: '成分',
      items: [
        { name: '绿茶叶', description: '优质锡兰绿茶，富含儿茶素和抗氧化剂。' },
        { name: '天然柠檬草', description: '干柠檬草茎，带来清新柑橘香气。' }]
    },
    benefits: {
      title: '健康益处',
      subtitle: '每一口的健康',
      items: [
        {
          title: '促进代谢',
          description: '绿茶儿茶素有助于自然、有效地提高新陈代谢。'
        },
        { title: '助消化', description: '柠檬草传统上用于舒缓消化不适和减轻腹胀。' },
        { title: '专注与宁静', description: 'L-茶氨酸有助于在不产生困意的情况下放松身心。' },
        { title: '自然排毒', description: '富含抗氧化剂，有助于清除体内的毒素。' }]
    },
    brewing: {
      title: '完美冲泡',
      subtitle: '准备的仪式',
      steps: [
        {
          title: '烧水',
          description: '将新鲜水加热至80°C (176°F)。避免完全煮沸以保护娇嫩的绿茶叶。'
        },
        {
          title: '投茶',
          description: '按每杯1茶匙（2克）的量将茶叶放入茶壶或茶叶过滤器中。'
        },
        {
          title: '浸泡',
          description: '注入热水并盖上盖子。浸泡2分钟以获得清爽淡雅的口感。'
        },
        {
          title: '享用',
          description: '过滤后趁热饮用。可根据喜好点缀新鲜香茅。'
        }
      ]
    },
    price: {
      title: '购买',
      subtitle: '选择您的完美混合',
      pack: '高级包装',
      weight: '100克 散叶茶',
      price: '$10.00',
      cta: '加入购物车',
      shipping: '全球免费配送',
      videoTitle: "请花点时间留下您的评价",
      videoDescription: '分享您的体验',
      perPack: '/ 包',
      trustedExcellence: '信赖的卓越'
    },
    footer: {
      rights: '版权所有。',
      contact: '联系我们',
      connect: '联系',
      privacyPolicy: '隐私政策',
      termsOfService: '服务条款'
    },
    catalog: {
      discoverMore: '探索更多',
      sections: [
        { title: '玫瑰茶', subtitle: '芳香细腻', productName: '植物系列' },
        { title: 'FBOP茶', subtitle: '优质芳香', productName: '工匠珍藏' },
        { title: '锡兰BOP茶', subtitle: '醇厚饱满', productName: '传承庄园' },
        { title: '肉桂茶', subtitle: '温暖提神', productName: '香料健康' }
      ]
    },
    homepage: {
      hero: {
        brandMarker: '创立于1991年 · 斯里兰卡',
        headline1: '锡兰茶的',
        headline2: '艺术世界',
        subheading: '优质锡兰茶叶与香料的制造商及出口商。生长于高地，以世代传承的工艺精制而成。',
        ctaCatalog: '探索目录',
        ctaProducts: '我们的产品',
        scroll: '滚动',
      },
      stats: {
        premiumTeas: '优质茶叶',
        languages: '语言版本',
        ceylonOrigin: '锡兰产地',
        gradeQuality: '出口品质',
      },
      featured: {
        label: '精选系列',
        heading: '精选茶叶',
        tags: ['花香细腻', '优质精品', '温暖舒缓'] as [string, string, string],
        discover: '了解更多',
        viewAll: '查看全部产品',
      },
      heritage: {
        label: '我们的传承',
        heading1: '根植于斯里兰卡',
        heading2: '高地之间',
        description: '数代以来，阿图科拉拉集团在锡兰纯净的山坡上精制不妥协品质的茶叶。每一款茶都承载着我们土地的精髓——醇厚、芳香、地道。',
        pillars: ['纯正锡兰', '出口级别', '可持续发展'] as [string, string, string],
      },
      spices: {
        label: '同样可选',
        badge: '优质香料',
        heading1: '探索我们的',
        heading2: '香料系列',
        description: '从芳香肉桂到稀有土著香料——探索我们精心策划的锡兰香料系列，品质与茶叶同等卓越。',
        cta: '探索香料',
      },
      catalogCta: {
        label: '电影级体验',
        heading1: '进入',
        heading2: '完整系列',
        description: '通过电影化的编辑之旅体验我们的茶叶，将每种混合茶的精华带入生活。',
        cta: '进入目录',
      },
    }
  }
};
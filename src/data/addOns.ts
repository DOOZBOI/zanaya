import { AddOn } from '../types';

export const addOns: Record<string, AddOn[]> = {
  hindu: [
    {
      id: 'marigold-garlands',
      name: 'Fresh Marigold Garlands',
      description: 'Traditional marigold garlands for Hindu ceremonies',
      price: 500,
      category: 'flowers'
    },
    {
      id: 'tulsi-leaves',
      name: 'Sacred Tulsi Leaves',
      description: 'Holy basil leaves for purification rituals',
      price: 200,
      category: 'flowers'
    },
    {
      id: 'sandalwood-paste',
      name: 'Sandalwood Paste',
      description: 'Pure sandalwood paste for tilaka and rituals',
      price: 800,
      category: 'incense'
    },
    {
      id: 'rudraksha-mala',
      name: 'Rudraksha Mala',
      description: 'Sacred rudraksha beads for prayers',
      price: 1500,
      category: 'other'
    },
    {
      id: 'panchgavya',
      name: 'Panchgavya Set',
      description: 'Five sacred cow products for purification',
      price: 1200,
      category: 'other'
    },
    {
      id: 'sandalwood-logs',
      name: 'Sandalwood Logs',
      description: 'Premium sandalwood for cremation pyre',
      price: 8000,
      category: 'wood'
    },
    {
      id: 'brass-kalash',
      name: 'Brass Kalash',
      description: 'Sacred brass pot for water rituals',
      price: 2000,
      category: 'urns'
    }
  ],
  muslim: [
    {
      id: 'attar-set',
      name: 'Premium Attar Set',
      description: 'Traditional Islamic perfumes for the deceased',
      price: 1200,
      category: 'incense'
    },
    {
      id: 'miswak',
      name: 'Miswak (Siwak)',
      description: 'Traditional teeth cleaning stick',
      price: 150,
      category: 'other'
    },
    {
      id: 'camphor-blocks',
      name: 'Pure Camphor Blocks',
      description: 'High-quality camphor for purification',
      price: 400,
      category: 'incense'
    },
    {
      id: 'white-cotton-kafan',
      name: 'Premium White Cotton Kafan',
      description: 'High-quality seamless white shroud',
      price: 1800,
      category: 'shroud'
    },
    {
      id: 'prayer-mat',
      name: 'Prayer Mat',
      description: 'Clean prayer mat for funeral prayers',
      price: 800,
      category: 'other'
    },
    {
      id: 'rose-water',
      name: 'Rose Water',
      description: 'Pure rose water for washing rituals',
      price: 300,
      category: 'other'
    }
  ],
  christian: [
    {
      id: 'white-lilies',
      name: 'White Lilies Bouquet',
      description: 'Symbol of restored innocence and peace',
      price: 1500,
      category: 'flowers'
    },
    {
      id: 'wooden-cross',
      name: 'Wooden Cross',
      description: 'Handcrafted wooden cross for the service',
      price: 1200,
      category: 'other'
    },
    {
      id: 'holy-candles',
      name: 'Blessed Candles Set',
      description: 'Church-blessed candles for the vigil',
      price: 600,
      category: 'other'
    },
    {
      id: 'rosary-beads',
      name: 'Rosary Beads',
      description: 'Sacred rosary for prayers',
      price: 800,
      category: 'other'
    },
    {
      id: 'frankincense',
      name: 'Frankincense',
      description: 'Sacred frankincense for the ceremony',
      price: 900,
      category: 'incense'
    },
    {
      id: 'white-casket-lining',
      name: 'White Satin Casket Lining',
      description: 'Premium white satin for casket interior',
      price: 2500,
      category: 'shroud'
    }
  ],
  sikh: [
    {
      id: 'khanda-symbol',
      name: 'Khanda Symbol',
      description: 'Sacred Sikh symbol for the ceremony',
      price: 1000,
      category: 'other'
    },
    {
      id: 'five-ks-set',
      name: 'Complete Five Ks Set',
      description: 'Kesh, Kara, Kanga, Kachera, Kirpan set',
      price: 3000,
      category: 'other'
    },
    {
      id: 'saffron-cloth',
      name: 'Saffron Colored Cloth',
      description: 'Traditional saffron cloth for Sikh rites',
      price: 800,
      category: 'shroud'
    },
    {
      id: 'guru-granth-sahib-path',
      name: 'Guru Granth Sahib for Path',
      description: 'Sacred text for continuous reading',
      price: 2000,
      category: 'other'
    },
    {
      id: 'karah-prasad',
      name: 'Karah Prasad Ingredients',
      description: 'Ingredients for sacred offering',
      price: 500,
      category: 'other'
    }
  ],
  jain: [
    {
      id: 'white-flowers-only',
      name: 'White Flowers (Ahimsa)',
      description: 'Cruelty-free white flowers for Jain ceremonies',
      price: 800,
      category: 'flowers'
    },
    {
      id: 'pure-ghee',
      name: 'Pure Cow Ghee',
      description: 'Organic, pure ghee for rituals',
      price: 600,
      category: 'other'
    },
    {
      id: 'jain-incense',
      name: 'Jain Approved Incense',
      description: 'Cruelty-free, plant-based incense sticks',
      price: 400,
      category: 'incense'
    },
    {
      id: 'white-cotton-only',
      name: 'Pure White Cotton Cloth',
      description: 'Ahimsa-compliant white cotton for wrapping',
      price: 1000,
      category: 'shroud'
    },
    {
      id: 'crystal-water-vessel',
      name: 'Crystal Water Vessel',
      description: 'Pure crystal vessel for sacred water',
      price: 2500,
      category: 'urns'
    }
  ],
  buddhist: [
    {
      id: 'lotus-flowers',
      name: 'Fresh Lotus Flowers',
      description: 'Sacred lotus flowers for Buddhist ceremonies',
      price: 1200,
      category: 'flowers'
    },
    {
      id: 'prayer-flags',
      name: 'Tibetan Prayer Flags',
      description: 'Traditional prayer flags for blessings',
      price: 600,
      category: 'other'
    },
    {
      id: 'singing-bowl',
      name: 'Tibetan Singing Bowl',
      description: 'Sacred bowl for meditation and prayers',
      price: 3500,
      category: 'other'
    },
    {
      id: 'buddhist-incense',
      name: 'Buddhist Temple Incense',
      description: 'Traditional monastery-grade incense',
      price: 700,
      category: 'incense'
    },
    {
      id: 'saffron-robes',
      name: 'Saffron Colored Robes',
      description: 'Traditional saffron robes for the ceremony',
      price: 2200,
      category: 'shroud'
    },
    {
      id: 'meditation-beads',
      name: 'Buddhist Meditation Beads',
      description: '108 bead mala for prayers',
      price: 1500,
      category: 'other'
    }
  ],
  parsi: [
    {
      id: 'sacred-fire-items',
      name: 'Sacred Fire Ceremony Items',
      description: 'Items needed for Zoroastrian fire rituals',
      price: 2500,
      category: 'other'
    },
    {
      id: 'sandalwood-chips',
      name: 'Sandalwood Chips',
      description: 'Premium sandalwood for sacred fire',
      price: 1800,
      category: 'wood'
    },
    {
      id: 'white-sudreh',
      name: 'White Sudreh',
      description: 'Sacred white undergarment',
      price: 1200,
      category: 'shroud'
    },
    {
      id: 'kushti-cord',
      name: 'Sacred Kushti Cord',
      description: 'Holy cord worn around the waist',
      price: 800,
      category: 'other'
    },
    {
      id: 'rose-water-premium',
      name: 'Premium Rose Water',
      description: 'High-quality rose water for purification',
      price: 500,
      category: 'other'
    },
    {
      id: 'silver-vessel',
      name: 'Silver Ceremonial Vessel',
      description: 'Pure silver vessel for sacred rituals',
      price: 5000,
      category: 'urns'
    }
  ]
};
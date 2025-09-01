import { RitualKit } from '../types';

export const ritualKits: Record<string, RitualKit[]> = {
  hindu: [
    {
      id: 'hindu-basic',
      name: 'Basic Hindu Last Rites Kit',
      description: 'Essential items for traditional Hindu funeral rites',
      items: [
        'Sacred thread (Janeu)', 'Gangajal (Holy water)', 'Incense sticks',
        'Camphor', 'Sesame seeds', 'Barley', 'White cloth', 'Ghee lamp'
      ],
      price: 2500
    }
  ],
  muslim: [
    {
      id: 'muslim-basic',
      name: 'Basic Islamic Burial Kit',
      description: 'Essential items for Islamic funeral rites',
      items: [
        'White shroud (Kafan)', 'Attar (Perfume)', 'Camphor',
        'Cotton wool', 'Soap for washing', 'Clean white sheets'
      ],
      price: 2000
    }
  ],
  christian: [
    {
      id: 'christian-basic',
      name: 'Basic Christian Funeral Kit',
      description: 'Essential items for Christian funeral service',
      items: [
        'Cross', 'Holy water', 'White candles', 'Flowers',
        'Prayer book', 'White cloth', 'Incense'
      ],
      price: 2200
    }
  ],
  sikh: [
    {
      id: 'sikh-basic',
      name: 'Basic Sikh Funeral Kit',
      description: 'Essential items for Sikh last rites',
      items: [
        'Five Ks items', 'White cloth', 'Ghee for cremation',
        'Flowers', 'Incense', 'Sacred thread'
      ],
      price: 2300
    }
  ],
  jain: [
    {
      id: 'jain-basic',
      name: 'Basic Jain Funeral Kit',
      description: 'Essential items for Jain funeral rites',
      items: [
        'White cloth', 'Flowers (no leather products)', 'Incense',
        'Sacred water', 'Pure ghee', 'Cotton items'
      ],
      price: 2400
    }
  ],
  buddhist: [
    {
      id: 'buddhist-basic',
      name: 'Basic Buddhist Funeral Kit',
      description: 'Essential items for Buddhist funeral ceremony',
      items: [
        'Lotus flowers', 'Incense sticks', 'Candles',
        'Prayer flags', 'White cloth', 'Sacred water'
      ],
      price: 2100
    }
  ],
  parsi: [
    {
      id: 'parsi-basic',
      name: 'Basic Parsi Funeral Kit',
      description: 'Essential items for Zoroastrian funeral rites',
      items: [
        'Sacred fire items', 'White garments', 'Sandalwood',
        'Rose water', 'Sacred thread', 'Pure substances'
      ],
      price: 2800
    }
  ]
};
import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'grave-digger',
    name: 'Grave Digging Service',
    description: 'Professional grave digging with proper rituals',
    category: 'provider',
    religions: ['muslim', 'christian', 'parsi'],
    price: 3000
  },
  {
    id: 'cremation-helper',
    name: 'Cremation Assistant',
    description: 'Experienced cremation ground assistance',
    category: 'provider',
    religions: ['hindu', 'sikh', 'jain', 'buddhist'],
    price: 2500
  },
  {
    id: 'hindu-priest',
    name: 'Hindu Priest/Pandit',
    description: 'Experienced priest for Hindu last rites',
    category: 'religious',
    religions: ['hindu'],
    price: 5000
  },
  {
    id: 'muslim-cleric',
    name: 'Islamic Cleric/Imam',
    description: 'Qualified Imam for Islamic funeral prayers',
    category: 'religious',
    religions: ['muslim'],
    price: 4000
  },
  {
    id: 'christian-priest',
    name: 'Christian Priest/Pastor',
    description: 'Ordained minister for Christian funeral service',
    category: 'religious',
    religions: ['christian'],
    price: 4500
  },
  {
    id: 'sikh-granthi',
    name: 'Sikh Granthi',
    description: 'Qualified Granthi for Sikh funeral rites',
    category: 'religious',
    religions: ['sikh'],
    price: 4200
  },
  {
    id: 'jain-acharya',
    name: 'Jain Acharya/Monk',
    description: 'Respected Jain religious guide',
    category: 'religious',
    religions: ['jain'],
    price: 4800
  },
  {
    id: 'buddhist-monk',
    name: 'Buddhist Monk',
    description: 'Experienced Buddhist monk for ceremonies',
    category: 'religious',
    religions: ['buddhist'],
    price: 4300
  },
  {
    id: 'parsi-priest',
    name: 'Parsi Priest',
    description: 'Qualified Zoroastrian priest',
    category: 'religious',
    religions: ['parsi'],
    price: 6000
  },
  {
    id: 'freezer-van',
    name: 'Freezer Van Service',
    description: 'Temperature-controlled transportation',
    category: 'transportation',
    religions: ['hindu', 'muslim', 'christian', 'sikh', 'jain', 'buddhist', 'parsi'],
    price: 8000
  },
  {
    id: 'ambulance',
    name: 'Ambulance Service',
    description: 'Professional ambulance with trained staff',
    category: 'transportation',
    religions: ['hindu', 'muslim', 'christian', 'sikh', 'jain', 'buddhist', 'parsi'],
    price: 6000
  },
  {
    id: 'hearse',
    name: 'Hearse Vehicle',
    description: 'Dignified hearse for final journey',
    category: 'transportation',
    religions: ['hindu', 'muslim', 'christian', 'sikh', 'jain', 'buddhist', 'parsi'],
    price: 7000
  },
  {
    id: 'ritual-delivery',
    name: 'Ritual Items Delivery',
    description: 'Same-day delivery of all ritual essentials',
    category: 'delivery',
    religions: ['hindu', 'muslim', 'christian', 'sikh', 'jain', 'buddhist', 'parsi'],
    price: 500
  },
  {
    id: 'flower-decoration',
    name: 'Flower Decoration Service',
    description: 'Professional flower arrangement and decoration',
    category: 'provider',
    religions: ['hindu', 'muslim', 'christian', 'sikh', 'jain', 'buddhist', 'parsi'],
    price: 3500
  },
  {
    id: 'photography',
    name: 'Memorial Photography',
    description: 'Respectful documentation of the ceremony',
    category: 'provider',
    religions: ['hindu', 'christian', 'sikh', 'buddhist'],
    price: 4000
  }
];
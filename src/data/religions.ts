import { Religion } from '../types';

export const religions: Religion[] = [
  {
    id: 'hindu',
    name: 'Hindu',
    subCommunities: [
      'Brahmin', 'Rajput', 'Vaishya', 'Kayastha', 'Maratha', 'Reddy', 
      'Nair', 'Gowda', 'Patel', 'Jat', 'Yadav', 'Other'
    ]
  },
  {
    id: 'muslim',
    name: 'Muslim',
    subCommunities: [
      'Sunni', 'Shia', 'Ahmadiyya', 'Sufi', 'Other'
    ]
  },
  {
    id: 'christian',
    name: 'Christian',
    subCommunities: [
      'Catholic', 'Protestant', 'Orthodox', 'Baptist', 'Methodist', 
      'Presbyterian', 'Pentecostal', 'Other'
    ]
  },
  {
    id: 'sikh',
    name: 'Sikh',
    subCommunities: [
      'Khalsa', 'Sahajdhari', 'Udasi', 'Nirankari', 'Other'
    ]
  },
  {
    id: 'jain',
    name: 'Jain',
    subCommunities: [
      'Digambara', 'Svetambara', 'Sthanakwasi', 'Terapanthi', 'Other'
    ]
  },
  {
    id: 'buddhist',
    name: 'Buddhist',
    subCommunities: [
      'Theravada', 'Mahayana', 'Vajrayana', 'Zen', 'Other'
    ]
  },
  {
    id: 'parsi',
    name: 'Parsi',
    subCommunities: [
      'Zoroastrian', 'Irani', 'Other'
    ]
  },
  {
    id: 'other',
    name: 'Other',
    subCommunities: ['Please specify in notes']
  }
];
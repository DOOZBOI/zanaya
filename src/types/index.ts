export interface UserSelection {
  religion: string;
  subCommunity: string;
  region: string;
  ritualKit: RitualKit;
  addOns: AddOn[];
  services: Service[];
  personalDetails: PersonalDetails;
}

export interface Religion {
  id: string;
  name: string;
  subCommunities: string[];
}

export interface RitualKit {
  id: string;
  name: string;
  description: string;
  items: string[];
  price: number;
}

export interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'flowers' | 'incense' | 'shroud' | 'wood' | 'urns' | 'other';
}

export interface Service {
  id: string;
  name: string;
  description: string;
  category: 'provider' | 'religious' | 'transportation' | 'delivery';
  religions: string[];
  price: number;
}

export interface PersonalDetails {
  fullName: string;
  phoneNumber: string;
  address: string;
  specialNotes: string;
}

export type WizardStep = 'home' | 'religion' | 'community' | 'region' | 'kit' | 'services' | 'details' | 'confirmation';
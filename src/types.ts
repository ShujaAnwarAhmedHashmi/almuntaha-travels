export type Currency = 'PKR' | 'USD';

export type PackageCategory = 'pakistan' | 'international';

export type UmrahCategory = 'Economy' | 'Standard' | 'Executive' | 'VIP' | 'Family';

export interface HotelInfo {
  name: string;
  distance: string;
  rating?: string;
  details?: string;
}

export interface SharingPricing {
  sharingType: 'Sharing' | 'Quad' | 'Triple' | 'Double' | 'Single';
  price: string;
}

export interface TravelPackage {
  id: string;
  name: string;
  type: 'hajj' | 'umrah';
  category: PackageCategory | UmrahCategory;
  currency: Currency;
  price: string;
  priceNote?: string;
  duration: string;
  dates?: string;
  makkahHotel: HotelInfo;
  madinahHotel: HotelInfo;
  roomTypes: string[];
  sharingPrices?: SharingPricing[];
  transport: string;
  flights: string;
  meals: string;
  visa: string;
  inclusions: string[];
  exclusions: string[];
  specialFeatures: string[];
  status?: 'Available' | 'Filling Fast' | 'Limited Slots' | 'Waitlist';
  badge?: string;
  itinerarySummary?: string[];
  importantNotes?: string[];
}

export interface ContactDetails {
  companyName: string;
  tagline: string;
  subTagline: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  whatsappNumber2?: string;
  whatsappDisplay2?: string;
  phoneNumber: string;
  phoneDisplay: string;
  email: string;
  address: string;
  cityCountry: string;
  facebookUrl: string;
  instagramUrl: string;
}

export interface TrustItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface PartnerCompany {
  id: string;
  name: string;
  type: string;
  tagline?: string;
  badge?: string;
}

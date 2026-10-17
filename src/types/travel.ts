export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  region: 'North' | 'South' | 'West' | 'East' | 'Islands';
  duration: string;
  days: number;
  nights: number;
  locations: string[];
  price: number;
  samplePriceDisplay: string;
  rating: number;
  reviewsCount: number;
  image: string;
  imageAlt: string;
  isPopular?: boolean;
  category: 'Family' | 'Honeymoon' | 'Heritage' | 'Adventure' | 'Pilgrimage';
  inclusions: {
    icon: string;
    label: string;
  }[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    meals: string;
    stay: string;
    highlights: string[];
  }[];
  overview: string;
  bestTimeToVisit: string;
}

export interface DestinationItem {
  id: string;
  name: string;
  badge: string;
  badgeType: 'primary' | 'secondary';
  subLocations: string;
  temp: string;
  tempIcon: string;
  bestMonths: string;
  fromPrice: number;
  fromPriceDisplay: string;
  image: string;
  imageAlt: string;
  description: string;
  highlights: string[];
  idealDuration: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  tour: string;
  avatarText: string;
  avatarBg: string;
  stars: number;
  comment: string;
  verifiedLabel: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SearchQuery {
  destination: string;
  departureCity: string;
  travelDate: string;
  guestsRooms: string;
  maxBudget?: number;
}

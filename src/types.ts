export interface GymConfig {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  rating: string;
  reviewCount: string;
  address: string;
  landmark: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  mapsUrl: string;
  instagramUrl: string;
  coachName: string;
  coachTitle: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  duration: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface ProgramItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'personal' | 'combat' | 'group' | 'functional';
  highlights: string[];
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface TransformationItem {
  id: string;
  title: string;
  story: string;
  quote: string;
  reviewerName: string;
  verifiedReview: boolean;
  image: string;
  tag: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  text: string;
  timeAgo: string;
  highlight: string;
  avatarBg?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'STUDIO' | 'TRAINING' | 'BOXING' | 'GROUP FITNESS' | 'TRANSFORMATIONS' | 'COACH';
  imageUrl: string;
  caption: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

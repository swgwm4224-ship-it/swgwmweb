export type BusinessType =
  | 'Restaurant'
  | 'Shop'
  | 'Construction'
  | 'Hotel'
  | 'Professional Service'
  | 'Education'
  | 'Company'
  | 'Other';

export type WebsiteType =
  | 'Business Website'
  | 'Landing Page'
  | 'Portfolio'
  | 'Online Menu'
  | 'Product Website'
  | 'Custom Website';

export interface ShowcaseData {
  id: string;
  category: string;
  label: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  color: string;
  accentBg: string;
  heroText: string;
  features: string[];
  sampleItems: { name: string; detail: string; price?: string }[];
  metrics: { label: string; value: string }[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  industry: string;
  description: string;
  image: string;
  features: string[];
  turnaround: string;
  score: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  popular?: boolean;
  features: string[];
  idealFor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

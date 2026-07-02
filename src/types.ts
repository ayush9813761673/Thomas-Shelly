export interface Listing {
  id: string;
  title: string;
  suburb: string;
  priceGuide?: string;
  soldPrice?: string;
  status: 'sold-auction' | 'sold-private' | 'active' | 'off-market';
  beds: number;
  baths: number;
  cars: number;
  description: string;
  highlights: string[];
  imageUrl: string;
  dateSold?: string;
}

export interface OffMarketProperty {
  id: string;
  suburb: string;
  priceGuide: string;
  beds: number;
  baths: number;
  cars: number;
  exclusiveNotes: string;
  imageUrl: string;
  confidentialCode: string;
}

export interface BookingInquiry {
  name: string;
  email: string;
  phone: string;
  propertyAddress?: string;
  estimatedValue: string;
  timeline: 'immediate' | '3-6-months' | 'just-curious';
  message: string;
  preferredConsultation: 'in-person' | 'virtual' | 'phone';
}

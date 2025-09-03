export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  linkUrl: string;
  features: string[];
  price?: string;
}

export const services: Service[] = [
  {
    id: 'airport',
    title: 'Airport Transfers',
    description: 'Professional airport pickup and drop-off services',
    imageUrl: '/serviceImage1.jpg',
    imageAlt: 'Airport Transfer Service',
    linkUrl: '/services#airport',
    features: [
      'Dublin Airport transfers',
      'Cork Airport transfers', 
      'Flight monitoring',
      'Meet & greet service',
      'Luggage assistance'
    ],
    price: 'From €50'
  },
  {
    id: 'business',
    title: 'Business Travel',
    description: 'Executive transportation for business meetings',
    imageUrl: '/serviceImage2.jpg',
    imageAlt: 'Business Travel Service',
    linkUrl: '/services#business',
    features: [
      'Corporate accounts',
      'Executive vehicles',
      'Punctual service',
      'WiFi available',
      'Newspaper service'
    ],
    price: 'From €40/hour'
  },
  {
    id: 'occasions',
    title: 'Special Occasions',
    description: 'Luxury transport for weddings and events',
    imageUrl: '/serviceImage3.jpg',
    imageAlt: 'Special Occasions Service',
    linkUrl: '/services#occasions',
    features: [
      'Wedding transport',
      'Event transfers',
      'Group bookings',
      'Luxury vehicles',
      'Red carpet service'
    ],
    price: 'From €100'
  }
];

export const testimonials = [
  {
    name: 'Sarah O\'Connor',
    role: 'Business Executive',
    content: 'Hennessy Chauffeurs provides exceptional service. Always punctual and professional.',
    rating: 5
  },
  {
    name: 'Michael Walsh',
    role: 'Wedding Couple',
    content: 'Made our wedding day perfect with their luxury service and attention to detail.',
    rating: 5
  },
  {
    name: 'David Murphy',
    role: 'Frequent Traveler',
    content: 'Reliable airport transfers every time. Highly recommend for business travel.',
    rating: 5
  }
];

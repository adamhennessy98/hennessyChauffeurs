import type { ImageMetadata } from 'astro';
import scenicImg from '../assets/tours/scenic.webp';
import wildAtlanticImg from '../assets/tours/wild-atlantic-way.webp';
import heritageImg from '../assets/tours/heritage.webp';
import dublinImg from '../assets/tours/dublin.webp';
import northernIrelandImg from '../assets/tours/northern-ireland.webp';
import rootsImg from '../assets/tours/roots.webp';
import golfImg from '../assets/tours/golf.webp';

export interface TourValueProp {
  icon: string;
  title: string;
  description: string;
}

export interface SignatureTour {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: string;
  image: ImageMetadata;
  imageAlt: string;
}

export const tourValueProps: TourValueProp[] = [
  {
    icon: 'person_pin_circle',
    title: 'Your driver, your guide, your friend',
    description:
      'One dedicated chauffeur for the entire trip who learns your interests and pace. No rotating drivers, no scripted coach commentary.',
  },
  {
    icon: 'landscape',
    title: 'See the scenery, not the road',
    description:
      'No stress about driving on the left or navigating narrow rural roads — relax while a local who knows every shortcut handles it.',
  },
  {
    icon: 'explore',
    title: 'Local knowledge, not tourist traps',
    description:
      'Hidden gems, the right pub for live trad music, and well-timed stops to beat the crowds.',
  },
  {
    icon: 'tune',
    title: 'Completely bespoke',
    description:
      'No fixed departures, no strangers, weather-adaptive, door-to-door from your hotel.',
  },
];

export { scenicImg };

export const signatureTours: SignatureTour[] = [
  {
    id: 'wild-atlantic-way',
    title: 'Wild Atlantic Way Coastal',
    description: 'Cliffs of Moher, dramatic headlands, and the untamed beauty of Ireland\'s west coast.',
    duration: '8–10 hrs',
    type: 'Coastal',
    image: wildAtlanticImg,
    imageAlt: 'Atlantic coastline and cliffs on the Wild Atlantic Way.',
  },
  {
    id: 'ancient-ireland',
    title: 'Ancient Ireland Heritage',
    description: 'Newgrange, the Rock of Cashel, and monastic sites that tell Ireland\'s oldest stories.',
    duration: '6–8 hrs',
    type: 'Heritage',
    image: heritageImg,
    imageAlt: 'Rolling Irish countryside and historic landscapes.',
  },
  {
    id: 'dublin-wicklow',
    title: 'Dublin City & Wicklow',
    description: 'Trinity College, Dublin Castle, and the Wicklow Mountains — city culture and mountain air.',
    duration: '5–7 hrs',
    type: 'City & mountains',
    image: dublinImg,
    imageAlt: 'Dublin city landmarks and Wicklow countryside on a private chauffeur tour.',
  },
  {
    id: 'game-of-thrones',
    title: 'Game of Thrones & Northern Ireland',
    description: 'The Giant\'s Causeway, Causeway Coast, and iconic filming locations across the north.',
    duration: 'Full day',
    type: 'Northern Ireland',
    image: northernIrelandImg,
    imageAlt: 'Northern Ireland coastline and Causeway Coast scenery.',
  },
  {
    id: 'ancestry-roots',
    title: 'Ancestry & Roots',
    description: 'Trace your Irish family heritage — we build the itinerary around your records and the places that matter to you.',
    duration: 'Custom',
    type: 'Personal',
    image: rootsImg,
    imageAlt: 'Irish village and countryside for ancestry and roots touring.',
  },
  {
    id: 'golf-links',
    title: 'Golf & Links Touring',
    description: 'Chauffeur-led golf days and multi-course trips — parklands, classic links, and everything arranged around your tee sheet.',
    duration: 'Custom',
    type: 'Golf',
    image: golfImg,
    imageAlt: 'Irish links and parkland golf courses on a chauffeur-led golf tour.',
  },
];

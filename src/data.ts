import { Listing, OffMarketProperty } from './types';

export const SYDNEY_LISTINGS: Listing[] = [
  {
    id: 'l1',
    title: 'The Elizabeth Penthouse',
    suburb: 'Darling Point',
    soldPrice: '$7,450,000',
    status: 'sold-auction',
    beds: 3,
    baths: 3.5,
    cars: 2,
    description: 'A world-class luxury residence boasting unobstructed 270-degree panoramic views of Sydney Harbour, the Bridge, and the Opera House. Meticulously engineered for indoor-outdoor entertaining on an elite scale.',
    highlights: [
      'Private lift access direct to secure entrance foyer',
      '250sqm wrap-around entertaining terrace with custom gas firepit',
      'Solid Calacatta marble kitchen featuring Gaggenau appliances',
      'Automated blinds, security, heating, and acoustic dampening'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    dateSold: 'Sold June 2026'
  },
  {
    id: 'l2',
    title: 'The Sandstone Villa',
    suburb: 'Paddington',
    soldPrice: '$5,890,000',
    status: 'sold-private',
    beds: 4,
    baths: 3,
    cars: 1,
    description: 'A historic Victorian grand terrace beautifully reimagined by an award-winning architect, integrating original 1880s sandstone walls with a futuristic glass and steel pavilion at the rear.',
    highlights: [
      'Original hand-cut sandstone feature walls and dual fireplaces',
      'Stunning double-height glass atrium flooding the home with light',
      'Internal open-air courtyard with a mature olive tree',
      'Temp-controlled walk-in wine cellar for over 450 bottles'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    dateSold: 'Sold May 2026'
  },
  {
    id: 'l3',
    title: 'The Anchorage Estate',
    suburb: 'Beauty Point, Mosman',
    priceGuide: '$11,500,000',
    status: 'active',
    beds: 5,
    baths: 5.5,
    cars: 4,
    description: 'An absolute deep-waterfront sanctuary capturing serene vistas across Middle Harbour. Positioned on a rare north-facing parcel, this modern masterpiece features its own deep-water jetty and private boathouse.',
    highlights: [
      'Private deep-water jetty, pontoon, and motorized boat ramp',
      'Suspended infinity pool merging with Middle Harbour waters',
      'Palatial master wing with dual dressing rooms and private terrace',
      'State-of-the-art multi-car garage with internal vehicle elevator'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'l4',
    title: 'The Bronte Coast-House',
    suburb: 'Bronte',
    soldPrice: '$6,200,000',
    status: 'sold-auction',
    beds: 4,
    baths: 4,
    cars: 2,
    description: 'Elevated just moments above Bronte Beach, this bold raw board-form concrete and premium timber architectural marvel commands unimpeded coastal panoramas and natural sea breezes.',
    highlights: [
      'Unobstructed, permanent coastal views of Bronte Beach',
      'Raw, textured concrete walls offset by warm French oak detailing',
      'Heated magnesium plunge pool with integrated swim jet',
      'Solar array, Tesla Powerwall, and complete smart home integration'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    dateSold: 'Sold April 2026'
  },
  {
    id: 'l5',
    title: 'The Courtyard Residence',
    suburb: 'Woollahra Village',
    priceGuide: '$8,750,000',
    status: 'active',
    beds: 4,
    baths: 3.5,
    cars: 2,
    description: 'A secluded, European-inspired architectural sanctuary nestled behind an imposing high-walled cobblestone courtyard. Positioned in Woollahra’s most coveted treelined street.',
    highlights: [
      'Stunning central cobblestone courtyard with custom water feature',
      'Elegant floor-to-ceiling custom steel French doors',
      'Beautiful underfloor-heated Italian limestone throughout',
      'Steps away from Woollahra Village boutiques, cafes, and dining'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
  }
];

export const OFF_MARKET_PROPERTIES: OffMarketProperty[] = [
  {
    id: 'om1',
    suburb: 'Bellevue Hill',
    priceGuide: '$18,000,000 - $20,000,000',
    beds: 5,
    baths: 6,
    cars: 4,
    exclusiveNotes: 'An extraordinary gated family compound set across 1,200sqm of pristine botanic gardens. Features a full-size championship tennis court, heated mosaic swimming pool, separate guest quarters, and a commanding panoramic view over the Sydney CBD skyline.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    confidentialCode: 'BELLEVUE-ESTATE'
  },
  {
    id: 'om2',
    suburb: 'Point Piper Peninsula',
    priceGuide: '$24,000,000',
    beds: 4,
    baths: 4.5,
    cars: 3,
    exclusiveNotes: 'Ultra-exclusive absolute waterfront residence with rare private beach rights. Offering true northerly orientation with postcard-perfect views of the Sydney Harbour Bridge. Complete with a private jetty crane, massive level lawns, and a custom wellness spa wing.',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    confidentialCode: 'PIPER-WATERFRONT'
  },
  {
    id: 'om3',
    suburb: 'Vaucluse Cliffs',
    priceGuide: '$14,500,000',
    beds: 4,
    baths: 4,
    cars: 2,
    exclusiveNotes: 'A landmark modernist mid-century architectural masterpiece, dramatically positioned above the raw ocean cliffs. Boasting double-height walls of glass, rare Italian terrazzo flooring, bespoke walnut cabinetry, and direct oceanfront access paths.',
    imageUrl: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80',
    confidentialCode: 'VAUCLUSE-CLIFFS'
  }
];

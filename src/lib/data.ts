import type { Room, Attraction, Review, NavLink } from '@/lib/types';
import { PlaceHolderImages } from './placeholder-images';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About Us' },
  { href: '/nature-garden', label: 'Nature Garden' },
  { href: '/attractions', label: 'Things To Do' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

export const rooms: Room[] = [
  {
    id: 'deluxe-cabana',
    name: 'Deluxe Jungle Cabana',
    slug: 'deluxe-jungle-cabana',
    isAvailable: true,
    description: 'Immerse yourself in nature with our Deluxe Jungle Cabana. A perfect blend of comfort and rustic charm.',
    longDescription: 'Our Deluxe Jungle Cabana is a sanctuary of peace designed for those who want to immerse themselves in nature without sacrificing comfort. The room features a plush king-sized bed, a modern en-suite bathroom with a rain shower, and elegant, locally crafted furniture. The highlight is the private balcony that offers stunning, uninterrupted views of our lush garden and the jungle beyond. It\'s the perfect spot for your morning coffee or evening relaxation, surrounded by the sights and sounds of the wild.',
    images: [
      { id: '1', imageUrl: '/assest/1.1.jpg', description: 'Deluxe Jungle Cabana view 1', imageHint: 'Deluxe cabana exterior' },
      { id: '2', imageUrl: '/assest/1.2.jpg', description: 'Deluxe Jungle Cabana view 2', imageHint: 'Deluxe cabana interior' },
      { id: '3', imageUrl: '/assest/1.3.jpg', description: 'Deluxe Jungle Cabana view 3', imageHint: 'Deluxe cabana bedroom' },
      { id: '4', imageUrl: '/assest/1.4.jpg', description: 'Deluxe Jungle Cabana view 4', imageHint: 'Deluxe cabana amenities' },
      { id: '5', imageUrl: '/assest/1.5.jpg', description: 'Deluxe Jungle Cabana view 5', imageHint: 'Deluxe cabana garden view' },
    ] as any,
    capacity: 2,
    amenities: [
      { name: 'King Size Bed', icon: 'bed' },
      { name: 'Private Balcony', icon: 'balcony' },
      { name: 'Rain Shower', icon: 'bath' },
      { name: 'Free Wi-Fi', icon: 'wifi' },
      { name: 'Air Conditioning', icon: 'air-vent' },
      { name: 'Mini Fridge', icon: 'fridge' },
    ],
    highlights: ['Garden View', 'Eco-Friendly', 'Spacious', 'Private Balcony'],
  },
  {
    id: 'standard-cabana',
    name: 'Standard Garden Cabana',
    slug: 'standard-garden-cabana',
    isAvailable: true,
    description: 'Our Standard Garden Cabana offers a cozy and comfortable stay with easy access to our lush gardens.',
    longDescription: 'The Standard Garden Cabana provides a cozy and comfortable retreat for solo travelers or couples. It features a comfortable queen-sized bed, an en-suite bathroom with hot water, and all the essential amenities for a pleasant stay. The room opens up to a shared veranda with direct access to our beautiful nature garden, allowing you to step out and enjoy the fresh air and greenery whenever you wish. It’s a wonderful and affordable option for those looking to connect with nature.',
    images: [
      { id: '1', imageUrl: '/assest/2.1.jpg', description: 'Standard Garden Cabana view 1', imageHint: 'Standard cabana exterior' },
      { id: '2', imageUrl: '/assest/2.2.jpg', description: 'Standard Garden Cabana view 2', imageHint: 'Standard cabana interior' },
      { id: '3', imageUrl: '/assest/2.3.jpg', description: 'Standard Garden Cabana view 3', imageHint: 'Standard cabana bedroom' },
      { id: '4', imageUrl: '/assest/2.4.png', description: 'Standard Garden Cabana view 4', imageHint: 'Standard cabana garden' },
    ] as any,
    capacity: 2,
    amenities: [
      { name: 'Queen Size Bed', icon: 'bed' },
      { name: 'Garden Access', icon: 'garden' },
      { name: 'Hot Water', icon: 'bath' },
      { name: 'Free Wi-Fi', icon: 'wifi' },
      { name: 'Fan', icon: 'wind' },
    ],
    highlights: ['Affordable', 'Cozy', 'Direct Garden Access'],
  },
  {
    id: 'family-cabana',
    name: 'Family Garden Cabana',
    isAvailable: false,
    slug: 'family-garden-cabana',
    description: 'Perfect for families or small groups, this spacious cabana provides ample room to relax and unwind.',
    longDescription: 'Designed with families in mind, our Family Garden Cabana is a spacious and welcoming haven. It features a king bed for adults and two comfortable single beds, accommodating up to four guests. A dedicated seating area with a sofa provides a great space for the family to gather. The large, modern bathroom and amenities like a flat-screen TV ensure a comfortable stay for everyone. It’s the ideal base for your family’s Sigiriya adventure.',
    images: PlaceHolderImages.filter(p => ['room-family', 'gallery8', 'gallery11', 'about-home'].includes(p.id)),
    capacity: 4,
    amenities: [
      { name: '1 King, 2 Single Beds', icon: 'users' },
      { name: 'Seating Area', icon: 'sofa' },
      { name: 'Large Bathroom', icon: 'bath' },
      { name: 'Flat-screen TV', icon: 'tv' },
      { name: 'Air Conditioning', icon: 'air-vent' },
      { name: 'Free Wi-Fi', icon: 'wifi' },
    ],
    highlights: ['Spacious', 'Family-Friendly', 'Great Value'],
  },
  {
    id: 'honeymoon-suite',
    name: 'Honeymoon Suite',
    isAvailable: false,
    slug: 'honeymoon-suite',
    description: 'Celebrate your special moments in our exclusive and romantic Honeymoon Suite with a private plunge pool.',
    longDescription: 'For the ultimate romantic escape, our Honeymoon Suite offers unparalleled privacy and luxury. This exclusive suite features a plush king bed, a lavish bathroom with a large soaking tub, and a separate living area. The true gem is the private plunge pool on your secluded terrace, overlooking the most scenic parts of our property. We welcome you with complimentary champagne to start your celebration. It’s a perfect sanctuary for couples to create unforgettable memories.',
    images: PlaceHolderImages.filter(p => ['room-suite', 'gallery9', 'testimonial-bg', 'gallery4'].includes(p.id)),
    capacity: 2,
    amenities: [
      { name: 'Plush King Bed', icon: 'bed' },
      { name: 'Private Plunge Pool', icon: 'pool' },
      { name: 'Luxury Bathtub', icon: 'bath' },
      { name: 'Champagne on Arrival', icon: 'wine' },
      { name: 'Air Conditioning', icon: 'air-vent' },
      { name: 'Premium Wi-Fi', icon: 'wifi' },
    ],
    highlights: ['Romantic', 'Utmost Privacy', 'Luxurious', 'Private Plunge Pool'],
  },
];

export const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery'));

export const attractions: Attraction[] = [
  {
    id: 'sigiriya-rock',
    name: 'Sigiriya Rock Fortress',
    description: 'A UNESCO World Heritage site, this ancient fortress is built atop a massive 200-meter high rock column. It\'s one of Sri Lanka\'s most iconic and dramatic historical locations.',
    image: PlaceHolderImages.find(p => p.id === 'attraction-sigiriya'),
    highlights: [
      'Climb to the summit for breathtaking 360-degree views.',
      'Admire the famous 5th-century frescoes of the "Sigiriya Maidens".',
      'Walk through the landscaped water gardens, boulder gardens, and terraced gardens.',
      'Pass through the monumental Lion Gate (paws) on your way to the top.'
    ],
    bestTime: 'Early morning or late afternoon to avoid heat.',
    travelTime: '15 mins from hotel',
  },
  {
    id: 'pidurangala-rock',
    name: 'Pidurangala Rock',
    description: 'A more challenging but rewarding hike, Pidurangala offers a natural, less-crowded alternative with the absolute best panoramic view of Sigiriya Rock itself.',
    image: PlaceHolderImages.find(p => p.id === 'attraction-pidurangala'),
    highlights: [
      'Experience a stunning sunrise or sunset view over the jungle canopy.',
      'Explore the ancient cave temple and a giant reclining Buddha statue en route.',
      'Enjoy a more adventurous and rustic climb compared to Sigiriya.',
      'Perfect for photographers and nature lovers seeking tranquility.'
    ],
    bestTime: 'Sunrise (5:30 AM) or Sunset (4:30 PM).',
    travelTime: '20 mins from hotel',
  },
  {
    id: 'minneriya-safari',
    name: 'Minneriya Safari',
    description: 'Witness "The Gathering," an incredible natural spectacle where hundreds of elephants congregate around the Minneriya reservoir, especially during the dry season.',
    image: PlaceHolderImages.find(p => p.id === 'attraction-minneriya'),
    highlights: [
      'One of the best places in Asia to see large herds of wild elephants.',
      'Opportunity to spot diverse wildlife including deer, monkeys, and numerous bird species.',
      'Enjoy a thrilling jeep safari through the vast national park.',
      'The experience varies with seasons, offering unique sightings year-round.'
    ],
    bestTime: 'Dry Season (May to September).',
    travelTime: '45 mins from hotel',
  },
  {
    id: 'dambulla-cave-temple',
    name: 'Dambulla Cave Temple',
    description: 'Also known as the Golden Temple of Dambulla, this is the largest and best-preserved cave temple complex in Sri Lanka, housing hundreds of statues and vibrant murals.',
    image: PlaceHolderImages.find(p => p.id === 'attraction-dambulla'),
    highlights: [
      'Explore five major caves filled with over 150 Buddha statues.',
      'Marvel at intricate religious murals covering the cave ceilings and walls.',
      'Another designated UNESCO World Heritage site, rich in history and art.',
      'Experience a place of active worship and profound spiritual significance.'
    ],
    bestTime: 'Any time of day.',
    travelTime: '30 mins from hotel',
  },
  {
    id: 'village-tours',
    name: 'Village Tours',
    description: 'Immerse yourself in authentic Sri Lankan rural life. This cultural experience offers a glimpse into the traditional and simple lifestyle of a local village.',
    image: PlaceHolderImages.find(p => p.id === 'attraction-village'),
    highlights: [
      'Take a charming bullock cart ride through lush paddy fields.',
      'Enjoy a peaceful canoe ride across a serene village lake.',
      'Participate in a hands-on cooking demonstration of traditional Sri Lankan cuisine.',
      'Savor a delicious, home-cooked lunch served on lotus leaves.'
    ],
    bestTime: 'Morning or Afternoon.',
    travelTime: 'Starts locally, 10 mins away',
  },
  {
    id: 'hot-air-balloon',
    name: 'Hot Air Balloon Rides',
    description: 'Float serenely over the breathtaking landscapes of Sigiriya. Get a magical bird\'s-eye view of the ancient rock fortresses, jungles, and lakes at dawn.',
    image: PlaceHolderImages.find(p => p.id === 'attraction-balloon'),
    highlights: [
      'A unique and unforgettable perspective of the Cultural Triangle.',
      'Experience the peace and quiet of floating above the world as the sun rises.',
      'Excellent opportunities for aerial photography.',
      'Typically includes a celebratory champagne toast upon landing.'
    ],
    bestTime: 'Sunrise (seasonal, Nov to Apr).',
    travelTime: '20 mins to launch site',
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    country: 'USA',
    review: 'An absolute paradise! The cabanas are beautiful and the staff is incredibly welcoming. Waking up to the sounds of the jungle was a magical experience. Highly recommend for a peaceful getaway.',
    avatar: PlaceHolderImages.find(p => p.id === 'avatar1'),
  },
  {
    id: '2',
    name: 'Priya Sharma',
    country: 'India',
    review: 'Vercour Sigiriya is a hidden gem. The location is perfect for exploring the main attractions, yet it feels so secluded and serene. The food was delicious, and their eco-friendly approach is commendable.',
    avatar: PlaceHolderImages.find(p => p.id === 'avatar2'),
  },
  {
    id: '3',
    name: 'Ben Carter',
    country: 'Australia',
    review: 'We stayed in the family cabana and it was perfect for us. Spacious, clean, and surrounded by nature. The kids loved the garden and we loved the tranquility. We will definitely be back!',
    avatar: PlaceHolderImages.find(p => p.id === 'avatar3'),
  },
];

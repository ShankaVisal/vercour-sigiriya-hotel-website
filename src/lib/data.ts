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
    description: 'Immerse yourself in nature with our Deluxe Jungle Cabana. A perfect blend of comfort and rustic charm.',
    longDescription: 'Our Deluxe Jungle Cabana is a sanctuary of peace designed for those who want to immerse themselves in nature without sacrificing comfort. The room features a plush king-sized bed, a modern en-suite bathroom with a rain shower, and elegant, locally crafted furniture. The highlight is the private balcony that offers stunning, uninterrupted views of our lush garden and the jungle beyond. It\'s the perfect spot for your morning coffee or evening relaxation, surrounded by the sights and sounds of the wild.',
    images: PlaceHolderImages.filter(p => ['room-deluxe', 'gallery1', 'gallery5', 'gallery9'].includes(p.id)),
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
    description: 'Our Standard Garden Cabana offers a cozy and comfortable stay with easy access to our lush gardens.',
    longDescription: 'The Standard Garden Cabana provides a cozy and comfortable retreat for solo travelers or couples. It features a comfortable queen-sized bed, an en-suite bathroom with hot water, and all the essential amenities for a pleasant stay. The room opens up to a shared veranda with direct access to our beautiful nature garden, allowing you to step out and enjoy the fresh air and greenery whenever you wish. It’s a wonderful and affordable option for those looking to connect with nature.',
    images: PlaceHolderImages.filter(p => ['room-standard', 'gallery2', 'garden1', 'gallery6'].includes(p.id)),
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
    description: 'Climb the ancient fortress built atop a massive rock column. Discover beautiful frescoes, landscaped gardens, and breathtaking panoramic views.',
    image: PlaceHolderImages.find(p => p.id === 'attraction-sigiriya'),
  },
  {
    id: 'pidurangala-rock',
    name: 'Pidurangala Rock',
    description: 'For the more adventurous, a hike up Pidurangala offers a stunning, alternative view of Sigiriya Rock, especially at sunrise.',
    image: PlaceHolderImages.find(p => p.id === 'attraction-pidurangala'),
  },
  {
    id: 'minneriya-safari',
    name: 'Minneriya Safari',
    description: 'Witness the incredible "Gathering" of elephants at Minneriya National Park, one of Asia\'s most spectacular wildlife events.',
    image: PlaceHolderImages.find(p => p.id === 'attraction-minneriya'),
  },
  {
    id: 'dambulla-cave-temple',
    name: 'Dambulla Cave Temple',
    description: 'Explore a complex of ancient cave temples, a UNESCO World Heritage site, filled with hundreds of Buddha statues and vibrant murals.',
    image: PlaceHolderImages.find(p => p.id === 'attraction-dambulla'),
  },
  {
    id: 'village-tours',
    name: 'Village Tours',
    description: 'Experience authentic Sri Lankan rural life. Take a bullock cart ride, learn to cook traditional food, and enjoy a canoe ride on the lake.',
    image: PlaceHolderImages.find(p => p.id === 'attraction-village'),
  },
  {
    id: 'hot-air-balloon',
    name: 'Hot Air Balloon Rides',
    description: 'Get a bird\'s-eye view of Sigiriya\'s stunning landscape with a magical hot air balloon ride at dawn.',
    image: PlaceHolderImages.find(p => p.id === 'attraction-balloon'),
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

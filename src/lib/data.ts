import type { Room, Attraction, Review, NavLink } from '@/lib/types';
import { PlaceHolderImages } from './placeholder-images';
import { Bath, Tv, Users, Wifi } from 'lucide-react';

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
    description: 'Immerse yourself in nature with our Deluxe Jungle Cabana. Featuring a private balcony with stunning garden views, this room is a perfect blend of comfort and rustic charm.',
    image: PlaceHolderImages.find(p => p.id === 'room-deluxe'),
    capacity: 2,
    amenities: [
      { name: 'King Size Bed', icon: 'bed' },
      { name: 'Private Balcony', icon: 'balcony' },
      { name: 'Rain Shower', icon: 'bath' },
      { name: 'Free Wi-Fi', icon: 'wifi' },
    ],
    highlights: ['Garden View', 'Eco-Friendly', 'Spacious'],
  },
  {
    id: 'standard-cabana',
    name: 'Standard Garden Cabana',
    description: 'Our Standard Garden Cabana offers a cozy and comfortable stay. Wake up to the sounds of nature and enjoy easy access to our lush gardens.',
    image: PlaceHolderImages.find(p => p.id === 'room-standard'),
    capacity: 2,
    amenities: [
      { name: 'Queen Size Bed', icon: 'bed' },
      { name: 'Garden Access', icon: 'garden' },
      { name: 'Hot Water', icon: 'bath' },
      { name: 'Free Wi-Fi', icon: 'wifi' },
    ],
    highlights: ['Affordable', 'Cozy', 'Garden Access'],
  },
  {
    id: 'family-cabana',
    name: 'Family Garden Cabana',
    description: 'Perfect for families or small groups, this spacious cabana provides ample room to relax and unwind. It features multiple beds and a comfortable seating area.',
    image: PlaceHolderImages.find(p => p.id === 'room-family'),
    capacity: 4,
    amenities: [
      { name: '1 King, 2 Single Beds', icon: 'users' },
      { name: 'Seating Area', icon: 'sofa' },
      { name: 'Large Bathroom', icon: 'bath' },
      { name: 'Flat-screen TV', icon: 'tv' },
    ],
    highlights: ['Spacious', 'Family-Friendly', 'Great Value'],
  },
  {
    id: 'honeymoon-suite',
    name: 'Honeymoon Suite',
    description: 'Celebrate your special moments in our exclusive Honeymoon Suite. Enjoy ultimate privacy, a luxurious bathtub, and romantic views of the surrounding nature.',
    image: PlaceHolderImages.find(p => p.id === 'room-suite'),
    capacity: 2,
    amenities: [
      { name: 'Plush King Bed', icon: 'bed' },
      { name: 'Private Plunge Pool', icon: 'pool' },
      { name: 'Luxury Bathtub', icon: 'bath' },
      { name: 'Champagne on Arrival', icon: 'wine' },
    ],
    highlights: ['Romantic', 'Private', 'Luxurious'],
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
    review: 'Nature Kabana is a hidden gem in Sigiriya. The location is perfect for exploring the main attractions, yet it feels so secluded and serene. The food was delicious, and their eco-friendly approach is commendable.',
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
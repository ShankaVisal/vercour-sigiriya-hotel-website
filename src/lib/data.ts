import type { Room, Attraction, Review, NavLink } from '@/lib/types';
import { PlaceHolderImages } from './placeholder-images';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/rooms', label: 'Treehouses' },
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
    id: 'vercour-couple-treehouse',
    name: 'Vercour Couple Treehouse',
    slug: 'vercour-couple-treehouse',
    isAvailable: true,
    description: 'A private 31 m2 treehouse for two with a king bed, balcony, terrace, air conditioning, and peaceful garden, mountain, landmark, and city views.',
    longDescription: 'The Vercour Couple Treehouse is designed for two guests who want a quiet, elevated stay close to nature. This 31 m2 double room includes one king bed, air conditioning, a private entrance, mosquito net, soundproofing, and a comfortable sitting and dining area. Step out to your balcony or terrace for outdoor dining and views across the garden, nearby landmarks, mountains, and the surrounding Sigiriya landscape. The private bathroom includes a bathtub or shower, bidet, towels, toiletries, and a shower cap, while in-room comforts include an electric kettle, tea and coffee facilities, bottled water, linens, sockets near the bed, and free WiFi.',
    images: [
      { id: '1', imageUrl: '/assest/1.1.jpg', description: 'Vercour Couple Treehouse exterior', imageHint: 'couple treehouse exterior' },
      { id: '2', imageUrl: '/assest/1.2.jpg', description: 'Vercour Couple Treehouse balcony view', imageHint: 'treehouse balcony view' },
      { id: '3', imageUrl: '/assest/1.3.jpg', description: 'Vercour Couple Treehouse bedroom', imageHint: 'treehouse king bedroom' },
      { id: '4', imageUrl: '/assest/1.4.jpg', description: 'Vercour Couple Treehouse private bathroom', imageHint: 'treehouse bathroom' },
      { id: '5', imageUrl: '/assest/1.5.jpg', description: 'Vercour Couple Treehouse garden setting', imageHint: 'treehouse garden view' },
    ] as any,
    capacity: 2,
    amenities: [
      { name: '31 m2 Treehouse', icon: 'garden' },
      { name: '1 King Bed', icon: 'bed' },
      { name: 'Private Balcony & Terrace', icon: 'balcony' },
      { name: 'Private Bath with Bidet', icon: 'bath' },
      { name: 'Air Conditioning', icon: 'air-vent' },
      { name: 'Free Wi-Fi', icon: 'wifi' },
      { name: 'Tea/Coffee Maker', icon: 'default' },
      { name: 'Garden, Mountain & Landmark Views', icon: 'garden' },
      { name: 'Soundproof Private Entrance', icon: 'wind' },
    ],
    highlights: ['Couples', 'King Bed', 'Private Balcony', 'Garden Views'],
  },
  {
    id: 'vercour-family-treehouse',
    name: 'Vercour Family Treehouse',
    slug: 'vercour-family-treehouse',
    isAvailable: true,
    description: 'A spacious 33 m2 family treehouse with two king beds, balcony, terrace, refrigerator, air conditioning, and sweeping garden and landmark views.',
    longDescription: 'The Vercour Family Treehouse is the larger of our two treehouses, made for families or small groups of up to four guests. This 33 m2 double room includes two king beds, air conditioning, heating, fan, private entrance, mosquito net, soundproofing, and a sitting, desk, and dining area. The balcony and terrace create an easy indoor-outdoor rhythm for relaxing or dining while looking out to the garden, mountains, landmark views, city views, and the wider Sigiriya landscape. The private bathroom includes a bathtub or shower, bidet, towels, toiletries, and shower cap. Family-friendly comforts include extra-long beds, available cribs, an electric kettle, tea and coffee facilities, bottled water, dining table, refrigerator, linens, and free WiFi.',
    images: [
      { id: '1', imageUrl: '/assest/2.1.jpg', description: 'Vercour Family Treehouse exterior', imageHint: 'family treehouse exterior' },
      { id: '2', imageUrl: '/assest/2.2.jpg', description: 'Vercour Family Treehouse bedroom', imageHint: 'family treehouse bedroom' },
      { id: '3', imageUrl: '/assest/2.3.jpg', description: 'Vercour Family Treehouse seating area', imageHint: 'family treehouse seating' },
      { id: '4', imageUrl: '/assest/2.4.png', description: 'Vercour Family Treehouse garden view', imageHint: 'family treehouse garden' },
    ] as any,
    capacity: 4,
    amenities: [
      { name: '33 m2 Treehouse', icon: 'garden' },
      { name: '2 King Beds', icon: 'bed' },
      { name: 'Private Balcony & Terrace', icon: 'balcony' },
      { name: 'Private Bath with Bidet', icon: 'bath' },
      { name: 'Air Conditioning', icon: 'air-vent' },
      { name: 'Free Wi-Fi', icon: 'wifi' },
      { name: 'Tea/Coffee Maker', icon: 'default' },
      { name: 'Refrigerator', icon: 'fridge' },
      { name: 'Garden, Mountain & Landmark Views', icon: 'garden' },
      { name: 'Cribs Available', icon: 'users' },
    ],
    highlights: ['Families', '2 King Beds', 'Private Balcony', 'Refrigerator'],
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
    review: 'An absolute paradise! The treehouses are beautiful and the staff is incredibly welcoming. Waking up to the sounds of the jungle was a magical experience. Highly recommend for a peaceful getaway.',
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
    review: 'We stayed in the family treehouse and it was perfect for us. Spacious, clean, and surrounded by nature. The kids loved the garden and we loved the tranquility. We will definitely be back!',
    avatar: PlaceHolderImages.find(p => p.id === 'avatar3'),
  },
];

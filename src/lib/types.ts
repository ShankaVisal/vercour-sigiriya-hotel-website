import type { ImagePlaceholder } from './placeholder-images';

export type NavLink = {
  href: string;
  label: string;
};

export type Amenity = {
  name: string;
  icon: React.ReactNode | string;
};

export type Room = {
  id: string;
  name: string;
  slug: string;
  isAvailable: boolean;
  description: string;
  longDescription: string;
  images: ImagePlaceholder[];
  capacity: number;
  amenities: Amenity[];
  highlights: string[];
};

export type Attraction = {
  id: string;
  name: string;
  description: string;
  image?: ImagePlaceholder;
  highlights: string[];
  bestTime: string;
  travelTime: string;
};

export type Review = {
  id: string;
  name: string;
  country: string;
  review: string;
  avatar?: ImagePlaceholder;
};

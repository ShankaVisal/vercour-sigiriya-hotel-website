import { RoomCard } from '@/components/room-card';
import { rooms } from '@/lib/data';
import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Our Rooms & Cabanas',
  description: 'Explore our range of eco-friendly cabanas, from cozy standard rooms to spacious family suites. Find the perfect accommodation for your stay in Sigiriya.',
};

export default function RoomsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'room-deluxe');
  return (
    <>
      <section className="relative h-screen w-full">
        {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <h1 className="font-headline text-4xl md:text-6xl font-bold">
            Our Rooms & Cabanas
          </h1>
          <p className="mt-4 max-w-2xl text-lg">
            Each of our cabanas is thoughtfully designed to offer a peaceful retreat, blending modern comforts with the beauty of nature.
          </p>
        </div>
      </section>

      <div className="bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

import { RoomCard } from '@/components/room-card';
import { rooms } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Rooms & Cabanas',
  description: 'Explore our range of eco-friendly cabanas, from cozy standard rooms to spacious family suites. Find the perfect accommodation for your stay in Sigiriya.',
};

export default function RoomsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Rooms & Cabanas</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Each of our cabanas is thoughtfully designed to offer a peaceful retreat, blending modern comforts with the beauty of nature.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
}

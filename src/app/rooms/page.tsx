import { RoomCard } from '@/components/room-card';
import { rooms } from '@/lib/data';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Treehouses',
  description: 'Explore the two eco-friendly Vercour Sigiriya treehouses: the Couple Treehouse and Family Treehouse.',
};

export default function RoomsPage() {
  return (
    <>
      <section className="relative min-h-[78vh] w-full">
        <Image
          src="/assest/1.2.jpg"
          alt="Vercour Sigiriya treehouse surrounded by greenery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-primary/90" />
        <div className="relative z-10 flex min-h-[78vh] flex-col items-center justify-center text-center text-white p-4">
          <p className="eyebrow text-white/80">Two elevated stays</p>
          <h1 className="mt-4 font-headline text-5xl font-normal md:text-7xl">
            Our Treehouses
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
            Choose between our two elevated stays: one treehouse for couples and one spacious treehouse for families.
          </p>
        </div>
      </section>

      <div className="bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="eyebrow">Private, quiet, close to nature</p>
            <h2 className="mt-3 font-headline text-4xl font-normal md:text-6xl">One for romance, one for family</h2>
            <p className="mt-5 text-muted-foreground leading-8">
              Both treehouses include private bathroom facilities, balcony or terrace access, air conditioning, free WiFi, and views across the garden and Sigiriya landscape.
            </p>
          </div>
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

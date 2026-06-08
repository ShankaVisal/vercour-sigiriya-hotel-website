import { AttractionCard } from '@/components/attraction-card';
import { attractions } from '@/lib/data';
import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Things To Do in Sigiriya',
  description: 'Explore the best attractions around Sigiriya, from the iconic Sigiriya Rock Fortress to thrilling wildlife safaris at Minneriya National Park.',
};

export default function AttractionsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'attraction-balloon');
  return (
    <>
      {/* Page Header */}
      <section className="relative min-h-[70vh] w-full">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-primary/90" />
        <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center text-center text-white p-4">
          <p className="eyebrow text-white/80">Beyond the balcony</p>
          <h1 className="mt-4 font-headline text-5xl font-normal md:text-7xl">
            Things To Do
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
            Ancient rock fortresses, wildlife routes, village experiences, and sky-high views are all within reach.
          </p>
        </div>
      </section>

      {/* Attractions List */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="eyebrow">Explore from Vercour</p>
          <h2 className="mt-3 font-headline text-4xl font-normal md:text-6xl">A quiet base for unforgettable days</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-12">
          {attractions.map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} />
          ))}
        </div>
      </div>
    </>
  );
}

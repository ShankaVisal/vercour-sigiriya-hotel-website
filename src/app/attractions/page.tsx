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
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-normal tracking-wider">
            Things To Do
          </h1>
          <p className="mt-4 max-w-2xl text-md md:text-lg tracking-wide">
            Discover the rich history and natural wonders that await you in and around Sigiriya.
          </p>
        </div>
      </section>

      {/* Attractions List */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          {attractions.map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} />
          ))}
        </div>
      </div>
    </>
  );
}

import { AttractionCard } from '@/components/attraction-card';
import { attractions } from '@/lib/data';
import type { Metadata } from 'next';
import { DynamicContentGenerator } from '@/components/dynamic-content-generator';

export const metadata: Metadata = {
  title: 'Things To Do in Sigiriya',
  description: 'Explore the best attractions around Sigiriya, from the iconic Sigiriya Rock Fortress to thrilling wildlife safaris at Minneriya National Park.',
};

export default function AttractionsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Things To Do</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover the rich history and natural wonders that await you in and around Sigiriya.
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} />
          ))}
        </div>

        <DynamicContentGenerator sectionName="Things To Do" />
      </div>
    </>
  );
}

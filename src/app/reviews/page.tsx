import { ReviewCard } from '@/components/review-card';
import { reviews } from '@/lib/data';
import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Guest Reviews',
  description: 'Read what our guests have to say about their experience at Vercour Sigiriya. Real reviews from travelers around the world.',
};

export default function ReviewsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'testimonial-bg');
  return (
    <>
      {/* Page Header */}
      <section className="relative h-[60vh] w-full">
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
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <p className="eyebrow text-white/80">Guest notes</p>
          <h1 className="mt-4 font-headline text-5xl font-normal md:text-7xl">
            Words From Our Guests
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
            Travelers come for the treehouse novelty, then remember the calm, the garden, and the warmth.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="eyebrow">Real stays</p>
          <h2 className="mt-3 font-headline text-4xl font-normal md:text-6xl">What guests notice first</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
          {reviews.map((review) => ( // Repeat for demo purposes
            <ReviewCard key={`${review.id}-2`} review={{...review, id: `${review.id}-2`}} />
          ))}
        </div>
      </div>
    </>
  );
}

import { ReviewCard } from '@/components/review-card';
import { reviews } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guest Reviews',
  description: 'Read what our guests have to say about their experience at Nature Kabana Hotel. Real reviews from travelers around the world.',
};

export default function ReviewsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Words From Our Guests</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We are humbled by the kind words from our guests who have made Nature Kabana their home away from home.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <div className="container mx-auto px-4 py-16 md:py-24">
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

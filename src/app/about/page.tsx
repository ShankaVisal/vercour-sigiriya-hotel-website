import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, MapPin, Heart } from 'lucide-react';
import type { Metadata } from 'next';
import { DynamicContentGenerator } from '@/components/dynamic-content-generator';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the story of Vercour Sigiriya, our eco-friendly mission, and the advantages of our unique location in Sigiriya.',
};

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'about-home');
  const storyImage = PlaceHolderImages.find(p => p.id === 'about-story');
  const missionImage = PlaceHolderImages.find(p => p.id === 'about-mission');

  return (
    <>
      {/* Page Header */}
      <section className="relative h-[50vh] w-full">
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
            About Vercour Sigiriya
          </h1>
          <p className="mt-4 max-w-2xl text-lg">
            Discover the heart and soul behind your favorite nature retreat in Sigiriya.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 space-y-20">
        {/* Story Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl font-bold flex items-center gap-3"><Heart className="text-primary h-8 w-8"/>Our Story</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Vercour Sigiriya was born from a dream to create a sanctuary where people could reconnect with nature without sacrificing comfort. Founded by a family of nature lovers, our hotel was built with a deep respect for the environment. Every stone, every piece of wood, and every plant has been carefully chosen to create a harmonious space that feels like a home away from home. We started with just a few cabanas and a big vision, and have grown thanks to the wonderful guests who share our passion for tranquility and sustainability.
            </p>
          </div>
          <div className="order-1 md:order-2">
            {storyImage && (
              <Card className="overflow-hidden shadow-lg">
                <Image 
                  src={storyImage.imageUrl} 
                  alt={storyImage.description} 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={storyImage.imageHint}
                />
              </Card>
            )}
          </div>
        </section>

        {/* Mission Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {missionImage && (
              <Card className="overflow-hidden shadow-lg">
                <Image 
                  src={missionImage.imageUrl} 
                  alt={missionImage.description} 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={missionImage.imageHint}
                />
              </Card>
            )}
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold flex items-center gap-3"><Leaf className="text-primary h-8 w-8"/>Our Eco-Friendly Mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Sustainability is at the core of everything we do. We are committed to minimizing our environmental footprint through various initiatives, including using renewable energy sources, practicing waste reduction and recycling, conserving water, and sourcing local and organic produce for our kitchen. Our cabanas are constructed from reclaimed and sustainable materials. By staying with us, you are supporting a business that cares deeply for the planet and the local community.
            </p>
          </div>
        </section>

        {/* Location Advantages Section */}
        <section className="text-center">
          <h2 className="font-headline text-3xl font-bold flex items-center justify-center gap-3"><MapPin className="text-primary h-8 w-8"/>Location Advantages</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            Our prime location in Sigiriya offers the perfect balance of seclusion and accessibility. We are a stone's throw away from ancient wonders and natural treasures.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {['Sigiriya & Dambulla', 'Wildlife Safaris', 'Our Nature Garden', 'Cultural Triangle'].map(advantage => (
                <Card key={advantage}>
                    <CardContent className="p-6">
                        <h3 className="font-semibold text-lg">{advantage}</h3>
                    </CardContent>
                </Card>
            ))}
          </div>
        </section>

        <DynamicContentGenerator sectionName="About Us" />

      </div>
    </>
  );
}

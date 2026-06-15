import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, MapPin, Heart } from 'lucide-react';
import type { Metadata } from 'next';

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
          <p className="eyebrow text-white/80">Small by design</p>
          <h1 className="mt-4 font-headline text-5xl font-normal md:text-7xl">
            About Vercour Sigiriya
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
            The story of a two-treehouse retreat shaped by family hospitality, nature, and quiet luxury.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 space-y-20">
        {/* Story Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-headline text-4xl font-normal md:text-5xl flex items-center gap-3"><Heart className="text-accent h-8 w-8"/>Built for fewer, better stays</h2>
            <p className="mt-5 text-muted-foreground leading-8">
              Vercour Sigiriya was born from a dream to create a sanctuary where people could reconnect with nature without sacrificing comfort. Founded by a family of nature lovers, our hotel was built with a deep respect for the environment. Every stone, every piece of wood, and every plant has been carefully chosen to create a harmonious space that feels like a home away from home. We keep the experience intimate with only two treehouses and a big vision, shaped by wonderful guests who share our passion for tranquility and sustainability.
            </p>
          </div>
          <div className="order-1 md:order-2">
            {storyImage && (
              <Card className="image-frame">
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
              <Card className="image-frame">
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
            <p className="eyebrow">Eco-minded hospitality</p>
            <h2 className="mt-3 font-headline text-4xl font-normal md:text-5xl flex items-center gap-3"><Leaf className="text-accent h-8 w-8"/>Comfort that respects the garden</h2>
            <p className="mt-5 text-muted-foreground leading-8">
              Sustainability is at the core of everything we do. We are committed to minimizing our environmental footprint through various initiatives, including using renewable energy sources, practicing waste reduction and recycling, conserving water, and sourcing local and organic produce for our kitchen. Our treehouses are constructed with care for the surrounding landscape. By staying with us, you are supporting a business that cares deeply for the planet and the local community.
            </p>
          </div>
        </section>

        {/* Location Advantages Section */}
        <section className="text-center">
          <p className="eyebrow">Location Advantages</p>
          <h2 className="mt-3 font-headline text-4xl font-normal md:text-5xl flex items-center justify-center gap-3"><MapPin className="text-accent h-8 w-8"/>A quiet base for the cultural triangle</h2>
          <p className="mt-5 max-w-3xl mx-auto text-muted-foreground leading-8">
            Our prime location in Sigiriya offers the perfect balance of seclusion and accessibility. We are a stone's throw away from ancient wonders and natural treasures.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {['Sigiriya & Dambulla', 'Wildlife Safaris', 'Our Nature Garden', 'Cultural Triangle'].map(advantage => (
                <Card key={advantage} className="border-primary/10 bg-card/80 shadow-sm">
                    <CardContent className="p-6">
                        <h3 className="font-semibold text-lg">{advantage}</h3>
                    </CardContent>
                </Card>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}

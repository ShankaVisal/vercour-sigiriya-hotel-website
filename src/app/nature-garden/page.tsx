import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Wind, Footprints, Sun } from 'lucide-react';
import type { Metadata } from 'next';
import { DynamicContentGenerator } from '@/components/dynamic-content-generator';

export const metadata: Metadata = {
  title: 'Our Nature Garden',
  description: 'Discover the serene nature garden at Vercour Sigiriya. A place for relaxation, meditation, and reconnecting with the natural world.',
};

export default function NatureGardenPage() {
  const gardenImage1 = PlaceHolderImages.find(p => p.id === 'garden1');
  const gardenImage2 = PlaceHolderImages.find(p => p.id === 'garden2');

  const highlights = [
    {
      icon: <Footprints className="h-8 w-8 text-primary" />,
      title: 'Winding Walking Paths',
      description: 'Meander through our carefully planned paths that take you on a journey through diverse flora.',
    },
    {
      icon: <Wind className="h-8 w-8 text-primary" />,
      title: 'Quiet Relaxation Areas',
      description: 'Find a hammock, a bench, or a secluded spot to read, meditate, or simply be.',
    },
    {
      icon: <Sun className="h-8 w-8 text-primary" />,
      title: 'Diverse Plants & Trees',
      description: 'Our garden is home to a wide variety of native Sri Lankan plants, flowers, and fruit trees.',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Nature Garden</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A tranquil oasis designed for peace, reflection, and a deep connection with nature.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 space-y-20">
        {/* Description Section */}
        <section className="text-center">
          <h2 className="font-headline text-3xl font-bold">A Serene Garden Experience</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            Our nature garden is the heart of Vercour Sigiriya. More than just a collection of plants, it is a living, breathing ecosystem designed to soothe the soul and delight the senses. From the moment you step in, you'll be enveloped by the gentle rustle of leaves, the sweet fragrance of tropical flowers, and the symphony of birdsong. It is a space to wander, to wonder, and to find your inner peace.
          </p>
        </section>

        {/* Image Grid */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
            {gardenImage1 && (
                <Card className="overflow-hidden shadow-lg">
                    <Image 
                        src={gardenImage1.imageUrl} 
                        alt={gardenImage1.description} 
                        width={800} 
                        height={600}
                        className="w-full h-auto object-cover"
                        data-ai-hint={gardenImage1.imageHint}
                    />
                </Card>
            )}
            {gardenImage2 && (
                <Card className="overflow-hidden shadow-lg">
                    <Image 
                        src={gardenImage2.imageUrl} 
                        alt={gardenImage2.description} 
                        width={800} 
                        height={600}
                        className="w-full h-auto object-cover"
                        data-ai-hint={gardenImage2.imageHint}
                    />
                </Card>
            )}
        </section>
        
        {/* Highlights Section */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {highlights.map((highlight) => (
              <Card key={highlight.title} className="text-center p-6 flex flex-col items-center">
                {highlight.icon}
                <h3 className="mt-4 font-headline text-xl font-semibold">{highlight.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </section>
        
        <DynamicContentGenerator sectionName="Nature Garden" />
      </div>
    </>
  );
}

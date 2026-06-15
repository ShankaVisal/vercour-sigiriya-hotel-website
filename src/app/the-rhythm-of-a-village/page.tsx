import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { MapPin, Utensils, Waves } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Rhythm of a Village',
  description: 'Experience an authentic Sigiriya village tour with bullock cart safari, catamaran ride, traditional lunch, and easy access from Vercour Sigiriya.',
};

export default function NatureGardenPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'garden1');
  const villageImages = [
    {
      src: '/assest/v1.png',
      alt: 'Bullock cart safari through a Sigiriya village',
      hint: 'bullock cart safari',
    },
    {
      src: '/assest/v2.png',
      alt: 'Traditional Sigiriya village tour experience',
      hint: 'sigiriya village tour',
    },
  ];

  const highlights = [
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: 'Bullock Cart Safari',
      description: 'Travel through village lanes and paddy fields in a peaceful, nostalgic way that brings local Sigiriya life close.',
    },
    {
      icon: <Waves className="h-8 w-8 text-primary" />,
      title: 'Catamaran Lake Ride',
      description: 'Drift across Hiriwadunna lake and take in the quiet water, village scenery, and surrounding nature.',
    },
    {
      icon: <Utensils className="h-8 w-8 text-primary" />,
      title: 'Traditional Lunch',
      description: 'Enjoy a Sri Lankan village meal served on lotus leaves, full of simple, generous local flavor.',
    },
  ];

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
          <p className="eyebrow text-white/80">The living heart</p>
          <h1 className="mt-4 font-headline text-5xl font-normal md:text-7xl">
            The rhythm of a village
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
            Bullock Cart Safari Sigiriya, village tour, and traditional lunch for 20 USD.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 space-y-20">
        {/* Description Section */}
        <section className="text-center">
          <p className="eyebrow">Village experience</p>
          <h2 className="mt-3 font-headline text-4xl font-normal md:text-6xl">Bullock Cart Safari Sigiriya - Village Tour & Traditional Lunch</h2>
          <p className="mt-4 text-2xl font-headline text-primary">20 USD</p>
          <p className="mt-5 max-w-3xl mx-auto text-muted-foreground leading-8">
            An incredibly authentic Sri Lankan experience. The bullock cart ride through the village and paddy fields is peaceful and nostalgic, guided by friendly local hosts who explain village life beautifully. The experience includes a catamaran ride on the lake and a traditional lunch served on lotus leaves, making it a genuine way to see the real Sigiriya beyond the rock.
          </p>
          <p className="mt-5 max-w-3xl mx-auto text-muted-foreground leading-8">
            Perfect for families and couples, this 3-hour village experience brings together culture, nature, and great food at excellent value. It is relaxed, personal, and far from a touristy rush.
          </p>
        </section>

        {/* Image Grid */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          {villageImages.map((image) => (
            <Card key={image.src} className="image-frame">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                data-ai-hint={image.hint}
              />
            </Card>
          ))}
        </section>

        <section className="grid gap-8 md:grid-cols-2 md:items-start">
          <Card className="p-8 border-primary/10 shadow-sm">
            <p className="eyebrow">Our stay</p>
            <h3 className="mt-3 font-headline text-3xl font-normal">Private treehouses beside the garden</h3>
            <p className="mt-5 text-muted-foreground leading-8">
              We keep the experience intimate with only two private treehouses, each opening directly into our nature garden with views of Sigiriya Rock and surrounding paddy fields.
            </p>
          </Card>
          <Card className="p-8 border-primary/10 shadow-sm">
            <p className="eyebrow">Prime location</p>
            <h3 className="mt-3 font-headline text-3xl font-normal">Secluded, yet close to everything</h3>
            <p className="mt-5 text-muted-foreground leading-8">
              Our prime location in Sigiriya offers the perfect balance of seclusion and accessibility. We are 5 minutes from Sigiriya Rock, 15 minutes from Dambulla Cave Temple, and 2 minutes from local village experiences like bullock cart safaris and Hiriwadunna lake.
            </p>
          </Card>
        </section>
        
        {/* Highlights Section */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {highlights.map((highlight) => (
              <Card key={highlight.title} className="text-center p-8 flex flex-col items-center border-primary/10 shadow-sm">
                {highlight.icon}
                <h3 className="mt-4 font-headline text-xl font-semibold">{highlight.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

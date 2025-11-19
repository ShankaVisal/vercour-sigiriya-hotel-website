import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Mountain, Wind, ArrowRight } from 'lucide-react';
import { RoomCard } from '@/components/room-card';
import { rooms } from '@/lib/data';
import { MapEmbed } from '@/components/map-embed';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

export default function Home() {
  const featuredRooms = rooms.slice(0, 2);

  const highlights = [
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: 'Eco-Friendly Cabanas',
      description: 'Our cabanas are built with sustainable materials, blending seamlessly with the natural surroundings.',
    },
    {
      icon: <Wind className="h-10 w-10 text-primary" />,
      title: 'Peaceful Environment',
      description: 'Escape the hustle and bustle. Enjoy the serene and tranquil atmosphere of our lush gardens.',
    },
    {
      icon: <Mountain className="h-10 w-10 text-primary" />,
      title: 'Close to Sigiriya Rock',
      description: 'We are located just a short distance from the iconic Sigiriya Rock Fortress and other major attractions.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
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
            NATURA CABANA
          </h1>
          <p className="mt-4 max-w-2xl text-md md:text-lg tracking-wide">
            The eco-conscious haven of warmth, tranquility and restoration
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="text-center flex flex-col items-center">
                {highlight.icon}
                <h3 className="mt-4 font-headline text-xl font-semibold">{highlight.title}</h3>
                <p className="mt-2 text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Featured Rooms</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Discover our signature cabanas, designed for comfort and immersion in nature.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="link" className="text-primary hover:text-primary/80">
              <Link href="/rooms">
                View All Rooms <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About/CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Your Gateway to Serenity</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nestled amidst lush greenery, Vercour Sigiriya offers a unique blend of rustic charm and modern comfort. Our commitment to eco-friendly practices ensures a stay that's not only relaxing but also in harmony with the environment.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            {PlaceHolderImages.find(p => p.id === 'about-home') &&
              <Image 
                src={PlaceHolderImages.find(p => p.id === 'about-home')?.imageUrl ?? ''} 
                alt={PlaceHolderImages.find(p => p.id === 'about-home')?.description ?? ''}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint={PlaceHolderImages.find(p => p.id === 'about-home')?.imageHint ?? ''}
              />
            }
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Location</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Find us at the heart of Sri Lanka's cultural triangle, a perfect base to explore the wonders of Sigiriya.
            </p>
          </div>
          <Card>
            <CardContent className="p-2 md:p-4">
              <MapEmbed />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

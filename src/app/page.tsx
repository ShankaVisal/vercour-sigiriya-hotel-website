import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Mountain, Wind, ArrowRight, Plane, Users, Wifi, Utensils, Waves, Star } from 'lucide-react';
import { RoomCard } from '@/components/room-card';
import { rooms } from '@/lib/data';
import { MapEmbed } from '@/components/map-embed';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

// Inline SVG for laundry icon
const LaundryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10 text-primary"
  >
    <path d="M15.2 9.4a2 2 0 1 0-2.8 2.8" />
    <path d="M16 2a2 2 0 0 0-2 2v2" />
    <path d="M4 8v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
    <path d="M4 14h16" />
  </svg>
);

const GuestIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary">
    <path d="M16 24V14C16 8.477 20.477 4 26 4c5.523 0 10 4.477 10 10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26 24h10c5.523 0 10 4.477 10 10s-4.477 10-10 10H16c-5.523 0-10-4.477-10-10S10.477 24 16 24Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26 44V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Home() {
  const featuredRooms = rooms.slice(0, 2);
  const testimonialBg = PlaceHolderImages.find(p => p.id === 'testimonial-bg');
  const sigiriyaWelcomeImage = PlaceHolderImages.find(p => p.id === 'attraction-sigiriya');

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

  const services = [
    {
      icon: <Plane className="h-10 w-10 text-primary" />,
      title: 'Airport Pickup Service',
      description: 'Upon request, we can arrange transportation from the airport, with charges applicable for this service.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Housekeeper Services',
      description: 'The hotel provides complimentary daily housekeeping services.',
    },
    {
      icon: <Wifi className="h-10 w-10 text-primary" />,
      title: 'Wifi',
      description: 'We offer complimentary WiFi and internet access in all rooms and throughout the hotel premises.',
    },
    {
      icon: <LaundryIcon />,
      title: 'Laundry Services',
      description: 'We offer laundry services at the hotel for a fee, with pricing determined on a per-item basis.',
    },
    {
      icon: <Utensils className="h-10 w-10 text-primary" />,
      title: 'Room Service',
      description: 'Guests can access room service via WhatsApp. Additionally, food from the bar can be taken to your room.',
    },
    {
      icon: <Waves className="h-10 w-10 text-primary" />,
      title: 'Swimming Pool',
      description: 'A pool featuring shaded areas is open to all hotel guests, offering a refreshing escape from the tropical heat.',
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
            Vercour Sigiriya
          </h1>
          <p className="mt-4 max-w-2xl text-md md:text-lg tracking-wide">
            The eco-conscious haven of warmth, tranquility and restoration
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-sm uppercase tracking-widest text-primary">Welcome To</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">Vercour Sigiriya, An Eco-Luxe Reserve</h2>
            <p className="font-medium text-lg mt-4 mb-6">Ayubowan (May you live long)</p>
            <div className="space-y-4 text-muted-foreground">
              <p>Stretching inland from the heart of Sri Lanka's cultural triangle, the untamed wilderness feel of our sanctuary blankets the area around Sigiriya. At the edge of the wild is a one-of-a-kind experience, bringing together unparalleled nature experiences and sublime jungle dwellings.</p>
              <p>Nestled amidst lush greenery just beyond the borders of ancient kingdoms, Vercour Sigiriya is one of the premier locations in the world for history buffs, nature lovers, and adventurers. Our jungle dwellings provide an immersive experience among the sights and sounds of the island's remarkable fauna and flora.</p>
            </div>
          </div>
          <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
            {sigiriyaWelcomeImage &&
              <Image 
                src={sigiriyaWelcomeImage.imageUrl} 
                alt={sigiriyaWelcomeImage.description}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint={sigiriyaWelcomeImage.imageHint}
              />
            }
          </div>
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
      
      {/* Essentials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="relative min-h-[500px] lg:min-h-full">
            {PlaceHolderImages.find(p => p.id === 'gallery9') && (
              <Image 
                src={PlaceHolderImages.find(p => p.id === 'gallery9')?.imageUrl ?? ''} 
                alt={PlaceHolderImages.find(p => p.id === 'gallery9')?.description ?? ''}
                fill
                className="object-cover rounded-lg shadow-lg"
                data-ai-hint={PlaceHolderImages.find(p => p.id === 'gallery9')?.imageHint ?? ''}
              />
            )}
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Discover the services we offer</p>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mt-2 mb-8">Essentials For Your Stay</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.title} className="flex gap-4">
                  <div>{service.icon}</div>
                  <div>
                    <h3 className="font-headline text-xl font-semibold">{service.title}</h3>
                    <p className="mt-1 text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
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

      {/* Testimonial Section */}
      <section className="relative py-20 md:py-32">
        {testimonialBg && (
          <Image
            src={testimonialBg.imageUrl}
            alt={testimonialBg.description}
            fill
            className="object-cover"
            data-ai-hint={testimonialBg.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <GuestIcon />
            <p className="mt-4 text-sm uppercase tracking-widest">Voice from our guests</p>
            <blockquote className="mt-6 font-headline text-2xl md:text-3xl font-medium">
              "Cannot say enough good things about this hotel! We thoroughly enjoyed our stay in this little serene beach location. Stone huts were lovely, ours had an outdoor living room overlooking the shaded pool. Food was great at both restaurants and breakfast was included in our price. Staff was great and very friendly."
            </blockquote>
            <p className="mt-6 font-semibold">Robert G. - Tripadvisor</p>
            <div className="mt-2 flex justify-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
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

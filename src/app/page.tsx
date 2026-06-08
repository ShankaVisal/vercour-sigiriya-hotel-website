import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Leaf, Mountain, Wind, ArrowRight, Plane, Users, Wifi, Utensils, Waves, Star, Trees, Sparkles } from 'lucide-react';
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
      icon: <Trees className="h-10 w-10 text-accent" />,
      title: 'Two Private Treehouses',
      description: 'A couple treehouse and a family treehouse, both designed as intimate stays above the garden.',
    },
    {
      icon: <Sparkles className="h-10 w-10 text-accent" />,
      title: 'Boutique Nature Luxury',
      description: 'Warm timber textures, private balconies, air-conditioned comfort, and quiet views of Sigiriya.',
    },
    {
      icon: <Mountain className="h-10 w-10 text-accent" />,
      title: 'Sigiriya Within Reach',
      description: 'A peaceful base near Sigiriya Rock, Pidurangala, village experiences, and wildlife safaris.',
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
      description: 'We offer complimentary WiFi in both treehouses and shared guest areas.',
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
      <section className="relative min-h-screen w-full">
        <Image
          src="/assest/1.2.jpg"
          alt="Vercour Sigiriya hero view"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-primary/95" />
        <div className="relative z-10 flex min-h-screen flex-col justify-end text-white">
          <div className="container mx-auto px-4 pb-10 pt-32 md:pb-16">
            <p className="eyebrow text-white/80">Luxury treehouse retreat in Sigiriya</p>
            <h1 className="mt-5 max-w-5xl font-headline text-5xl font-normal leading-tight md:text-7xl lg:text-8xl">
              Vercour Sigiriya
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-xl">
              Two elevated treehouses, garden mornings, private balconies, and warm Sri Lankan hospitality near the cultural heart of Sigiriya.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/rooms">Explore Treehouses <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/60 bg-white/10 text-white hover:bg-white hover:text-primary">
                <Link href="/contact">Plan Your Stay</Link>
              </Button>
            </div>
            <div className="mt-12 grid gap-3 md:grid-cols-3">
              {[
                ['2', 'private treehouses'],
                ['6.6 km', 'to Sigiriya Rock'],
                ['12 PM', 'check-in begins'],
              ].map(([value, label]) => (
                <div key={label} className="border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                  <p className="font-headline text-4xl">{value}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.2em] text-white/70">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="luxury-section bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="eyebrow">Welcome to the canopy</p>
            <h2 className="font-headline text-4xl md:text-6xl font-normal mt-3">A small treehouse hideaway with a luxury lodge soul</h2>
            <p className="font-medium text-lg mt-5 mb-6 text-primary">Ayubowan. May you live long.</p>
            <div className="space-y-5 text-muted-foreground leading-8">
              <p>Vercour Sigiriya is intentionally intimate: only two treehouses, each wrapped in garden views and designed for slow mornings, soft light, and calm evenings after exploring Sri Lanka's cultural triangle.</p>
              <p>Expect private balconies, air-conditioned rooms, warm timber details, tea and coffee in-room, and the hush of a garden that lets the treehouse experience feel close to nature without losing comfort.</p>
            </div>
          </div>
          <div className="order-1 md:order-2 image-frame">
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
      <section className="luxury-section bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="text-center flex flex-col items-center border border-white/10 p-8">
                {highlight.icon}
                <h3 className="mt-4 font-headline text-2xl font-normal">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-7 text-primary-foreground/70">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Essentials Section */}
      <section className="luxury-section bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="relative min-h-[500px] lg:min-h-full image-frame">
            <Image
              src="/assest/1.2.jpg"
              alt="Discover the services we offer"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Stay details</p>
            <h2 className="font-headline text-4xl md:text-6xl font-normal mt-2 mb-8">Quiet comforts, considered carefully</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.title} className="flex gap-4 border-b border-border pb-6">
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


      {/* Featured Treehouses Section */}
      <section className="luxury-section bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="eyebrow">Only two, never crowded</p>
            <h2 className="font-headline text-4xl md:text-6xl font-normal mt-3">Choose your treehouse</h2>
            <p className="mt-5 max-w-2xl mx-auto text-muted-foreground leading-8">
              Discover our two signature treehouses, designed for comfort and immersion in nature.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="link" className="text-primary hover:text-accent">
              <Link href="/rooms">
                View Both Treehouses <ArrowRight className="ml-2 h-5 w-5" />
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
            <p className="mt-4 text-sm uppercase tracking-widest">Guest notes</p>
            <blockquote className="mt-6 font-headline text-2xl md:text-4xl font-normal leading-snug">
              "Staying in this treehouse was an unforgettable eco-tourism experience. The natural surroundings create a peaceful environment."
            </blockquote>
            <p className="mt-6 font-semibold">Recent Booking.com guest</p>
            <div className="mt-2 flex justify-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
          </div>
        </div>
      </section>

      {/* About/CTA Section */}
      <section className="luxury-section bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow">A slower way to stay</p>
            <h2 className="mt-3 font-headline text-4xl md:text-6xl font-normal">Wake above the garden, then wander into ancient Sigiriya</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              This is not a big resort. It is a quiet two-treehouse escape with space to breathe, a garden to wander, and easy access to the rock fortresses, village life, and wildlife routes that make Sigiriya unforgettable.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
          <div className="image-frame">
            <Image
              src="/assest/1.jpg"
              alt="Your Gateway to Serenity"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="luxury-section bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="eyebrow">Location</p>
            <h2 className="mt-3 font-headline text-4xl md:text-6xl font-normal">Close to the icons, tucked into quiet</h2>
            <p className="mt-5 max-w-2xl mx-auto text-muted-foreground leading-8">
              Find us at the heart of Sri Lanka's cultural triangle, a perfect base to explore the wonders of Sigiriya.
            </p>
          </div>
          <Card className="overflow-hidden border-primary/10 shadow-2xl">
            <CardContent className="p-2 md:p-4">
              <MapEmbed />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

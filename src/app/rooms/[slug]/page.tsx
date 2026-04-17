import { notFound } from 'next/navigation';
import { rooms } from '@/lib/data';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Users, Wifi, Tv, Bath, Bed, Wine, Building, Trees, Sofa, Waves, Wind, AirVent } from 'lucide-react';
import { BOOKING_COM_URL } from '@/lib/constants';
import { RoomGalleryCarousel } from '@/components/room-gallery-carousel';

const FridgeIcon = ({className}: {className?: string}) => (
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
        className={className}
    >
        <path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
        <path d="M5 10h14" />
        <path d="M7 14v-2" />
    </svg>
);

const amenityIcons: { [key: string]: React.ReactNode } = {
    users: <Users className="h-6 w-6 text-primary" />,
    wifi: <Wifi className="h-6 w-6 text-primary" />,
    tv: <Tv className="h-6 w-6 text-primary" />,
    bath: <Bath className="h-6 w-6 text-primary" />,
    bed: <Bed className="h-6 w-6 text-primary" />,
    balcony: <Building className="h-6 w-6 text-primary" />,
    garden: <Trees className="h-6 w-6 text-primary" />,
    sofa: <Sofa className="h-6 w-6 text-primary" />,
    pool: <Waves className="h-6 w-6 text-primary" />,
    wine: <Wine className="h-6 w-6 text-primary" />,
    wind: <Wind className="h-6 w-6 text-primary" />,
    'air-vent': <AirVent className="h-6 w-6 text-primary" />,
    fridge: <FridgeIcon className="h-6 w-6 text-primary" />,
    default: <Users className="h-6 w-6 text-primary" />,
  };
  

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const room = rooms.find((room) => room.slug === resolvedParams.slug);

  if (!room) {
    return {
      title: 'Room Not Found',
    };
  }

  return {
    title: room.name,
    description: room.description,
  };
}

export default async function RoomPage({ params }: Props) {
  const resolvedParams = await params;
  const room = rooms.find((room) => room.slug === resolvedParams.slug);

  if (!room || !room.isAvailable) {
    notFound();
  }

  return (
    <>
      {/* Hero Section with Gradient Overlay */}
      <section className="relative h-96 md:h-[500px] w-full">
        {room.images.length > 0 && (
          <Image
            src={room.images[0].imageUrl}
            alt={room.images[0].description}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-end text-center text-white p-4 pb-12">
          <div className="max-w-3xl">
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-3 tracking-tight">
              {room.name}
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
              {room.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4 py-20 md:py-32">
          {/* Image Gallery Carousel */}
          <section className="mb-24">
            <h2 className="font-headline text-3xl font-bold mb-8">Photo Gallery</h2>
            <RoomGalleryCarousel images={room.images} />
          </section>

          {/* Two Column Layout */}
          <section className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Column - Description & Amenities */}
            <div className="md:col-span-2 space-y-12">
              {/* About Section */}
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">About {room.name}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  {room.longDescription}
                </p>
              </div>

              {/* Amenities Section */}
              <div>
                <h3 className="font-headline text-2xl md:text-3xl font-bold mb-8">Amenities & Features</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                  {room.amenities.map((amenity) => (
                    <div key={amenity.name} className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="mb-3">
                        {typeof amenity.icon === "string"
                          ? amenityIcons[amenity.icon] || amenityIcons.default
                          : amenity.icon}
                      </div>
                      <span className="text-sm font-medium">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="md:col-span-1">
              <Card className="border-0 shadow-2xl sticky top-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <CardContent className="p-8 relative">
                  <div className="mb-6">
                    <h3 className="font-headline text-2xl md:text-3xl font-bold mb-2">
                      Plan Your Stay
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Experience luxury in the heart of nature
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-muted to-transparent mb-6" />

                  {/* Details */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">
                        <span className="font-semibold">{room.capacity}</span> guests maximum
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-muted to-transparent mb-6" />

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Button asChild size="lg" className="w-full font-semibold h-12">
                      <a href={BOOKING_COM_URL} target="_blank" rel="noopener noreferrer">
                        Book Now
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="w-full font-semibold h-12 border-primary text-primary hover:bg-primary/5">
                      <Link href="/contact">
                        Send Inquiry
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return rooms.filter((room) => room.isAvailable).map((room) => ({
    slug: room.slug,
  })) as Promise<{ slug: string }[]>;
}

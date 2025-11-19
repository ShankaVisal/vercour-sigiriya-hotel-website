import { notFound } from 'next/navigation';
import { rooms } from '@/lib/data';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Users, Wifi, Tv, Bath, Bed, Wine, Building, Trees, Sofa, Waves, Wind, AirVent, Fridge } from 'lucide-react';
import { BOOKING_COM_URL } from '@/lib/constants';

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
    fridge: <Fridge className="h-6 w-6 text-primary" />,
    default: <Users className="h-6 w-6 text-primary" />,
  };
  

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const room = rooms.find((room) => room.slug === params.slug);

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

export default function RoomPage({ params }: Props) {
  const room = rooms.find((room) => room.slug === params.slug);

  if (!room) {
    notFound();
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">{room.name}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {room.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 space-y-20">
        {/* Image Carousel */}
        <section>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {room.images.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-w-16 aspect-h-9">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 1024px"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </section>
        
        {/* Room Details */}
        <section className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
                <h2 className="font-headline text-3xl font-bold mb-4">About this room</h2>
                <p className="text-muted-foreground leading-relaxed">
                    {room.longDescription}
                </p>

                <h3 className="font-headline text-2xl font-bold mt-12 mb-6">What this place offers</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {room.amenities.map(amenity => (
                        <div key={amenity.name} className="flex items-center gap-3">
                            {typeof amenity.icon === 'string' ? amenityIcons[amenity.icon] || amenityIcons.default : amenity.icon}
                            <span className="text-sm">{amenity.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Booking Card */}
            <div className="md:col-span-1">
                <Card className="shadow-lg sticky top-24">
                    <CardContent className="p-6">
                        <h3 className="font-headline text-2xl font-bold mb-4">Book Your Stay</h3>
                        <div className="flex items-baseline gap-2 mb-2">
                            <p className="text-sm text-muted-foreground">Up to {room.capacity} Guests</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {room.highlights.map(highlight => (
                                <Badge key={highlight} variant="secondary">{highlight}</Badge>
                            ))}
                        </div>
                        <Button asChild size="lg" className="w-full mb-2">
                            <a href={BOOKING_COM_URL} target="_blank" rel="noopener noreferrer">Book on Booking.com</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="w-full">
                            <Link href="/contact">Inquire Now</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
      </div>
    </>
  );
}

export async function generateStaticParams() {
    return rooms.map((room) => ({
      slug: room.slug,
    }));
  }

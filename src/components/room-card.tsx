import Image from 'next/image';
import Link from 'next/link';
import type { Room } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Wifi, Tv, Bath, Bed, Wine, Building, Trees, Sofa, Waves } from 'lucide-react';
import { BOOKING_COM_URL } from '@/lib/constants';

const amenityIcons: { [key: string]: React.ReactNode } = {
  default: <Users className="h-4 w-4 text-muted-foreground" />,
  wifi: <Wifi className="h-4 w-4 text-muted-foreground" />,
  tv: <Tv className="h-4 w-4 text-muted-foreground" />,
  bath: <Bath className="h-4 w-4 text-muted-foreground" />,
  bed: <Bed className="h-4 w-4 text-muted-foreground" />,
  balcony: <Building className="h-4 w-4 text-muted-foreground" />,
  garden: <Trees className="h-4 w-4 text-muted-foreground" />,
  users: <Users className="h-4 w-4 text-muted-foreground" />,
  sofa: <Sofa className="h-4 w-4 text-muted-foreground" />,
  pool: <Waves className="h-4 w-4 text-muted-foreground" />,
  wine: <Wine className="h-4 w-4 text-muted-foreground" />,
};

export function RoomCard({ room }: { room: Room }) {
  return (
    <Card className="flex flex-col overflow-hidden h-full">
      <div className="relative w-full h-64">
        {room.image && (
          <Image
            src={room.image.imageUrl}
            alt={room.image.description}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            data-ai-hint={room.image.imageHint}
          />
        )}
      </div>
      <CardHeader>
        <CardTitle className="font-headline">{room.name}</CardTitle>
        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
            <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>Up to {room.capacity} guests</span>
            </div>
            <div className='flex items-center gap-2'>
              {room.amenities.map((amenity) => (
                <div key={amenity.name} className="flex items-center gap-1" title={amenity.name}>
                  {typeof amenity.icon === 'string' ? amenityIcons[amenity.icon] || amenityIcons.default : amenity.icon}
                </div>
              ))}
            </div>
        </div>
        <CardDescription className="pt-2">{room.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {room.highlights.map((highlight) => (
            <Badge key={highlight} variant="secondary">
              {highlight}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        <Button asChild className="flex-grow">
          <Link href={BOOKING_COM_URL} target="_blank" rel="noopener noreferrer">Book on Booking.com</Link>
        </Button>
        <Button asChild variant="secondary" className="flex-grow">
          <Link href="/contact">Inquire Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

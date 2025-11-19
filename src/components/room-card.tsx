import Image from 'next/image';
import Link from 'next/link';
import type { Room } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Wifi, Tv, Bath, Bed, Wine, Building, Trees, Sofa, Waves, Wind, AirVent } from 'lucide-react';

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
  users: <Users className="h-4 w-4 text-muted-foreground" />,
  wifi: <Wifi className="h-4 w-4 text-muted-foreground" />,
  tv: <Tv className="h-4 w-4 text-muted-foreground" />,
  bath: <Bath className="h-4 w-4 text-muted-foreground" />,
  bed: <Bed className="h-4 w-4 text-muted-foreground" />,
  balcony: <Building className="h-4 w-4 text-muted-foreground" />,
  garden: <Trees className="h-4 w-4 text-muted-foreground" />,
  sofa: <Sofa className="h-4 w-4 text-muted-foreground" />,
  pool: <Waves className="h-4 w-4 text-muted-foreground" />,
  wine: <Wine className="h-4 w-4 text-muted-foreground" />,
  "air-vent": <AirVent className="h-4 w-4 text-muted-foreground" />,
  fridge: <FridgeIcon className="h-4 w-4 text-muted-foreground" />,
  default: <Users className="h-4 w-4 text-muted-foreground" />,
};

export function RoomCard({ room }: { room: Room }) {
  return (
    <Card className="flex flex-col overflow-hidden h-full">
      <div className="relative w-full h-64">
        {room.images && room.images.length > 0 && (
          <Image
            src={room.images[0].imageUrl}
            alt={room.images[0].description}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            data-ai-hint={room.images[0].imageHint}
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
              {room.amenities.slice(0, 5).map((amenity) => (
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
          <Link href={`/rooms/${room.slug}`}>View Details</Link>
        </Button>
        <Button asChild variant="secondary" className="flex-grow">
          <Link href="/contact">Inquire Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

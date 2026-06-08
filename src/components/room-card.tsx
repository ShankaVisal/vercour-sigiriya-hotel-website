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
  users: <Users className="h-4 w-4" />,
  wifi: <Wifi className="h-4 w-4" />,
  tv: <Tv className="h-4 w-4" />,
  bath: <Bath className="h-4 w-4" />,
  bed: <Bed className="h-4 w-4" />,
  balcony: <Building className="h-4 w-4" />,
  garden: <Trees className="h-4 w-4" />,
  sofa: <Sofa className="h-4 w-4" />,
  pool: <Waves className="h-4 w-4" />,
  wine: <Wine className="h-4 w-4" />,
  "air-vent": <AirVent className="h-4 w-4" />,
  fridge: <FridgeIcon className="h-4 w-4" />,
  default: <Users className="h-4 w-4" />,
};

export function RoomCard({ room }: { room: Room }) {
  return (
    <Card className="group relative flex h-full flex-col overflow-hidden border-primary/10 bg-card shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative w-full h-96">
        {room.images && room.images.length > 0 && (
          <Image
            src={room.images[0].imageUrl}
            alt={room.images[0].description}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            data-ai-hint={room.images[0].imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-lg">
          {room.capacity} guests
        </div>

        <div className="absolute bottom-0 left-0 p-6 text-white">
          <CardTitle className="font-headline text-3xl font-normal">{room.name}</CardTitle>
          <CardDescription className="pt-2 text-white/90 line-clamp-2">{room.description}</CardDescription>
        </div>
      </div>
      
      <CardContent className="flex-grow p-6 bg-card">
        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          {room.amenities.slice(0, 4).map((amenity) => (
            <div key={amenity.name} className="flex items-center gap-2" title={amenity.name}>
              {typeof amenity.icon === 'string' ? amenityIcons[amenity.icon] : amenity.icon}
              <span className="truncate">{amenity.name}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 bg-card flex flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {room.highlights.map((highlight) => (
            <Badge key={highlight} variant="secondary" className="border-primary/10">
              {highlight}
            </Badge>
          ))}
          {!room.isAvailable && <Badge variant="destructive">Coming Soon</Badge>}
        </div>
        <div className="w-full flex gap-2">
          {room.isAvailable ? (
            <>
              <Button asChild className="flex-grow">
                <Link href={`/rooms/${room.slug}`}>View Details</Link>
              </Button>
              <Button asChild variant="secondary" className="flex-grow">
                <Link href="/contact">Inquire Now</Link>
              </Button>
            </>
          ) : (
            <Button className="w-full" disabled>
              Coming Soon
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

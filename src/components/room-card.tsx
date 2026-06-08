import Image from 'next/image';
import Link from 'next/link';
import type { Room } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Users, Wifi, Tv, Bath, Bed, Wine, Building, Trees, Sofa, Waves, Wind, AirVent, ArrowUpRight } from 'lucide-react';

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
  const sizeAmenity = room.amenities.find((amenity) => amenity.name.includes('m2'));
  const bedAmenity = room.amenities.find((amenity) => amenity.name.includes('Bed'));
  const viewAmenity = room.amenities.find((amenity) => amenity.name.includes('Views'));
  const previewAmenities = room.amenities
    .filter((amenity) => ![sizeAmenity?.name, bedAmenity?.name, viewAmenity?.name].includes(amenity.name))
    .slice(0, 4);

  return (
    <Card className="group grid h-full overflow-hidden border-primary/10 bg-card/95 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl lg:grid-rows-[minmax(360px,1fr)_auto]">
      <div className="relative min-h-[360px] overflow-hidden">
        {room.images && room.images.length > 0 && (
          <Image
            src={room.images[0].imageUrl}
            alt={room.images[0].description}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            data-ai-hint={room.images[0].imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/25 to-black/10" />
        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg backdrop-blur-md">
          Treehouse stay
        </div>
        <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2 text-white">
          {[
            { label: 'Guests', value: room.capacity },
            { label: 'Space', value: sizeAmenity?.name.replace(' Treehouse', '') ?? 'Treehouse' },
            { label: 'Beds', value: bedAmenity?.name ?? 'King Bed' },
          ].map((item) => (
            <div key={item.label} className="border border-white/15 bg-white/10 p-3 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">{item.label}</p>
              <p className="mt-1 text-sm font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 p-6 md:p-7">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {room.highlights.map((highlight) => (
              <Badge key={highlight} variant="secondary" className="rounded-full border-primary/10 bg-secondary/80 px-3 py-1 font-medium">
                {highlight}
              </Badge>
            ))}
          </div>
          <CardTitle className="font-headline text-3xl font-normal leading-tight md:text-4xl">{room.name}</CardTitle>
          <CardDescription className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
            {room.description}
          </CardDescription>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {previewAmenities.map((amenity) => (
            <div key={amenity.name} className="flex items-center gap-2 rounded-md border border-primary/10 bg-background/70 px-3 py-3 text-sm text-muted-foreground" title={amenity.name}>
              <span className="text-accent">{typeof amenity.icon === 'string' ? amenityIcons[amenity.icon] : amenity.icon}</span>
              <span className="truncate">{amenity.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3 border-t border-border pt-5 sm:flex-row">
          <Button asChild className="flex-1 justify-between">
            <Link href={`/rooms/${room.slug}`}>
              View Treehouse
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex-1 border-primary/20">
            <Link href="/contact">Inquire</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}

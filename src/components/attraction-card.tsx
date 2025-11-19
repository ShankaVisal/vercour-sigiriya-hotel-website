import Image from 'next/image';
import type { Attraction } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function AttractionCard({ attraction }: { attraction: Attraction }) {
  return (
    <Card className="overflow-hidden">
        {attraction.image && (
          <div className="relative w-full h-56">
            <Image
              src={attraction.image.imageUrl}
              alt={attraction.image.description}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={attraction.image.imageHint}
            />
          </div>
        )}
      <CardHeader>
        <CardTitle className="font-headline">{attraction.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{attraction.description}</CardDescription>
      </CardContent>
    </Card>
  );
}

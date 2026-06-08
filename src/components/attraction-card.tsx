import Image from 'next/image';
import type { Attraction } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Clock, Car } from 'lucide-react';

export function AttractionCard({ attraction }: { attraction: Attraction }) {
  const travelInfo = [
    { icon: <Clock className="h-4 w-4" />, text: `Best time: ${attraction.bestTime}` },
    { icon: <Car className="h-4 w-4" />, text: `Travel time: ${attraction.travelTime}` },
  ];

  return (
    <Card className="overflow-hidden border-primary/10 shadow-xl group transition-all hover:-translate-y-1 hover:shadow-2xl">
      <div className="grid md:grid-cols-5 gap-0">
        {/* Image Section */}
        <div className="relative w-full h-64 md:h-auto md:col-span-2">
          {attraction.image && (
            <Image
              src={attraction.image.imageUrl}
              alt={attraction.image.description}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 40vw"
              data-ai-hint={attraction.image.imageHint}
            />
          )}
        </div>

        {/* Content Section */}
        <div className="md:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline text-3xl font-normal">{attraction.name}</CardTitle>
            <CardDescription className="pt-2">{attraction.description}</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Highlights */}
            <div>
              <h4 className="font-semibold mb-3 text-primary">Highlights</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {attraction.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-accent mt-1 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Travel Info */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {travelInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  {info.icon}
                  <span>{info.text}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}

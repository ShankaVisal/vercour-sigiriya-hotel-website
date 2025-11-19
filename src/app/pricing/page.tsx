import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Pricing & Rates',
  description: 'View the room rates for our cabanas at Vercour Sigiriya. Find pricing for all seasons and book your stay.',
};

const pricingData = [
  { roomType: 'Standard Garden Cabana', lowSeason: '$100', highSeason: '$150' },
  { roomType: 'Deluxe Jungle Cabana', lowSeason: '$130', highSeason: '$180' },
  { roomType: 'Family Garden Cabana', lowSeason: '$180', highSeason: '$250' },
  { roomType: 'Honeymoon Suite', lowSeason: '$220', highSeason: '$300' },
];

export default function PricingPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'gallery4');
  return (
    <>
      {/* Page Header */}
      <section className="relative h-[50vh] w-full">
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
          <h1 className="font-headline text-4xl md:text-6xl font-bold">
            Our Rates
          </h1>
          <p className="mt-4 max-w-2xl text-lg">
            Transparent pricing for your perfect getaway. Rates are per night and include breakfast.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
            <Table>
              <TableCaption>All prices are in USD and subject to taxes and service charges. Please contact us for custom packages.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50%]">Room Type</TableHead>
                  <TableHead className="text-right">Low Season Rate</TableHead>
                  <TableHead className="text-right">High Season Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingData.map((item) => (
                  <TableRow key={item.roomType}>
                    <TableCell className="font-medium">{item.roomType}</TableCell>
                    <TableCell className="text-right">{item.lowSeason}</TableCell>
                    <TableCell className="text-right">{item.highSeason}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-8 space-y-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Badge variant="secondary">Low Season</Badge> May to June, September to October</div>
                <div className="flex items-center gap-2"><Badge variant="default">High Season</Badge> July to August, November to April</div>
            </div>
        </div>
      </div>
    </>
  );
}

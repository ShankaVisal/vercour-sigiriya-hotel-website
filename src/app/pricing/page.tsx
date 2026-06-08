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
  description: 'Check rates for the two Vercour Sigiriya treehouses and book your stay.',
};

const pricingData = [
  { roomType: 'Vercour Couple Treehouse', occupancy: 'Up to 2 guests', beds: '1 king bed' },
  { roomType: 'Vercour Family Treehouse', occupancy: 'Up to 4 guests', beds: '2 king beds' },
];

export default function PricingPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'gallery4');
  return (
    <>
      {/* Page Header */}
      <section className="relative h-[60vh] w-full">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/40 to-primary/90" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <p className="eyebrow text-white/80">Rates and details</p>
          <h1 className="mt-4 font-headline text-5xl font-normal md:text-7xl">
            Our Rates
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
            Rates vary by date and availability. Contact us or book online for the latest price.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <p className="eyebrow">Only two treehouses</p>
              <h2 className="mt-3 font-headline text-4xl font-normal md:text-5xl">Simple options, personal service</h2>
            </div>
            <Table>
              <TableCaption>Both treehouses include free WiFi, private parking, balcony or terrace access, and tea/coffee facilities.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50%]">Room Type</TableHead>
                  <TableHead className="text-right">Occupancy</TableHead>
                  <TableHead className="text-right">Beds</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingData.map((item) => (
                  <TableRow key={item.roomType}>
                    <TableCell className="font-medium">{item.roomType}</TableCell>
                    <TableCell className="text-right">{item.occupancy}</TableCell>
                    <TableCell className="text-right">{item.beds}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-8 space-y-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Badge variant="secondary">Check-in</Badge> 12:00 PM to 12:00 AM</div>
                <div className="flex items-center gap-2"><Badge variant="default">Check-out</Badge> 6:00 AM to 11:00 AM</div>
            </div>
        </div>
      </div>
    </>
  );
}

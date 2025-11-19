import { BookingForm } from '@/components/booking-form';
import { MapEmbed } from '@/components/map-embed';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { BOOKING_COM_URL, AGODA_URL, AIRBNB_URL, HOTEL_ADDRESS, HOTEL_EMAIL, HOTEL_PHONE } from '@/lib/constants';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Contact & Booking',
  description: 'Get in touch with Vercour Sigiriya for inquiries and bookings. Find our location and contact details, or book through our partner sites.',
};

export default function ContactPage() {
  const contactInfo = [
    { icon: <MapPin className="h-5 w-5 text-primary" />, text: HOTEL_ADDRESS, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(HOTEL_ADDRESS)}` },
    { icon: <Phone className="h-5 w-5 text-primary" />, text: HOTEL_PHONE, href: `tel:${HOTEL_PHONE.replace(/\s/g, '')}` },
    { icon: <Mail className="h-5 w-5 text-primary" />, text: HOTEL_EMAIL, href: `mailto:${HOTEL_EMAIL}` },
  ];
  const heroImage = PlaceHolderImages.find(p => p.id === 'gallery9');

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
            Contact & Booking
          </h1>
          <p className="mt-4 max-w-2xl text-lg">
            We're excited to welcome you. Reach out for any questions or to start planning your stay.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-5 gap-12">
            
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Send Us an Inquiry</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <BookingForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Booking Links */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 text-muted-foreground hover:text-primary transition-colors">
                    <span className="mt-1">{item.icon}</span>
                    <span className='flex-1'>{item.text}</span>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Book via Partners</CardTitle>
                <CardDescription>Book instantly through our trusted partners.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <Button asChild size="lg">
                    <a href={BOOKING_COM_URL} target="_blank" rel="noopener noreferrer">Booking.com</a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                    <a href={AGODA_URL} target="_blank" rel="noopener noreferrer">Agoda</a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                    <a href={AIRBNB_URL} target="_blank" rel="noopener noreferrer">Airbnb</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <section className="w-full">
        <div className="container mx-auto px-4 mb-8">
            <h2 className="text-center font-headline text-3xl font-bold">How to Find Us</h2>
        </div>
        <MapEmbed />
      </section>
    </>
  );
}

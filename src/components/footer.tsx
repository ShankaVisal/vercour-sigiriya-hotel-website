import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { navLinks } from '@/lib/data';
import { AGODA_URL, AIRBNB_URL, BOOKING_COM_URL, HOTEL_ADDRESS, HOTEL_EMAIL, HOTEL_PHONE } from '@/lib/constants';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Footer() {
  const bookingSites = [
    { name: 'Booking.com', url: BOOKING_COM_URL, icon: 'B' },
    { name: 'Agoda', url: AGODA_URL, icon: 'A' },
    { name: 'Airbnb', url: AIRBNB_URL, icon: 'A' },
  ];

  const contactInfo = [
    { icon: <MapPin className="h-4 w-4" />, text: HOTEL_ADDRESS, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(HOTEL_ADDRESS)}` },
    { icon: <Phone className="h-4 w-4" />, text: HOTEL_PHONE, href: `tel:${HOTEL_PHONE.replace(/\s/g, '')}` },
    { icon: <Mail className="h-4 w-4" />, text: HOTEL_EMAIL, href: `mailto:${HOTEL_EMAIL}` },
  ];

  const logo = PlaceHolderImages.find(p => p.id === 'logo');

  return (
    <footer className="bg-secondary/50 text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              {logo && <Image src={logo.imageUrl} alt={logo.description} width={140} height={40} className="w-36 h-auto" />}
            </Link>
            <p className="text-sm text-muted-foreground">
              Experience Nature & Comfort in the Heart of Sigiriya. Your tranquil escape awaits.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h4 className="font-semibold font-headline">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="font-semibold font-headline">Contact Us</h4>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.icon}
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Booking Section */}
          <div className="space-y-4">
            <h4 className="font-semibold font-headline">Book With Our Partners</h4>
            <div className="flex flex-col space-y-2 items-start">
              <Button asChild variant="outline" className="w-full justify-start">
                  <a href={BOOKING_COM_URL} target="_blank" rel="noopener noreferrer">Booking.com</a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                  <a href={AGODA_URL} target="_blank" rel="noopener noreferrer">Agoda</a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                  <a href={AIRBNB_URL} target="_blank" rel="noopener noreferrer">Airbnb</a>
              </Button>
            </div>
          </div>

        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Vercour Sigiriya. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

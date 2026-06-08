import Link from 'next/link';
import { Mail, MapPin, Phone, Facebook, Instagram } from 'lucide-react';
import { navLinks } from '@/lib/data';
import { AGODA_URL, AIRBNB_URL, BOOKING_COM_URL, HOTEL_ADDRESS, HOTEL_EMAIL, HOTEL_PHONE } from '@/lib/constants';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const TikTokIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.98-1.55-1.99-2.02-4.35-1.7-6.73.28-2.06 1.3-4.06 2.8-5.5.87-.83 1.94-1.46 3.09-1.84.18-3.04.01-6.11.01-9.16Z"/>
    </svg>
);


export function Footer() {
  const contactInfo = [
    { icon: <MapPin className="h-4 w-4" />, text: HOTEL_ADDRESS, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(HOTEL_ADDRESS)}` },
    { icon: <Phone className="h-4 w-4" />, text: HOTEL_PHONE, href: `tel:${HOTEL_PHONE.replace(/\s/g, '')}` },
    { icon: <Mail className="h-4 w-4" />, text: HOTEL_EMAIL, href: `mailto:${HOTEL_EMAIL}` },
  ];

  const socialLinks = [
    { href: 'https://facebook.com', icon: <Facebook className="h-5 w-5" />, name: 'Facebook' },
    { href: 'https://instagram.com', icon: <Instagram className="h-5 w-5" />, name: 'Instagram' },
    { href: 'https://tiktok.com', icon: <TikTokIcon className="h-5 w-5" />, name: 'TikTok' },
  ]

  const logo = PlaceHolderImages.find(p => p.id === 'logo');

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              {logo && <Image src={logo.imageUrl} alt={logo.description} width={140} height={40} className="w-36 h-auto invert brightness-0" />}
            </Link>
            <p className="max-w-xs text-sm text-primary-foreground/70">
              Two intimate treehouses wrapped in garden views, warm timber, and quiet Sigiriya mornings.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h4 className="font-semibold font-headline">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
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
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    <span className='pt-1'>{item.icon}</span>
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Booking & Social Section */}
          <div className="space-y-4">
            <h4 className="font-semibold font-headline">Booking & Social</h4>
            <ul className="space-y-2">
                <li>
                    <a href={BOOKING_COM_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Booking.com</a>
                </li>
                <li>
                    <a href={AGODA_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Agoda</a>
                </li>
                <li>
                    <a href={AIRBNB_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Airbnb</a>
                </li>
            </ul>
            <div className="flex space-x-4 pt-4">
                {socialLinks.map(link => (
                    <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label={link.name}>
                        {link.icon}
                    </a>
                ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Vercour Sigiriya. All Rights Reserved.</p>
          <p>Developed by <a href="https://www.taproit.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent transition-colors">Tapro IT</a></p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { WhatsAppButton } from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: {
    default: 'Vercour Sigiriya – Eco-Friendly Hotel',
    template: '%s | Vercour Sigiriya',
  },
  description: 'Experience nature and comfort in the heart of Sigiriya. Eco-friendly cabanas in a peaceful environment, close to Sigiriya Rock.',
  keywords: ['hotel', 'sigiriya', 'sri lanka', 'eco-friendly', 'nature resort', 'cabana', 'booking', 'vercour'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <WhatsAppButton />
      </body>
    </html>
  );
}

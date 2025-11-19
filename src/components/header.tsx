"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const logo = PlaceHolderImages.find(p => p.id === 'logo');

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Transition from transparent to solid when scrolling down
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = cn(
    'fixed top-0 z-50 w-full transition-all duration-300',
    isHomePage && !isScrolled
      ? 'bg-transparent text-white'
      : 'bg-background/95 text-foreground shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b'
  );

  const linkClasses = cn(
    'transition-colors hover:text-primary',
    isHomePage && !isScrolled ? 'text-white' : 'text-foreground/70'
  );

  const activeLinkClasses = cn(
      isHomePage && !isScrolled ? 'text-white font-semibold' : 'text-primary font-semibold'
  );


  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn('flex items-center gap-6 text-sm font-medium', className)}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className={cn(linkClasses, pathname === link.href && activeLinkClasses)}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          {logo && <Image src={logo.imageUrl} alt={logo.description} width={140} height={40} className={cn("w-36 h-auto", isHomePage && !isScrolled && "invert brightness-0")} />}
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <NavLinks />
          <Button asChild variant={isHomePage && !isScrolled ? "outline" : "default"} size="sm">
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background text-foreground">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    {logo && <Image src={logo.imageUrl} alt={logo.description} width={140} height={40} className="w-36 h-auto" />}
                  </Link>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col gap-4 py-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname === link.href ? 'text-primary' : 'text-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto">
                    <Button asChild className="w-full">
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Book Now</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

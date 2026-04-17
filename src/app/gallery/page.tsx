
"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Metadata for SEO is handled in a separate page.tsx if this were a server component,
// but since it needs state, we'll assume it's set in a parent layout or a metadata-only file.
// For the purpose of this file, we focus on client-side interactivity.

type GalleryAsset = {
  id: string;
  src: string;
  alt: string;
};

const galleryAssets: GalleryAsset[] = [
  { id: '1', src: '/assest/1.jpg', alt: 'Gallery image 1' },
  { id: '1-1', src: '/assest/1.1.jpg', alt: 'Gallery image 1.1' },
  { id: '1-2', src: '/assest/1.2.jpg', alt: 'Gallery image 1.2' },
  { id: '1-3', src: '/assest/1.3.jpg', alt: 'Gallery image 1.3' },
  { id: '1-4', src: '/assest/1.4.jpg', alt: 'Gallery image 1.4' },
  { id: '1-5', src: '/assest/1.5.jpg', alt: 'Gallery image 1.5' },
  { id: '2', src: '/assest/2.jpg', alt: 'Gallery image 2' },
  { id: '2-1', src: '/assest/2.1.jpg', alt: 'Gallery image 2.1' },
  { id: '2-2', src: '/assest/2.2.jpg', alt: 'Gallery image 2.2' },
  { id: '2-3', src: '/assest/2.3.jpg', alt: 'Gallery image 2.3' },
  { id: '2-4', src: '/assest/2.4.png', alt: 'Gallery image 2.4' },
  { id: '3', src: '/assest/3.jpg', alt: 'Gallery image 3' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryAsset | null>(null);
  const heroImage = galleryAssets.find((image) => image.id === '1-2') ?? galleryAssets[0];

  return (
    <>
    {/* Page Header */}
    <section className="relative h-screen w-full">
        {heroImage && (
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-normal tracking-wider">
            Gallery
          </h1>
          <p className="mt-4 max-w-2xl text-md md:text-lg tracking-wide">
            A glimpse into the serene beauty of Vercour Sigiriya and its surroundings.
          </p>
        </div>
      </section>

    {/* Gallery Grid */}
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryAssets.map((image) => (
            <DialogTrigger asChild key={image.id} onClick={() => setSelectedImage(image)}>
              <Card className="overflow-hidden cursor-pointer group transition-all hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative h-80">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
          ))}
        </div>
        
        {selectedImage && (
          <DialogContent className="max-w-5xl w-full p-2 bg-transparent border-none shadow-none">
            <VisuallyHidden>
              <DialogTitle>{selectedImage.alt}</DialogTitle>
            </VisuallyHidden>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1600}
              height={1200}
              className="w-full h-auto object-contain rounded-lg max-h-[90vh]"
            />
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-white bg-black/30 hover:bg-black/50 hover:text-white">
                    <X />
                </Button>
            </DialogTrigger>
          </DialogContent>
        )}
      </Dialog>
    </div>
    </>
  );
}

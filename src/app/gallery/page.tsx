"use client";

import Image from 'next/image';
import { useState } from 'react';
import { galleryImages } from '@/lib/data';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

// Metadata for SEO is handled in a separate page.tsx if this were a server component,
// but since it needs state, we'll assume it's set in a parent layout or a metadata-only file.
// For the purpose of this file, we focus on client-side interactivity.

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);

  return (
    <>
    {/* Page Header */}
    <section className="bg-secondary/30 py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Gallery</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A glimpse into the serene beauty of Vercour Sigiriya and its surroundings.
        </p>
      </div>
    </section>

    {/* Gallery Grid */}
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Dialog>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <DialogTrigger asChild key={image.id} onClick={() => setSelectedImage(image)}>
              <Card className="overflow-hidden cursor-pointer group transition-all hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative aspect-w-1 aspect-h-1">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
          ))}
        </div>
        
        {selectedImage && (
          <DialogContent className="max-w-4xl p-2 bg-transparent border-none shadow-none">
            <Image
              src={selectedImage.imageUrl}
              alt={selectedImage.description}
              width={1600}
              height={1200}
              className="w-full h-auto object-contain rounded-lg"
              data-ai-hint={selectedImage.imageHint}
            />
          </DialogContent>
        )}
      </Dialog>
    </div>
    </>
  );
}

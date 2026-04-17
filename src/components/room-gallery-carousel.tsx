'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type RoomImage = {
  id: string;
  imageUrl: string;
  description: string;
  imageHint?: string;
};

type Props = {
  images: RoomImage[];
};

export function RoomGalleryCarousel({ images }: Props) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-primary hover:bg-primary/90 text-white border-0 rounded-full"
        onClick={() => scroll('left')}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      {/* Thumbnails Row */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}
      >
        {images.map((image, index) => (
          <Dialog key={image.id}>
            <DialogTrigger asChild>
              <div
                className="relative flex-shrink-0 h-96 w-96 bg-secondary rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImageIndex(index)}
              >
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full p-2 md:p-4 bg-black border-0">
              <VisuallyHidden>
                <DialogTitle>{image.description}</DialogTitle>
              </VisuallyHidden>
              <div className="relative h-96 md:h-[600px] w-full">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {/* Right Navigation Button */}
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-primary hover:bg-primary/90 text-white border-0 rounded-full"
        onClick={() => scroll('right')}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
}

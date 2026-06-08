import Image from 'next/image';
import type { Review } from '@/lib/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

export function ReviewCard({ review }: { review: Review }) {
  return (
    <Card className="h-full flex flex-col border-primary/10 bg-card/90 shadow-sm">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          {review.avatar && <AvatarImage src={review.avatar.imageUrl} alt={review.name} data-ai-hint={review.avatar.imageHint} />}
          <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{review.name}</p>
          <p className="text-sm text-muted-foreground">{review.country}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="flex gap-0.5 text-yellow-500 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
        </div>
        <blockquote className="text-muted-foreground italic">
          "{review.review}"
        </blockquote>
      </CardContent>
    </Card>
  );
}

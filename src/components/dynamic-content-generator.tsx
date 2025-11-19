"use client";

import { useState } from "react";
import { generateDynamicContent } from "@/ai/flows/generate-dynamic-content";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type DynamicContentGeneratorProps = {
  sectionName: 'About Us' | 'Nature Garden';
};

export function DynamicContentGenerator({ sectionName }: DynamicContentGeneratorProps) {
  const [tone, setTone] = useState("warm, calm, nature-focused, eco-friendly, friendly welcome experience");
  const [generatedContent, setGeneratedContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setGeneratedContent("");
    try {
      const result = await generateDynamicContent({ sectionName, toneAndBranding: tone });
      setGeneratedContent(result.content);
    } catch (error) {
      console.error("Failed to generate content:", error);
      toast({
        variant: "destructive",
        title: "Content Generation Failed",
        description: "Could not generate content. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (sectionName === 'Things To Do') return null;

  return (
    <Accordion type="single" collapsible className="w-full mt-12">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2v0Z"/><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/><path d="m14.5 10.5-5-1-5 1"/><path d="m14.5 13.5-5 1-5-1"/></svg>
            <span className="font-headline">AI Content Assistant</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <Card className="bg-background/70 border-dashed">
            <CardHeader>
              <CardTitle>Generate Content for '{sectionName}'</CardTitle>
              <CardDescription>
                Use AI to generate new content ideas for this section. Describe the desired tone below.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tone">Tone & Branding</Label>
                <Input
                  id="tone"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  placeholder="e.g., luxurious, adventurous, family-friendly"
                />
              </div>
              <Button onClick={handleGenerate} disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {isLoading ? "Generating..." : "Generate Content"}
              </Button>
              {generatedContent && (
                <div className="mt-4 space-y-2">
                  <Label>Generated Content Suggestion</Label>
                  <Textarea
                    readOnly
                    value={generatedContent}
                    className="min-h-[200px] bg-muted/50"
                  />
                </div>
              )}
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">This is a tool for content suggestions. Copy and paste the generated text into your page content.</p>
            </CardFooter>
          </Card>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

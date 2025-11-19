'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating dynamic content variations and suggestions for website sections like 'About Us', 'Nature Garden', and 'Things To Do'.
 *
 * The flow takes a section name and a desired tone/branding as input, and returns AI-generated content for that section.
 *
 * @interface GenerateDynamicContentInput - The input type for the generateDynamicContent function.
 * @interface GenerateDynamicContentOutput - The output type for the generateDynamicContent function.
 * @function generateDynamicContent - The main function to trigger the dynamic content generation flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDynamicContentInputSchema = z.object({
  sectionName: z
    .string()
    .describe("The name of the website section for which content needs to be generated (e.g., 'About Us', 'Nature Garden', 'Things To Do')."),
  toneAndBranding: z
    .string()
    .describe('A description of the desired tone and branding for the content, including keywords or phrases.'),
});
export type GenerateDynamicContentInput = z.infer<typeof GenerateDynamicContentInputSchema>;

const GenerateDynamicContentOutputSchema = z.object({
  content: z.string().describe('The AI-generated content for the specified website section.'),
});
export type GenerateDynamicContentOutput = z.infer<typeof GenerateDynamicContentOutputSchema>;

export async function generateDynamicContent(
  input: GenerateDynamicContentInput
): Promise<GenerateDynamicContentOutput> {
  return generateDynamicContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDynamicContentPrompt',
  input: {schema: GenerateDynamicContentInputSchema},
  output: {schema: GenerateDynamicContentOutputSchema},
  prompt: `You are an AI assistant specialized in generating website content.

  Generate content for the "{{{sectionName}}}" section of a hotel website, with the following tone and branding: {{{toneAndBranding}}}.

  The generated content should be engaging, SEO-friendly, and relevant to the hotel's theme.
  Focus on creating unique and compelling content variations to enhance user experience and search engine rankings.

  Content:`, // Crucially, this prompt needs to end with 
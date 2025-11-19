"use server";

import { z } from "zod";

const bookingFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string(),
});

export async function handleBookingRequest(data: z.infer<typeof bookingFormSchema>) {
  const parsedData = bookingFormSchema.safeParse(data);

  if (!parsedData.success) {
    return { success: false, error: "Invalid data." };
  }

  try {
    // In a real application, you would save this to a database.
    // e.g., await db.collection('inquiries').add(parsedData.data);
    console.log("New booking inquiry received:", parsedData.data);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error("Error handling booking request:", error);
    return { success: false, error: "Failed to process booking request." };
  }
}

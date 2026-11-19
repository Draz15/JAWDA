import { z } from "zod";

export const shippingSchema = z.object({
  fullName: z.string().min(7, "Full name must be at least 7 characters"),
  street: z.string().min(5, "Enter a valid street address"),
  city: z.string().min(2, "City must be at least 2 characters"),
  postalCode: z.string().min(4, "Enter a valid postal code"),
  phone: z.string().regex(/^\+?[0-9]{10,15}$/, "Enter a valid phone number"),
  billingAddress: z.boolean().optional(),
});
import { z } from 'zod';

export const cardSchema = z.object({
    cardName: z.string().min(2, "Cardholder name must be at least 2 characters")
        .max(50, "Cardholder name is too long")
        .trim(),
    cardNumber: z.string()
        .regex(/^\d{13,19}$/, "Invalid card number")
        .trim(),

    expiry: z.string()
        .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry must be in MM/YY format")
        .trim(),
    CVV: z.string()
        .regex(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
})
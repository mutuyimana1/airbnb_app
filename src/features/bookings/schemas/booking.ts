import { z } from "zod";

// Step 1: Dates schema
export const bookingDatesSchema = z
  .object({
    checkIn: z.string().min(1, "Check-in date is required"),
    checkOut: z.string().min(1, "Check-out date is required"),
  })
  .refine(
    (data) => new Date(data.checkOut) > new Date(data.checkIn),
    {
      message: "Check-out date must be after check-in date",
      path: ["checkOut"],
    },
  );
export type BookingDates = z.infer<typeof bookingDatesSchema>;

// Step 2: Personal schema
export const bookingPersonalSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(7, "Phone must be at least 7 characters"),
});

export type BookingPersonal = z.infer<typeof bookingPersonalSchema>;

// Step 3: Payment schema
export const bookingPaymentSchema = z.object({
  card: z.string().regex(/^\d{16}$/, "Card number must be exactly 16 digits"),
  expiry: z.string().regex(/^\d{2}\/\d{2}$/, "Expiry must be in MM/YY format"),
  cvv: z.string().regex(/^\d{3}$/, "CVV must be exactly 3 digits"),
});

export type BookingPayment = z.infer<typeof bookingPaymentSchema>;

// Combined booking schema (dates + payment only; personal info from user profile)
export const bookingSchema = bookingDatesSchema.and(bookingPaymentSchema);

export type Booking = z.infer<typeof bookingSchema>;

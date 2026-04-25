import { z } from 'zod';

export const rfqSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  company: z.string().optional(),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(5, 'Phone number is required'),
  country: z.string().min(2, 'Country is required'),
  product: z.string().optional(),
  quantity: z.string().optional(),
  message: z.string().min(5, 'Message is required'),
});

export type RFQInput = z.infer<typeof rfqSchema>;

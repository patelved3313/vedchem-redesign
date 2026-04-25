import { z } from 'zod';
export const rfqSchema = z.object({name:z.string().min(2),company:z.string().optional(),email:z.string().email(),phone:z.string().min(5),country:z.string().min(2),product:z.string().optional(),quantity:z.string().optional(),message:z.string().min(5)});

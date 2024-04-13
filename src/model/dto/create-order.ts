import { isValidObjectId } from 'mongoose';
import { z } from 'zod';

export interface CreateOrderDto extends z.infer<typeof CreateOrderSchema> {}

export const CreateOrderSchema = z.object({
  customer: z.string().refine(isValidObjectId),
  items: z.object({ quantity: z.number(), product: z.string() }).array().min(1),
});

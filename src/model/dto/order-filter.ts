import { isValidObjectId } from 'mongoose';
import { z } from 'zod';

export interface OrderFilterDto extends z.infer<typeof OrderFilterSchema> {}

export const OrderFilterSchema = z.object({
  customer: z.string().refine(isValidObjectId).optional(),
  status: z.string().optional(),
  from: z.string().optional(),
  to: z.string().optional(),
});

import { z } from 'zod';

export interface UpdateOrderDto extends z.infer<typeof UpdateOrderSchema> {}

export const UpdateOrderSchema = z.object({
  items: z.object({ quantity: z.number(), product: z.string() }).array().min(1),
});

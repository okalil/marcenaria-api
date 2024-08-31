import { z } from 'zod';

export interface CreateProductDto extends z.infer<typeof CreateProductSchema> {}

export const CreateProductSchema = z.object({
  name: z.string(),
  value: z.number().min(0),
  material: z.string().nullish(),
  unit: z.string().nullish(),
  thickness: z.string().nullish(),
});

import { z } from 'zod';

export interface CustomerFilterDto
  extends z.infer<typeof CustomerFilterSchema> {}

export const CustomerFilterSchema = z.object({
  name: z.string().optional(),
  cpf: z.string().optional(),
  city: z.string().optional(),
  neighborhood: z.string().optional(),
});

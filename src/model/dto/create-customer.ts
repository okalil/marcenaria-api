import { z } from 'zod';

export interface CreateCustomerDto
  extends z.infer<typeof CreateCustomerSchema> {}

export const CreateCustomerSchema = z.object({
  name: z.string(),
  cpf: z.string().min(11).max(14),
  nationality: z.string().optional(),
  maritalStatus: z.string().optional(),
  profession: z.string().optional(),
  city: z.string().optional(),
  neighborhood: z.string().optional(),
  address: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
});

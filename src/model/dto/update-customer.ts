import { z } from 'zod';
import { CreateCustomerSchema } from './create-customer';

export interface UpdateCustomerDto
  extends z.infer<typeof UpdateCustomerSchema> {}

export const UpdateCustomerSchema = CreateCustomerSchema.partial();

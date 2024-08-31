import { z } from 'zod';
import { CreateProductSchema } from './create-product';

export interface UpdateProductDto extends z.infer<typeof UpdateProductSchema> {}

export const UpdateProductSchema = CreateProductSchema.partial();

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleWhereInputSchema } from '../inputTypeSchemas/VehicleWhereInputSchema'

export const VehicleDeleteManyArgsSchema: z.ZodType<Prisma.VehicleDeleteManyArgs> = z.object({
  where: VehicleWhereInputSchema.optional(), 
}).strict();

export default VehicleDeleteManyArgsSchema;

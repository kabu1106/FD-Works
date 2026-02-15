import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DispatchedVehicleWhereInputSchema } from '../inputTypeSchemas/DispatchedVehicleWhereInputSchema'

export const DispatchedVehicleDeleteManyArgsSchema: z.ZodType<Prisma.DispatchedVehicleDeleteManyArgs> = z.object({
  where: DispatchedVehicleWhereInputSchema.optional(), 
}).strict();

export default DispatchedVehicleDeleteManyArgsSchema;

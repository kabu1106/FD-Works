import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleCreateManyInputSchema } from '../inputTypeSchemas/VehicleCreateManyInputSchema'

export const VehicleCreateManyArgsSchema: z.ZodType<Prisma.VehicleCreateManyArgs> = z.object({
  data: z.union([ VehicleCreateManyInputSchema, VehicleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default VehicleCreateManyArgsSchema;

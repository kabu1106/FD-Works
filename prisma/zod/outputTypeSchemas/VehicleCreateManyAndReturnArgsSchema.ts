import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleCreateManyInputSchema } from '../inputTypeSchemas/VehicleCreateManyInputSchema'

export const VehicleCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VehicleCreateManyAndReturnArgs> = z.object({
  data: z.union([ VehicleCreateManyInputSchema, VehicleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default VehicleCreateManyAndReturnArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DispatchedVehicleCreateManyInputSchema } from '../inputTypeSchemas/DispatchedVehicleCreateManyInputSchema'

export const DispatchedVehicleCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DispatchedVehicleCreateManyAndReturnArgs> = z.object({
  data: z.union([ DispatchedVehicleCreateManyInputSchema, DispatchedVehicleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default DispatchedVehicleCreateManyAndReturnArgsSchema;

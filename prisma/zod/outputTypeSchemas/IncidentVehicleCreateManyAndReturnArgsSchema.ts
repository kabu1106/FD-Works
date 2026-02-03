import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentVehicleCreateManyInputSchema } from '../inputTypeSchemas/IncidentVehicleCreateManyInputSchema'

export const IncidentVehicleCreateManyAndReturnArgsSchema: z.ZodType<Prisma.IncidentVehicleCreateManyAndReturnArgs> = z.object({
  data: z.union([ IncidentVehicleCreateManyInputSchema, IncidentVehicleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default IncidentVehicleCreateManyAndReturnArgsSchema;

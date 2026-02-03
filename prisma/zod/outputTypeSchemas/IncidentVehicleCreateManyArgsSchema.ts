import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentVehicleCreateManyInputSchema } from '../inputTypeSchemas/IncidentVehicleCreateManyInputSchema'

export const IncidentVehicleCreateManyArgsSchema: z.ZodType<Prisma.IncidentVehicleCreateManyArgs> = z.object({
  data: z.union([ IncidentVehicleCreateManyInputSchema, IncidentVehicleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default IncidentVehicleCreateManyArgsSchema;

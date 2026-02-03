import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentVehicleWhereInputSchema } from '../inputTypeSchemas/IncidentVehicleWhereInputSchema'

export const IncidentVehicleDeleteManyArgsSchema: z.ZodType<Prisma.IncidentVehicleDeleteManyArgs> = z.object({
  where: IncidentVehicleWhereInputSchema.optional(), 
}).strict();

export default IncidentVehicleDeleteManyArgsSchema;

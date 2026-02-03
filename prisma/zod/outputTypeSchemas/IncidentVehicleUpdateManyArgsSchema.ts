import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentVehicleUpdateManyMutationInputSchema } from '../inputTypeSchemas/IncidentVehicleUpdateManyMutationInputSchema'
import { IncidentVehicleUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/IncidentVehicleUncheckedUpdateManyInputSchema'
import { IncidentVehicleWhereInputSchema } from '../inputTypeSchemas/IncidentVehicleWhereInputSchema'

export const IncidentVehicleUpdateManyArgsSchema: z.ZodType<Prisma.IncidentVehicleUpdateManyArgs> = z.object({
  data: z.union([ IncidentVehicleUpdateManyMutationInputSchema, IncidentVehicleUncheckedUpdateManyInputSchema ]),
  where: IncidentVehicleWhereInputSchema.optional(), 
}).strict();

export default IncidentVehicleUpdateManyArgsSchema;

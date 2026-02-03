import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentVehicleWhereInputSchema } from '../inputTypeSchemas/IncidentVehicleWhereInputSchema'
import { IncidentVehicleOrderByWithRelationInputSchema } from '../inputTypeSchemas/IncidentVehicleOrderByWithRelationInputSchema'
import { IncidentVehicleWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentVehicleWhereUniqueInputSchema'

export const IncidentVehicleAggregateArgsSchema: z.ZodType<Prisma.IncidentVehicleAggregateArgs> = z.object({
  where: IncidentVehicleWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentVehicleOrderByWithRelationInputSchema.array(), IncidentVehicleOrderByWithRelationInputSchema ]).optional(),
  cursor: IncidentVehicleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default IncidentVehicleAggregateArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentVehicleWhereInputSchema } from '../inputTypeSchemas/IncidentVehicleWhereInputSchema'
import { IncidentVehicleOrderByWithAggregationInputSchema } from '../inputTypeSchemas/IncidentVehicleOrderByWithAggregationInputSchema'
import { IncidentVehicleScalarFieldEnumSchema } from '../inputTypeSchemas/IncidentVehicleScalarFieldEnumSchema'
import { IncidentVehicleScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/IncidentVehicleScalarWhereWithAggregatesInputSchema'

export const IncidentVehicleGroupByArgsSchema: z.ZodType<Prisma.IncidentVehicleGroupByArgs> = z.object({
  where: IncidentVehicleWhereInputSchema.optional(), 
  orderBy: z.union([ IncidentVehicleOrderByWithAggregationInputSchema.array(), IncidentVehicleOrderByWithAggregationInputSchema ]).optional(),
  by: IncidentVehicleScalarFieldEnumSchema.array(), 
  having: IncidentVehicleScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default IncidentVehicleGroupByArgsSchema;

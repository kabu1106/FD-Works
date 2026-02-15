import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DispatchedVehicleWhereInputSchema } from '../inputTypeSchemas/DispatchedVehicleWhereInputSchema'
import { DispatchedVehicleOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DispatchedVehicleOrderByWithAggregationInputSchema'
import { DispatchedVehicleScalarFieldEnumSchema } from '../inputTypeSchemas/DispatchedVehicleScalarFieldEnumSchema'
import { DispatchedVehicleScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DispatchedVehicleScalarWhereWithAggregatesInputSchema'

export const DispatchedVehicleGroupByArgsSchema: z.ZodType<Prisma.DispatchedVehicleGroupByArgs> = z.object({
  where: DispatchedVehicleWhereInputSchema.optional(), 
  orderBy: z.union([ DispatchedVehicleOrderByWithAggregationInputSchema.array(), DispatchedVehicleOrderByWithAggregationInputSchema ]).optional(),
  by: DispatchedVehicleScalarFieldEnumSchema.array(), 
  having: DispatchedVehicleScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default DispatchedVehicleGroupByArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleWhereInputSchema } from '../inputTypeSchemas/VehicleWhereInputSchema'
import { VehicleOrderByWithAggregationInputSchema } from '../inputTypeSchemas/VehicleOrderByWithAggregationInputSchema'
import { VehicleScalarFieldEnumSchema } from '../inputTypeSchemas/VehicleScalarFieldEnumSchema'
import { VehicleScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/VehicleScalarWhereWithAggregatesInputSchema'

export const VehicleGroupByArgsSchema: z.ZodType<Prisma.VehicleGroupByArgs> = z.object({
  where: VehicleWhereInputSchema.optional(), 
  orderBy: z.union([ VehicleOrderByWithAggregationInputSchema.array(), VehicleOrderByWithAggregationInputSchema ]).optional(),
  by: VehicleScalarFieldEnumSchema.array(), 
  having: VehicleScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default VehicleGroupByArgsSchema;

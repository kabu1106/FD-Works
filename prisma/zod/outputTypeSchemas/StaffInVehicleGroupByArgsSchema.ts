import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StaffInVehicleWhereInputSchema } from '../inputTypeSchemas/StaffInVehicleWhereInputSchema'
import { StaffInVehicleOrderByWithAggregationInputSchema } from '../inputTypeSchemas/StaffInVehicleOrderByWithAggregationInputSchema'
import { StaffInVehicleScalarFieldEnumSchema } from '../inputTypeSchemas/StaffInVehicleScalarFieldEnumSchema'
import { StaffInVehicleScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/StaffInVehicleScalarWhereWithAggregatesInputSchema'

export const StaffInVehicleGroupByArgsSchema: z.ZodType<Prisma.StaffInVehicleGroupByArgs> = z.object({
  where: StaffInVehicleWhereInputSchema.optional(), 
  orderBy: z.union([ StaffInVehicleOrderByWithAggregationInputSchema.array(), StaffInVehicleOrderByWithAggregationInputSchema ]).optional(),
  by: StaffInVehicleScalarFieldEnumSchema.array(), 
  having: StaffInVehicleScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default StaffInVehicleGroupByArgsSchema;

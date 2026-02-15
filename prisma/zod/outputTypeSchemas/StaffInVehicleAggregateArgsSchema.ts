import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StaffInVehicleWhereInputSchema } from '../inputTypeSchemas/StaffInVehicleWhereInputSchema'
import { StaffInVehicleOrderByWithRelationInputSchema } from '../inputTypeSchemas/StaffInVehicleOrderByWithRelationInputSchema'
import { StaffInVehicleWhereUniqueInputSchema } from '../inputTypeSchemas/StaffInVehicleWhereUniqueInputSchema'

export const StaffInVehicleAggregateArgsSchema: z.ZodType<Prisma.StaffInVehicleAggregateArgs> = z.object({
  where: StaffInVehicleWhereInputSchema.optional(), 
  orderBy: z.union([ StaffInVehicleOrderByWithRelationInputSchema.array(), StaffInVehicleOrderByWithRelationInputSchema ]).optional(),
  cursor: StaffInVehicleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default StaffInVehicleAggregateArgsSchema;

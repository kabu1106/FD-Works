import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DispatchedVehicleWhereInputSchema } from '../inputTypeSchemas/DispatchedVehicleWhereInputSchema'
import { DispatchedVehicleOrderByWithRelationInputSchema } from '../inputTypeSchemas/DispatchedVehicleOrderByWithRelationInputSchema'
import { DispatchedVehicleWhereUniqueInputSchema } from '../inputTypeSchemas/DispatchedVehicleWhereUniqueInputSchema'

export const DispatchedVehicleAggregateArgsSchema: z.ZodType<Prisma.DispatchedVehicleAggregateArgs> = z.object({
  where: DispatchedVehicleWhereInputSchema.optional(), 
  orderBy: z.union([ DispatchedVehicleOrderByWithRelationInputSchema.array(), DispatchedVehicleOrderByWithRelationInputSchema ]).optional(),
  cursor: DispatchedVehicleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default DispatchedVehicleAggregateArgsSchema;

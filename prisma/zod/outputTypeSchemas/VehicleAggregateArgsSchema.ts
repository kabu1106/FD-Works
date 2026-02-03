import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleWhereInputSchema } from '../inputTypeSchemas/VehicleWhereInputSchema'
import { VehicleOrderByWithRelationInputSchema } from '../inputTypeSchemas/VehicleOrderByWithRelationInputSchema'
import { VehicleWhereUniqueInputSchema } from '../inputTypeSchemas/VehicleWhereUniqueInputSchema'

export const VehicleAggregateArgsSchema: z.ZodType<Prisma.VehicleAggregateArgs> = z.object({
  where: VehicleWhereInputSchema.optional(), 
  orderBy: z.union([ VehicleOrderByWithRelationInputSchema.array(), VehicleOrderByWithRelationInputSchema ]).optional(),
  cursor: VehicleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default VehicleAggregateArgsSchema;

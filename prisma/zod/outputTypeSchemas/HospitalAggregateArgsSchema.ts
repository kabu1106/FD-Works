import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HospitalWhereInputSchema } from '../inputTypeSchemas/HospitalWhereInputSchema'
import { HospitalOrderByWithRelationInputSchema } from '../inputTypeSchemas/HospitalOrderByWithRelationInputSchema'
import { HospitalWhereUniqueInputSchema } from '../inputTypeSchemas/HospitalWhereUniqueInputSchema'

export const HospitalAggregateArgsSchema: z.ZodType<Prisma.HospitalAggregateArgs> = z.object({
  where: HospitalWhereInputSchema.optional(), 
  orderBy: z.union([ HospitalOrderByWithRelationInputSchema.array(), HospitalOrderByWithRelationInputSchema ]).optional(),
  cursor: HospitalWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default HospitalAggregateArgsSchema;

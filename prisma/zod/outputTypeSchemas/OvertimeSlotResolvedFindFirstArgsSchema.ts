import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSlotResolvedWhereInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedWhereInputSchema'
import { OvertimeSlotResolvedOrderByWithRelationInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedOrderByWithRelationInputSchema'
import { OvertimeSlotResolvedWhereUniqueInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedWhereUniqueInputSchema'
import { OvertimeSlotResolvedScalarFieldEnumSchema } from '../inputTypeSchemas/OvertimeSlotResolvedScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OvertimeSlotResolvedSelectSchema: z.ZodType<Prisma.OvertimeSlotResolvedSelect> = z.object({
  id: z.boolean().optional(),
  dutyId: z.boolean().optional(),
  staffId: z.boolean().optional(),
  startAt: z.boolean().optional(),
  endAt: z.boolean().optional(),
  minutes: z.boolean().optional(),
  overtimeRateCategoryId: z.boolean().optional(),
  rateSnapshot: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export const OvertimeSlotResolvedFindFirstArgsSchema: z.ZodType<Prisma.OvertimeSlotResolvedFindFirstArgs> = z.object({
  select: OvertimeSlotResolvedSelectSchema.optional(),
  where: OvertimeSlotResolvedWhereInputSchema.optional(), 
  orderBy: z.union([ OvertimeSlotResolvedOrderByWithRelationInputSchema.array(), OvertimeSlotResolvedOrderByWithRelationInputSchema ]).optional(),
  cursor: OvertimeSlotResolvedWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OvertimeSlotResolvedScalarFieldEnumSchema, OvertimeSlotResolvedScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default OvertimeSlotResolvedFindFirstArgsSchema;

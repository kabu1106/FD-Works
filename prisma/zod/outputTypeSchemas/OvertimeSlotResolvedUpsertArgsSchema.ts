import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSlotResolvedWhereUniqueInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedWhereUniqueInputSchema'
import { OvertimeSlotResolvedCreateInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedCreateInputSchema'
import { OvertimeSlotResolvedUncheckedCreateInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedUncheckedCreateInputSchema'
import { OvertimeSlotResolvedUpdateInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedUpdateInputSchema'
import { OvertimeSlotResolvedUncheckedUpdateInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedUncheckedUpdateInputSchema'
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

export const OvertimeSlotResolvedUpsertArgsSchema: z.ZodType<Prisma.OvertimeSlotResolvedUpsertArgs> = z.object({
  select: OvertimeSlotResolvedSelectSchema.optional(),
  where: OvertimeSlotResolvedWhereUniqueInputSchema, 
  create: z.union([ OvertimeSlotResolvedCreateInputSchema, OvertimeSlotResolvedUncheckedCreateInputSchema ]),
  update: z.union([ OvertimeSlotResolvedUpdateInputSchema, OvertimeSlotResolvedUncheckedUpdateInputSchema ]),
}).strict();

export default OvertimeSlotResolvedUpsertArgsSchema;

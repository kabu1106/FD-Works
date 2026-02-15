import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSlotResolvedCreateInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedCreateInputSchema'
import { OvertimeSlotResolvedUncheckedCreateInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedUncheckedCreateInputSchema'
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

export const OvertimeSlotResolvedCreateArgsSchema: z.ZodType<Prisma.OvertimeSlotResolvedCreateArgs> = z.object({
  select: OvertimeSlotResolvedSelectSchema.optional(),
  data: z.union([ OvertimeSlotResolvedCreateInputSchema, OvertimeSlotResolvedUncheckedCreateInputSchema ]),
}).strict();

export default OvertimeSlotResolvedCreateArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSlotResolvedWhereUniqueInputSchema } from '../inputTypeSchemas/OvertimeSlotResolvedWhereUniqueInputSchema'
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

export const OvertimeSlotResolvedDeleteArgsSchema: z.ZodType<Prisma.OvertimeSlotResolvedDeleteArgs> = z.object({
  select: OvertimeSlotResolvedSelectSchema.optional(),
  where: OvertimeSlotResolvedWhereUniqueInputSchema, 
}).strict();

export default OvertimeSlotResolvedDeleteArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSlotIncludeSchema } from '../inputTypeSchemas/OvertimeSlotIncludeSchema'
import { OvertimeSlotCreateInputSchema } from '../inputTypeSchemas/OvertimeSlotCreateInputSchema'
import { OvertimeSlotUncheckedCreateInputSchema } from '../inputTypeSchemas/OvertimeSlotUncheckedCreateInputSchema'
import { OvertimeRateCategoryArgsSchema } from "../outputTypeSchemas/OvertimeRateCategoryArgsSchema"
import { WorkGroupArgsSchema } from "../outputTypeSchemas/WorkGroupArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OvertimeSlotSelectSchema: z.ZodType<Prisma.OvertimeSlotSelect> = z.object({
  id: z.boolean().optional(),
  workGroupId: z.boolean().optional(),
  startMinute: z.boolean().optional(),
  endMinute: z.boolean().optional(),
  overtimeRateCategoryId: z.boolean().optional(),
  overtimeRateCategory: z.union([z.boolean(),z.lazy(() => OvertimeRateCategoryArgsSchema)]).optional(),
  workGroup: z.union([z.boolean(),z.lazy(() => WorkGroupArgsSchema)]).optional(),
}).strict()

export const OvertimeSlotCreateArgsSchema: z.ZodType<Prisma.OvertimeSlotCreateArgs> = z.object({
  select: OvertimeSlotSelectSchema.optional(),
  include: z.lazy(() => OvertimeSlotIncludeSchema).optional(),
  data: z.union([ OvertimeSlotCreateInputSchema, OvertimeSlotUncheckedCreateInputSchema ]),
}).strict();

export default OvertimeSlotCreateArgsSchema;

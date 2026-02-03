import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSlotIncludeSchema } from '../inputTypeSchemas/OvertimeSlotIncludeSchema'
import { OvertimeSlotWhereUniqueInputSchema } from '../inputTypeSchemas/OvertimeSlotWhereUniqueInputSchema'
import { OvertimeSlotCreateInputSchema } from '../inputTypeSchemas/OvertimeSlotCreateInputSchema'
import { OvertimeSlotUncheckedCreateInputSchema } from '../inputTypeSchemas/OvertimeSlotUncheckedCreateInputSchema'
import { OvertimeSlotUpdateInputSchema } from '../inputTypeSchemas/OvertimeSlotUpdateInputSchema'
import { OvertimeSlotUncheckedUpdateInputSchema } from '../inputTypeSchemas/OvertimeSlotUncheckedUpdateInputSchema'
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

export const OvertimeSlotUpsertArgsSchema: z.ZodType<Prisma.OvertimeSlotUpsertArgs> = z.object({
  select: OvertimeSlotSelectSchema.optional(),
  include: z.lazy(() => OvertimeSlotIncludeSchema).optional(),
  where: OvertimeSlotWhereUniqueInputSchema, 
  create: z.union([ OvertimeSlotCreateInputSchema, OvertimeSlotUncheckedCreateInputSchema ]),
  update: z.union([ OvertimeSlotUpdateInputSchema, OvertimeSlotUncheckedUpdateInputSchema ]),
}).strict();

export default OvertimeSlotUpsertArgsSchema;

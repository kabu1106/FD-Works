import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeRateCategoryIncludeSchema } from '../inputTypeSchemas/OvertimeRateCategoryIncludeSchema'
import { OvertimeRateCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/OvertimeRateCategoryWhereUniqueInputSchema'
import { OvertimeSlotFindManyArgsSchema } from "../outputTypeSchemas/OvertimeSlotFindManyArgsSchema"
import { OvertimeSummaryDetailFindManyArgsSchema } from "../outputTypeSchemas/OvertimeSummaryDetailFindManyArgsSchema"
import { OvertimeRateCategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/OvertimeRateCategoryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OvertimeRateCategorySelectSchema: z.ZodType<Prisma.OvertimeRateCategorySelect> = z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  name: z.boolean().optional(),
  rate: z.boolean().optional(),
  color: z.boolean().optional(),
  isActive: z.boolean().optional(),
  overtimeSlots: z.union([z.boolean(),z.lazy(() => OvertimeSlotFindManyArgsSchema)]).optional(),
  OvertimeSummaryDetail: z.union([z.boolean(),z.lazy(() => OvertimeSummaryDetailFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OvertimeRateCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const OvertimeRateCategoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OvertimeRateCategoryFindUniqueOrThrowArgs> = z.object({
  select: OvertimeRateCategorySelectSchema.optional(),
  include: z.lazy(() => OvertimeRateCategoryIncludeSchema).optional(),
  where: OvertimeRateCategoryWhereUniqueInputSchema, 
}).strict();

export default OvertimeRateCategoryFindUniqueOrThrowArgsSchema;

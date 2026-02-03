import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSummaryIncludeSchema } from '../inputTypeSchemas/OvertimeSummaryIncludeSchema'
import { OvertimeSummaryWhereUniqueInputSchema } from '../inputTypeSchemas/OvertimeSummaryWhereUniqueInputSchema'
import { DutyArgsSchema } from "../outputTypeSchemas/DutyArgsSchema"
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"
import { OvertimeSummaryDetailFindManyArgsSchema } from "../outputTypeSchemas/OvertimeSummaryDetailFindManyArgsSchema"
import { OvertimeSummaryCountOutputTypeArgsSchema } from "../outputTypeSchemas/OvertimeSummaryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OvertimeSummarySelectSchema: z.ZodType<Prisma.OvertimeSummarySelect> = z.object({
  id: z.boolean().optional(),
  dutyId: z.boolean().optional(),
  staffId: z.boolean().optional(),
  version: z.boolean().optional(),
  totalMinutes: z.boolean().optional(),
  isFinalized: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  duty: z.union([z.boolean(),z.lazy(() => DutyArgsSchema)]).optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
  details: z.union([z.boolean(),z.lazy(() => OvertimeSummaryDetailFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OvertimeSummaryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const OvertimeSummaryFindUniqueArgsSchema: z.ZodType<Prisma.OvertimeSummaryFindUniqueArgs> = z.object({
  select: OvertimeSummarySelectSchema.optional(),
  include: z.lazy(() => OvertimeSummaryIncludeSchema).optional(),
  where: OvertimeSummaryWhereUniqueInputSchema, 
}).strict();

export default OvertimeSummaryFindUniqueArgsSchema;

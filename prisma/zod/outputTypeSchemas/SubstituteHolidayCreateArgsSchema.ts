import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubstituteHolidayIncludeSchema } from '../inputTypeSchemas/SubstituteHolidayIncludeSchema'
import { SubstituteHolidayCreateInputSchema } from '../inputTypeSchemas/SubstituteHolidayCreateInputSchema'
import { SubstituteHolidayUncheckedCreateInputSchema } from '../inputTypeSchemas/SubstituteHolidayUncheckedCreateInputSchema'
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SubstituteHolidaySelectSchema: z.ZodType<Prisma.SubstituteHolidaySelect> = z.object({
  id: z.boolean().optional(),
  staffId: z.boolean().optional(),
  originalHoliday: z.boolean().optional(),
  substituteDate: z.boolean().optional(),
  reason: z.boolean().optional(),
  decidedAt: z.boolean().optional(),
  decidedBy: z.boolean().optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
}).strict()

export const SubstituteHolidayCreateArgsSchema: z.ZodType<Prisma.SubstituteHolidayCreateArgs> = z.object({
  select: SubstituteHolidaySelectSchema.optional(),
  include: z.lazy(() => SubstituteHolidayIncludeSchema).optional(),
  data: z.union([ SubstituteHolidayCreateInputSchema, SubstituteHolidayUncheckedCreateInputSchema ]),
}).strict();

export default SubstituteHolidayCreateArgsSchema;

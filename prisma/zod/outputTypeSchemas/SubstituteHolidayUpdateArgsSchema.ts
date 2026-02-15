import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubstituteHolidayIncludeSchema } from '../inputTypeSchemas/SubstituteHolidayIncludeSchema'
import { SubstituteHolidayUpdateInputSchema } from '../inputTypeSchemas/SubstituteHolidayUpdateInputSchema'
import { SubstituteHolidayUncheckedUpdateInputSchema } from '../inputTypeSchemas/SubstituteHolidayUncheckedUpdateInputSchema'
import { SubstituteHolidayWhereUniqueInputSchema } from '../inputTypeSchemas/SubstituteHolidayWhereUniqueInputSchema'
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

export const SubstituteHolidayUpdateArgsSchema: z.ZodType<Prisma.SubstituteHolidayUpdateArgs> = z.object({
  select: SubstituteHolidaySelectSchema.optional(),
  include: z.lazy(() => SubstituteHolidayIncludeSchema).optional(),
  data: z.union([ SubstituteHolidayUpdateInputSchema, SubstituteHolidayUncheckedUpdateInputSchema ]),
  where: SubstituteHolidayWhereUniqueInputSchema, 
}).strict();

export default SubstituteHolidayUpdateArgsSchema;

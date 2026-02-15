import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubstituteHolidayIncludeSchema } from '../inputTypeSchemas/SubstituteHolidayIncludeSchema'
import { SubstituteHolidayWhereUniqueInputSchema } from '../inputTypeSchemas/SubstituteHolidayWhereUniqueInputSchema'
import { SubstituteHolidayCreateInputSchema } from '../inputTypeSchemas/SubstituteHolidayCreateInputSchema'
import { SubstituteHolidayUncheckedCreateInputSchema } from '../inputTypeSchemas/SubstituteHolidayUncheckedCreateInputSchema'
import { SubstituteHolidayUpdateInputSchema } from '../inputTypeSchemas/SubstituteHolidayUpdateInputSchema'
import { SubstituteHolidayUncheckedUpdateInputSchema } from '../inputTypeSchemas/SubstituteHolidayUncheckedUpdateInputSchema'
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

export const SubstituteHolidayUpsertArgsSchema: z.ZodType<Prisma.SubstituteHolidayUpsertArgs> = z.object({
  select: SubstituteHolidaySelectSchema.optional(),
  include: z.lazy(() => SubstituteHolidayIncludeSchema).optional(),
  where: SubstituteHolidayWhereUniqueInputSchema, 
  create: z.union([ SubstituteHolidayCreateInputSchema, SubstituteHolidayUncheckedCreateInputSchema ]),
  update: z.union([ SubstituteHolidayUpdateInputSchema, SubstituteHolidayUncheckedUpdateInputSchema ]),
}).strict();

export default SubstituteHolidayUpsertArgsSchema;

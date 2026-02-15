import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"

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

export default SubstituteHolidaySelectSchema;

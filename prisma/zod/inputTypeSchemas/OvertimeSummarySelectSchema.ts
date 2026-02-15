import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyArgsSchema } from "../outputTypeSchemas/DutyArgsSchema"
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"
import { OvertimeSummaryDetailFindManyArgsSchema } from "../outputTypeSchemas/OvertimeSummaryDetailFindManyArgsSchema"
import { OvertimeSummaryCountOutputTypeArgsSchema } from "../outputTypeSchemas/OvertimeSummaryCountOutputTypeArgsSchema"

export const OvertimeSummarySelectSchema: z.ZodType<Prisma.OvertimeSummarySelect> = z.object({
  id: z.boolean().optional(),
  dutyId: z.boolean().optional(),
  staffId: z.boolean().optional(),
  calculationVersion: z.boolean().optional(),
  totalMinutes: z.boolean().optional(),
  isFinalized: z.boolean().optional(),
  calculatedAt: z.boolean().optional(),
  duty: z.union([z.boolean(),z.lazy(() => DutyArgsSchema)]).optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
  details: z.union([z.boolean(),z.lazy(() => OvertimeSummaryDetailFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OvertimeSummaryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default OvertimeSummarySelectSchema;

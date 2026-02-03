import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyArgsSchema } from "../outputTypeSchemas/DutyArgsSchema"
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"
import { OvertimeSummaryDetailFindManyArgsSchema } from "../outputTypeSchemas/OvertimeSummaryDetailFindManyArgsSchema"
import { OvertimeSummaryCountOutputTypeArgsSchema } from "../outputTypeSchemas/OvertimeSummaryCountOutputTypeArgsSchema"

export const OvertimeSummaryIncludeSchema: z.ZodType<Prisma.OvertimeSummaryInclude> = z.object({
  duty: z.union([z.boolean(),z.lazy(() => DutyArgsSchema)]).optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
  details: z.union([z.boolean(),z.lazy(() => OvertimeSummaryDetailFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OvertimeSummaryCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default OvertimeSummaryIncludeSchema;

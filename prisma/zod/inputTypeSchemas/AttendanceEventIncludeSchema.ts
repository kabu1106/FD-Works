import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyArgsSchema } from "../outputTypeSchemas/DutyArgsSchema"
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"

export const AttendanceEventIncludeSchema: z.ZodType<Prisma.AttendanceEventInclude> = z.object({
  duty: z.union([z.boolean(),z.lazy(() => DutyArgsSchema)]).optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
}).strict();

export default AttendanceEventIncludeSchema;

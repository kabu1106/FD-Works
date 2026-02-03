import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyArgsSchema } from "../outputTypeSchemas/DutyArgsSchema"
import { WorkGroupArgsSchema } from "../outputTypeSchemas/WorkGroupArgsSchema"
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"

export const WorkGroupAssignmentIncludeSchema: z.ZodType<Prisma.WorkGroupAssignmentInclude> = z.object({
  duty: z.union([z.boolean(),z.lazy(() => DutyArgsSchema)]).optional(),
  workGroup: z.union([z.boolean(),z.lazy(() => WorkGroupArgsSchema)]).optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
}).strict();

export default WorkGroupAssignmentIncludeSchema;

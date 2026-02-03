import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DepartmentArgsSchema } from "../outputTypeSchemas/DepartmentArgsSchema"
import { StaffFindManyArgsSchema } from "../outputTypeSchemas/StaffFindManyArgsSchema"
import { WorkShiftArgsSchema } from "../outputTypeSchemas/WorkShiftArgsSchema"
import { TeamWorkDayFindManyArgsSchema } from "../outputTypeSchemas/TeamWorkDayFindManyArgsSchema"
import { DutyFindManyArgsSchema } from "../outputTypeSchemas/DutyFindManyArgsSchema"
import { TeamCountOutputTypeArgsSchema } from "../outputTypeSchemas/TeamCountOutputTypeArgsSchema"

export const TeamIncludeSchema: z.ZodType<Prisma.TeamInclude> = z.object({
  departments: z.union([z.boolean(),z.lazy(() => DepartmentArgsSchema)]).optional(),
  staffs: z.union([z.boolean(),z.lazy(() => StaffFindManyArgsSchema)]).optional(),
  workShift: z.union([z.boolean(),z.lazy(() => WorkShiftArgsSchema)]).optional(),
  teamWorkDay: z.union([z.boolean(),z.lazy(() => TeamWorkDayFindManyArgsSchema)]).optional(),
  duties: z.union([z.boolean(),z.lazy(() => DutyFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TeamCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default TeamIncludeSchema;

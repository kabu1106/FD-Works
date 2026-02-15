import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamArgsSchema } from "../outputTypeSchemas/TeamArgsSchema"
import { WorkGroupAssignmentFindManyArgsSchema } from "../outputTypeSchemas/WorkGroupAssignmentFindManyArgsSchema"
import { SpecialLeaveAssignmentFindManyArgsSchema } from "../outputTypeSchemas/SpecialLeaveAssignmentFindManyArgsSchema"
import { IncidentFindManyArgsSchema } from "../outputTypeSchemas/IncidentFindManyArgsSchema"
import { AttendanceFindManyArgsSchema } from "../outputTypeSchemas/AttendanceFindManyArgsSchema"
import { OvertimeSummaryFindManyArgsSchema } from "../outputTypeSchemas/OvertimeSummaryFindManyArgsSchema"
import { AttendanceEventFindManyArgsSchema } from "../outputTypeSchemas/AttendanceEventFindManyArgsSchema"
import { DutyDayTypeFindManyArgsSchema } from "../outputTypeSchemas/DutyDayTypeFindManyArgsSchema"
import { DutyCountOutputTypeArgsSchema } from "../outputTypeSchemas/DutyCountOutputTypeArgsSchema"

export const DutyIncludeSchema: z.ZodType<Prisma.DutyInclude> = z.object({
  team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  workGroupAssignments: z.union([z.boolean(),z.lazy(() => WorkGroupAssignmentFindManyArgsSchema)]).optional(),
  specialLeaveAssignments: z.union([z.boolean(),z.lazy(() => SpecialLeaveAssignmentFindManyArgsSchema)]).optional(),
  incidents: z.union([z.boolean(),z.lazy(() => IncidentFindManyArgsSchema)]).optional(),
  attendance: z.union([z.boolean(),z.lazy(() => AttendanceFindManyArgsSchema)]).optional(),
  OvertimeSummary: z.union([z.boolean(),z.lazy(() => OvertimeSummaryFindManyArgsSchema)]).optional(),
  attendanceEvents: z.union([z.boolean(),z.lazy(() => AttendanceEventFindManyArgsSchema)]).optional(),
  dutyDayTypes: z.union([z.boolean(),z.lazy(() => DutyDayTypeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DutyCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default DutyIncludeSchema;

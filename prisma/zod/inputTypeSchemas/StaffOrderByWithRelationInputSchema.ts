import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TeamOrderByWithRelationInputSchema } from './TeamOrderByWithRelationInputSchema';
import { WorkGroupAssignmentOrderByRelationAggregateInputSchema } from './WorkGroupAssignmentOrderByRelationAggregateInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { SpecialLeaveAssignmentOrderByRelationAggregateInputSchema } from './SpecialLeaveAssignmentOrderByRelationAggregateInputSchema';
import { IncidentStaffOrderByRelationAggregateInputSchema } from './IncidentStaffOrderByRelationAggregateInputSchema';
import { AttendanceOrderByRelationAggregateInputSchema } from './AttendanceOrderByRelationAggregateInputSchema';
import { OvertimeSummaryOrderByRelationAggregateInputSchema } from './OvertimeSummaryOrderByRelationAggregateInputSchema';
import { AttendanceEventOrderByRelationAggregateInputSchema } from './AttendanceEventOrderByRelationAggregateInputSchema';
import { IncidentStaffEngagementOrderByRelationAggregateInputSchema } from './IncidentStaffEngagementOrderByRelationAggregateInputSchema';
import { SubstituteHolidayOrderByRelationAggregateInputSchema } from './SubstituteHolidayOrderByRelationAggregateInputSchema';
import { WeeklyDayOffOrderByRelationAggregateInputSchema } from './WeeklyDayOffOrderByRelationAggregateInputSchema';
import { DutyDayTypeOrderByRelationAggregateInputSchema } from './DutyDayTypeOrderByRelationAggregateInputSchema';

export const StaffOrderByWithRelationInputSchema: z.ZodType<Prisma.StaffOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  staffNo: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  photoKey: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  teamId: z.lazy(() => SortOrderSchema).optional(),
  team: z.lazy(() => TeamOrderByWithRelationInputSchema).optional(),
  workGroupAssignment: z.lazy(() => WorkGroupAssignmentOrderByRelationAggregateInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentOrderByRelationAggregateInputSchema).optional(),
  IncidentStaff: z.lazy(() => IncidentStaffOrderByRelationAggregateInputSchema).optional(),
  Attendance: z.lazy(() => AttendanceOrderByRelationAggregateInputSchema).optional(),
  OvertimeSummary: z.lazy(() => OvertimeSummaryOrderByRelationAggregateInputSchema).optional(),
  attendanceEvents: z.lazy(() => AttendanceEventOrderByRelationAggregateInputSchema).optional(),
  incidentStaffEngagements: z.lazy(() => IncidentStaffEngagementOrderByRelationAggregateInputSchema).optional(),
  substituteHolidays: z.lazy(() => SubstituteHolidayOrderByRelationAggregateInputSchema).optional(),
  weeklyDayOffs: z.lazy(() => WeeklyDayOffOrderByRelationAggregateInputSchema).optional(),
  dutyDayTypes: z.lazy(() => DutyDayTypeOrderByRelationAggregateInputSchema).optional(),
});

export default StaffOrderByWithRelationInputSchema;

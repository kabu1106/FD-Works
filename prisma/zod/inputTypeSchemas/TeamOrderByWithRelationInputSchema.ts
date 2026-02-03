import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { DepartmentOrderByWithRelationInputSchema } from './DepartmentOrderByWithRelationInputSchema';
import { StaffOrderByRelationAggregateInputSchema } from './StaffOrderByRelationAggregateInputSchema';
import { WorkShiftOrderByWithRelationInputSchema } from './WorkShiftOrderByWithRelationInputSchema';
import { TeamWorkDayOrderByRelationAggregateInputSchema } from './TeamWorkDayOrderByRelationAggregateInputSchema';
import { DutyOrderByRelationAggregateInputSchema } from './DutyOrderByRelationAggregateInputSchema';

export const TeamOrderByWithRelationInputSchema: z.ZodType<Prisma.TeamOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  departmentId: z.lazy(() => SortOrderSchema).optional(),
  workShiftId: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  shiftType: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  departments: z.lazy(() => DepartmentOrderByWithRelationInputSchema).optional(),
  staffs: z.lazy(() => StaffOrderByRelationAggregateInputSchema).optional(),
  workShift: z.lazy(() => WorkShiftOrderByWithRelationInputSchema).optional(),
  teamWorkDay: z.lazy(() => TeamWorkDayOrderByRelationAggregateInputSchema).optional(),
  duties: z.lazy(() => DutyOrderByRelationAggregateInputSchema).optional(),
});

export default TeamOrderByWithRelationInputSchema;

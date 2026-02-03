import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TeamOrderByWithRelationInputSchema } from './TeamOrderByWithRelationInputSchema';
import { WorkGroupAssignmentOrderByRelationAggregateInputSchema } from './WorkGroupAssignmentOrderByRelationAggregateInputSchema';
import { SpecialLeaveAssignmentOrderByRelationAggregateInputSchema } from './SpecialLeaveAssignmentOrderByRelationAggregateInputSchema';
import { IncidentOrderByRelationAggregateInputSchema } from './IncidentOrderByRelationAggregateInputSchema';
import { AttendanceOrderByRelationAggregateInputSchema } from './AttendanceOrderByRelationAggregateInputSchema';
import { OvertimeSummaryOrderByRelationAggregateInputSchema } from './OvertimeSummaryOrderByRelationAggregateInputSchema';

export const DutyOrderByWithRelationInputSchema: z.ZodType<Prisma.DutyOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  teamId: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  memo: z.lazy(() => SortOrderSchema).optional(),
  isLocked: z.lazy(() => SortOrderSchema).optional(),
  lockedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  lockedByUserId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  hasEverCancelled: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  team: z.lazy(() => TeamOrderByWithRelationInputSchema).optional(),
  workGroupAssignments: z.lazy(() => WorkGroupAssignmentOrderByRelationAggregateInputSchema).optional(),
  specialLeaveAssignments: z.lazy(() => SpecialLeaveAssignmentOrderByRelationAggregateInputSchema).optional(),
  incidents: z.lazy(() => IncidentOrderByRelationAggregateInputSchema).optional(),
  attendance: z.lazy(() => AttendanceOrderByRelationAggregateInputSchema).optional(),
  OvertimeSummary: z.lazy(() => OvertimeSummaryOrderByRelationAggregateInputSchema).optional(),
});

export default DutyOrderByWithRelationInputSchema;

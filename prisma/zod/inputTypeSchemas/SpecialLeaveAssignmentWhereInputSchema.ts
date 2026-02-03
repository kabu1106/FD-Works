import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DutyRelationFilterSchema } from './DutyRelationFilterSchema';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';
import { StaffRelationFilterSchema } from './StaffRelationFilterSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';
import { SpecialLeaveTypeRelationFilterSchema } from './SpecialLeaveTypeRelationFilterSchema';
import { SpecialLeaveTypeWhereInputSchema } from './SpecialLeaveTypeWhereInputSchema';

export const SpecialLeaveAssignmentWhereInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SpecialLeaveAssignmentWhereInputSchema), z.lazy(() => SpecialLeaveAssignmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SpecialLeaveAssignmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SpecialLeaveAssignmentWhereInputSchema), z.lazy(() => SpecialLeaveAssignmentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  specialLeaveTypeId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  baseDate: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  duty: z.union([ z.lazy(() => DutyRelationFilterSchema), z.lazy(() => DutyWhereInputSchema) ]).optional(),
  staff: z.union([ z.lazy(() => StaffRelationFilterSchema), z.lazy(() => StaffWhereInputSchema) ]).optional(),
  specialLeaveType: z.union([ z.lazy(() => SpecialLeaveTypeRelationFilterSchema), z.lazy(() => SpecialLeaveTypeWhereInputSchema) ]).optional(),
});

export default SpecialLeaveAssignmentWhereInputSchema;

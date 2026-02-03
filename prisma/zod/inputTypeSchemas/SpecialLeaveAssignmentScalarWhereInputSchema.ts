import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const SpecialLeaveAssignmentScalarWhereInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SpecialLeaveAssignmentScalarWhereInputSchema), z.lazy(() => SpecialLeaveAssignmentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SpecialLeaveAssignmentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SpecialLeaveAssignmentScalarWhereInputSchema), z.lazy(() => SpecialLeaveAssignmentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  specialLeaveTypeId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  baseDate: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default SpecialLeaveAssignmentScalarWhereInputSchema;

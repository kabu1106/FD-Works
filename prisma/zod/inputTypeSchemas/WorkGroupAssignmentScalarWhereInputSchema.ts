import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const WorkGroupAssignmentScalarWhereInputSchema: z.ZodType<Prisma.WorkGroupAssignmentScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => WorkGroupAssignmentScalarWhereInputSchema), z.lazy(() => WorkGroupAssignmentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkGroupAssignmentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkGroupAssignmentScalarWhereInputSchema), z.lazy(() => WorkGroupAssignmentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  workGroupId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default WorkGroupAssignmentScalarWhereInputSchema;

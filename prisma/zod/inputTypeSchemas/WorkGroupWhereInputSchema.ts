import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { OvertimeSlotListRelationFilterSchema } from './OvertimeSlotListRelationFilterSchema';
import { WorkGroupAssignmentListRelationFilterSchema } from './WorkGroupAssignmentListRelationFilterSchema';

export const WorkGroupWhereInputSchema: z.ZodType<Prisma.WorkGroupWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => WorkGroupWhereInputSchema), z.lazy(() => WorkGroupWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkGroupWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkGroupWhereInputSchema), z.lazy(() => WorkGroupWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  overtimeSlots: z.lazy(() => OvertimeSlotListRelationFilterSchema).optional(),
  WorkGroupAssignment: z.lazy(() => WorkGroupAssignmentListRelationFilterSchema).optional(),
});

export default WorkGroupWhereInputSchema;

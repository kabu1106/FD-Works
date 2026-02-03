import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { OvertimeRateCategoryNullableRelationFilterSchema } from './OvertimeRateCategoryNullableRelationFilterSchema';
import { OvertimeRateCategoryWhereInputSchema } from './OvertimeRateCategoryWhereInputSchema';
import { WorkGroupRelationFilterSchema } from './WorkGroupRelationFilterSchema';
import { WorkGroupWhereInputSchema } from './WorkGroupWhereInputSchema';

export const OvertimeSlotWhereInputSchema: z.ZodType<Prisma.OvertimeSlotWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => OvertimeSlotWhereInputSchema), z.lazy(() => OvertimeSlotWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OvertimeSlotWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OvertimeSlotWhereInputSchema), z.lazy(() => OvertimeSlotWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  workGroupId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  startMinute: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  endMinute: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  overtimeRateCategoryId: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  overtimeRateCategory: z.union([ z.lazy(() => OvertimeRateCategoryNullableRelationFilterSchema), z.lazy(() => OvertimeRateCategoryWhereInputSchema) ]).optional().nullable(),
  workGroup: z.union([ z.lazy(() => WorkGroupRelationFilterSchema), z.lazy(() => WorkGroupWhereInputSchema) ]).optional(),
});

export default OvertimeSlotWhereInputSchema;

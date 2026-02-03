import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotWorkGroupIdStartMinuteEndMinuteCompoundUniqueInputSchema } from './OvertimeSlotWorkGroupIdStartMinuteEndMinuteCompoundUniqueInputSchema';
import { OvertimeSlotWhereInputSchema } from './OvertimeSlotWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { OvertimeRateCategoryNullableRelationFilterSchema } from './OvertimeRateCategoryNullableRelationFilterSchema';
import { OvertimeRateCategoryWhereInputSchema } from './OvertimeRateCategoryWhereInputSchema';
import { WorkGroupRelationFilterSchema } from './WorkGroupRelationFilterSchema';
import { WorkGroupWhereInputSchema } from './WorkGroupWhereInputSchema';

export const OvertimeSlotWhereUniqueInputSchema: z.ZodType<Prisma.OvertimeSlotWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    workGroupId_startMinute_endMinute: z.lazy(() => OvertimeSlotWorkGroupIdStartMinuteEndMinuteCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    workGroupId_startMinute_endMinute: z.lazy(() => OvertimeSlotWorkGroupIdStartMinuteEndMinuteCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.number().int().optional(),
  workGroupId_startMinute_endMinute: z.lazy(() => OvertimeSlotWorkGroupIdStartMinuteEndMinuteCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => OvertimeSlotWhereInputSchema), z.lazy(() => OvertimeSlotWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OvertimeSlotWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OvertimeSlotWhereInputSchema), z.lazy(() => OvertimeSlotWhereInputSchema).array() ]).optional(),
  workGroupId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  startMinute: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  endMinute: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  overtimeRateCategoryId: z.union([ z.lazy(() => IntNullableFilterSchema), z.number().int() ]).optional().nullable(),
  overtimeRateCategory: z.union([ z.lazy(() => OvertimeRateCategoryNullableRelationFilterSchema), z.lazy(() => OvertimeRateCategoryWhereInputSchema) ]).optional().nullable(),
  workGroup: z.union([ z.lazy(() => WorkGroupRelationFilterSchema), z.lazy(() => WorkGroupWhereInputSchema) ]).optional(),
}));

export default OvertimeSlotWhereUniqueInputSchema;

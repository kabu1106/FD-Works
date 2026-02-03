import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkShiftDayDateWorkShiftIdCompoundUniqueInputSchema } from './WorkShiftDayDateWorkShiftIdCompoundUniqueInputSchema';
import { WorkShiftDayWhereInputSchema } from './WorkShiftDayWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumWorkTypeFilterSchema } from './EnumWorkTypeFilterSchema';
import { WorkTypeSchema } from './WorkTypeSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { WorkShiftRelationFilterSchema } from './WorkShiftRelationFilterSchema';
import { WorkShiftWhereInputSchema } from './WorkShiftWhereInputSchema';

export const WorkShiftDayWhereUniqueInputSchema: z.ZodType<Prisma.WorkShiftDayWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    date_workShiftId: z.lazy(() => WorkShiftDayDateWorkShiftIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    date_workShiftId: z.lazy(() => WorkShiftDayDateWorkShiftIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  date_workShiftId: z.lazy(() => WorkShiftDayDateWorkShiftIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => WorkShiftDayWhereInputSchema), z.lazy(() => WorkShiftDayWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkShiftDayWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkShiftDayWhereInputSchema), z.lazy(() => WorkShiftDayWhereInputSchema).array() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => EnumWorkTypeFilterSchema), z.lazy(() => WorkTypeSchema) ]).optional(),
  workShiftId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  workShift: z.union([ z.lazy(() => WorkShiftRelationFilterSchema), z.lazy(() => WorkShiftWhereInputSchema) ]).optional(),
}));

export default WorkShiftDayWhereUniqueInputSchema;

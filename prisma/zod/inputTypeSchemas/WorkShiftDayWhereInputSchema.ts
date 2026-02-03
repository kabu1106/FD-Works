import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumWorkTypeFilterSchema } from './EnumWorkTypeFilterSchema';
import { WorkTypeSchema } from './WorkTypeSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { WorkShiftRelationFilterSchema } from './WorkShiftRelationFilterSchema';
import { WorkShiftWhereInputSchema } from './WorkShiftWhereInputSchema';

export const WorkShiftDayWhereInputSchema: z.ZodType<Prisma.WorkShiftDayWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => WorkShiftDayWhereInputSchema), z.lazy(() => WorkShiftDayWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkShiftDayWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkShiftDayWhereInputSchema), z.lazy(() => WorkShiftDayWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => EnumWorkTypeFilterSchema), z.lazy(() => WorkTypeSchema) ]).optional(),
  workShiftId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  workShift: z.union([ z.lazy(() => WorkShiftRelationFilterSchema), z.lazy(() => WorkShiftWhereInputSchema) ]).optional(),
});

export default WorkShiftDayWhereInputSchema;

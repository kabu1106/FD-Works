import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumWorkTypeFilterSchema } from './EnumWorkTypeFilterSchema';
import { WorkTypeSchema } from './WorkTypeSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const WorkShiftDayScalarWhereInputSchema: z.ZodType<Prisma.WorkShiftDayScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => WorkShiftDayScalarWhereInputSchema), z.lazy(() => WorkShiftDayScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkShiftDayScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkShiftDayScalarWhereInputSchema), z.lazy(() => WorkShiftDayScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => EnumWorkTypeFilterSchema), z.lazy(() => WorkTypeSchema) ]).optional(),
  workShiftId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
});

export default WorkShiftDayScalarWhereInputSchema;

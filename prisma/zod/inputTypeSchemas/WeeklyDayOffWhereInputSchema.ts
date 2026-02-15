import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StaffRelationFilterSchema } from './StaffRelationFilterSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const WeeklyDayOffWhereInputSchema: z.ZodType<Prisma.WeeklyDayOffWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => WeeklyDayOffWhereInputSchema), z.lazy(() => WeeklyDayOffWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WeeklyDayOffWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WeeklyDayOffWhereInputSchema), z.lazy(() => WeeklyDayOffWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  staff: z.union([ z.lazy(() => StaffRelationFilterSchema), z.lazy(() => StaffWhereInputSchema) ]).optional(),
});

export default WeeklyDayOffWhereInputSchema;

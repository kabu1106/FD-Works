import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeeklyDayOffStaffIdDateCompoundUniqueInputSchema } from './WeeklyDayOffStaffIdDateCompoundUniqueInputSchema';
import { WeeklyDayOffWhereInputSchema } from './WeeklyDayOffWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StaffRelationFilterSchema } from './StaffRelationFilterSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const WeeklyDayOffWhereUniqueInputSchema: z.ZodType<Prisma.WeeklyDayOffWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    staffId_date: z.lazy(() => WeeklyDayOffStaffIdDateCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    staffId_date: z.lazy(() => WeeklyDayOffStaffIdDateCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  staffId_date: z.lazy(() => WeeklyDayOffStaffIdDateCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => WeeklyDayOffWhereInputSchema), z.lazy(() => WeeklyDayOffWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WeeklyDayOffWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WeeklyDayOffWhereInputSchema), z.lazy(() => WeeklyDayOffWhereInputSchema).array() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  staff: z.union([ z.lazy(() => StaffRelationFilterSchema), z.lazy(() => StaffWhereInputSchema) ]).optional(),
}));

export default WeeklyDayOffWhereUniqueInputSchema;

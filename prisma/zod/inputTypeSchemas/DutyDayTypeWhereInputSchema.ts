import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumDayTypeFilterSchema } from './EnumDayTypeFilterSchema';
import { DayTypeSchema } from './DayTypeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DutyRelationFilterSchema } from './DutyRelationFilterSchema';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';
import { StaffRelationFilterSchema } from './StaffRelationFilterSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const DutyDayTypeWhereInputSchema: z.ZodType<Prisma.DutyDayTypeWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => DutyDayTypeWhereInputSchema), z.lazy(() => DutyDayTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DutyDayTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DutyDayTypeWhereInputSchema), z.lazy(() => DutyDayTypeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  dayType: z.union([ z.lazy(() => EnumDayTypeFilterSchema), z.lazy(() => DayTypeSchema) ]).optional(),
  reason: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  decidedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  decidedBy: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  duty: z.union([ z.lazy(() => DutyRelationFilterSchema), z.lazy(() => DutyWhereInputSchema) ]).optional(),
  staff: z.union([ z.lazy(() => StaffRelationFilterSchema), z.lazy(() => StaffWhereInputSchema) ]).optional(),
});

export default DutyDayTypeWhereInputSchema;

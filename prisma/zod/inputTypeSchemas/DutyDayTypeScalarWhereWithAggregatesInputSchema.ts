import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { EnumDayTypeWithAggregatesFilterSchema } from './EnumDayTypeWithAggregatesFilterSchema';
import { DayTypeSchema } from './DayTypeSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const DutyDayTypeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DutyDayTypeScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => DutyDayTypeScalarWhereWithAggregatesInputSchema), z.lazy(() => DutyDayTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DutyDayTypeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DutyDayTypeScalarWhereWithAggregatesInputSchema), z.lazy(() => DutyDayTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  dayType: z.union([ z.lazy(() => EnumDayTypeWithAggregatesFilterSchema), z.lazy(() => DayTypeSchema) ]).optional(),
  reason: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  decidedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  decidedBy: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
});

export default DutyDayTypeScalarWhereWithAggregatesInputSchema;

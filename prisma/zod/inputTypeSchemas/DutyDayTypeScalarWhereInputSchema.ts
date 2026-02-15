import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumDayTypeFilterSchema } from './EnumDayTypeFilterSchema';
import { DayTypeSchema } from './DayTypeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const DutyDayTypeScalarWhereInputSchema: z.ZodType<Prisma.DutyDayTypeScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => DutyDayTypeScalarWhereInputSchema), z.lazy(() => DutyDayTypeScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DutyDayTypeScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DutyDayTypeScalarWhereInputSchema), z.lazy(() => DutyDayTypeScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  dayType: z.union([ z.lazy(() => EnumDayTypeFilterSchema), z.lazy(() => DayTypeSchema) ]).optional(),
  reason: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  decidedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  decidedBy: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
});

export default DutyDayTypeScalarWhereInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const SubstituteHolidayScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SubstituteHolidayScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SubstituteHolidayScalarWhereWithAggregatesInputSchema), z.lazy(() => SubstituteHolidayScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubstituteHolidayScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubstituteHolidayScalarWhereWithAggregatesInputSchema), z.lazy(() => SubstituteHolidayScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  originalHoliday: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  substituteDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  reason: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  decidedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  decidedBy: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
});

export default SubstituteHolidayScalarWhereWithAggregatesInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const SubstituteHolidayScalarWhereInputSchema: z.ZodType<Prisma.SubstituteHolidayScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SubstituteHolidayScalarWhereInputSchema), z.lazy(() => SubstituteHolidayScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubstituteHolidayScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubstituteHolidayScalarWhereInputSchema), z.lazy(() => SubstituteHolidayScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  originalHoliday: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  substituteDate: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  reason: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  decidedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  decidedBy: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
});

export default SubstituteHolidayScalarWhereInputSchema;

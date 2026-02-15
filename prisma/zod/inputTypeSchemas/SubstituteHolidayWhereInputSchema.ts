import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StaffRelationFilterSchema } from './StaffRelationFilterSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const SubstituteHolidayWhereInputSchema: z.ZodType<Prisma.SubstituteHolidayWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SubstituteHolidayWhereInputSchema), z.lazy(() => SubstituteHolidayWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubstituteHolidayWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubstituteHolidayWhereInputSchema), z.lazy(() => SubstituteHolidayWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  originalHoliday: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  substituteDate: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  reason: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  decidedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  decidedBy: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  staff: z.union([ z.lazy(() => StaffRelationFilterSchema), z.lazy(() => StaffWhereInputSchema) ]).optional(),
});

export default SubstituteHolidayWhereInputSchema;

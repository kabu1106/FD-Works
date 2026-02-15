import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubstituteHolidayStaffIdOriginalHolidayCompoundUniqueInputSchema } from './SubstituteHolidayStaffIdOriginalHolidayCompoundUniqueInputSchema';
import { SubstituteHolidayStaffIdSubstituteDateCompoundUniqueInputSchema } from './SubstituteHolidayStaffIdSubstituteDateCompoundUniqueInputSchema';
import { SubstituteHolidayWhereInputSchema } from './SubstituteHolidayWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StaffRelationFilterSchema } from './StaffRelationFilterSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const SubstituteHolidayWhereUniqueInputSchema: z.ZodType<Prisma.SubstituteHolidayWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    staffId_originalHoliday: z.lazy(() => SubstituteHolidayStaffIdOriginalHolidayCompoundUniqueInputSchema),
    staffId_substituteDate: z.lazy(() => SubstituteHolidayStaffIdSubstituteDateCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
    staffId_originalHoliday: z.lazy(() => SubstituteHolidayStaffIdOriginalHolidayCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
    staffId_substituteDate: z.lazy(() => SubstituteHolidayStaffIdSubstituteDateCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    staffId_originalHoliday: z.lazy(() => SubstituteHolidayStaffIdOriginalHolidayCompoundUniqueInputSchema),
    staffId_substituteDate: z.lazy(() => SubstituteHolidayStaffIdSubstituteDateCompoundUniqueInputSchema),
  }),
  z.object({
    staffId_originalHoliday: z.lazy(() => SubstituteHolidayStaffIdOriginalHolidayCompoundUniqueInputSchema),
  }),
  z.object({
    staffId_substituteDate: z.lazy(() => SubstituteHolidayStaffIdSubstituteDateCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  staffId_originalHoliday: z.lazy(() => SubstituteHolidayStaffIdOriginalHolidayCompoundUniqueInputSchema).optional(),
  staffId_substituteDate: z.lazy(() => SubstituteHolidayStaffIdSubstituteDateCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => SubstituteHolidayWhereInputSchema), z.lazy(() => SubstituteHolidayWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubstituteHolidayWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubstituteHolidayWhereInputSchema), z.lazy(() => SubstituteHolidayWhereInputSchema).array() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  originalHoliday: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  substituteDate: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  reason: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  decidedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  decidedBy: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  staff: z.union([ z.lazy(() => StaffRelationFilterSchema), z.lazy(() => StaffWhereInputSchema) ]).optional(),
}));

export default SubstituteHolidayWhereUniqueInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyDayTypeDutyIdStaffIdCompoundUniqueInputSchema } from './DutyDayTypeDutyIdStaffIdCompoundUniqueInputSchema';
import { DutyDayTypeWhereInputSchema } from './DutyDayTypeWhereInputSchema';
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

export const DutyDayTypeWhereUniqueInputSchema: z.ZodType<Prisma.DutyDayTypeWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    dutyId_staffId: z.lazy(() => DutyDayTypeDutyIdStaffIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    dutyId_staffId: z.lazy(() => DutyDayTypeDutyIdStaffIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  dutyId_staffId: z.lazy(() => DutyDayTypeDutyIdStaffIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => DutyDayTypeWhereInputSchema), z.lazy(() => DutyDayTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DutyDayTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DutyDayTypeWhereInputSchema), z.lazy(() => DutyDayTypeWhereInputSchema).array() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  dayType: z.union([ z.lazy(() => EnumDayTypeFilterSchema), z.lazy(() => DayTypeSchema) ]).optional(),
  reason: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  decidedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  decidedBy: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  duty: z.union([ z.lazy(() => DutyRelationFilterSchema), z.lazy(() => DutyWhereInputSchema) ]).optional(),
  staff: z.union([ z.lazy(() => StaffRelationFilterSchema), z.lazy(() => StaffWhereInputSchema) ]).optional(),
}));

export default DutyDayTypeWhereUniqueInputSchema;

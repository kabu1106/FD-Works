import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSummaryDutyIdStaffIdCalculationVersionCompoundUniqueInputSchema } from './OvertimeSummaryDutyIdStaffIdCalculationVersionCompoundUniqueInputSchema';
import { OvertimeSummaryWhereInputSchema } from './OvertimeSummaryWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DutyRelationFilterSchema } from './DutyRelationFilterSchema';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';
import { StaffRelationFilterSchema } from './StaffRelationFilterSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';
import { OvertimeSummaryDetailListRelationFilterSchema } from './OvertimeSummaryDetailListRelationFilterSchema';

export const OvertimeSummaryWhereUniqueInputSchema: z.ZodType<Prisma.OvertimeSummaryWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    dutyId_staffId_calculationVersion: z.lazy(() => OvertimeSummaryDutyIdStaffIdCalculationVersionCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    dutyId_staffId_calculationVersion: z.lazy(() => OvertimeSummaryDutyIdStaffIdCalculationVersionCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  dutyId_staffId_calculationVersion: z.lazy(() => OvertimeSummaryDutyIdStaffIdCalculationVersionCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => OvertimeSummaryWhereInputSchema), z.lazy(() => OvertimeSummaryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OvertimeSummaryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OvertimeSummaryWhereInputSchema), z.lazy(() => OvertimeSummaryWhereInputSchema).array() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  calculationVersion: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  totalMinutes: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  isFinalized: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  calculatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  duty: z.union([ z.lazy(() => DutyRelationFilterSchema), z.lazy(() => DutyWhereInputSchema) ]).optional(),
  staff: z.union([ z.lazy(() => StaffRelationFilterSchema), z.lazy(() => StaffWhereInputSchema) ]).optional(),
  details: z.lazy(() => OvertimeSummaryDetailListRelationFilterSchema).optional(),
}));

export default OvertimeSummaryWhereUniqueInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DutyRelationFilterSchema } from './DutyRelationFilterSchema';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';
import { StaffRelationFilterSchema } from './StaffRelationFilterSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';
import { OvertimeSummaryDetailListRelationFilterSchema } from './OvertimeSummaryDetailListRelationFilterSchema';

export const OvertimeSummaryWhereInputSchema: z.ZodType<Prisma.OvertimeSummaryWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => OvertimeSummaryWhereInputSchema), z.lazy(() => OvertimeSummaryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OvertimeSummaryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OvertimeSummaryWhereInputSchema), z.lazy(() => OvertimeSummaryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  calculationVersion: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  totalMinutes: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  isFinalized: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  calculatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  duty: z.union([ z.lazy(() => DutyRelationFilterSchema), z.lazy(() => DutyWhereInputSchema) ]).optional(),
  staff: z.union([ z.lazy(() => StaffRelationFilterSchema), z.lazy(() => StaffWhereInputSchema) ]).optional(),
  details: z.lazy(() => OvertimeSummaryDetailListRelationFilterSchema).optional(),
});

export default OvertimeSummaryWhereInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IncidentStaffRelationFilterSchema } from './IncidentStaffRelationFilterSchema';
import { IncidentStaffWhereInputSchema } from './IncidentStaffWhereInputSchema';
import { AllowanceTypeRelationFilterSchema } from './AllowanceTypeRelationFilterSchema';
import { AllowanceTypeWhereInputSchema } from './AllowanceTypeWhereInputSchema';

export const IncidentAllowanceSummaryWhereInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => IncidentAllowanceSummaryWhereInputSchema), z.lazy(() => IncidentAllowanceSummaryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentAllowanceSummaryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentAllowanceSummaryWhereInputSchema), z.lazy(() => IncidentAllowanceSummaryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  incidentStaffId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  allowanceTypeId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  version: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  count: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  isFinalized: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  incidentStaff: z.union([ z.lazy(() => IncidentStaffRelationFilterSchema), z.lazy(() => IncidentStaffWhereInputSchema) ]).optional(),
  allowanceType: z.union([ z.lazy(() => AllowanceTypeRelationFilterSchema), z.lazy(() => AllowanceTypeWhereInputSchema) ]).optional(),
});

export default IncidentAllowanceSummaryWhereInputSchema;

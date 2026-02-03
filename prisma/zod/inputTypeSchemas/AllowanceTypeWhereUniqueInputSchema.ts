import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeWhereInputSchema } from './AllowanceTypeWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { AllowanceGroupRelationFilterSchema } from './AllowanceGroupRelationFilterSchema';
import { AllowanceGroupWhereInputSchema } from './AllowanceGroupWhereInputSchema';
import { IncidentStaffAllowanceListRelationFilterSchema } from './IncidentStaffAllowanceListRelationFilterSchema';
import { IncidentAllowanceSummaryListRelationFilterSchema } from './IncidentAllowanceSummaryListRelationFilterSchema';

export const AllowanceTypeWhereUniqueInputSchema: z.ZodType<Prisma.AllowanceTypeWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    code: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    code: z.string(),
  }),
])
.and(z.strictObject({
  id: z.number().int().optional(),
  code: z.string().optional(),
  AND: z.union([ z.lazy(() => AllowanceTypeWhereInputSchema), z.lazy(() => AllowanceTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AllowanceTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AllowanceTypeWhereInputSchema), z.lazy(() => AllowanceTypeWhereInputSchema).array() ]).optional(),
  allowanceGroupId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  allowanceGroup: z.union([ z.lazy(() => AllowanceGroupRelationFilterSchema), z.lazy(() => AllowanceGroupWhereInputSchema) ]).optional(),
  IncidentStaffAllowance: z.lazy(() => IncidentStaffAllowanceListRelationFilterSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryListRelationFilterSchema).optional(),
}));

export default AllowanceTypeWhereUniqueInputSchema;

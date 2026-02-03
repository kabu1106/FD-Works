import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { AllowanceGroupRelationFilterSchema } from './AllowanceGroupRelationFilterSchema';
import { AllowanceGroupWhereInputSchema } from './AllowanceGroupWhereInputSchema';
import { IncidentStaffAllowanceListRelationFilterSchema } from './IncidentStaffAllowanceListRelationFilterSchema';
import { IncidentAllowanceSummaryListRelationFilterSchema } from './IncidentAllowanceSummaryListRelationFilterSchema';

export const AllowanceTypeWhereInputSchema: z.ZodType<Prisma.AllowanceTypeWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AllowanceTypeWhereInputSchema), z.lazy(() => AllowanceTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AllowanceTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AllowanceTypeWhereInputSchema), z.lazy(() => AllowanceTypeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  allowanceGroupId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  allowanceGroup: z.union([ z.lazy(() => AllowanceGroupRelationFilterSchema), z.lazy(() => AllowanceGroupWhereInputSchema) ]).optional(),
  IncidentStaffAllowance: z.lazy(() => IncidentStaffAllowanceListRelationFilterSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryListRelationFilterSchema).optional(),
});

export default AllowanceTypeWhereInputSchema;

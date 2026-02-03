import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentAllowanceSummaryIncidentStaffIdAllowanceTypeIdVersionCompoundUniqueInputSchema } from './IncidentAllowanceSummaryIncidentStaffIdAllowanceTypeIdVersionCompoundUniqueInputSchema';
import { IncidentAllowanceSummaryWhereInputSchema } from './IncidentAllowanceSummaryWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IncidentStaffRelationFilterSchema } from './IncidentStaffRelationFilterSchema';
import { IncidentStaffWhereInputSchema } from './IncidentStaffWhereInputSchema';
import { AllowanceTypeRelationFilterSchema } from './AllowanceTypeRelationFilterSchema';
import { AllowanceTypeWhereInputSchema } from './AllowanceTypeWhereInputSchema';

export const IncidentAllowanceSummaryWhereUniqueInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    incidentStaffId_allowanceTypeId_version: z.lazy(() => IncidentAllowanceSummaryIncidentStaffIdAllowanceTypeIdVersionCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    incidentStaffId_allowanceTypeId_version: z.lazy(() => IncidentAllowanceSummaryIncidentStaffIdAllowanceTypeIdVersionCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  incidentStaffId_allowanceTypeId_version: z.lazy(() => IncidentAllowanceSummaryIncidentStaffIdAllowanceTypeIdVersionCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => IncidentAllowanceSummaryWhereInputSchema), z.lazy(() => IncidentAllowanceSummaryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentAllowanceSummaryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentAllowanceSummaryWhereInputSchema), z.lazy(() => IncidentAllowanceSummaryWhereInputSchema).array() ]).optional(),
  incidentStaffId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  allowanceTypeId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  version: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  count: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  isFinalized: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  incidentStaff: z.union([ z.lazy(() => IncidentStaffRelationFilterSchema), z.lazy(() => IncidentStaffWhereInputSchema) ]).optional(),
  allowanceType: z.union([ z.lazy(() => AllowanceTypeRelationFilterSchema), z.lazy(() => AllowanceTypeWhereInputSchema) ]).optional(),
}));

export default IncidentAllowanceSummaryWhereUniqueInputSchema;

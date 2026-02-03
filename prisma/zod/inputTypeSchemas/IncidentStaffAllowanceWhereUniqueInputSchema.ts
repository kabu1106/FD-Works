import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceIncidentStaffIdAllowanceTypeIdCompoundUniqueInputSchema } from './IncidentStaffAllowanceIncidentStaffIdAllowanceTypeIdCompoundUniqueInputSchema';
import { IncidentStaffAllowanceWhereInputSchema } from './IncidentStaffAllowanceWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IncidentStaffRelationFilterSchema } from './IncidentStaffRelationFilterSchema';
import { IncidentStaffWhereInputSchema } from './IncidentStaffWhereInputSchema';
import { AllowanceTypeRelationFilterSchema } from './AllowanceTypeRelationFilterSchema';
import { AllowanceTypeWhereInputSchema } from './AllowanceTypeWhereInputSchema';

export const IncidentStaffAllowanceWhereUniqueInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    incidentStaffId_allowanceTypeId: z.lazy(() => IncidentStaffAllowanceIncidentStaffIdAllowanceTypeIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    incidentStaffId_allowanceTypeId: z.lazy(() => IncidentStaffAllowanceIncidentStaffIdAllowanceTypeIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  incidentStaffId_allowanceTypeId: z.lazy(() => IncidentStaffAllowanceIncidentStaffIdAllowanceTypeIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => IncidentStaffAllowanceWhereInputSchema), z.lazy(() => IncidentStaffAllowanceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentStaffAllowanceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentStaffAllowanceWhereInputSchema), z.lazy(() => IncidentStaffAllowanceWhereInputSchema).array() ]).optional(),
  incidentStaffId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  allowanceTypeId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  incidentStaff: z.union([ z.lazy(() => IncidentStaffRelationFilterSchema), z.lazy(() => IncidentStaffWhereInputSchema) ]).optional(),
  allowanceType: z.union([ z.lazy(() => AllowanceTypeRelationFilterSchema), z.lazy(() => AllowanceTypeWhereInputSchema) ]).optional(),
}));

export default IncidentStaffAllowanceWhereUniqueInputSchema;

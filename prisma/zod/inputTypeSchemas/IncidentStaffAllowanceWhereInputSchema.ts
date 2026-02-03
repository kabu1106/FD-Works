import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IncidentStaffRelationFilterSchema } from './IncidentStaffRelationFilterSchema';
import { IncidentStaffWhereInputSchema } from './IncidentStaffWhereInputSchema';
import { AllowanceTypeRelationFilterSchema } from './AllowanceTypeRelationFilterSchema';
import { AllowanceTypeWhereInputSchema } from './AllowanceTypeWhereInputSchema';

export const IncidentStaffAllowanceWhereInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => IncidentStaffAllowanceWhereInputSchema), z.lazy(() => IncidentStaffAllowanceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentStaffAllowanceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentStaffAllowanceWhereInputSchema), z.lazy(() => IncidentStaffAllowanceWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  incidentStaffId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  allowanceTypeId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  incidentStaff: z.union([ z.lazy(() => IncidentStaffRelationFilterSchema), z.lazy(() => IncidentStaffWhereInputSchema) ]).optional(),
  allowanceType: z.union([ z.lazy(() => AllowanceTypeRelationFilterSchema), z.lazy(() => AllowanceTypeWhereInputSchema) ]).optional(),
});

export default IncidentStaffAllowanceWhereInputSchema;

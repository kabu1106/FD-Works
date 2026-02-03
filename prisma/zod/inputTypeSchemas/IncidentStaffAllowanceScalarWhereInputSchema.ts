import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const IncidentStaffAllowanceScalarWhereInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => IncidentStaffAllowanceScalarWhereInputSchema), z.lazy(() => IncidentStaffAllowanceScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentStaffAllowanceScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentStaffAllowanceScalarWhereInputSchema), z.lazy(() => IncidentStaffAllowanceScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  incidentStaffId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  allowanceTypeId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
});

export default IncidentStaffAllowanceScalarWhereInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const IncidentStaffScalarWhereInputSchema: z.ZodType<Prisma.IncidentStaffScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => IncidentStaffScalarWhereInputSchema), z.lazy(() => IncidentStaffScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentStaffScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentStaffScalarWhereInputSchema), z.lazy(() => IncidentStaffScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  incidentVehicleId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  staffId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
});

export default IncidentStaffScalarWhereInputSchema;

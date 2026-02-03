import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffWhereInputSchema } from './IncidentStaffWhereInputSchema';

export const IncidentStaffRelationFilterSchema: z.ZodType<Prisma.IncidentStaffRelationFilter> = z.strictObject({
  is: z.lazy(() => IncidentStaffWhereInputSchema).optional(),
  isNot: z.lazy(() => IncidentStaffWhereInputSchema).optional(),
});

export default IncidentStaffRelationFilterSchema;

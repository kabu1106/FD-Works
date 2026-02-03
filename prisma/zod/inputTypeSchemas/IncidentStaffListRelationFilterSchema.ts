import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffWhereInputSchema } from './IncidentStaffWhereInputSchema';

export const IncidentStaffListRelationFilterSchema: z.ZodType<Prisma.IncidentStaffListRelationFilter> = z.strictObject({
  every: z.lazy(() => IncidentStaffWhereInputSchema).optional(),
  some: z.lazy(() => IncidentStaffWhereInputSchema).optional(),
  none: z.lazy(() => IncidentStaffWhereInputSchema).optional(),
});

export default IncidentStaffListRelationFilterSchema;

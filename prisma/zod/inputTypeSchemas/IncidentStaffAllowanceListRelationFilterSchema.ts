import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceWhereInputSchema } from './IncidentStaffAllowanceWhereInputSchema';

export const IncidentStaffAllowanceListRelationFilterSchema: z.ZodType<Prisma.IncidentStaffAllowanceListRelationFilter> = z.strictObject({
  every: z.lazy(() => IncidentStaffAllowanceWhereInputSchema).optional(),
  some: z.lazy(() => IncidentStaffAllowanceWhereInputSchema).optional(),
  none: z.lazy(() => IncidentStaffAllowanceWhereInputSchema).optional(),
});

export default IncidentStaffAllowanceListRelationFilterSchema;

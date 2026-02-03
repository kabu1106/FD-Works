import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffWhereInputSchema } from './IncidentStaffWhereInputSchema';
import { IncidentStaffUpdateWithoutIncidentAllowanceSummaryInputSchema } from './IncidentStaffUpdateWithoutIncidentAllowanceSummaryInputSchema';
import { IncidentStaffUncheckedUpdateWithoutIncidentAllowanceSummaryInputSchema } from './IncidentStaffUncheckedUpdateWithoutIncidentAllowanceSummaryInputSchema';

export const IncidentStaffUpdateToOneWithWhereWithoutIncidentAllowanceSummaryInputSchema: z.ZodType<Prisma.IncidentStaffUpdateToOneWithWhereWithoutIncidentAllowanceSummaryInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => IncidentStaffUpdateWithoutIncidentAllowanceSummaryInputSchema), z.lazy(() => IncidentStaffUncheckedUpdateWithoutIncidentAllowanceSummaryInputSchema) ]),
});

export default IncidentStaffUpdateToOneWithWhereWithoutIncidentAllowanceSummaryInputSchema;

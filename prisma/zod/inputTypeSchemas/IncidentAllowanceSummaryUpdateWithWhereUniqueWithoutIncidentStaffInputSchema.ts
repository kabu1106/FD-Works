import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentAllowanceSummaryWhereUniqueInputSchema } from './IncidentAllowanceSummaryWhereUniqueInputSchema';
import { IncidentAllowanceSummaryUpdateWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryUpdateWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryUncheckedUpdateWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryUncheckedUpdateWithoutIncidentStaffInputSchema';

export const IncidentAllowanceSummaryUpdateWithWhereUniqueWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryUpdateWithWhereUniqueWithoutIncidentStaffInput> = z.strictObject({
  where: z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IncidentAllowanceSummaryUpdateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentAllowanceSummaryUncheckedUpdateWithoutIncidentStaffInputSchema) ]),
});

export default IncidentAllowanceSummaryUpdateWithWhereUniqueWithoutIncidentStaffInputSchema;

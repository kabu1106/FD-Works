import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentAllowanceSummaryScalarWhereInputSchema } from './IncidentAllowanceSummaryScalarWhereInputSchema';
import { IncidentAllowanceSummaryUpdateManyMutationInputSchema } from './IncidentAllowanceSummaryUpdateManyMutationInputSchema';
import { IncidentAllowanceSummaryUncheckedUpdateManyWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryUncheckedUpdateManyWithoutIncidentStaffInputSchema';

export const IncidentAllowanceSummaryUpdateManyWithWhereWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryUpdateManyWithWhereWithoutIncidentStaffInput> = z.strictObject({
  where: z.lazy(() => IncidentAllowanceSummaryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IncidentAllowanceSummaryUpdateManyMutationInputSchema), z.lazy(() => IncidentAllowanceSummaryUncheckedUpdateManyWithoutIncidentStaffInputSchema) ]),
});

export default IncidentAllowanceSummaryUpdateManyWithWhereWithoutIncidentStaffInputSchema;

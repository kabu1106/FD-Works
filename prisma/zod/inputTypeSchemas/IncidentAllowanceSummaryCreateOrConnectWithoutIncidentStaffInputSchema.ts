import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentAllowanceSummaryWhereUniqueInputSchema } from './IncidentAllowanceSummaryWhereUniqueInputSchema';
import { IncidentAllowanceSummaryCreateWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryCreateWithoutIncidentStaffInputSchema';
import { IncidentAllowanceSummaryUncheckedCreateWithoutIncidentStaffInputSchema } from './IncidentAllowanceSummaryUncheckedCreateWithoutIncidentStaffInputSchema';

export const IncidentAllowanceSummaryCreateOrConnectWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentAllowanceSummaryCreateOrConnectWithoutIncidentStaffInput> = z.strictObject({
  where: z.lazy(() => IncidentAllowanceSummaryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentAllowanceSummaryCreateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentAllowanceSummaryUncheckedCreateWithoutIncidentStaffInputSchema) ]),
});

export default IncidentAllowanceSummaryCreateOrConnectWithoutIncidentStaffInputSchema;

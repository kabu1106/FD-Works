import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffWhereUniqueInputSchema } from './IncidentStaffWhereUniqueInputSchema';
import { IncidentStaffCreateWithoutIncidentAllowanceSummaryInputSchema } from './IncidentStaffCreateWithoutIncidentAllowanceSummaryInputSchema';
import { IncidentStaffUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema } from './IncidentStaffUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema';

export const IncidentStaffCreateOrConnectWithoutIncidentAllowanceSummaryInputSchema: z.ZodType<Prisma.IncidentStaffCreateOrConnectWithoutIncidentAllowanceSummaryInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentStaffCreateWithoutIncidentAllowanceSummaryInputSchema), z.lazy(() => IncidentStaffUncheckedCreateWithoutIncidentAllowanceSummaryInputSchema) ]),
});

export default IncidentStaffCreateOrConnectWithoutIncidentAllowanceSummaryInputSchema;

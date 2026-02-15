import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffEngagementWhereUniqueInputSchema } from './IncidentStaffEngagementWhereUniqueInputSchema';
import { IncidentStaffEngagementCreateWithoutStaffInputSchema } from './IncidentStaffEngagementCreateWithoutStaffInputSchema';
import { IncidentStaffEngagementUncheckedCreateWithoutStaffInputSchema } from './IncidentStaffEngagementUncheckedCreateWithoutStaffInputSchema';

export const IncidentStaffEngagementCreateOrConnectWithoutStaffInputSchema: z.ZodType<Prisma.IncidentStaffEngagementCreateOrConnectWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentStaffEngagementCreateWithoutStaffInputSchema), z.lazy(() => IncidentStaffEngagementUncheckedCreateWithoutStaffInputSchema) ]),
});

export default IncidentStaffEngagementCreateOrConnectWithoutStaffInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffEngagementWhereUniqueInputSchema } from './IncidentStaffEngagementWhereUniqueInputSchema';
import { IncidentStaffEngagementCreateWithoutIncidentInputSchema } from './IncidentStaffEngagementCreateWithoutIncidentInputSchema';
import { IncidentStaffEngagementUncheckedCreateWithoutIncidentInputSchema } from './IncidentStaffEngagementUncheckedCreateWithoutIncidentInputSchema';

export const IncidentStaffEngagementCreateOrConnectWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentStaffEngagementCreateOrConnectWithoutIncidentInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentStaffEngagementCreateWithoutIncidentInputSchema), z.lazy(() => IncidentStaffEngagementUncheckedCreateWithoutIncidentInputSchema) ]),
});

export default IncidentStaffEngagementCreateOrConnectWithoutIncidentInputSchema;

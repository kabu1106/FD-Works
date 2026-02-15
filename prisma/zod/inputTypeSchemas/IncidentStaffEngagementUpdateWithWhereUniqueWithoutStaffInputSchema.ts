import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffEngagementWhereUniqueInputSchema } from './IncidentStaffEngagementWhereUniqueInputSchema';
import { IncidentStaffEngagementUpdateWithoutStaffInputSchema } from './IncidentStaffEngagementUpdateWithoutStaffInputSchema';
import { IncidentStaffEngagementUncheckedUpdateWithoutStaffInputSchema } from './IncidentStaffEngagementUncheckedUpdateWithoutStaffInputSchema';

export const IncidentStaffEngagementUpdateWithWhereUniqueWithoutStaffInputSchema: z.ZodType<Prisma.IncidentStaffEngagementUpdateWithWhereUniqueWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IncidentStaffEngagementUpdateWithoutStaffInputSchema), z.lazy(() => IncidentStaffEngagementUncheckedUpdateWithoutStaffInputSchema) ]),
});

export default IncidentStaffEngagementUpdateWithWhereUniqueWithoutStaffInputSchema;

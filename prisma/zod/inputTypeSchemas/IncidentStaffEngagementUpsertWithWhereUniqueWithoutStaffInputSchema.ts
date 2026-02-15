import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffEngagementWhereUniqueInputSchema } from './IncidentStaffEngagementWhereUniqueInputSchema';
import { IncidentStaffEngagementUpdateWithoutStaffInputSchema } from './IncidentStaffEngagementUpdateWithoutStaffInputSchema';
import { IncidentStaffEngagementUncheckedUpdateWithoutStaffInputSchema } from './IncidentStaffEngagementUncheckedUpdateWithoutStaffInputSchema';
import { IncidentStaffEngagementCreateWithoutStaffInputSchema } from './IncidentStaffEngagementCreateWithoutStaffInputSchema';
import { IncidentStaffEngagementUncheckedCreateWithoutStaffInputSchema } from './IncidentStaffEngagementUncheckedCreateWithoutStaffInputSchema';

export const IncidentStaffEngagementUpsertWithWhereUniqueWithoutStaffInputSchema: z.ZodType<Prisma.IncidentStaffEngagementUpsertWithWhereUniqueWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IncidentStaffEngagementUpdateWithoutStaffInputSchema), z.lazy(() => IncidentStaffEngagementUncheckedUpdateWithoutStaffInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentStaffEngagementCreateWithoutStaffInputSchema), z.lazy(() => IncidentStaffEngagementUncheckedCreateWithoutStaffInputSchema) ]),
});

export default IncidentStaffEngagementUpsertWithWhereUniqueWithoutStaffInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffEngagementWhereUniqueInputSchema } from './IncidentStaffEngagementWhereUniqueInputSchema';
import { IncidentStaffEngagementUpdateWithoutIncidentInputSchema } from './IncidentStaffEngagementUpdateWithoutIncidentInputSchema';
import { IncidentStaffEngagementUncheckedUpdateWithoutIncidentInputSchema } from './IncidentStaffEngagementUncheckedUpdateWithoutIncidentInputSchema';
import { IncidentStaffEngagementCreateWithoutIncidentInputSchema } from './IncidentStaffEngagementCreateWithoutIncidentInputSchema';
import { IncidentStaffEngagementUncheckedCreateWithoutIncidentInputSchema } from './IncidentStaffEngagementUncheckedCreateWithoutIncidentInputSchema';

export const IncidentStaffEngagementUpsertWithWhereUniqueWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentStaffEngagementUpsertWithWhereUniqueWithoutIncidentInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IncidentStaffEngagementUpdateWithoutIncidentInputSchema), z.lazy(() => IncidentStaffEngagementUncheckedUpdateWithoutIncidentInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentStaffEngagementCreateWithoutIncidentInputSchema), z.lazy(() => IncidentStaffEngagementUncheckedCreateWithoutIncidentInputSchema) ]),
});

export default IncidentStaffEngagementUpsertWithWhereUniqueWithoutIncidentInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffEngagementWhereUniqueInputSchema } from './IncidentStaffEngagementWhereUniqueInputSchema';
import { IncidentStaffEngagementUpdateWithoutIncidentInputSchema } from './IncidentStaffEngagementUpdateWithoutIncidentInputSchema';
import { IncidentStaffEngagementUncheckedUpdateWithoutIncidentInputSchema } from './IncidentStaffEngagementUncheckedUpdateWithoutIncidentInputSchema';

export const IncidentStaffEngagementUpdateWithWhereUniqueWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentStaffEngagementUpdateWithWhereUniqueWithoutIncidentInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffEngagementWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IncidentStaffEngagementUpdateWithoutIncidentInputSchema), z.lazy(() => IncidentStaffEngagementUncheckedUpdateWithoutIncidentInputSchema) ]),
});

export default IncidentStaffEngagementUpdateWithWhereUniqueWithoutIncidentInputSchema;

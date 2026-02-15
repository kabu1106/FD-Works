import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffEngagementScalarWhereInputSchema } from './IncidentStaffEngagementScalarWhereInputSchema';
import { IncidentStaffEngagementUpdateManyMutationInputSchema } from './IncidentStaffEngagementUpdateManyMutationInputSchema';
import { IncidentStaffEngagementUncheckedUpdateManyWithoutStaffInputSchema } from './IncidentStaffEngagementUncheckedUpdateManyWithoutStaffInputSchema';

export const IncidentStaffEngagementUpdateManyWithWhereWithoutStaffInputSchema: z.ZodType<Prisma.IncidentStaffEngagementUpdateManyWithWhereWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffEngagementScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IncidentStaffEngagementUpdateManyMutationInputSchema), z.lazy(() => IncidentStaffEngagementUncheckedUpdateManyWithoutStaffInputSchema) ]),
});

export default IncidentStaffEngagementUpdateManyWithWhereWithoutStaffInputSchema;

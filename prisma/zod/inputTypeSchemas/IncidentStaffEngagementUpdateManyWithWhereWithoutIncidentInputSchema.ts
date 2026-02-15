import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffEngagementScalarWhereInputSchema } from './IncidentStaffEngagementScalarWhereInputSchema';
import { IncidentStaffEngagementUpdateManyMutationInputSchema } from './IncidentStaffEngagementUpdateManyMutationInputSchema';
import { IncidentStaffEngagementUncheckedUpdateManyWithoutIncidentInputSchema } from './IncidentStaffEngagementUncheckedUpdateManyWithoutIncidentInputSchema';

export const IncidentStaffEngagementUpdateManyWithWhereWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentStaffEngagementUpdateManyWithWhereWithoutIncidentInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffEngagementScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IncidentStaffEngagementUpdateManyMutationInputSchema), z.lazy(() => IncidentStaffEngagementUncheckedUpdateManyWithoutIncidentInputSchema) ]),
});

export default IncidentStaffEngagementUpdateManyWithWhereWithoutIncidentInputSchema;

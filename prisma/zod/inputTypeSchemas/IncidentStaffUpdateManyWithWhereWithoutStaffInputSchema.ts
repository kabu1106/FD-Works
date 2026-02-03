import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffScalarWhereInputSchema } from './IncidentStaffScalarWhereInputSchema';
import { IncidentStaffUpdateManyMutationInputSchema } from './IncidentStaffUpdateManyMutationInputSchema';
import { IncidentStaffUncheckedUpdateManyWithoutStaffInputSchema } from './IncidentStaffUncheckedUpdateManyWithoutStaffInputSchema';

export const IncidentStaffUpdateManyWithWhereWithoutStaffInputSchema: z.ZodType<Prisma.IncidentStaffUpdateManyWithWhereWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IncidentStaffUpdateManyMutationInputSchema), z.lazy(() => IncidentStaffUncheckedUpdateManyWithoutStaffInputSchema) ]),
});

export default IncidentStaffUpdateManyWithWhereWithoutStaffInputSchema;

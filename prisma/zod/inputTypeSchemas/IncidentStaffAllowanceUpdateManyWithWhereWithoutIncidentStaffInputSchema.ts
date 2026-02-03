import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceScalarWhereInputSchema } from './IncidentStaffAllowanceScalarWhereInputSchema';
import { IncidentStaffAllowanceUpdateManyMutationInputSchema } from './IncidentStaffAllowanceUpdateManyMutationInputSchema';
import { IncidentStaffAllowanceUncheckedUpdateManyWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceUncheckedUpdateManyWithoutIncidentStaffInputSchema';

export const IncidentStaffAllowanceUpdateManyWithWhereWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceUpdateManyWithWhereWithoutIncidentStaffInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffAllowanceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IncidentStaffAllowanceUpdateManyMutationInputSchema), z.lazy(() => IncidentStaffAllowanceUncheckedUpdateManyWithoutIncidentStaffInputSchema) ]),
});

export default IncidentStaffAllowanceUpdateManyWithWhereWithoutIncidentStaffInputSchema;

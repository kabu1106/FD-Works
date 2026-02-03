import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceScalarWhereInputSchema } from './IncidentStaffAllowanceScalarWhereInputSchema';
import { IncidentStaffAllowanceUpdateManyMutationInputSchema } from './IncidentStaffAllowanceUpdateManyMutationInputSchema';
import { IncidentStaffAllowanceUncheckedUpdateManyWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceUncheckedUpdateManyWithoutAllowanceTypeInputSchema';

export const IncidentStaffAllowanceUpdateManyWithWhereWithoutAllowanceTypeInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceUpdateManyWithWhereWithoutAllowanceTypeInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffAllowanceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IncidentStaffAllowanceUpdateManyMutationInputSchema), z.lazy(() => IncidentStaffAllowanceUncheckedUpdateManyWithoutAllowanceTypeInputSchema) ]),
});

export default IncidentStaffAllowanceUpdateManyWithWhereWithoutAllowanceTypeInputSchema;

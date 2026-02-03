import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeWhereInputSchema } from './AllowanceTypeWhereInputSchema';
import { AllowanceTypeUpdateWithoutIncidentStaffAllowanceInputSchema } from './AllowanceTypeUpdateWithoutIncidentStaffAllowanceInputSchema';
import { AllowanceTypeUncheckedUpdateWithoutIncidentStaffAllowanceInputSchema } from './AllowanceTypeUncheckedUpdateWithoutIncidentStaffAllowanceInputSchema';

export const AllowanceTypeUpdateToOneWithWhereWithoutIncidentStaffAllowanceInputSchema: z.ZodType<Prisma.AllowanceTypeUpdateToOneWithWhereWithoutIncidentStaffAllowanceInput> = z.strictObject({
  where: z.lazy(() => AllowanceTypeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AllowanceTypeUpdateWithoutIncidentStaffAllowanceInputSchema), z.lazy(() => AllowanceTypeUncheckedUpdateWithoutIncidentStaffAllowanceInputSchema) ]),
});

export default AllowanceTypeUpdateToOneWithWhereWithoutIncidentStaffAllowanceInputSchema;

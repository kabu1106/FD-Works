import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeUpdateWithoutIncidentStaffAllowanceInputSchema } from './AllowanceTypeUpdateWithoutIncidentStaffAllowanceInputSchema';
import { AllowanceTypeUncheckedUpdateWithoutIncidentStaffAllowanceInputSchema } from './AllowanceTypeUncheckedUpdateWithoutIncidentStaffAllowanceInputSchema';
import { AllowanceTypeCreateWithoutIncidentStaffAllowanceInputSchema } from './AllowanceTypeCreateWithoutIncidentStaffAllowanceInputSchema';
import { AllowanceTypeUncheckedCreateWithoutIncidentStaffAllowanceInputSchema } from './AllowanceTypeUncheckedCreateWithoutIncidentStaffAllowanceInputSchema';
import { AllowanceTypeWhereInputSchema } from './AllowanceTypeWhereInputSchema';

export const AllowanceTypeUpsertWithoutIncidentStaffAllowanceInputSchema: z.ZodType<Prisma.AllowanceTypeUpsertWithoutIncidentStaffAllowanceInput> = z.strictObject({
  update: z.union([ z.lazy(() => AllowanceTypeUpdateWithoutIncidentStaffAllowanceInputSchema), z.lazy(() => AllowanceTypeUncheckedUpdateWithoutIncidentStaffAllowanceInputSchema) ]),
  create: z.union([ z.lazy(() => AllowanceTypeCreateWithoutIncidentStaffAllowanceInputSchema), z.lazy(() => AllowanceTypeUncheckedCreateWithoutIncidentStaffAllowanceInputSchema) ]),
  where: z.lazy(() => AllowanceTypeWhereInputSchema).optional(),
});

export default AllowanceTypeUpsertWithoutIncidentStaffAllowanceInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeWhereUniqueInputSchema } from './AllowanceTypeWhereUniqueInputSchema';
import { AllowanceTypeCreateWithoutIncidentStaffAllowanceInputSchema } from './AllowanceTypeCreateWithoutIncidentStaffAllowanceInputSchema';
import { AllowanceTypeUncheckedCreateWithoutIncidentStaffAllowanceInputSchema } from './AllowanceTypeUncheckedCreateWithoutIncidentStaffAllowanceInputSchema';

export const AllowanceTypeCreateOrConnectWithoutIncidentStaffAllowanceInputSchema: z.ZodType<Prisma.AllowanceTypeCreateOrConnectWithoutIncidentStaffAllowanceInput> = z.strictObject({
  where: z.lazy(() => AllowanceTypeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AllowanceTypeCreateWithoutIncidentStaffAllowanceInputSchema), z.lazy(() => AllowanceTypeUncheckedCreateWithoutIncidentStaffAllowanceInputSchema) ]),
});

export default AllowanceTypeCreateOrConnectWithoutIncidentStaffAllowanceInputSchema;

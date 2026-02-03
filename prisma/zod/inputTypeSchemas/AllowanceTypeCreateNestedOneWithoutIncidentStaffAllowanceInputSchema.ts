import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeCreateWithoutIncidentStaffAllowanceInputSchema } from './AllowanceTypeCreateWithoutIncidentStaffAllowanceInputSchema';
import { AllowanceTypeUncheckedCreateWithoutIncidentStaffAllowanceInputSchema } from './AllowanceTypeUncheckedCreateWithoutIncidentStaffAllowanceInputSchema';
import { AllowanceTypeCreateOrConnectWithoutIncidentStaffAllowanceInputSchema } from './AllowanceTypeCreateOrConnectWithoutIncidentStaffAllowanceInputSchema';
import { AllowanceTypeWhereUniqueInputSchema } from './AllowanceTypeWhereUniqueInputSchema';

export const AllowanceTypeCreateNestedOneWithoutIncidentStaffAllowanceInputSchema: z.ZodType<Prisma.AllowanceTypeCreateNestedOneWithoutIncidentStaffAllowanceInput> = z.strictObject({
  create: z.union([ z.lazy(() => AllowanceTypeCreateWithoutIncidentStaffAllowanceInputSchema), z.lazy(() => AllowanceTypeUncheckedCreateWithoutIncidentStaffAllowanceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AllowanceTypeCreateOrConnectWithoutIncidentStaffAllowanceInputSchema).optional(),
  connect: z.lazy(() => AllowanceTypeWhereUniqueInputSchema).optional(),
});

export default AllowanceTypeCreateNestedOneWithoutIncidentStaffAllowanceInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeCreateWithoutIncidentStaffAllowanceInputSchema } from './AllowanceTypeCreateWithoutIncidentStaffAllowanceInputSchema';
import { AllowanceTypeUncheckedCreateWithoutIncidentStaffAllowanceInputSchema } from './AllowanceTypeUncheckedCreateWithoutIncidentStaffAllowanceInputSchema';
import { AllowanceTypeCreateOrConnectWithoutIncidentStaffAllowanceInputSchema } from './AllowanceTypeCreateOrConnectWithoutIncidentStaffAllowanceInputSchema';
import { AllowanceTypeUpsertWithoutIncidentStaffAllowanceInputSchema } from './AllowanceTypeUpsertWithoutIncidentStaffAllowanceInputSchema';
import { AllowanceTypeWhereUniqueInputSchema } from './AllowanceTypeWhereUniqueInputSchema';
import { AllowanceTypeUpdateToOneWithWhereWithoutIncidentStaffAllowanceInputSchema } from './AllowanceTypeUpdateToOneWithWhereWithoutIncidentStaffAllowanceInputSchema';
import { AllowanceTypeUpdateWithoutIncidentStaffAllowanceInputSchema } from './AllowanceTypeUpdateWithoutIncidentStaffAllowanceInputSchema';
import { AllowanceTypeUncheckedUpdateWithoutIncidentStaffAllowanceInputSchema } from './AllowanceTypeUncheckedUpdateWithoutIncidentStaffAllowanceInputSchema';

export const AllowanceTypeUpdateOneRequiredWithoutIncidentStaffAllowanceNestedInputSchema: z.ZodType<Prisma.AllowanceTypeUpdateOneRequiredWithoutIncidentStaffAllowanceNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AllowanceTypeCreateWithoutIncidentStaffAllowanceInputSchema), z.lazy(() => AllowanceTypeUncheckedCreateWithoutIncidentStaffAllowanceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AllowanceTypeCreateOrConnectWithoutIncidentStaffAllowanceInputSchema).optional(),
  upsert: z.lazy(() => AllowanceTypeUpsertWithoutIncidentStaffAllowanceInputSchema).optional(),
  connect: z.lazy(() => AllowanceTypeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AllowanceTypeUpdateToOneWithWhereWithoutIncidentStaffAllowanceInputSchema), z.lazy(() => AllowanceTypeUpdateWithoutIncidentStaffAllowanceInputSchema), z.lazy(() => AllowanceTypeUncheckedUpdateWithoutIncidentStaffAllowanceInputSchema) ]).optional(),
});

export default AllowanceTypeUpdateOneRequiredWithoutIncidentStaffAllowanceNestedInputSchema;

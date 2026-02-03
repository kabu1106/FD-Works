import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceWhereUniqueInputSchema } from './IncidentStaffAllowanceWhereUniqueInputSchema';
import { IncidentStaffAllowanceCreateWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceCreateWithoutIncidentStaffInputSchema';
import { IncidentStaffAllowanceUncheckedCreateWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceUncheckedCreateWithoutIncidentStaffInputSchema';

export const IncidentStaffAllowanceCreateOrConnectWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceCreateOrConnectWithoutIncidentStaffInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentStaffAllowanceCreateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentStaffAllowanceUncheckedCreateWithoutIncidentStaffInputSchema) ]),
});

export default IncidentStaffAllowanceCreateOrConnectWithoutIncidentStaffInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffCreateWithoutIncidentStaffInputSchema } from './StaffCreateWithoutIncidentStaffInputSchema';
import { StaffUncheckedCreateWithoutIncidentStaffInputSchema } from './StaffUncheckedCreateWithoutIncidentStaffInputSchema';

export const StaffCreateOrConnectWithoutIncidentStaffInputSchema: z.ZodType<Prisma.StaffCreateOrConnectWithoutIncidentStaffInput> = z.strictObject({
  where: z.lazy(() => StaffWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StaffCreateWithoutIncidentStaffInputSchema), z.lazy(() => StaffUncheckedCreateWithoutIncidentStaffInputSchema) ]),
});

export default StaffCreateOrConnectWithoutIncidentStaffInputSchema;

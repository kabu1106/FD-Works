import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutIncidentStaffInputSchema } from './StaffCreateWithoutIncidentStaffInputSchema';
import { StaffUncheckedCreateWithoutIncidentStaffInputSchema } from './StaffUncheckedCreateWithoutIncidentStaffInputSchema';
import { StaffCreateOrConnectWithoutIncidentStaffInputSchema } from './StaffCreateOrConnectWithoutIncidentStaffInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';

export const StaffCreateNestedOneWithoutIncidentStaffInputSchema: z.ZodType<Prisma.StaffCreateNestedOneWithoutIncidentStaffInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutIncidentStaffInputSchema), z.lazy(() => StaffUncheckedCreateWithoutIncidentStaffInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutIncidentStaffInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
});

export default StaffCreateNestedOneWithoutIncidentStaffInputSchema;

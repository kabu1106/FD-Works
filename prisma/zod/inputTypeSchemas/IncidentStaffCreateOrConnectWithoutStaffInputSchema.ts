import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffWhereUniqueInputSchema } from './IncidentStaffWhereUniqueInputSchema';
import { IncidentStaffCreateWithoutStaffInputSchema } from './IncidentStaffCreateWithoutStaffInputSchema';
import { IncidentStaffUncheckedCreateWithoutStaffInputSchema } from './IncidentStaffUncheckedCreateWithoutStaffInputSchema';

export const IncidentStaffCreateOrConnectWithoutStaffInputSchema: z.ZodType<Prisma.IncidentStaffCreateOrConnectWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentStaffCreateWithoutStaffInputSchema), z.lazy(() => IncidentStaffUncheckedCreateWithoutStaffInputSchema) ]),
});

export default IncidentStaffCreateOrConnectWithoutStaffInputSchema;

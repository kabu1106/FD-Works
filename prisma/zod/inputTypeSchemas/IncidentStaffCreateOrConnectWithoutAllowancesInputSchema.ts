import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffWhereUniqueInputSchema } from './IncidentStaffWhereUniqueInputSchema';
import { IncidentStaffCreateWithoutAllowancesInputSchema } from './IncidentStaffCreateWithoutAllowancesInputSchema';
import { IncidentStaffUncheckedCreateWithoutAllowancesInputSchema } from './IncidentStaffUncheckedCreateWithoutAllowancesInputSchema';

export const IncidentStaffCreateOrConnectWithoutAllowancesInputSchema: z.ZodType<Prisma.IncidentStaffCreateOrConnectWithoutAllowancesInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentStaffCreateWithoutAllowancesInputSchema), z.lazy(() => IncidentStaffUncheckedCreateWithoutAllowancesInputSchema) ]),
});

export default IncidentStaffCreateOrConnectWithoutAllowancesInputSchema;

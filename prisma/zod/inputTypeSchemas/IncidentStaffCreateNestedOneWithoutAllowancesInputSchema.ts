import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffCreateWithoutAllowancesInputSchema } from './IncidentStaffCreateWithoutAllowancesInputSchema';
import { IncidentStaffUncheckedCreateWithoutAllowancesInputSchema } from './IncidentStaffUncheckedCreateWithoutAllowancesInputSchema';
import { IncidentStaffCreateOrConnectWithoutAllowancesInputSchema } from './IncidentStaffCreateOrConnectWithoutAllowancesInputSchema';
import { IncidentStaffWhereUniqueInputSchema } from './IncidentStaffWhereUniqueInputSchema';

export const IncidentStaffCreateNestedOneWithoutAllowancesInputSchema: z.ZodType<Prisma.IncidentStaffCreateNestedOneWithoutAllowancesInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentStaffCreateWithoutAllowancesInputSchema), z.lazy(() => IncidentStaffUncheckedCreateWithoutAllowancesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IncidentStaffCreateOrConnectWithoutAllowancesInputSchema).optional(),
  connect: z.lazy(() => IncidentStaffWhereUniqueInputSchema).optional(),
});

export default IncidentStaffCreateNestedOneWithoutAllowancesInputSchema;

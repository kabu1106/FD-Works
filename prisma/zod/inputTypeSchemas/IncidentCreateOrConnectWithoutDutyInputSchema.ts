import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentCreateWithoutDutyInputSchema } from './IncidentCreateWithoutDutyInputSchema';
import { IncidentUncheckedCreateWithoutDutyInputSchema } from './IncidentUncheckedCreateWithoutDutyInputSchema';

export const IncidentCreateOrConnectWithoutDutyInputSchema: z.ZodType<Prisma.IncidentCreateOrConnectWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => IncidentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentCreateWithoutDutyInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutDutyInputSchema) ]),
});

export default IncidentCreateOrConnectWithoutDutyInputSchema;

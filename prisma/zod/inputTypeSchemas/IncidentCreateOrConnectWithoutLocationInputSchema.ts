import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentCreateWithoutLocationInputSchema } from './IncidentCreateWithoutLocationInputSchema';
import { IncidentUncheckedCreateWithoutLocationInputSchema } from './IncidentUncheckedCreateWithoutLocationInputSchema';

export const IncidentCreateOrConnectWithoutLocationInputSchema: z.ZodType<Prisma.IncidentCreateOrConnectWithoutLocationInput> = z.strictObject({
  where: z.lazy(() => IncidentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentCreateWithoutLocationInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutLocationInputSchema) ]),
});

export default IncidentCreateOrConnectWithoutLocationInputSchema;

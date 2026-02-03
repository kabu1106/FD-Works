import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentCreateWithoutDestinationInputSchema } from './IncidentCreateWithoutDestinationInputSchema';
import { IncidentUncheckedCreateWithoutDestinationInputSchema } from './IncidentUncheckedCreateWithoutDestinationInputSchema';

export const IncidentCreateOrConnectWithoutDestinationInputSchema: z.ZodType<Prisma.IncidentCreateOrConnectWithoutDestinationInput> = z.strictObject({
  where: z.lazy(() => IncidentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentCreateWithoutDestinationInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutDestinationInputSchema) ]),
});

export default IncidentCreateOrConnectWithoutDestinationInputSchema;

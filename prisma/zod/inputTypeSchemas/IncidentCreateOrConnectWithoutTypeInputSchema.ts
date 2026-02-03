import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentCreateWithoutTypeInputSchema } from './IncidentCreateWithoutTypeInputSchema';
import { IncidentUncheckedCreateWithoutTypeInputSchema } from './IncidentUncheckedCreateWithoutTypeInputSchema';

export const IncidentCreateOrConnectWithoutTypeInputSchema: z.ZodType<Prisma.IncidentCreateOrConnectWithoutTypeInput> = z.strictObject({
  where: z.lazy(() => IncidentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentCreateWithoutTypeInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutTypeInputSchema) ]),
});

export default IncidentCreateOrConnectWithoutTypeInputSchema;

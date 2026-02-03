import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentTypeWhereUniqueInputSchema } from './IncidentTypeWhereUniqueInputSchema';
import { IncidentTypeCreateWithoutIncidentInputSchema } from './IncidentTypeCreateWithoutIncidentInputSchema';
import { IncidentTypeUncheckedCreateWithoutIncidentInputSchema } from './IncidentTypeUncheckedCreateWithoutIncidentInputSchema';

export const IncidentTypeCreateOrConnectWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentTypeCreateOrConnectWithoutIncidentInput> = z.strictObject({
  where: z.lazy(() => IncidentTypeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentTypeCreateWithoutIncidentInputSchema), z.lazy(() => IncidentTypeUncheckedCreateWithoutIncidentInputSchema) ]),
});

export default IncidentTypeCreateOrConnectWithoutIncidentInputSchema;

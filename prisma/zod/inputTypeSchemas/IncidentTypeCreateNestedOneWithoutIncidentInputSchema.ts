import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentTypeCreateWithoutIncidentInputSchema } from './IncidentTypeCreateWithoutIncidentInputSchema';
import { IncidentTypeUncheckedCreateWithoutIncidentInputSchema } from './IncidentTypeUncheckedCreateWithoutIncidentInputSchema';
import { IncidentTypeCreateOrConnectWithoutIncidentInputSchema } from './IncidentTypeCreateOrConnectWithoutIncidentInputSchema';
import { IncidentTypeWhereUniqueInputSchema } from './IncidentTypeWhereUniqueInputSchema';

export const IncidentTypeCreateNestedOneWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentTypeCreateNestedOneWithoutIncidentInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentTypeCreateWithoutIncidentInputSchema), z.lazy(() => IncidentTypeUncheckedCreateWithoutIncidentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IncidentTypeCreateOrConnectWithoutIncidentInputSchema).optional(),
  connect: z.lazy(() => IncidentTypeWhereUniqueInputSchema).optional(),
});

export default IncidentTypeCreateNestedOneWithoutIncidentInputSchema;

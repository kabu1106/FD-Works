import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentTypeWhereUniqueInputSchema } from './IncidentTypeWhereUniqueInputSchema';
import { IncidentTypeCreateWithoutCategoryInputSchema } from './IncidentTypeCreateWithoutCategoryInputSchema';
import { IncidentTypeUncheckedCreateWithoutCategoryInputSchema } from './IncidentTypeUncheckedCreateWithoutCategoryInputSchema';

export const IncidentTypeCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.IncidentTypeCreateOrConnectWithoutCategoryInput> = z.strictObject({
  where: z.lazy(() => IncidentTypeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentTypeCreateWithoutCategoryInputSchema), z.lazy(() => IncidentTypeUncheckedCreateWithoutCategoryInputSchema) ]),
});

export default IncidentTypeCreateOrConnectWithoutCategoryInputSchema;

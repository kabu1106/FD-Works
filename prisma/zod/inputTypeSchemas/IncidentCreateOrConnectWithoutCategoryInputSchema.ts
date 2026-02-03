import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentCreateWithoutCategoryInputSchema } from './IncidentCreateWithoutCategoryInputSchema';
import { IncidentUncheckedCreateWithoutCategoryInputSchema } from './IncidentUncheckedCreateWithoutCategoryInputSchema';

export const IncidentCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.IncidentCreateOrConnectWithoutCategoryInput> = z.strictObject({
  where: z.lazy(() => IncidentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentCreateWithoutCategoryInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutCategoryInputSchema) ]),
});

export default IncidentCreateOrConnectWithoutCategoryInputSchema;

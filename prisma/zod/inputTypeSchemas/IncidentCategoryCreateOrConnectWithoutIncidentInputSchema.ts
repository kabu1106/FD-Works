import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCategoryWhereUniqueInputSchema } from './IncidentCategoryWhereUniqueInputSchema';
import { IncidentCategoryCreateWithoutIncidentInputSchema } from './IncidentCategoryCreateWithoutIncidentInputSchema';
import { IncidentCategoryUncheckedCreateWithoutIncidentInputSchema } from './IncidentCategoryUncheckedCreateWithoutIncidentInputSchema';

export const IncidentCategoryCreateOrConnectWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentCategoryCreateOrConnectWithoutIncidentInput> = z.strictObject({
  where: z.lazy(() => IncidentCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentCategoryCreateWithoutIncidentInputSchema), z.lazy(() => IncidentCategoryUncheckedCreateWithoutIncidentInputSchema) ]),
});

export default IncidentCategoryCreateOrConnectWithoutIncidentInputSchema;

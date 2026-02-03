import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCategoryWhereUniqueInputSchema } from './IncidentCategoryWhereUniqueInputSchema';
import { IncidentCategoryCreateWithoutTypesInputSchema } from './IncidentCategoryCreateWithoutTypesInputSchema';
import { IncidentCategoryUncheckedCreateWithoutTypesInputSchema } from './IncidentCategoryUncheckedCreateWithoutTypesInputSchema';

export const IncidentCategoryCreateOrConnectWithoutTypesInputSchema: z.ZodType<Prisma.IncidentCategoryCreateOrConnectWithoutTypesInput> = z.strictObject({
  where: z.lazy(() => IncidentCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IncidentCategoryCreateWithoutTypesInputSchema), z.lazy(() => IncidentCategoryUncheckedCreateWithoutTypesInputSchema) ]),
});

export default IncidentCategoryCreateOrConnectWithoutTypesInputSchema;

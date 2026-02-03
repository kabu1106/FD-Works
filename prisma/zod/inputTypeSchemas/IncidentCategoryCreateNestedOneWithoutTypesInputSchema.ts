import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCategoryCreateWithoutTypesInputSchema } from './IncidentCategoryCreateWithoutTypesInputSchema';
import { IncidentCategoryUncheckedCreateWithoutTypesInputSchema } from './IncidentCategoryUncheckedCreateWithoutTypesInputSchema';
import { IncidentCategoryCreateOrConnectWithoutTypesInputSchema } from './IncidentCategoryCreateOrConnectWithoutTypesInputSchema';
import { IncidentCategoryWhereUniqueInputSchema } from './IncidentCategoryWhereUniqueInputSchema';

export const IncidentCategoryCreateNestedOneWithoutTypesInputSchema: z.ZodType<Prisma.IncidentCategoryCreateNestedOneWithoutTypesInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentCategoryCreateWithoutTypesInputSchema), z.lazy(() => IncidentCategoryUncheckedCreateWithoutTypesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IncidentCategoryCreateOrConnectWithoutTypesInputSchema).optional(),
  connect: z.lazy(() => IncidentCategoryWhereUniqueInputSchema).optional(),
});

export default IncidentCategoryCreateNestedOneWithoutTypesInputSchema;

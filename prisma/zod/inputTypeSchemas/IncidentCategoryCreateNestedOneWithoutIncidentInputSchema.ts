import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCategoryCreateWithoutIncidentInputSchema } from './IncidentCategoryCreateWithoutIncidentInputSchema';
import { IncidentCategoryUncheckedCreateWithoutIncidentInputSchema } from './IncidentCategoryUncheckedCreateWithoutIncidentInputSchema';
import { IncidentCategoryCreateOrConnectWithoutIncidentInputSchema } from './IncidentCategoryCreateOrConnectWithoutIncidentInputSchema';
import { IncidentCategoryWhereUniqueInputSchema } from './IncidentCategoryWhereUniqueInputSchema';

export const IncidentCategoryCreateNestedOneWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentCategoryCreateNestedOneWithoutIncidentInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentCategoryCreateWithoutIncidentInputSchema), z.lazy(() => IncidentCategoryUncheckedCreateWithoutIncidentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IncidentCategoryCreateOrConnectWithoutIncidentInputSchema).optional(),
  connect: z.lazy(() => IncidentCategoryWhereUniqueInputSchema).optional(),
});

export default IncidentCategoryCreateNestedOneWithoutIncidentInputSchema;

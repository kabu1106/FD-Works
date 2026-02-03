import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCategoryUpdateWithoutTypesInputSchema } from './IncidentCategoryUpdateWithoutTypesInputSchema';
import { IncidentCategoryUncheckedUpdateWithoutTypesInputSchema } from './IncidentCategoryUncheckedUpdateWithoutTypesInputSchema';
import { IncidentCategoryCreateWithoutTypesInputSchema } from './IncidentCategoryCreateWithoutTypesInputSchema';
import { IncidentCategoryUncheckedCreateWithoutTypesInputSchema } from './IncidentCategoryUncheckedCreateWithoutTypesInputSchema';
import { IncidentCategoryWhereInputSchema } from './IncidentCategoryWhereInputSchema';

export const IncidentCategoryUpsertWithoutTypesInputSchema: z.ZodType<Prisma.IncidentCategoryUpsertWithoutTypesInput> = z.strictObject({
  update: z.union([ z.lazy(() => IncidentCategoryUpdateWithoutTypesInputSchema), z.lazy(() => IncidentCategoryUncheckedUpdateWithoutTypesInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentCategoryCreateWithoutTypesInputSchema), z.lazy(() => IncidentCategoryUncheckedCreateWithoutTypesInputSchema) ]),
  where: z.lazy(() => IncidentCategoryWhereInputSchema).optional(),
});

export default IncidentCategoryUpsertWithoutTypesInputSchema;

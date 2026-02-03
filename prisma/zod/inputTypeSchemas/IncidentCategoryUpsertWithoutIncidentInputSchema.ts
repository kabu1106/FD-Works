import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCategoryUpdateWithoutIncidentInputSchema } from './IncidentCategoryUpdateWithoutIncidentInputSchema';
import { IncidentCategoryUncheckedUpdateWithoutIncidentInputSchema } from './IncidentCategoryUncheckedUpdateWithoutIncidentInputSchema';
import { IncidentCategoryCreateWithoutIncidentInputSchema } from './IncidentCategoryCreateWithoutIncidentInputSchema';
import { IncidentCategoryUncheckedCreateWithoutIncidentInputSchema } from './IncidentCategoryUncheckedCreateWithoutIncidentInputSchema';
import { IncidentCategoryWhereInputSchema } from './IncidentCategoryWhereInputSchema';

export const IncidentCategoryUpsertWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentCategoryUpsertWithoutIncidentInput> = z.strictObject({
  update: z.union([ z.lazy(() => IncidentCategoryUpdateWithoutIncidentInputSchema), z.lazy(() => IncidentCategoryUncheckedUpdateWithoutIncidentInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentCategoryCreateWithoutIncidentInputSchema), z.lazy(() => IncidentCategoryUncheckedCreateWithoutIncidentInputSchema) ]),
  where: z.lazy(() => IncidentCategoryWhereInputSchema).optional(),
});

export default IncidentCategoryUpsertWithoutIncidentInputSchema;

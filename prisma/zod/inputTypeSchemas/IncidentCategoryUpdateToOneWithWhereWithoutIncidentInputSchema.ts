import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCategoryWhereInputSchema } from './IncidentCategoryWhereInputSchema';
import { IncidentCategoryUpdateWithoutIncidentInputSchema } from './IncidentCategoryUpdateWithoutIncidentInputSchema';
import { IncidentCategoryUncheckedUpdateWithoutIncidentInputSchema } from './IncidentCategoryUncheckedUpdateWithoutIncidentInputSchema';

export const IncidentCategoryUpdateToOneWithWhereWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentCategoryUpdateToOneWithWhereWithoutIncidentInput> = z.strictObject({
  where: z.lazy(() => IncidentCategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => IncidentCategoryUpdateWithoutIncidentInputSchema), z.lazy(() => IncidentCategoryUncheckedUpdateWithoutIncidentInputSchema) ]),
});

export default IncidentCategoryUpdateToOneWithWhereWithoutIncidentInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCategoryWhereInputSchema } from './IncidentCategoryWhereInputSchema';
import { IncidentCategoryUpdateWithoutTypesInputSchema } from './IncidentCategoryUpdateWithoutTypesInputSchema';
import { IncidentCategoryUncheckedUpdateWithoutTypesInputSchema } from './IncidentCategoryUncheckedUpdateWithoutTypesInputSchema';

export const IncidentCategoryUpdateToOneWithWhereWithoutTypesInputSchema: z.ZodType<Prisma.IncidentCategoryUpdateToOneWithWhereWithoutTypesInput> = z.strictObject({
  where: z.lazy(() => IncidentCategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => IncidentCategoryUpdateWithoutTypesInputSchema), z.lazy(() => IncidentCategoryUncheckedUpdateWithoutTypesInputSchema) ]),
});

export default IncidentCategoryUpdateToOneWithWhereWithoutTypesInputSchema;

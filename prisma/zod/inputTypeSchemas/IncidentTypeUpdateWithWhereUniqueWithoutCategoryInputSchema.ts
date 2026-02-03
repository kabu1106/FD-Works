import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentTypeWhereUniqueInputSchema } from './IncidentTypeWhereUniqueInputSchema';
import { IncidentTypeUpdateWithoutCategoryInputSchema } from './IncidentTypeUpdateWithoutCategoryInputSchema';
import { IncidentTypeUncheckedUpdateWithoutCategoryInputSchema } from './IncidentTypeUncheckedUpdateWithoutCategoryInputSchema';

export const IncidentTypeUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.IncidentTypeUpdateWithWhereUniqueWithoutCategoryInput> = z.strictObject({
  where: z.lazy(() => IncidentTypeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IncidentTypeUpdateWithoutCategoryInputSchema), z.lazy(() => IncidentTypeUncheckedUpdateWithoutCategoryInputSchema) ]),
});

export default IncidentTypeUpdateWithWhereUniqueWithoutCategoryInputSchema;

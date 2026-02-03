import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentUpdateWithoutCategoryInputSchema } from './IncidentUpdateWithoutCategoryInputSchema';
import { IncidentUncheckedUpdateWithoutCategoryInputSchema } from './IncidentUncheckedUpdateWithoutCategoryInputSchema';

export const IncidentUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.IncidentUpdateWithWhereUniqueWithoutCategoryInput> = z.strictObject({
  where: z.lazy(() => IncidentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IncidentUpdateWithoutCategoryInputSchema), z.lazy(() => IncidentUncheckedUpdateWithoutCategoryInputSchema) ]),
});

export default IncidentUpdateWithWhereUniqueWithoutCategoryInputSchema;

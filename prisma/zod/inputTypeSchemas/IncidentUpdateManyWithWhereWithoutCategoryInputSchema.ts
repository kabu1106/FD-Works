import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentScalarWhereInputSchema } from './IncidentScalarWhereInputSchema';
import { IncidentUpdateManyMutationInputSchema } from './IncidentUpdateManyMutationInputSchema';
import { IncidentUncheckedUpdateManyWithoutCategoryInputSchema } from './IncidentUncheckedUpdateManyWithoutCategoryInputSchema';

export const IncidentUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.IncidentUpdateManyWithWhereWithoutCategoryInput> = z.strictObject({
  where: z.lazy(() => IncidentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IncidentUpdateManyMutationInputSchema), z.lazy(() => IncidentUncheckedUpdateManyWithoutCategoryInputSchema) ]),
});

export default IncidentUpdateManyWithWhereWithoutCategoryInputSchema;

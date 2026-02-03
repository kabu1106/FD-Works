import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentTypeScalarWhereInputSchema } from './IncidentTypeScalarWhereInputSchema';
import { IncidentTypeUpdateManyMutationInputSchema } from './IncidentTypeUpdateManyMutationInputSchema';
import { IncidentTypeUncheckedUpdateManyWithoutCategoryInputSchema } from './IncidentTypeUncheckedUpdateManyWithoutCategoryInputSchema';

export const IncidentTypeUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.IncidentTypeUpdateManyWithWhereWithoutCategoryInput> = z.strictObject({
  where: z.lazy(() => IncidentTypeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IncidentTypeUpdateManyMutationInputSchema), z.lazy(() => IncidentTypeUncheckedUpdateManyWithoutCategoryInputSchema) ]),
});

export default IncidentTypeUpdateManyWithWhereWithoutCategoryInputSchema;

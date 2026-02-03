import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentTypeWhereUniqueInputSchema } from './IncidentTypeWhereUniqueInputSchema';
import { IncidentTypeUpdateWithoutCategoryInputSchema } from './IncidentTypeUpdateWithoutCategoryInputSchema';
import { IncidentTypeUncheckedUpdateWithoutCategoryInputSchema } from './IncidentTypeUncheckedUpdateWithoutCategoryInputSchema';
import { IncidentTypeCreateWithoutCategoryInputSchema } from './IncidentTypeCreateWithoutCategoryInputSchema';
import { IncidentTypeUncheckedCreateWithoutCategoryInputSchema } from './IncidentTypeUncheckedCreateWithoutCategoryInputSchema';

export const IncidentTypeUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.IncidentTypeUpsertWithWhereUniqueWithoutCategoryInput> = z.strictObject({
  where: z.lazy(() => IncidentTypeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IncidentTypeUpdateWithoutCategoryInputSchema), z.lazy(() => IncidentTypeUncheckedUpdateWithoutCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentTypeCreateWithoutCategoryInputSchema), z.lazy(() => IncidentTypeUncheckedCreateWithoutCategoryInputSchema) ]),
});

export default IncidentTypeUpsertWithWhereUniqueWithoutCategoryInputSchema;

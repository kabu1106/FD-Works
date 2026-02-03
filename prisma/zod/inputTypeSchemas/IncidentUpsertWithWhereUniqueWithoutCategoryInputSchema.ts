import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentUpdateWithoutCategoryInputSchema } from './IncidentUpdateWithoutCategoryInputSchema';
import { IncidentUncheckedUpdateWithoutCategoryInputSchema } from './IncidentUncheckedUpdateWithoutCategoryInputSchema';
import { IncidentCreateWithoutCategoryInputSchema } from './IncidentCreateWithoutCategoryInputSchema';
import { IncidentUncheckedCreateWithoutCategoryInputSchema } from './IncidentUncheckedCreateWithoutCategoryInputSchema';

export const IncidentUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.IncidentUpsertWithWhereUniqueWithoutCategoryInput> = z.strictObject({
  where: z.lazy(() => IncidentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IncidentUpdateWithoutCategoryInputSchema), z.lazy(() => IncidentUncheckedUpdateWithoutCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentCreateWithoutCategoryInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutCategoryInputSchema) ]),
});

export default IncidentUpsertWithWhereUniqueWithoutCategoryInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCategoryCreateWithoutIncidentInputSchema } from './IncidentCategoryCreateWithoutIncidentInputSchema';
import { IncidentCategoryUncheckedCreateWithoutIncidentInputSchema } from './IncidentCategoryUncheckedCreateWithoutIncidentInputSchema';
import { IncidentCategoryCreateOrConnectWithoutIncidentInputSchema } from './IncidentCategoryCreateOrConnectWithoutIncidentInputSchema';
import { IncidentCategoryUpsertWithoutIncidentInputSchema } from './IncidentCategoryUpsertWithoutIncidentInputSchema';
import { IncidentCategoryWhereUniqueInputSchema } from './IncidentCategoryWhereUniqueInputSchema';
import { IncidentCategoryUpdateToOneWithWhereWithoutIncidentInputSchema } from './IncidentCategoryUpdateToOneWithWhereWithoutIncidentInputSchema';
import { IncidentCategoryUpdateWithoutIncidentInputSchema } from './IncidentCategoryUpdateWithoutIncidentInputSchema';
import { IncidentCategoryUncheckedUpdateWithoutIncidentInputSchema } from './IncidentCategoryUncheckedUpdateWithoutIncidentInputSchema';

export const IncidentCategoryUpdateOneRequiredWithoutIncidentNestedInputSchema: z.ZodType<Prisma.IncidentCategoryUpdateOneRequiredWithoutIncidentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentCategoryCreateWithoutIncidentInputSchema), z.lazy(() => IncidentCategoryUncheckedCreateWithoutIncidentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IncidentCategoryCreateOrConnectWithoutIncidentInputSchema).optional(),
  upsert: z.lazy(() => IncidentCategoryUpsertWithoutIncidentInputSchema).optional(),
  connect: z.lazy(() => IncidentCategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => IncidentCategoryUpdateToOneWithWhereWithoutIncidentInputSchema), z.lazy(() => IncidentCategoryUpdateWithoutIncidentInputSchema), z.lazy(() => IncidentCategoryUncheckedUpdateWithoutIncidentInputSchema) ]).optional(),
});

export default IncidentCategoryUpdateOneRequiredWithoutIncidentNestedInputSchema;

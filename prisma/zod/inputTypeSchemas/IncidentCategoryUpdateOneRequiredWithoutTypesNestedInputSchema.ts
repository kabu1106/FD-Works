import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCategoryCreateWithoutTypesInputSchema } from './IncidentCategoryCreateWithoutTypesInputSchema';
import { IncidentCategoryUncheckedCreateWithoutTypesInputSchema } from './IncidentCategoryUncheckedCreateWithoutTypesInputSchema';
import { IncidentCategoryCreateOrConnectWithoutTypesInputSchema } from './IncidentCategoryCreateOrConnectWithoutTypesInputSchema';
import { IncidentCategoryUpsertWithoutTypesInputSchema } from './IncidentCategoryUpsertWithoutTypesInputSchema';
import { IncidentCategoryWhereUniqueInputSchema } from './IncidentCategoryWhereUniqueInputSchema';
import { IncidentCategoryUpdateToOneWithWhereWithoutTypesInputSchema } from './IncidentCategoryUpdateToOneWithWhereWithoutTypesInputSchema';
import { IncidentCategoryUpdateWithoutTypesInputSchema } from './IncidentCategoryUpdateWithoutTypesInputSchema';
import { IncidentCategoryUncheckedUpdateWithoutTypesInputSchema } from './IncidentCategoryUncheckedUpdateWithoutTypesInputSchema';

export const IncidentCategoryUpdateOneRequiredWithoutTypesNestedInputSchema: z.ZodType<Prisma.IncidentCategoryUpdateOneRequiredWithoutTypesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentCategoryCreateWithoutTypesInputSchema), z.lazy(() => IncidentCategoryUncheckedCreateWithoutTypesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IncidentCategoryCreateOrConnectWithoutTypesInputSchema).optional(),
  upsert: z.lazy(() => IncidentCategoryUpsertWithoutTypesInputSchema).optional(),
  connect: z.lazy(() => IncidentCategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => IncidentCategoryUpdateToOneWithWhereWithoutTypesInputSchema), z.lazy(() => IncidentCategoryUpdateWithoutTypesInputSchema), z.lazy(() => IncidentCategoryUncheckedUpdateWithoutTypesInputSchema) ]).optional(),
});

export default IncidentCategoryUpdateOneRequiredWithoutTypesNestedInputSchema;

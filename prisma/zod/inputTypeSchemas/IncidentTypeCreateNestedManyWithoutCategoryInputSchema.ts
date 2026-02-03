import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentTypeCreateWithoutCategoryInputSchema } from './IncidentTypeCreateWithoutCategoryInputSchema';
import { IncidentTypeUncheckedCreateWithoutCategoryInputSchema } from './IncidentTypeUncheckedCreateWithoutCategoryInputSchema';
import { IncidentTypeCreateOrConnectWithoutCategoryInputSchema } from './IncidentTypeCreateOrConnectWithoutCategoryInputSchema';
import { IncidentTypeCreateManyCategoryInputEnvelopeSchema } from './IncidentTypeCreateManyCategoryInputEnvelopeSchema';
import { IncidentTypeWhereUniqueInputSchema } from './IncidentTypeWhereUniqueInputSchema';

export const IncidentTypeCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.IncidentTypeCreateNestedManyWithoutCategoryInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentTypeCreateWithoutCategoryInputSchema), z.lazy(() => IncidentTypeCreateWithoutCategoryInputSchema).array(), z.lazy(() => IncidentTypeUncheckedCreateWithoutCategoryInputSchema), z.lazy(() => IncidentTypeUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentTypeCreateOrConnectWithoutCategoryInputSchema), z.lazy(() => IncidentTypeCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentTypeCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IncidentTypeWhereUniqueInputSchema), z.lazy(() => IncidentTypeWhereUniqueInputSchema).array() ]).optional(),
});

export default IncidentTypeCreateNestedManyWithoutCategoryInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateWithoutCategoryInputSchema } from './IncidentCreateWithoutCategoryInputSchema';
import { IncidentUncheckedCreateWithoutCategoryInputSchema } from './IncidentUncheckedCreateWithoutCategoryInputSchema';
import { IncidentCreateOrConnectWithoutCategoryInputSchema } from './IncidentCreateOrConnectWithoutCategoryInputSchema';
import { IncidentCreateManyCategoryInputEnvelopeSchema } from './IncidentCreateManyCategoryInputEnvelopeSchema';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';

export const IncidentUncheckedCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.IncidentUncheckedCreateNestedManyWithoutCategoryInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentCreateWithoutCategoryInputSchema), z.lazy(() => IncidentCreateWithoutCategoryInputSchema).array(), z.lazy(() => IncidentUncheckedCreateWithoutCategoryInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentCreateOrConnectWithoutCategoryInputSchema), z.lazy(() => IncidentCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
});

export default IncidentUncheckedCreateNestedManyWithoutCategoryInputSchema;

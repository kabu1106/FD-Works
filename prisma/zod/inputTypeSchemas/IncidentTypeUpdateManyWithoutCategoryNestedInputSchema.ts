import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentTypeCreateWithoutCategoryInputSchema } from './IncidentTypeCreateWithoutCategoryInputSchema';
import { IncidentTypeUncheckedCreateWithoutCategoryInputSchema } from './IncidentTypeUncheckedCreateWithoutCategoryInputSchema';
import { IncidentTypeCreateOrConnectWithoutCategoryInputSchema } from './IncidentTypeCreateOrConnectWithoutCategoryInputSchema';
import { IncidentTypeUpsertWithWhereUniqueWithoutCategoryInputSchema } from './IncidentTypeUpsertWithWhereUniqueWithoutCategoryInputSchema';
import { IncidentTypeCreateManyCategoryInputEnvelopeSchema } from './IncidentTypeCreateManyCategoryInputEnvelopeSchema';
import { IncidentTypeWhereUniqueInputSchema } from './IncidentTypeWhereUniqueInputSchema';
import { IncidentTypeUpdateWithWhereUniqueWithoutCategoryInputSchema } from './IncidentTypeUpdateWithWhereUniqueWithoutCategoryInputSchema';
import { IncidentTypeUpdateManyWithWhereWithoutCategoryInputSchema } from './IncidentTypeUpdateManyWithWhereWithoutCategoryInputSchema';
import { IncidentTypeScalarWhereInputSchema } from './IncidentTypeScalarWhereInputSchema';

export const IncidentTypeUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.IncidentTypeUpdateManyWithoutCategoryNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentTypeCreateWithoutCategoryInputSchema), z.lazy(() => IncidentTypeCreateWithoutCategoryInputSchema).array(), z.lazy(() => IncidentTypeUncheckedCreateWithoutCategoryInputSchema), z.lazy(() => IncidentTypeUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentTypeCreateOrConnectWithoutCategoryInputSchema), z.lazy(() => IncidentTypeCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IncidentTypeUpsertWithWhereUniqueWithoutCategoryInputSchema), z.lazy(() => IncidentTypeUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentTypeCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IncidentTypeWhereUniqueInputSchema), z.lazy(() => IncidentTypeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IncidentTypeWhereUniqueInputSchema), z.lazy(() => IncidentTypeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IncidentTypeWhereUniqueInputSchema), z.lazy(() => IncidentTypeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IncidentTypeWhereUniqueInputSchema), z.lazy(() => IncidentTypeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IncidentTypeUpdateWithWhereUniqueWithoutCategoryInputSchema), z.lazy(() => IncidentTypeUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IncidentTypeUpdateManyWithWhereWithoutCategoryInputSchema), z.lazy(() => IncidentTypeUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IncidentTypeScalarWhereInputSchema), z.lazy(() => IncidentTypeScalarWhereInputSchema).array() ]).optional(),
});

export default IncidentTypeUpdateManyWithoutCategoryNestedInputSchema;

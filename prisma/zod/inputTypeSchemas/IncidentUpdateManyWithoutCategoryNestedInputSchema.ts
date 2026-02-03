import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateWithoutCategoryInputSchema } from './IncidentCreateWithoutCategoryInputSchema';
import { IncidentUncheckedCreateWithoutCategoryInputSchema } from './IncidentUncheckedCreateWithoutCategoryInputSchema';
import { IncidentCreateOrConnectWithoutCategoryInputSchema } from './IncidentCreateOrConnectWithoutCategoryInputSchema';
import { IncidentUpsertWithWhereUniqueWithoutCategoryInputSchema } from './IncidentUpsertWithWhereUniqueWithoutCategoryInputSchema';
import { IncidentCreateManyCategoryInputEnvelopeSchema } from './IncidentCreateManyCategoryInputEnvelopeSchema';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentUpdateWithWhereUniqueWithoutCategoryInputSchema } from './IncidentUpdateWithWhereUniqueWithoutCategoryInputSchema';
import { IncidentUpdateManyWithWhereWithoutCategoryInputSchema } from './IncidentUpdateManyWithWhereWithoutCategoryInputSchema';
import { IncidentScalarWhereInputSchema } from './IncidentScalarWhereInputSchema';

export const IncidentUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.IncidentUpdateManyWithoutCategoryNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentCreateWithoutCategoryInputSchema), z.lazy(() => IncidentCreateWithoutCategoryInputSchema).array(), z.lazy(() => IncidentUncheckedCreateWithoutCategoryInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IncidentCreateOrConnectWithoutCategoryInputSchema), z.lazy(() => IncidentCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IncidentUpsertWithWhereUniqueWithoutCategoryInputSchema), z.lazy(() => IncidentUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IncidentCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IncidentWhereUniqueInputSchema), z.lazy(() => IncidentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IncidentUpdateWithWhereUniqueWithoutCategoryInputSchema), z.lazy(() => IncidentUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IncidentUpdateManyWithWhereWithoutCategoryInputSchema), z.lazy(() => IncidentUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IncidentScalarWhereInputSchema), z.lazy(() => IncidentScalarWhereInputSchema).array() ]).optional(),
});

export default IncidentUpdateManyWithoutCategoryNestedInputSchema;

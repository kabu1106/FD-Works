import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationCreateWithoutParentInputSchema } from './LocationCreateWithoutParentInputSchema';
import { LocationUncheckedCreateWithoutParentInputSchema } from './LocationUncheckedCreateWithoutParentInputSchema';
import { LocationCreateOrConnectWithoutParentInputSchema } from './LocationCreateOrConnectWithoutParentInputSchema';
import { LocationUpsertWithWhereUniqueWithoutParentInputSchema } from './LocationUpsertWithWhereUniqueWithoutParentInputSchema';
import { LocationCreateManyParentInputEnvelopeSchema } from './LocationCreateManyParentInputEnvelopeSchema';
import { LocationWhereUniqueInputSchema } from './LocationWhereUniqueInputSchema';
import { LocationUpdateWithWhereUniqueWithoutParentInputSchema } from './LocationUpdateWithWhereUniqueWithoutParentInputSchema';
import { LocationUpdateManyWithWhereWithoutParentInputSchema } from './LocationUpdateManyWithWhereWithoutParentInputSchema';
import { LocationScalarWhereInputSchema } from './LocationScalarWhereInputSchema';

export const LocationUpdateManyWithoutParentNestedInputSchema: z.ZodType<Prisma.LocationUpdateManyWithoutParentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LocationCreateWithoutParentInputSchema), z.lazy(() => LocationCreateWithoutParentInputSchema).array(), z.lazy(() => LocationUncheckedCreateWithoutParentInputSchema), z.lazy(() => LocationUncheckedCreateWithoutParentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LocationCreateOrConnectWithoutParentInputSchema), z.lazy(() => LocationCreateOrConnectWithoutParentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LocationUpsertWithWhereUniqueWithoutParentInputSchema), z.lazy(() => LocationUpsertWithWhereUniqueWithoutParentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LocationCreateManyParentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LocationWhereUniqueInputSchema), z.lazy(() => LocationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LocationWhereUniqueInputSchema), z.lazy(() => LocationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LocationWhereUniqueInputSchema), z.lazy(() => LocationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LocationWhereUniqueInputSchema), z.lazy(() => LocationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LocationUpdateWithWhereUniqueWithoutParentInputSchema), z.lazy(() => LocationUpdateWithWhereUniqueWithoutParentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LocationUpdateManyWithWhereWithoutParentInputSchema), z.lazy(() => LocationUpdateManyWithWhereWithoutParentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LocationScalarWhereInputSchema), z.lazy(() => LocationScalarWhereInputSchema).array() ]).optional(),
});

export default LocationUpdateManyWithoutParentNestedInputSchema;

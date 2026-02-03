import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationCreateWithoutParentInputSchema } from './LocationCreateWithoutParentInputSchema';
import { LocationUncheckedCreateWithoutParentInputSchema } from './LocationUncheckedCreateWithoutParentInputSchema';
import { LocationCreateOrConnectWithoutParentInputSchema } from './LocationCreateOrConnectWithoutParentInputSchema';
import { LocationCreateManyParentInputEnvelopeSchema } from './LocationCreateManyParentInputEnvelopeSchema';
import { LocationWhereUniqueInputSchema } from './LocationWhereUniqueInputSchema';

export const LocationUncheckedCreateNestedManyWithoutParentInputSchema: z.ZodType<Prisma.LocationUncheckedCreateNestedManyWithoutParentInput> = z.strictObject({
  create: z.union([ z.lazy(() => LocationCreateWithoutParentInputSchema), z.lazy(() => LocationCreateWithoutParentInputSchema).array(), z.lazy(() => LocationUncheckedCreateWithoutParentInputSchema), z.lazy(() => LocationUncheckedCreateWithoutParentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LocationCreateOrConnectWithoutParentInputSchema), z.lazy(() => LocationCreateOrConnectWithoutParentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LocationCreateManyParentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LocationWhereUniqueInputSchema), z.lazy(() => LocationWhereUniqueInputSchema).array() ]).optional(),
});

export default LocationUncheckedCreateNestedManyWithoutParentInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationWhereUniqueInputSchema } from './LocationWhereUniqueInputSchema';
import { LocationCreateWithoutParentInputSchema } from './LocationCreateWithoutParentInputSchema';
import { LocationUncheckedCreateWithoutParentInputSchema } from './LocationUncheckedCreateWithoutParentInputSchema';

export const LocationCreateOrConnectWithoutParentInputSchema: z.ZodType<Prisma.LocationCreateOrConnectWithoutParentInput> = z.strictObject({
  where: z.lazy(() => LocationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LocationCreateWithoutParentInputSchema), z.lazy(() => LocationUncheckedCreateWithoutParentInputSchema) ]),
});

export default LocationCreateOrConnectWithoutParentInputSchema;

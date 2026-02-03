import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationWhereUniqueInputSchema } from './LocationWhereUniqueInputSchema';
import { LocationUpdateWithoutParentInputSchema } from './LocationUpdateWithoutParentInputSchema';
import { LocationUncheckedUpdateWithoutParentInputSchema } from './LocationUncheckedUpdateWithoutParentInputSchema';
import { LocationCreateWithoutParentInputSchema } from './LocationCreateWithoutParentInputSchema';
import { LocationUncheckedCreateWithoutParentInputSchema } from './LocationUncheckedCreateWithoutParentInputSchema';

export const LocationUpsertWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.LocationUpsertWithWhereUniqueWithoutParentInput> = z.strictObject({
  where: z.lazy(() => LocationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LocationUpdateWithoutParentInputSchema), z.lazy(() => LocationUncheckedUpdateWithoutParentInputSchema) ]),
  create: z.union([ z.lazy(() => LocationCreateWithoutParentInputSchema), z.lazy(() => LocationUncheckedCreateWithoutParentInputSchema) ]),
});

export default LocationUpsertWithWhereUniqueWithoutParentInputSchema;

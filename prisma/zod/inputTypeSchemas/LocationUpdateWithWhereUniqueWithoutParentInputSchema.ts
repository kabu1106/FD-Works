import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationWhereUniqueInputSchema } from './LocationWhereUniqueInputSchema';
import { LocationUpdateWithoutParentInputSchema } from './LocationUpdateWithoutParentInputSchema';
import { LocationUncheckedUpdateWithoutParentInputSchema } from './LocationUncheckedUpdateWithoutParentInputSchema';

export const LocationUpdateWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.LocationUpdateWithWhereUniqueWithoutParentInput> = z.strictObject({
  where: z.lazy(() => LocationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LocationUpdateWithoutParentInputSchema), z.lazy(() => LocationUncheckedUpdateWithoutParentInputSchema) ]),
});

export default LocationUpdateWithWhereUniqueWithoutParentInputSchema;

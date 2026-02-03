import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationScalarWhereInputSchema } from './LocationScalarWhereInputSchema';
import { LocationUpdateManyMutationInputSchema } from './LocationUpdateManyMutationInputSchema';
import { LocationUncheckedUpdateManyWithoutParentInputSchema } from './LocationUncheckedUpdateManyWithoutParentInputSchema';

export const LocationUpdateManyWithWhereWithoutParentInputSchema: z.ZodType<Prisma.LocationUpdateManyWithWhereWithoutParentInput> = z.strictObject({
  where: z.lazy(() => LocationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LocationUpdateManyMutationInputSchema), z.lazy(() => LocationUncheckedUpdateManyWithoutParentInputSchema) ]),
});

export default LocationUpdateManyWithWhereWithoutParentInputSchema;

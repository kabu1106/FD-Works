import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationWhereInputSchema } from './LocationWhereInputSchema';
import { LocationUpdateWithoutChildrenInputSchema } from './LocationUpdateWithoutChildrenInputSchema';
import { LocationUncheckedUpdateWithoutChildrenInputSchema } from './LocationUncheckedUpdateWithoutChildrenInputSchema';

export const LocationUpdateToOneWithWhereWithoutChildrenInputSchema: z.ZodType<Prisma.LocationUpdateToOneWithWhereWithoutChildrenInput> = z.strictObject({
  where: z.lazy(() => LocationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LocationUpdateWithoutChildrenInputSchema), z.lazy(() => LocationUncheckedUpdateWithoutChildrenInputSchema) ]),
});

export default LocationUpdateToOneWithWhereWithoutChildrenInputSchema;

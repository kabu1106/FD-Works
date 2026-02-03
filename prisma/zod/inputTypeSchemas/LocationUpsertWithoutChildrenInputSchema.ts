import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationUpdateWithoutChildrenInputSchema } from './LocationUpdateWithoutChildrenInputSchema';
import { LocationUncheckedUpdateWithoutChildrenInputSchema } from './LocationUncheckedUpdateWithoutChildrenInputSchema';
import { LocationCreateWithoutChildrenInputSchema } from './LocationCreateWithoutChildrenInputSchema';
import { LocationUncheckedCreateWithoutChildrenInputSchema } from './LocationUncheckedCreateWithoutChildrenInputSchema';
import { LocationWhereInputSchema } from './LocationWhereInputSchema';

export const LocationUpsertWithoutChildrenInputSchema: z.ZodType<Prisma.LocationUpsertWithoutChildrenInput> = z.strictObject({
  update: z.union([ z.lazy(() => LocationUpdateWithoutChildrenInputSchema), z.lazy(() => LocationUncheckedUpdateWithoutChildrenInputSchema) ]),
  create: z.union([ z.lazy(() => LocationCreateWithoutChildrenInputSchema), z.lazy(() => LocationUncheckedCreateWithoutChildrenInputSchema) ]),
  where: z.lazy(() => LocationWhereInputSchema).optional(),
});

export default LocationUpsertWithoutChildrenInputSchema;

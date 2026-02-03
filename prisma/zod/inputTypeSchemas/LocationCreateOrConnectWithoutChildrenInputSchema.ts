import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationWhereUniqueInputSchema } from './LocationWhereUniqueInputSchema';
import { LocationCreateWithoutChildrenInputSchema } from './LocationCreateWithoutChildrenInputSchema';
import { LocationUncheckedCreateWithoutChildrenInputSchema } from './LocationUncheckedCreateWithoutChildrenInputSchema';

export const LocationCreateOrConnectWithoutChildrenInputSchema: z.ZodType<Prisma.LocationCreateOrConnectWithoutChildrenInput> = z.strictObject({
  where: z.lazy(() => LocationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LocationCreateWithoutChildrenInputSchema), z.lazy(() => LocationUncheckedCreateWithoutChildrenInputSchema) ]),
});

export default LocationCreateOrConnectWithoutChildrenInputSchema;

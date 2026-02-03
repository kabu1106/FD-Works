import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationCreateWithoutChildrenInputSchema } from './LocationCreateWithoutChildrenInputSchema';
import { LocationUncheckedCreateWithoutChildrenInputSchema } from './LocationUncheckedCreateWithoutChildrenInputSchema';
import { LocationCreateOrConnectWithoutChildrenInputSchema } from './LocationCreateOrConnectWithoutChildrenInputSchema';
import { LocationWhereUniqueInputSchema } from './LocationWhereUniqueInputSchema';

export const LocationCreateNestedOneWithoutChildrenInputSchema: z.ZodType<Prisma.LocationCreateNestedOneWithoutChildrenInput> = z.strictObject({
  create: z.union([ z.lazy(() => LocationCreateWithoutChildrenInputSchema), z.lazy(() => LocationUncheckedCreateWithoutChildrenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LocationCreateOrConnectWithoutChildrenInputSchema).optional(),
  connect: z.lazy(() => LocationWhereUniqueInputSchema).optional(),
});

export default LocationCreateNestedOneWithoutChildrenInputSchema;

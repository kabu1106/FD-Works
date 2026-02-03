import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationCreateWithoutChildrenInputSchema } from './LocationCreateWithoutChildrenInputSchema';
import { LocationUncheckedCreateWithoutChildrenInputSchema } from './LocationUncheckedCreateWithoutChildrenInputSchema';
import { LocationCreateOrConnectWithoutChildrenInputSchema } from './LocationCreateOrConnectWithoutChildrenInputSchema';
import { LocationUpsertWithoutChildrenInputSchema } from './LocationUpsertWithoutChildrenInputSchema';
import { LocationWhereInputSchema } from './LocationWhereInputSchema';
import { LocationWhereUniqueInputSchema } from './LocationWhereUniqueInputSchema';
import { LocationUpdateToOneWithWhereWithoutChildrenInputSchema } from './LocationUpdateToOneWithWhereWithoutChildrenInputSchema';
import { LocationUpdateWithoutChildrenInputSchema } from './LocationUpdateWithoutChildrenInputSchema';
import { LocationUncheckedUpdateWithoutChildrenInputSchema } from './LocationUncheckedUpdateWithoutChildrenInputSchema';

export const LocationUpdateOneWithoutChildrenNestedInputSchema: z.ZodType<Prisma.LocationUpdateOneWithoutChildrenNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LocationCreateWithoutChildrenInputSchema), z.lazy(() => LocationUncheckedCreateWithoutChildrenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LocationCreateOrConnectWithoutChildrenInputSchema).optional(),
  upsert: z.lazy(() => LocationUpsertWithoutChildrenInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LocationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LocationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LocationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LocationUpdateToOneWithWhereWithoutChildrenInputSchema), z.lazy(() => LocationUpdateWithoutChildrenInputSchema), z.lazy(() => LocationUncheckedUpdateWithoutChildrenInputSchema) ]).optional(),
});

export default LocationUpdateOneWithoutChildrenNestedInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationCreateWithoutIncidentsInputSchema } from './LocationCreateWithoutIncidentsInputSchema';
import { LocationUncheckedCreateWithoutIncidentsInputSchema } from './LocationUncheckedCreateWithoutIncidentsInputSchema';
import { LocationCreateOrConnectWithoutIncidentsInputSchema } from './LocationCreateOrConnectWithoutIncidentsInputSchema';
import { LocationWhereUniqueInputSchema } from './LocationWhereUniqueInputSchema';

export const LocationCreateNestedOneWithoutIncidentsInputSchema: z.ZodType<Prisma.LocationCreateNestedOneWithoutIncidentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => LocationCreateWithoutIncidentsInputSchema), z.lazy(() => LocationUncheckedCreateWithoutIncidentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LocationCreateOrConnectWithoutIncidentsInputSchema).optional(),
  connect: z.lazy(() => LocationWhereUniqueInputSchema).optional(),
});

export default LocationCreateNestedOneWithoutIncidentsInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationWhereUniqueInputSchema } from './LocationWhereUniqueInputSchema';
import { LocationCreateWithoutIncidentsInputSchema } from './LocationCreateWithoutIncidentsInputSchema';
import { LocationUncheckedCreateWithoutIncidentsInputSchema } from './LocationUncheckedCreateWithoutIncidentsInputSchema';

export const LocationCreateOrConnectWithoutIncidentsInputSchema: z.ZodType<Prisma.LocationCreateOrConnectWithoutIncidentsInput> = z.strictObject({
  where: z.lazy(() => LocationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LocationCreateWithoutIncidentsInputSchema), z.lazy(() => LocationUncheckedCreateWithoutIncidentsInputSchema) ]),
});

export default LocationCreateOrConnectWithoutIncidentsInputSchema;

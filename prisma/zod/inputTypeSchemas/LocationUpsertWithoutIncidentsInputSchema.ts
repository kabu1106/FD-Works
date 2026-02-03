import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationUpdateWithoutIncidentsInputSchema } from './LocationUpdateWithoutIncidentsInputSchema';
import { LocationUncheckedUpdateWithoutIncidentsInputSchema } from './LocationUncheckedUpdateWithoutIncidentsInputSchema';
import { LocationCreateWithoutIncidentsInputSchema } from './LocationCreateWithoutIncidentsInputSchema';
import { LocationUncheckedCreateWithoutIncidentsInputSchema } from './LocationUncheckedCreateWithoutIncidentsInputSchema';
import { LocationWhereInputSchema } from './LocationWhereInputSchema';

export const LocationUpsertWithoutIncidentsInputSchema: z.ZodType<Prisma.LocationUpsertWithoutIncidentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => LocationUpdateWithoutIncidentsInputSchema), z.lazy(() => LocationUncheckedUpdateWithoutIncidentsInputSchema) ]),
  create: z.union([ z.lazy(() => LocationCreateWithoutIncidentsInputSchema), z.lazy(() => LocationUncheckedCreateWithoutIncidentsInputSchema) ]),
  where: z.lazy(() => LocationWhereInputSchema).optional(),
});

export default LocationUpsertWithoutIncidentsInputSchema;

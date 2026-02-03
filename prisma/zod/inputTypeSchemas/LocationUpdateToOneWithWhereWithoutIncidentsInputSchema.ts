import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationWhereInputSchema } from './LocationWhereInputSchema';
import { LocationUpdateWithoutIncidentsInputSchema } from './LocationUpdateWithoutIncidentsInputSchema';
import { LocationUncheckedUpdateWithoutIncidentsInputSchema } from './LocationUncheckedUpdateWithoutIncidentsInputSchema';

export const LocationUpdateToOneWithWhereWithoutIncidentsInputSchema: z.ZodType<Prisma.LocationUpdateToOneWithWhereWithoutIncidentsInput> = z.strictObject({
  where: z.lazy(() => LocationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LocationUpdateWithoutIncidentsInputSchema), z.lazy(() => LocationUncheckedUpdateWithoutIncidentsInputSchema) ]),
});

export default LocationUpdateToOneWithWhereWithoutIncidentsInputSchema;

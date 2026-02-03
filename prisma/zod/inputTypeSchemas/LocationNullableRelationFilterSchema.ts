import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationWhereInputSchema } from './LocationWhereInputSchema';

export const LocationNullableRelationFilterSchema: z.ZodType<Prisma.LocationNullableRelationFilter> = z.strictObject({
  is: z.lazy(() => LocationWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => LocationWhereInputSchema).optional().nullable(),
});

export default LocationNullableRelationFilterSchema;

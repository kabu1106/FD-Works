import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationWhereInputSchema } from './LocationWhereInputSchema';

export const LocationListRelationFilterSchema: z.ZodType<Prisma.LocationListRelationFilter> = z.strictObject({
  every: z.lazy(() => LocationWhereInputSchema).optional(),
  some: z.lazy(() => LocationWhereInputSchema).optional(),
  none: z.lazy(() => LocationWhereInputSchema).optional(),
});

export default LocationListRelationFilterSchema;

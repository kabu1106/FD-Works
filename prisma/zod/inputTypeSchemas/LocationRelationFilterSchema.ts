import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationWhereInputSchema } from './LocationWhereInputSchema';

export const LocationRelationFilterSchema: z.ZodType<Prisma.LocationRelationFilter> = z.strictObject({
  is: z.lazy(() => LocationWhereInputSchema).optional(),
  isNot: z.lazy(() => LocationWhereInputSchema).optional(),
});

export default LocationRelationFilterSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LocationCreateManyParentInputSchema } from './LocationCreateManyParentInputSchema';

export const LocationCreateManyParentInputEnvelopeSchema: z.ZodType<Prisma.LocationCreateManyParentInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LocationCreateManyParentInputSchema), z.lazy(() => LocationCreateManyParentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LocationCreateManyParentInputEnvelopeSchema;

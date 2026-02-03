import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeCreateManyAllowanceGroupInputSchema } from './AllowanceTypeCreateManyAllowanceGroupInputSchema';

export const AllowanceTypeCreateManyAllowanceGroupInputEnvelopeSchema: z.ZodType<Prisma.AllowanceTypeCreateManyAllowanceGroupInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => AllowanceTypeCreateManyAllowanceGroupInputSchema), z.lazy(() => AllowanceTypeCreateManyAllowanceGroupInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default AllowanceTypeCreateManyAllowanceGroupInputEnvelopeSchema;

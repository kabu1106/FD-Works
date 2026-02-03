import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateManyTeamInputSchema } from './StaffCreateManyTeamInputSchema';

export const StaffCreateManyTeamInputEnvelopeSchema: z.ZodType<Prisma.StaffCreateManyTeamInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => StaffCreateManyTeamInputSchema), z.lazy(() => StaffCreateManyTeamInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default StaffCreateManyTeamInputEnvelopeSchema;

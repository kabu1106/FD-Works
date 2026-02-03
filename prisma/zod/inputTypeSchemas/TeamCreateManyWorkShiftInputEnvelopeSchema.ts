import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamCreateManyWorkShiftInputSchema } from './TeamCreateManyWorkShiftInputSchema';

export const TeamCreateManyWorkShiftInputEnvelopeSchema: z.ZodType<Prisma.TeamCreateManyWorkShiftInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TeamCreateManyWorkShiftInputSchema), z.lazy(() => TeamCreateManyWorkShiftInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TeamCreateManyWorkShiftInputEnvelopeSchema;

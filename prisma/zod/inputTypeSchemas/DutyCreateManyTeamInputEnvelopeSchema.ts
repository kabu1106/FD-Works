import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateManyTeamInputSchema } from './DutyCreateManyTeamInputSchema';

export const DutyCreateManyTeamInputEnvelopeSchema: z.ZodType<Prisma.DutyCreateManyTeamInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => DutyCreateManyTeamInputSchema), z.lazy(() => DutyCreateManyTeamInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default DutyCreateManyTeamInputEnvelopeSchema;

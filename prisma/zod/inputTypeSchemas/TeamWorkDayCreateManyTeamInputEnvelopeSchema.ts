import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkDayCreateManyTeamInputSchema } from './TeamWorkDayCreateManyTeamInputSchema';

export const TeamWorkDayCreateManyTeamInputEnvelopeSchema: z.ZodType<Prisma.TeamWorkDayCreateManyTeamInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TeamWorkDayCreateManyTeamInputSchema), z.lazy(() => TeamWorkDayCreateManyTeamInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TeamWorkDayCreateManyTeamInputEnvelopeSchema;

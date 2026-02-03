import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkOverrideCreateManyTeamWorkDayInputSchema } from './TeamWorkOverrideCreateManyTeamWorkDayInputSchema';

export const TeamWorkOverrideCreateManyTeamWorkDayInputEnvelopeSchema: z.ZodType<Prisma.TeamWorkOverrideCreateManyTeamWorkDayInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TeamWorkOverrideCreateManyTeamWorkDayInputSchema), z.lazy(() => TeamWorkOverrideCreateManyTeamWorkDayInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TeamWorkOverrideCreateManyTeamWorkDayInputEnvelopeSchema;

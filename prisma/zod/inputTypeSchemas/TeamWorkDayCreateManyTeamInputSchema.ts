import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkTypeSchema } from './WorkTypeSchema';

export const TeamWorkDayCreateManyTeamInputSchema: z.ZodType<Prisma.TeamWorkDayCreateManyTeamInput> = z.strictObject({
  id: z.string().optional(),
  date: z.coerce.date(),
  type: z.lazy(() => WorkTypeSchema).optional(),
});

export default TeamWorkDayCreateManyTeamInputSchema;

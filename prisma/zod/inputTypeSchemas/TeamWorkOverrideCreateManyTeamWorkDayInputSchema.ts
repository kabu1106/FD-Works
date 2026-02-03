import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkTypeSchema } from './WorkTypeSchema';
import { TeamWorkOverrideReasonSchema } from './TeamWorkOverrideReasonSchema';

export const TeamWorkOverrideCreateManyTeamWorkDayInputSchema: z.ZodType<Prisma.TeamWorkOverrideCreateManyTeamWorkDayInput> = z.strictObject({
  id: z.string().optional(),
  overriddenType: z.lazy(() => WorkTypeSchema),
  reason: z.lazy(() => TeamWorkOverrideReasonSchema),
  memo: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default TeamWorkOverrideCreateManyTeamWorkDayInputSchema;

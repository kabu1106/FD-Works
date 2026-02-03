import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkTypeSchema } from './WorkTypeSchema';
import { TeamWorkOverrideCreateNestedManyWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideCreateNestedManyWithoutTeamWorkDayInputSchema';

export const TeamWorkDayCreateWithoutTeamInputSchema: z.ZodType<Prisma.TeamWorkDayCreateWithoutTeamInput> = z.strictObject({
  id: z.string().optional(),
  date: z.coerce.date(),
  type: z.lazy(() => WorkTypeSchema).optional(),
  overrides: z.lazy(() => TeamWorkOverrideCreateNestedManyWithoutTeamWorkDayInputSchema).optional(),
});

export default TeamWorkDayCreateWithoutTeamInputSchema;

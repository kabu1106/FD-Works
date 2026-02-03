import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkTypeSchema } from './WorkTypeSchema';
import { TeamCreateNestedOneWithoutTeamWorkDayInputSchema } from './TeamCreateNestedOneWithoutTeamWorkDayInputSchema';
import { TeamWorkOverrideCreateNestedManyWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideCreateNestedManyWithoutTeamWorkDayInputSchema';

export const TeamWorkDayCreateInputSchema: z.ZodType<Prisma.TeamWorkDayCreateInput> = z.strictObject({
  id: z.string().optional(),
  date: z.coerce.date(),
  type: z.lazy(() => WorkTypeSchema).optional(),
  team: z.lazy(() => TeamCreateNestedOneWithoutTeamWorkDayInputSchema),
  overrides: z.lazy(() => TeamWorkOverrideCreateNestedManyWithoutTeamWorkDayInputSchema).optional(),
});

export default TeamWorkDayCreateInputSchema;

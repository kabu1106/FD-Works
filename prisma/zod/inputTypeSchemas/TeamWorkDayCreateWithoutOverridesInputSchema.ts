import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkTypeSchema } from './WorkTypeSchema';
import { TeamCreateNestedOneWithoutTeamWorkDayInputSchema } from './TeamCreateNestedOneWithoutTeamWorkDayInputSchema';

export const TeamWorkDayCreateWithoutOverridesInputSchema: z.ZodType<Prisma.TeamWorkDayCreateWithoutOverridesInput> = z.strictObject({
  id: z.string().optional(),
  date: z.coerce.date(),
  type: z.lazy(() => WorkTypeSchema).optional(),
  team: z.lazy(() => TeamCreateNestedOneWithoutTeamWorkDayInputSchema),
});

export default TeamWorkDayCreateWithoutOverridesInputSchema;

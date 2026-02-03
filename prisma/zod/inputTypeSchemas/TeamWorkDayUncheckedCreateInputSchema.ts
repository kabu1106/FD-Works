import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkTypeSchema } from './WorkTypeSchema';
import { TeamWorkOverrideUncheckedCreateNestedManyWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideUncheckedCreateNestedManyWithoutTeamWorkDayInputSchema';

export const TeamWorkDayUncheckedCreateInputSchema: z.ZodType<Prisma.TeamWorkDayUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  date: z.coerce.date(),
  type: z.lazy(() => WorkTypeSchema).optional(),
  teamId: z.number().int(),
  overrides: z.lazy(() => TeamWorkOverrideUncheckedCreateNestedManyWithoutTeamWorkDayInputSchema).optional(),
});

export default TeamWorkDayUncheckedCreateInputSchema;

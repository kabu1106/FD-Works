import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkTypeSchema } from './WorkTypeSchema';
import { TeamWorkOverrideUncheckedCreateNestedManyWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideUncheckedCreateNestedManyWithoutTeamWorkDayInputSchema';

export const TeamWorkDayUncheckedCreateWithoutTeamInputSchema: z.ZodType<Prisma.TeamWorkDayUncheckedCreateWithoutTeamInput> = z.strictObject({
  id: z.string().optional(),
  date: z.coerce.date(),
  type: z.lazy(() => WorkTypeSchema).optional(),
  overrides: z.lazy(() => TeamWorkOverrideUncheckedCreateNestedManyWithoutTeamWorkDayInputSchema).optional(),
});

export default TeamWorkDayUncheckedCreateWithoutTeamInputSchema;

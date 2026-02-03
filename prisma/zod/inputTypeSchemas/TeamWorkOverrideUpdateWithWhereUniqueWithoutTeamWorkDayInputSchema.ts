import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkOverrideWhereUniqueInputSchema } from './TeamWorkOverrideWhereUniqueInputSchema';
import { TeamWorkOverrideUpdateWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideUpdateWithoutTeamWorkDayInputSchema';
import { TeamWorkOverrideUncheckedUpdateWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideUncheckedUpdateWithoutTeamWorkDayInputSchema';

export const TeamWorkOverrideUpdateWithWhereUniqueWithoutTeamWorkDayInputSchema: z.ZodType<Prisma.TeamWorkOverrideUpdateWithWhereUniqueWithoutTeamWorkDayInput> = z.strictObject({
  where: z.lazy(() => TeamWorkOverrideWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TeamWorkOverrideUpdateWithoutTeamWorkDayInputSchema), z.lazy(() => TeamWorkOverrideUncheckedUpdateWithoutTeamWorkDayInputSchema) ]),
});

export default TeamWorkOverrideUpdateWithWhereUniqueWithoutTeamWorkDayInputSchema;

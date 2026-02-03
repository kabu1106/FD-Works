import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkDayWhereUniqueInputSchema } from './TeamWorkDayWhereUniqueInputSchema';
import { TeamWorkDayUpdateWithoutTeamInputSchema } from './TeamWorkDayUpdateWithoutTeamInputSchema';
import { TeamWorkDayUncheckedUpdateWithoutTeamInputSchema } from './TeamWorkDayUncheckedUpdateWithoutTeamInputSchema';

export const TeamWorkDayUpdateWithWhereUniqueWithoutTeamInputSchema: z.ZodType<Prisma.TeamWorkDayUpdateWithWhereUniqueWithoutTeamInput> = z.strictObject({
  where: z.lazy(() => TeamWorkDayWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TeamWorkDayUpdateWithoutTeamInputSchema), z.lazy(() => TeamWorkDayUncheckedUpdateWithoutTeamInputSchema) ]),
});

export default TeamWorkDayUpdateWithWhereUniqueWithoutTeamInputSchema;

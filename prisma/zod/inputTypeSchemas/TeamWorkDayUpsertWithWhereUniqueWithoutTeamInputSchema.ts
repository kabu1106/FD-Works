import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkDayWhereUniqueInputSchema } from './TeamWorkDayWhereUniqueInputSchema';
import { TeamWorkDayUpdateWithoutTeamInputSchema } from './TeamWorkDayUpdateWithoutTeamInputSchema';
import { TeamWorkDayUncheckedUpdateWithoutTeamInputSchema } from './TeamWorkDayUncheckedUpdateWithoutTeamInputSchema';
import { TeamWorkDayCreateWithoutTeamInputSchema } from './TeamWorkDayCreateWithoutTeamInputSchema';
import { TeamWorkDayUncheckedCreateWithoutTeamInputSchema } from './TeamWorkDayUncheckedCreateWithoutTeamInputSchema';

export const TeamWorkDayUpsertWithWhereUniqueWithoutTeamInputSchema: z.ZodType<Prisma.TeamWorkDayUpsertWithWhereUniqueWithoutTeamInput> = z.strictObject({
  where: z.lazy(() => TeamWorkDayWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TeamWorkDayUpdateWithoutTeamInputSchema), z.lazy(() => TeamWorkDayUncheckedUpdateWithoutTeamInputSchema) ]),
  create: z.union([ z.lazy(() => TeamWorkDayCreateWithoutTeamInputSchema), z.lazy(() => TeamWorkDayUncheckedCreateWithoutTeamInputSchema) ]),
});

export default TeamWorkDayUpsertWithWhereUniqueWithoutTeamInputSchema;

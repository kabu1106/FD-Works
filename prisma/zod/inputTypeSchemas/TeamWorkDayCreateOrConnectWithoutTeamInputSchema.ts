import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkDayWhereUniqueInputSchema } from './TeamWorkDayWhereUniqueInputSchema';
import { TeamWorkDayCreateWithoutTeamInputSchema } from './TeamWorkDayCreateWithoutTeamInputSchema';
import { TeamWorkDayUncheckedCreateWithoutTeamInputSchema } from './TeamWorkDayUncheckedCreateWithoutTeamInputSchema';

export const TeamWorkDayCreateOrConnectWithoutTeamInputSchema: z.ZodType<Prisma.TeamWorkDayCreateOrConnectWithoutTeamInput> = z.strictObject({
  where: z.lazy(() => TeamWorkDayWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamWorkDayCreateWithoutTeamInputSchema), z.lazy(() => TeamWorkDayUncheckedCreateWithoutTeamInputSchema) ]),
});

export default TeamWorkDayCreateOrConnectWithoutTeamInputSchema;

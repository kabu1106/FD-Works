import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkOverrideWhereUniqueInputSchema } from './TeamWorkOverrideWhereUniqueInputSchema';
import { TeamWorkOverrideCreateWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideCreateWithoutTeamWorkDayInputSchema';
import { TeamWorkOverrideUncheckedCreateWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideUncheckedCreateWithoutTeamWorkDayInputSchema';

export const TeamWorkOverrideCreateOrConnectWithoutTeamWorkDayInputSchema: z.ZodType<Prisma.TeamWorkOverrideCreateOrConnectWithoutTeamWorkDayInput> = z.strictObject({
  where: z.lazy(() => TeamWorkOverrideWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamWorkOverrideCreateWithoutTeamWorkDayInputSchema), z.lazy(() => TeamWorkOverrideUncheckedCreateWithoutTeamWorkDayInputSchema) ]),
});

export default TeamWorkOverrideCreateOrConnectWithoutTeamWorkDayInputSchema;

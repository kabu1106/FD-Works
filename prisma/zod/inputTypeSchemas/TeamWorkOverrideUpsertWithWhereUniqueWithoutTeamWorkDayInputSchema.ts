import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkOverrideWhereUniqueInputSchema } from './TeamWorkOverrideWhereUniqueInputSchema';
import { TeamWorkOverrideUpdateWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideUpdateWithoutTeamWorkDayInputSchema';
import { TeamWorkOverrideUncheckedUpdateWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideUncheckedUpdateWithoutTeamWorkDayInputSchema';
import { TeamWorkOverrideCreateWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideCreateWithoutTeamWorkDayInputSchema';
import { TeamWorkOverrideUncheckedCreateWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideUncheckedCreateWithoutTeamWorkDayInputSchema';

export const TeamWorkOverrideUpsertWithWhereUniqueWithoutTeamWorkDayInputSchema: z.ZodType<Prisma.TeamWorkOverrideUpsertWithWhereUniqueWithoutTeamWorkDayInput> = z.strictObject({
  where: z.lazy(() => TeamWorkOverrideWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TeamWorkOverrideUpdateWithoutTeamWorkDayInputSchema), z.lazy(() => TeamWorkOverrideUncheckedUpdateWithoutTeamWorkDayInputSchema) ]),
  create: z.union([ z.lazy(() => TeamWorkOverrideCreateWithoutTeamWorkDayInputSchema), z.lazy(() => TeamWorkOverrideUncheckedCreateWithoutTeamWorkDayInputSchema) ]),
});

export default TeamWorkOverrideUpsertWithWhereUniqueWithoutTeamWorkDayInputSchema;

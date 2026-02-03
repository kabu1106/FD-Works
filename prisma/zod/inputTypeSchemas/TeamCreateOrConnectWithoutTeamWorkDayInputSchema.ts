import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';
import { TeamCreateWithoutTeamWorkDayInputSchema } from './TeamCreateWithoutTeamWorkDayInputSchema';
import { TeamUncheckedCreateWithoutTeamWorkDayInputSchema } from './TeamUncheckedCreateWithoutTeamWorkDayInputSchema';

export const TeamCreateOrConnectWithoutTeamWorkDayInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutTeamWorkDayInput> = z.strictObject({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutTeamWorkDayInputSchema), z.lazy(() => TeamUncheckedCreateWithoutTeamWorkDayInputSchema) ]),
});

export default TeamCreateOrConnectWithoutTeamWorkDayInputSchema;

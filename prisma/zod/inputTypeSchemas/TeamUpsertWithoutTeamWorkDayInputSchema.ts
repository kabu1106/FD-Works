import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamUpdateWithoutTeamWorkDayInputSchema } from './TeamUpdateWithoutTeamWorkDayInputSchema';
import { TeamUncheckedUpdateWithoutTeamWorkDayInputSchema } from './TeamUncheckedUpdateWithoutTeamWorkDayInputSchema';
import { TeamCreateWithoutTeamWorkDayInputSchema } from './TeamCreateWithoutTeamWorkDayInputSchema';
import { TeamUncheckedCreateWithoutTeamWorkDayInputSchema } from './TeamUncheckedCreateWithoutTeamWorkDayInputSchema';
import { TeamWhereInputSchema } from './TeamWhereInputSchema';

export const TeamUpsertWithoutTeamWorkDayInputSchema: z.ZodType<Prisma.TeamUpsertWithoutTeamWorkDayInput> = z.strictObject({
  update: z.union([ z.lazy(() => TeamUpdateWithoutTeamWorkDayInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutTeamWorkDayInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutTeamWorkDayInputSchema), z.lazy(() => TeamUncheckedCreateWithoutTeamWorkDayInputSchema) ]),
  where: z.lazy(() => TeamWhereInputSchema).optional(),
});

export default TeamUpsertWithoutTeamWorkDayInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWhereInputSchema } from './TeamWhereInputSchema';
import { TeamUpdateWithoutTeamWorkDayInputSchema } from './TeamUpdateWithoutTeamWorkDayInputSchema';
import { TeamUncheckedUpdateWithoutTeamWorkDayInputSchema } from './TeamUncheckedUpdateWithoutTeamWorkDayInputSchema';

export const TeamUpdateToOneWithWhereWithoutTeamWorkDayInputSchema: z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutTeamWorkDayInput> = z.strictObject({
  where: z.lazy(() => TeamWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeamUpdateWithoutTeamWorkDayInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutTeamWorkDayInputSchema) ]),
});

export default TeamUpdateToOneWithWhereWithoutTeamWorkDayInputSchema;

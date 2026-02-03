import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TeamWorkDayDateTeamIdCompoundUniqueInputSchema: z.ZodType<Prisma.TeamWorkDayDateTeamIdCompoundUniqueInput> = z.strictObject({
  date: z.coerce.date(),
  teamId: z.number(),
});

export default TeamWorkDayDateTeamIdCompoundUniqueInputSchema;

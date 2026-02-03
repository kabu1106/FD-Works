import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DutyDateTeamIdCompoundUniqueInputSchema: z.ZodType<Prisma.DutyDateTeamIdCompoundUniqueInput> = z.strictObject({
  date: z.coerce.date(),
  teamId: z.number(),
});

export default DutyDateTeamIdCompoundUniqueInputSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TeamWorkDayCountOutputTypeSelectSchema: z.ZodType<Prisma.TeamWorkDayCountOutputTypeSelect> = z.object({
  overrides: z.boolean().optional(),
}).strict();

export default TeamWorkDayCountOutputTypeSelectSchema;

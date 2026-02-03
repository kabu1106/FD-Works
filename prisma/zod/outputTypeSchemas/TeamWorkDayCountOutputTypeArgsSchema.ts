import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWorkDayCountOutputTypeSelectSchema } from './TeamWorkDayCountOutputTypeSelectSchema';

export const TeamWorkDayCountOutputTypeArgsSchema: z.ZodType<Prisma.TeamWorkDayCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TeamWorkDayCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TeamWorkDayCountOutputTypeSelectSchema;

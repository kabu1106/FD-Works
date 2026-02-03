import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWorkDaySelectSchema } from '../inputTypeSchemas/TeamWorkDaySelectSchema';
import { TeamWorkDayIncludeSchema } from '../inputTypeSchemas/TeamWorkDayIncludeSchema';

export const TeamWorkDayArgsSchema: z.ZodType<Prisma.TeamWorkDayDefaultArgs> = z.object({
  select: z.lazy(() => TeamWorkDaySelectSchema).optional(),
  include: z.lazy(() => TeamWorkDayIncludeSchema).optional(),
}).strict();

export default TeamWorkDayArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWorkDayCreateManyInputSchema } from '../inputTypeSchemas/TeamWorkDayCreateManyInputSchema'

export const TeamWorkDayCreateManyArgsSchema: z.ZodType<Prisma.TeamWorkDayCreateManyArgs> = z.object({
  data: z.union([ TeamWorkDayCreateManyInputSchema, TeamWorkDayCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TeamWorkDayCreateManyArgsSchema;
